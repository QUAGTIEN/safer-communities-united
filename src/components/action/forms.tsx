"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { pendingCopy, petition, story, supporter } from "@/content/action";
import {
  maxAttachmentBytes, petitionErrors, storyErrors, supporterErrors,
  type FormName, type PetitionField, type PetitionValues, type SupporterField, type SupporterValues,
} from "@/lib/forms";

// Take Action forms (docs/FORMS_SPEC.md): validated here and again on the server, then POSTed to /api/forms/<form>.
// The server simulates or emails (FORMS_MODE). Confirmation shows only when the server returns an email id;
// on failure the entries stay and "Try again" resends the identical payload with the same Idempotency-Key.
// Review aid: `?simulate=failure` in the URL fails the first attempt without contacting the server.

type Phase = "idle" | "pending" | "success" | "failure";
type Message = { title: string; message: string };
type SendRequest = { fingerprint: string; body: () => BodyInit; json: boolean };

function useFormSend(form: FormName) {
  const [phase, setPhase] = useState<Phase>("idle");
  const busy = useRef(false);
  const attempt = useRef<{ fingerprint: string; key: string } | null>(null);
  const last = useRef<SendRequest | null>(null);
  const forced = useRef(false);

  const send = async (request: SendRequest) => {
    if (busy.current) return;
    busy.current = true;
    last.current = request;
    // Same entries → same key (the provider de-duplicates a retry); changed entries → a new submission.
    if (attempt.current?.fingerprint !== request.fingerprint) attempt.current = { fingerprint: request.fingerprint, key: crypto.randomUUID() };
    const key = attempt.current.key;
    setPhase("pending");
    let ok = false;
    try {
      if (!forced.current && new URLSearchParams(window.location.search).get("simulate") === "failure") {
        forced.current = true;
        await new Promise((resolve) => setTimeout(resolve, 900));
      } else {
        const response = await fetch(`/api/forms/${form}/`, {
          method: "POST",
          headers: { "Idempotency-Key": key, ...(request.json ? { "Content-Type": "application/json" } : {}) },
          body: request.body(),
        });
        const result = (await response.json().catch(() => ({}))) as { ok?: boolean; id?: string };
        ok = response.ok && result.ok === true && typeof result.id === "string";
      }
    } catch { ok = false; }
    busy.current = false;
    setPhase(ok ? "success" : "failure");
  };
  return { phase, send, retry: () => { if (last.current) void send(last.current); } };
}

// Visually hidden trap field: people never fill it; the server drops submissions that do (no visible change).
function Honeypot({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="act-hp" aria-hidden="true">
    <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>;
}

function focusFirstInvalid(form: HTMLFormElement | null) {
  requestAnimationFrame(() => form?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
}

// Pending / confirmation / recoverable-failure panels (p242, p249–p252, p269–p270).
function StatusPanel({ id, phase, pending, success, failure, retry, onRetry }: {
  id: string; phase: Phase; pending: { button: string; message: string }; success: Message;
  failure: Message; retry: string; onRetry: () => void;
}) {
  if (phase === "idle") return <div id={id} className="act-status-slot" aria-live="polite" />;
  return <div id={id} className={`act-status is-${phase}`} role={phase === "failure" ? "alert" : "status"} aria-live="polite">
    {phase === "pending" && <div className="act-status-pending">
      <button type="button" className="act-button is-small" disabled>{pending.button}</button>
      <p>{pending.message}</p>
    </div>}
    {phase === "success" && <><h3>{success.title}</h3><p>{success.message}</p></>}
    {phase === "failure" && <><h3>{failure.title}</h3><p>{failure.message}</p>
      <button type="button" className="act-button" onClick={onRetry}>{retry}</button></>}
  </div>;
}

function ErrorSummary({ id, heading, items }: { id: string; heading: string; items: { label: string; message: string }[] }) {
  if (!items.length) return null;
  return <div id={id} className="act-status is-invalid" role="alert">
    <h3>{heading}</h3>
    <dl>{items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.message}</dd></div>)}</dl>
  </div>;
}

