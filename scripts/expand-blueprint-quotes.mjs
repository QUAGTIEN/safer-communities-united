// Fill every `<!-- TXT:a-b -->` marker in docs/**/*.md with the exact lines a..b
// of the blueprint text export, as a fenced text block. Re-running replaces the block,
// so quoted copy is never typed by hand. Usage: node scripts/expand-blueprint-quotes.mjs
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lines = readFileSync(path.join(root, "blueprint/SCU-blueprint-2026-10-22.txt"), "utf8")
  .replace(/^﻿/, "").split(/\r?\n/);
const docsDir = path.join(root, "docs");
const marker = /^<!-- TXT:(\d+)-(\d+) -->\n(```text\n[\s\S]*?\n```\n)?/gm;
let total = 0;

const markdownFiles = readdirSync(docsDir, { recursive: true }).filter((name) => name.endsWith(".md"));
for (const file of markdownFiles) {
  const target = path.join(docsDir, file);
  const source = readFileSync(target, "utf8");
  const output = source.replace(marker, (_, from, to) => {
    const a = Number(from), b = Number(to);
    if (a < 1 || b > lines.length || a > b) throw new Error(`${file}: invalid range TXT:${a}-${b}`);
    total++;
    return `<!-- TXT:${a}-${b} -->\n\`\`\`text\n${lines.slice(a - 1, b).join("\n").trimEnd()}\n\`\`\`\n`;
  });
  if (output !== source) writeFileSync(target, output);
}
console.log(`Expanded ${total} blueprint quotes.`);
