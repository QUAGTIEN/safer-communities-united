import type { NextRequest } from "next/server";
import {
  forms, maxAttachmentBytes, petitionEmail, petitionErrors, storyEmail, storyErrors, supporterEmail, supporterErrors,
  type FormName, type PetitionValues, type StoryValues, type SupporterValues,
} from "@/lib/forms";

// Server delivery for the three Take Action forms (S7, docs/FORMS_SPEC.md §0, docs/ARCHITECTURE.md §3).
// FORMS_MODE=simulate (default) validates and answers without sending; FORMS_MODE=live emails the complete
// submission to the fixed FORMS_RECIPIENT through Resend. Nothing is stored: no database, outbox or log of entries.
// Success is reported only when Resend returns an email id; a retry reuses the Idempotency-Key and X-Submitted-At,
// so the email is byte-identical and Resend de-duplicates it.

export const maxDuration = 20;

const jsonLimit = 64 * 1024;
const storyLimit = maxAttachmentBytes + 256 * 1024;

// Best-effort abuse control without storage: per server instance, 5 requests per form and address in 10 minutes.
const windowMs = 10 * 60 * 1000;
const hits = new Map<string, number[]>();
function limited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

const reply = (status: number, body: Record<string, unknown>) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const text = (value: FormDataEntryValue | unknown) => (typeof value === "string" ? value.slice(0, 20000) : "");
const bools = (value: unknown, length: number) => Array.from({ length }, (_, i) => Array.isArray(value) && value[i] === true);

type Attachment = { filename: string; content: string };
type Built = { errors: Record<string, string>; subject: string; lines: string[]; attachments: Attachment[]; honeypot: string };

async function build(form: FormName, request: NextRequest): Promise<Built | "too-large"> {
  if (form === "story") {
    const data = await request.formData();
    const values: StoryValues = {
      name: text(data.get("name")), connection: text(data.get("connection")), issue: text(data.get("issue")),
      story: text(data.get("story")), publish: data.get("publish") === "yes" ? "yes" : data.get("publish") === "no" ? "no" : "",
    };
    const files = data.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);
    if (files.reduce((sum, f) => sum + f.size, 0) > maxAttachmentBytes) return "too-large";
    const attachments = await Promise.all(files.map(async (f) => ({ filename: f.name.slice(0, 200), content: Buffer.from(await f.arrayBuffer()).toString("base64") })));
    const email = storyEmail(values, files.map((f) => `${f.name} (${Math.ceil(f.size / 1024)} KB)`));
    return { errors: storyErrors(values), ...email, attachments, honeypot: text(data.get("website")) };
  }
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  if (form === "supporter") {
    const values: SupporterValues = {
      audience: bools(body.audience, 3), participate: bools(body.participate, 4), contact: bools(body.contact, 3),
      fullName: text(body.fullName), street: text(body.street), city: text(body.city), zip: text(body.zip),
      email: text(body.email), phone: text(body.phone), signature: text(body.signature), date: text(body.date),
    };
    return { errors: supporterErrors(values), ...supporterEmail(values), attachments: [], honeypot: text(body.website) };
  }
  const values: PetitionValues = {
    name: text(body.name), community: text(body.community), signature: text(body.signature), date: text(body.date),
    support: body.support === true, updates: body.updates === true, email: text(body.email),
  };
  return { errors: petitionErrors(values), ...petitionEmail(values), attachments: [], honeypot: text(body.website) };
}

export async function POST(request: NextRequest, ctx: RouteContext<"/api/forms/[form]">) {
  const { form } = await ctx.params;
  if (!forms.includes(form as FormName)) return reply(404, { ok: false });
  const name = form as FormName;

  const key = request.headers.get("idempotency-key") ?? "";
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) return reply(400, { ok: false });

  // First-attempt time from the client, kept with the key so a retry produces the identical email (TXT:2390).
  const submittedAt = request.headers.get("x-submitted-at") ?? "";
  const submitted = Date.parse(submittedAt);
  if (!/^\d{4}-\d{2}-\d{2}T[\d:.]+Z$/.test(submittedAt) || Number.isNaN(submitted) || Math.abs(Date.now() - submitted) > 24 * 60 * 60 * 1000) {
    return reply(400, { ok: false });
  }

  const size = Number(request.headers.get("content-length") ?? 0);
  if (size > (name === "story" ? storyLimit : jsonLimit)) return reply(413, { ok: false, reason: "too-large" });

  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(`${name}:${address}`)) return reply(429, { ok: false });

  let built: Built | "too-large";
  try { built = await build(name, request); } catch { return reply(400, { ok: false }); }
  if (built === "too-large") return reply(413, { ok: false, reason: "too-large" });
  // A filled honeypot is a bot: answer like a success, send nothing.
  if (built.honeypot) return reply(200, { ok: true, id: "accepted" });
  if (Object.keys(built.errors).length) return reply(422, { ok: false, errors: built.errors });

  const textBody = [...built.lines, "", "---", `Form: ${name}`, `Submitted (first attempt, UTC): ${submittedAt}`, `Reference: ${key}`].join("\n");

  // Tolerate stray quotes, spaces or capitals in the Vercel dashboard value.
  const mode = (process.env.FORMS_MODE ?? "").replace(/["'\s]/g, "").toLowerCase();
  if (mode !== "live") {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return reply(200, { ok: true, id: `simulated-${key.slice(0, 8)}`, simulated: true });
  }

  const { RESEND_API_KEY: apiKey, FORMS_RECIPIENT: recipient, FORMS_SENDER: sender } = process.env;
  if (!apiKey || !recipient || !sender) return reply(503, { ok: false });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": `${name}-${key}` },
      body: JSON.stringify({ from: sender, to: [recipient], subject: built.subject, text: textBody, attachments: built.attachments.length ? built.attachments : undefined }),
      signal: AbortSignal.timeout(15000),
    });
    const result = (await response.json().catch(() => ({}))) as { id?: string };
    if (response.ok && typeof result.id === "string" && result.id) return reply(200, { ok: true, id: result.id });
    return reply(502, { ok: false });
  } catch {
    // Timeout or network failure: the outcome is uncertain, so the client keeps the entries and the same key.
    return reply(504, { ok: false });
  }
}
