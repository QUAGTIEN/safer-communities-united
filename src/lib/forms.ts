// Validation and email wording shared by the three Take Action forms (client) and /api/forms (server).
// Rules: docs/FORMS_SPEC.md §1–3. Error strings come from src/content/action.ts (approved blueprint copy).
import { petition, story, supporter } from "@/content/action";

export const forms = ["supporter", "story", "petition"] as const;
export type FormName = (typeof forms)[number];

// D-022: attachments total at most 4 MB (Vercel caps a request body at about 4.5 MB). No malware scan yet.
export const maxAttachmentBytes = 4 * 1024 * 1024;
export const petitionVersion = "Petition_Larger_Text.pdf, September 24 version 3";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validEmail = (value: string) => emailPattern.test(value.trim());
export const validDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
const filled = (value: string) => value.trim() !== "";

export type SupporterValues = {
  audience: boolean[]; participate: boolean[]; contact: boolean[];
  fullName: string; street: string; city: string; zip: string; email: string; phone: string; signature: string; date: string;
};
export type SupporterField = "fullName" | "email" | "phone" | "signature" | "date";

export function supporterErrors(v: SupporterValues) {
  const e = supporter.errors;
  const out: Partial<Record<SupporterField, string>> = {};
  if (!filled(v.fullName)) out.fullName = e.name;
  if (!validEmail(v.email)) out.email = e.email;
  if ((v.contact[1] || v.contact[2]) && !filled(v.phone)) out.phone = e.phone;
  if (!filled(v.signature)) out.signature = e.signature;
  if (!validDate(v.date)) out.date = e.date;
  return out;
}

export type StoryValues = { name: string; connection: string; issue: string; story: string; publish: "" | "yes" | "no" };
export type StoryField = "issue" | "story";

export function storyErrors(v: StoryValues) {
  const out: Partial<Record<StoryField, string>> = {};
  if (!story.topics.some((t) => t.label === v.issue)) out.issue = story.errors.issue;
  if (!filled(v.story)) out.story = story.errors.story;
  return out;
}

export type PetitionValues = { name: string; community: string; signature: string; date: string; support: boolean; updates: boolean; email: string };
export type PetitionField = "name" | "community" | "signature" | "date" | "support" | "email";

export function petitionErrors(v: PetitionValues) {
  const e = petition.errors;
  const out: Partial<Record<PetitionField, string>> = {};
  if (!filled(v.name)) out.name = e.name;
  if (!filled(v.community)) out.community = e.community;
  if (!filled(v.signature)) out.signature = e.signature;
  if (!validDate(v.date)) out.date = e.date;
  if (!v.support) out.support = e.support;
  if (v.updates && !validEmail(v.email)) out.email = e.email;
  return out;
}

/* ---------- Email text (plain text only, labels as on the paper forms) ---------- */

const yesNo = (on: boolean) => (on ? "Yes" : "No");
const blank = (value: string) => value.trim() || "(blank)";

export function supporterEmail(v: SupporterValues) {
  const s = supporter;
  return {
    subject: `Supporter Application: ${v.fullName.trim()}`,
    lines: [
      s.title,
      "",
      ...s.audience.map((a, i) => `${a.label} ${yesNo(v.audience[i])}`),
      "",
      s.participateTitle,
      ...s.participate.map((label, i) => `${label}: ${yesNo(v.participate[i])}`),
      "",
      s.infoTitle,
      `${s.fields.fullName}: ${blank(v.fullName)}`,
      `${s.fields.street} (${s.fields.optional}): ${blank(v.street)}`,
      `${s.fields.city}: ${blank(v.city)}`,
      `${s.fields.zip}: ${blank(v.zip)}`,
      `${s.fields.email}: ${blank(v.email)}`,
      `${s.fields.phone} (${s.fields.optional}): ${blank(v.phone)}`,
      `${s.fields.contact}: ${s.contactChoices.filter((_, i) => v.contact[i]).join(", ") || "(none)"}`,
      "",
      `${s.consentTitle}: ${s.consent}`,
      `${s.fields.signature}: ${blank(v.signature)}`,
      `${s.fields.date}: ${blank(v.date)}`,
    ],
  };
}

export function storyEmail(v: StoryValues, attachments: string[]) {
  const f = story.form;
  return {
    subject: `Share Your Story: ${v.issue}`,
    lines: [
      f.title,
      "",
      `${f.name.label}: ${blank(v.name)}`,
      `${f.connection.label}: ${blank(v.connection)}`,
      `${f.issue.label}: ${v.issue}`,
      `${f.publish.label} ${v.publish === "yes" ? f.publish.yes : v.publish === "no" ? f.publish.no : "(not answered: private)"}`,
      `${f.upload.label}: ${attachments.length ? attachments.join(", ") : "(none)"}`,
      "",
      `${f.story.label}:`,
      v.story.trim(),
    ],
  };
}

export function petitionEmail(v: PetitionValues) {
  const p = petition;
  return {
    subject: `Petition signature: ${v.name.trim()}`,
    lines: [
      `${p.name} (${petitionVersion})`,
      "",
      `${p.fields.name.label}: ${blank(v.name)}`,
      `${p.fields.community.label}: ${blank(v.community)}`,
      `${p.fields.signature.label}: ${blank(v.signature)}`,
      `${p.fields.date.label}: ${blank(v.date)}`,
      `${p.support} ${yesNo(v.support)}`,
      `Declaration shown: ${p.declaration}`,
      "",
      `${p.updatesTitle} (separate choice)`,
      `${p.updates} ${yesNo(v.updates)}`,
      `${p.email.label}: ${v.updates ? blank(v.email) : "(not used)"}`,
    ],
  };
}
