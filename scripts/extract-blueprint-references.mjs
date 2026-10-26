// Extract FlateDecode image XObjects from a PDF to PNG (lossless), and map them to pages.
// Pixels are copied exactly as embedded; Google Docs may already have downscaled tall images.
// Usage: node scripts/extract-blueprint-references.mjs blueprint/<file>.pdf blueprint/references
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { inflateSync, deflateSync, crc32 } from "node:zlib";
import { createHash } from "node:crypto";
import path from "node:path";

const [pdfPath, outDir] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });
const buf = readFileSync(pdfPath);
const text = buf.toString("latin1");

// Index every "N 0 obj" with its byte offset.
const objects = new Map();
for (const m of text.matchAll(/(\d+) 0 obj\s*/g)) objects.set(Number(m[1]), m.index + m[0].length);
const dictOf = (num) => {
  const start = objects.get(num);
  const end = text.indexOf("endobj", start);
  return text.slice(start, end);
};
const num = (dict, key) => { const m = dict.match(new RegExp(`/${key}\\s+(\\d+)`)); return m ? Number(m[1]) : null; };

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td) >>> 0);
  return Buffer.concat([len, td, crc]);
}

const images = new Map();
for (const [id, start] of objects) {
  const head = text.slice(start, start + 600);
  if (!/\/Subtype\s*\/Image/.test(head.slice(0, head.indexOf("stream") > 0 ? head.indexOf("stream") : 600))) continue;
  const dictEnd = text.indexOf("stream", start);
  const dict = text.slice(start, dictEnd);
  const width = num(dict, "Width"), height = num(dict, "Height"), bpc = num(dict, "BitsPerComponent");
  const length = num(dict, "Length");
  let dataStart = dictEnd + "stream".length;
  if (text[dataStart] === "\r") dataStart++;
  if (text[dataStart] === "\n") dataStart++;
  const raw = buf.subarray(dataStart, dataStart + length);
  let channels = 3;
  if (/\/DeviceGray/.test(dict)) channels = 1;
  const icc = dict.match(/\/ICCBased\s+(\d+) 0 R/);
  if (icc) channels = num(dictOf(Number(icc[1])), "N") ?? 3;
  const predictor = num(dict, "Predictor");
  const inflated = inflateSync(raw);
  let scanlines;
  if (predictor && predictor >= 10) scanlines = inflated;
  else {
    const rowLen = width * channels * (bpc / 8);
    scanlines = Buffer.alloc((rowLen + 1) * height);
    for (let y = 0; y < height; y++) inflated.copy(scanlines, y * (rowLen + 1) + 1, y * rowLen, (y + 1) * rowLen);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = bpc; ihdr[9] = channels === 1 ? 0 : 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const png = Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(scanlines)), chunk("IEND", Buffer.alloc(0))]);
  const smask = /\/SMask/.test(dict);
  images.set(id, { id, width, height, channels, smask, pngName: `obj${id}.png`, png,
    pixelSha256: createHash("sha256").update(inflated).digest("hex") });
}

// Map pages (document order) to image objects via their XObject resources.
const pageIds = [];
const catalog = text.match(/\/Type\s*\/Catalog[\s\S]*?\/Pages\s+(\d+) 0 R/);
function walk(nodeId) {
  const d = dictOf(nodeId);
  if (/\/Type\s*\/Pages/.test(d)) {
    const kids = d.match(/\/Kids\s*\[([^\]]*)\]/)[1].match(/(\d+) 0 R/g).map((k) => Number(k.split(" ")[0]));
    kids.forEach(walk);
  } else pageIds.push(nodeId);
}
walk(Number(catalog[1]));
const resolveDict = (d, key) => {
  const ref = d.match(new RegExp(`/${key}\\s+(\\d+) 0 R`));
  if (ref) return dictOf(Number(ref[1]));
  const i = d.indexOf(`/${key}`);
  if (i < 0) return "";
  // inline dictionary: take balanced << >>
  let depth = 0, j = d.indexOf("<<", i);
  for (let k = j; k < d.length; k++) {
    if (d.startsWith("<<", k)) { depth++; k++; } else if (d.startsWith(">>", k)) { depth--; k++; if (depth === 0) return d.slice(j, k + 1); }
  }
  return "";
};
const pages = [];
pageIds.forEach((pid, idx) => {
  const res = resolveDict(dictOf(pid), "Resources");
  const xo = resolveDict(res, "XObject");
  const refs = [...xo.matchAll(/(\d+) 0 R/g)].map((m) => Number(m[1])).filter((r) => images.has(r));
  pages.push({ page: idx + 1, images: refs });
});

const used = new Map();
for (const p of pages) for (const r of p.images) { if (!used.has(r)) used.set(r, []); used.get(r).push(p.page); }
const manifest = [];
for (const img of images.values()) {
  const pagesFor = used.get(img.id) ?? [];
  const name = `p${String(pagesFor[0] ?? 0).padStart(3, "0")}-obj${img.id}-${img.width}x${img.height}.png`;
  writeFileSync(path.join(outDir, name), img.png);
  manifest.push({ file: name, object: img.id, width: img.width, height: img.height, channels: img.channels,
    smask: img.smask, pages: pagesFor, pixelSha256: img.pixelSha256,
    pngSha256: createHash("sha256").update(img.png).digest("hex") });
}
manifest.sort((a, b) => (a.pages[0] ?? 0) - (b.pages[0] ?? 0));
writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`pages ${pageIds.length}, images ${images.size}`);
for (const m of manifest) console.log(m.pages.join(",").padEnd(12), m.width + "x" + m.height, m.smask ? "smask" : "", m.file);
