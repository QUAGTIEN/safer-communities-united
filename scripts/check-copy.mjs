// Verify that every visible string in src/content/*.ts appears verbatim in a quoted
// blueprint block of docs/sections/*.md (```text blocks: TXT = generated from the
// blueprint text, IMG = transcribed from an approved image). Rule: TXT:9-10, D-002.
// Non-visible values are skipped: keys listed in SKIP_KEYS and the `a11y` export.
// Usage: node scripts/check-copy.mjs   (Node 22.18+ runs the .ts content files directly)
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

// `*Alt` keys are image alternative text: written for screen readers, not quoted visible copy.
const SKIP_KEYS = new Set(["href", "src", "id", "image", "anchor", "activeFor", "notice", "alt", "map", "mapAlt", "imageAlt", "photo", "photoAlt", "icon", "block", "blockAlt", "section", "sectionAlt", "strip", "target", "circles", "illustration", "arrow", "header", "pages", "sideLeft", "sideRight", "landscape"]);
const SKIP_EXPORTS = new Set(["a11y", "pendingCopy", "routes", "proposalAnchor", "comparisonAnchor", "links", "planPage20", "comparisonLinks", "evidenceLinks"]);

const normalise = (text) => text.replace(/\s+/g, " ").trim();

// Every quoted block, flattened to one searchable string per block.
const blocks = [];
// FORMS_SPEC.md quotes the blueprint's approved form states (TXT:2206-2212, 2258-2264, 2376-2393).
const sources = [...readdirSync("docs/sections").filter((f) => f.endsWith(".md")).map((f) => path.join("docs/sections", f)), "docs/FORMS_SPEC.md"];
for (const file of sources) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/```text\r?\n([\s\S]*?)```/g)) blocks.push(normalise(m[1]));
}
const corpus = blocks.join(" ¦ ");

function collect(value, trail, out) {
  if (typeof value === "string") out.push({ trail, value });
  else if (Array.isArray(value)) value.forEach((v, i) => collect(v, `${trail}[${i}]`, out));
  else if (value && typeof value === "object")
    for (const [key, v] of Object.entries(value)) if (!SKIP_KEYS.has(key)) collect(v, `${trail}.${key}`, out);
  return out;
}

let checked = 0;
const missing = [];
for (const file of readdirSync("src/content").filter((f) => f.endsWith(".ts"))) {
  const mod = await import(pathToFileURL(path.resolve("src/content", file)).href);
  for (const [name, value] of Object.entries(mod)) {
    if (SKIP_EXPORTS.has(name)) continue;
    for (const { trail, value: text } of collect(value, `${file}:${name}`, [])) {
      checked++;
      if (!corpus.includes(normalise(text))) missing.push(`${trail} → "${text}"`);
    }
  }
}

if (missing.length) {
  console.error(`check:copy — ${missing.length} of ${checked} strings not found verbatim in docs/sections:`);
  for (const line of missing) console.error(`  ${line}`);
  process.exit(1);
}
console.log(`check:copy — ${checked} visible strings match the blueprint quotes.`);