const without = <T extends object>(obj: T, key: keyof T): T => {
  const next = { ...obj };
  delete next[key];
  return next;
};

function Check({ name, label, checked, onChange, invalid, describedBy }: {
  name: string; label: ReactNode; checked: boolean; onChange: (next: boolean) => void; invalid?: boolean; describedBy?: string;
}) {
  return <label className="act-check">
    <input type="checkbox" name={name} checked={checked} onChange={(e) => onChange(e.target.checked)}
      aria-invalid={invalid || undefined} aria-describedby={describedBy} />
    <span>{label}</span>
  </label>;
}

/* ---------- Supporter Application (H3) ---------- */

const supporterBlank: SupporterValues = {
  audience: [false, false, false], participate: [false, false, false, false], contact: [false, false, false],
  fullName: "", street: "", city: "", zip: "", email: "", phone: "", signature: "", date: "",
};
export function SupporterForm({ onSwitchToPetition }: { onSwitchToPetition: () => void }) {
  const s = supporter;
  const uid = useId();
  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(supporterBlank);
  const [errors, setErrors] = useState<Partial<Record<SupporterField, string>>>({});
  const [trap, setTrap] = useState("");
  const { phase, send, retry } = useFormSend("supporter");
  const set = <K extends keyof SupporterValues>(key: K, value: SupporterValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (key in errors) setErrors((e) => without(e, key as SupporterField));
  };
  const toggle = (key: "audience" | "participate" | "contact", index: number, next: boolean) => {
    set(key, values[key].map((on, i) => (i === index ? next : on)));
    if (key === "contact" && errors.phone) setErrors((e) => without(e, "phone"));
  };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (phase === "pending") return;
    const found = supporterErrors(values);
    setErrors(found);
    if (Object.keys(found).length) { focusFirstInvalid(form.current); return; }
    const payload = JSON.stringify({ ...values, website: trap });
    void send({ fingerprint: payload, body: () => payload, json: true });
  };
  const err = (field: SupporterField) => errors[field];
  const errorId = (field: string) => `${uid}-${field}-error`;
  const line = (field: SupporterField, label: ReactNode, input: Partial<React.ComponentProps<"input">> & { name: string }) => <div className="act-field">
    <label htmlFor={`${uid}-${input.name}`}>{label}</label>
    <input id={`${uid}-${input.name}`} value={values[field]} onChange={(e) => set(field, e.target.value)}
      aria-invalid={err(field) ? true : undefined} aria-describedby={err(field) ? errorId(field) : undefined} {...input} />
    {err(field) && <p id={errorId(field)} className="act-error">{err(field)}</p>}
  </div>;
  const plain = (field: "street" | "city" | "zip", label: ReactNode, name: string) => <div className="act-field">
    <label htmlFor={`${uid}-${name}`}>{label}</label>
    <input id={`${uid}-${name}`} name={name} value={values[field]} onChange={(e) => set(field, e.target.value)} />
  </div>;

  return <section id="supporter-application" className="act-supporter" aria-labelledby={`${uid}-title`}>
    <div className="act-wrap">
      <div className="act-sup-panel">
        <div className="act-sup-top">
          <a href="#supporter-application" className="act-text-link is-strong">{s.topLinks.apply}</a>
          <button type="button" className="act-text-link is-underlined" onClick={onSwitchToPetition}>{s.topLinks.petition}</button>
        </div>
        <form ref={form} noValidate onSubmit={submit} aria-labelledby={`${uid}-title`}>
          <p className="act-sup-eyebrow">{s.eyebrow}</p>
          <h2 id={`${uid}-title`} className="act-sup-title">{s.title}</h2>
          <div className="act-sup-audience">
            {s.audience.map((a, i) => <fieldset key={a.heading}>
              <legend>{a.heading}</legend>
              <Check name={`audience-${i}`} label={a.label} checked={values.audience[i]} onChange={(on) => toggle("audience", i, on)} />
            </fieldset>)}
          </div>
          <p className="act-sup-mission">{s.mission}</p>
          <div className="act-sup-columns">
            <fieldset className="act-sup-participate">
              <legend>{s.participateTitle}</legend>
              {s.participate.map((label, i) => <Check key={label} name={`participate-${i}`} label={label}
                checked={values.participate[i]} onChange={(on) => toggle("participate", i, on)} />)}
            </fieldset>
            <div className="act-sup-info">
              <h3>{s.infoTitle}</h3>
              {line("fullName", s.fields.fullName, { name: "fullName", autoComplete: "name" })}
              {plain("street", <>{s.fields.street} <span className="act-optional">{s.fields.optional}</span></>, "street")}
              <div className="act-pair">
                {plain("city", s.fields.city, "city")}
                {plain("zip", s.fields.zip, "zip")}
              </div>
              <div className="act-pair">
                {line("email", s.fields.email, { name: "email", type: "email", autoComplete: "email", inputMode: "email" })}
                {line("phone", <>{s.fields.phone} <span className="act-optional">{s.fields.optional}</span></>, { name: "phone", type: "tel", autoComplete: "tel" })}
              </div>
              <fieldset className="act-contact">
                <legend>{s.fields.contact}</legend>
                <div>
                  {s.contactChoices.map((label, i) => <Check key={label} name={`contact-${i}`} label={label}
                    checked={values.contact[i]} onChange={(on) => toggle("contact", i, on)} />)}
                </div>
              </fieldset>
            </div>
          </div>
          <div className="act-sup-consent">
            <h3>{s.consentTitle}</h3>
            <p>{s.consent}</p>
            <div className="act-pair is-signature">
              {line("signature", s.fields.signature, { name: "signature", autoComplete: "off" })}
              {line("date", s.fields.date, { name: "date", type: "date" })}
            </div>
          </div>
          <div className="act-sup-notes">
            <p>{s.privacy}</p>
            <p>{s.returnNote}</p>
          </div>
          <Honeypot value={trap} onChange={setTrap} />
          <div className="act-sup-send">
            <button type="submit" className="act-button" disabled={phase === "pending"}>
              {phase === "pending" ? s.pending.button : s.send}
            </button>
          </div>
          <StatusPanel id={`${uid}-status`} phase={phase} pending={s.pending} success={s.success} failure={s.failure}
            retry={s.failure.retry} onRetry={retry} />
        </form>
      </div>
    </div>
  </section>;
}

/* ---------- A3 Share Your Story form ---------- */

// The A3 status panels sit beneath the whole two-column section (p249–p252), so the section owns the form state.
export function StorySection({ left }: { left: ReactNode }) {
  const f = story.form;
  const uid = useId();
  const form = useRef<HTMLFormElement>(null);
  const files = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [connection, setConnection] = useState("");
  const [issue, setIssue] = useState("");
  const [text, setText] = useState("");
  const [publish, setPublish] = useState<"" | "yes" | "no">("");
  const [chosen, setChosen] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<{ issue?: string; story?: string; files?: string }>({});
  const { phase, send, retry } = useFormSend("story");
  const summaryId = `${uid}-summary`;
  const summary = [
    errors.issue && { label: f.issue.label, message: errors.issue },
    errors.story && { label: f.story.label, message: errors.story },
    errors.files && { label: f.upload.label, message: errors.files },
  ].filter(Boolean) as { label: string; message: string }[];

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (phase === "pending") return;
    const values = { name, connection, issue, story: text, publish };
    const tooLarge = chosen.reduce((sum, file) => sum + file.size, 0) > maxAttachmentBytes;
    const found = { ...storyErrors(values), files: tooLarge ? pendingCopy.attachmentsTooLarge : undefined };
    setErrors(found);
    if (found.issue || found.story || found.files) { focusFirstInvalid(form.current); return; }
    const fingerprint = JSON.stringify({ ...values, trap, files: chosen.map((file) => [file.name, file.size, file.lastModified]) });
    void send({ fingerprint, json: false, body: () => {
      const data = new FormData();
      for (const [key, value] of Object.entries(values)) data.append(key, value);
      data.append("website", trap);
      for (const file of chosen) data.append("attachments", file);
      return data;
    } });
  };
  const takeFiles = (list: FileList | null) => { setChosen(list ? Array.from(list) : []); setErrors((v) => ({ ...v, files: undefined })); };

  return <>
  <div className="act-story-grid">
  <div className="act-story-left">{left}</div>
  <form id="share-story-form" ref={form} noValidate onSubmit={submit} className="act-story-form" aria-labelledby={`${uid}-title`}>
    <h3 id={`${uid}-title`}>{f.title}</h3>
    <p className="act-story-form-intro">{f.intro}</p>
    <div className="act-box-field">
      <label htmlFor={`${uid}-name`}>{f.name.label}</label>
      <input id={`${uid}-name`} name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={f.name.placeholder} autoComplete="name" />
    </div>
    <div className="act-box-field">
      <label htmlFor={`${uid}-connection`}>{f.connection.label}</label>
      <textarea id={`${uid}-connection`} name="connection" rows={2} value={connection} onChange={(e) => setConnection(e.target.value)} placeholder={f.connection.placeholder} />
    </div>
    <div className="act-box-field">
      <label htmlFor={`${uid}-issue`}>{f.issue.label}</label>
      <div className="act-select">
        <select id={`${uid}-issue`} name="issue" value={issue} aria-invalid={errors.issue ? true : undefined}
          aria-describedby={errors.issue ? summaryId : undefined}
          onChange={(e) => { setIssue(e.target.value); setErrors((v) => ({ ...v, issue: undefined })); }}>
          <option value="">{f.issue.placeholder}</option>
          {story.topics.map((t) => <option key={t.id} value={t.label}>{t.label}</option>)}
        </select>
        <ChevronDown aria-hidden="true" strokeWidth={1.75} />
      </div>
    </div>
    <div className="act-box-field">
      <label htmlFor={`${uid}-story`}>{f.story.label}</label>
      <textarea id={`${uid}-story`} name="story" rows={5} value={text} placeholder={f.story.placeholder}
        aria-invalid={errors.story ? true : undefined} aria-describedby={errors.story ? summaryId : undefined}
        onChange={(e) => { setText(e.target.value); setErrors((v) => ({ ...v, story: undefined })); }} />
    </div>
    <div className="act-box-field">
      <label htmlFor={`${uid}-files`}>{f.upload.label}</label>
      <div className={`act-dropzone${dragging ? " is-dragging" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); if (files.current) files.current.files = e.dataTransfer.files; takeFiles(e.dataTransfer.files); }}>
        <input id={`${uid}-files`} ref={files} type="file" name="attachments" multiple onChange={(e) => takeFiles(e.target.files)}
          aria-invalid={errors.files ? true : undefined} aria-describedby={errors.files ? summaryId : undefined} />
        <span className="act-dropzone-main">{f.upload.main}</span>
        <span className="act-dropzone-hint">{f.upload.hint}</span>
        {chosen.length > 0 && <ul aria-label={f.upload.label}>{chosen.map((file, i) => <li key={`${file.name}-${i}`}>{file.name}</li>)}</ul>}
      </div>
    </div>
    <fieldset className="act-publish">
      <legend>{f.publish.label}</legend>
      <label className="act-radio"><input type="radio" name="publish" value="yes" checked={publish === "yes"} onChange={() => setPublish("yes")} /><span>{f.publish.yes}</span></label>
      <label className="act-radio"><input type="radio" name="publish" value="no" checked={publish === "no"} onChange={() => setPublish("no")} /><span>{f.publish.no}</span></label>
    </fieldset>
    <Honeypot value={trap} onChange={setTrap} />
    <button type="submit" className="act-button is-block" disabled={phase === "pending"}>{f.submit}</button>
  </form>
  </div>
  <ErrorSummary id={summaryId} heading={story.heading} items={summary} />
  <StatusPanel id={`${uid}-status`} phase={phase} pending={story.pending} success={story.success} failure={story.failure} retry={story.failure.retry} onRetry={retry} />
  </>;
}

/* ---------- A6 Petition ---------- */

export function PetitionForm() {
  const p = petition;
  const uid = useId();
  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState({ name: "", community: "", signature: "", date: "", email: "" });
  const [support, setSupport] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<Partial<Record<PetitionField, string>>>({});
  const { phase, send, retry } = useFormSend("petition");
  const summaryId = `${uid}-summary`;
  const clear = (field: PetitionField) => setErrors((e) => without(e, field));
  const setValue = (field: keyof typeof values, value: string) => { setValues((v) => ({ ...v, [field]: value })); clear(field); };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (phase === "pending") return;
    const all: PetitionValues = { ...values, support, updates };
    const found = petitionErrors(all);
    setErrors(found);
    if (Object.keys(found).length) { focusFirstInvalid(form.current); return; }
    const payload = JSON.stringify({ ...all, email: updates ? all.email : "", website: trap });
    void send({ fingerprint: payload, body: () => payload, json: true });
  };
  const order: { key: PetitionField; label: string }[] = [
    { key: "name", label: p.fields.name.label }, { key: "community", label: p.fields.community.label },
    { key: "signature", label: p.fields.signature.label }, { key: "date", label: p.fields.date.label },
    { key: "support", label: p.support }, { key: "email", label: p.email.label },
  ];
  const summary = order.filter((o) => errors[o.key]).map((o) => ({ label: o.label, message: errors[o.key] as string }));
  const field = (key: keyof typeof values, cfg: { label: string; placeholder: string }, required: boolean, type = "text", extra: Partial<React.ComponentProps<"input">> = {}) => <div className="act-box-field">
    <label htmlFor={`${uid}-${key}`}>{cfg.label}{required && <span className="act-required" aria-hidden="true"> *</span>}</label>
    <input id={`${uid}-${key}`} name={key} type={type} value={values[key]} placeholder={cfg.placeholder} required={required}
      aria-invalid={errors[key as PetitionField] ? true : undefined} aria-describedby={errors[key as PetitionField] ? summaryId : undefined}
      onChange={(e) => setValue(key, e.target.value)} {...extra} />
  </div>;

  return <form ref={form} noValidate onSubmit={submit} className="act-pet-form" aria-labelledby={`${uid}-details`}>
    <h3 id={`${uid}-details`}>{p.detailsTitle}</h3>
    <div className="act-pet-grid">
      {field("name", p.fields.name, true, "text", { autoComplete: "name" })}
      {field("community", p.fields.community, true)}
      {field("signature", p.fields.signature, true, "text", { autoComplete: "off" })}
      {field("date", p.fields.date, true, "date")}
    </div>
    <label className="act-check is-support">
      <input type="checkbox" name="support" checked={support} aria-invalid={errors.support ? true : undefined}
        aria-describedby={errors.support ? summaryId : undefined}
        onChange={(e) => { setSupport(e.target.checked); clear("support"); }} />
      <span>{p.support}<span className="act-required" aria-hidden="true"> *</span></span>
    </label>
    <p className="act-pet-declaration">{p.declaration}</p>
    <hr />
    <h3>{p.updatesTitle}</h3>
    <label className="act-check">
      <input type="checkbox" name="updates" checked={updates} onChange={(e) => { setUpdates(e.target.checked); if (!e.target.checked) clear("email"); }} />
      <span>{p.updates}</span>
    </label>
    {field("email", p.email, false, "email", { autoComplete: "email", inputMode: "email" })}
    <p className="act-pet-note">{p.separate}</p>
    <Honeypot value={trap} onChange={setTrap} />
    <button type="submit" className="act-button" disabled={phase === "pending"}>{p.submit}</button>
    <ErrorSummary id={summaryId} heading={p.heading2} items={summary} />
    <StatusPanel id={`${uid}-status`} phase={phase} pending={p.pending} success={p.success} failure={p.failure}
      retry={p.failure.retry} onRetry={retry} />
  </form>;
}
