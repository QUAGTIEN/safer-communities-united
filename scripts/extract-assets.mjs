// Cut temporary website assets out of the blueprint reference images (decision D-007),
// upscale them for high-density screens and sharpen them. This cannot recover detail the
// PDF no longer has; nothing is generated or painted in.
// Usage: node scripts/extract-assets.mjs [page ...]   (no page = every asset in asset-crops.json)
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const refDir = "blueprint/references";
const outDir = "assets/extracted";
const reviewDir = path.join(outDir, "review");
const { assets } = JSON.parse(readFileSync("scripts/asset-crops.json", "utf8"));
const pages = process.argv.slice(2);
const selected = pages.length ? assets.filter((a) => pages.includes(a.page)) : assets;

const colors = { navy: null, white: [255, 255, 255] };
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

function crop(asset) {
  const [left, top, width, height] = asset.rect;
  return sharp(path.join(refDir, asset.source)).removeAlpha().extract({ left, top, width, height });
}

// Text-like artwork on a plain light background: turn ink coverage into alpha, upscale the
// alpha, then steepen its edges so strokes stay crisp. Stroke width is kept (midpoint 0.5).
async function glyph(asset) {
  const { data, info } = await crop(asset).raw().toBuffer({ resolveWithObject: true });
  const n = info.width * info.height;
  const lum = new Float64Array(n);
  let min = 255;
  for (let i = 0; i < n; i++) {
    lum[i] = 0.2126 * data[i * 3] + 0.7152 * data[i * 3 + 1] + 0.0722 * data[i * 3 + 2];
    min = Math.min(min, lum[i]);
  }
  const alpha = Buffer.alloc(n);
  const ink = [0, 0, 0];
  let inkCount = 0;
  for (let i = 0; i < n; i++) {
    const a = Math.max(0, Math.min(1, (255 - lum[i]) / (255 - min)));
    alpha[i] = Math.round(a * 255);
    if (a > 0.9) { ink[0] += data[i * 3]; ink[1] += data[i * 3 + 1]; ink[2] += data[i * 3 + 2]; inkCount++; }
  }
  const rgb = asset.color === "white" ? colors.white : ink.map((c) => Math.round(c / inkCount));
  const width = info.width * asset.scale, height = info.height * asset.scale;
  const big = await sharp(alpha, { raw: { width: info.width, height: info.height, channels: 1 } })
    .resize(width, height, { kernel: "lanczos3" })
    .linear(2, -0.25 * 255 * 2) // levels 0.25..0.75 -> 0..1
    .extractChannel(0)
    .raw()
    .toBuffer();
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = rgb[0]; rgba[i * 4 + 1] = rgb[1]; rgba[i * 4 + 2] = rgb[2]; rgba[i * 4 + 3] = big[i];
  }
  return { pipeline: sharp(rgba, { raw: { width, height, channels: 4 } }), inkColor: rgb };
}

function photo(asset) {
  const [, , w, h] = asset.rect;
  return { pipeline: crop(asset).resize(w * asset.scale, h * asset.scale, { kernel: "lanczos3" }).sharpen({ sigma: 0.9, m1: 0.6, m2: 1.5 }) };
}

function graphic(asset) {
  const [, , w, h] = asset.rect;
  return { pipeline: crop(asset).resize(w * asset.scale, h * asset.scale, { kernel: "lanczos3" }).sharpen({ sigma: 1.2, m1: 1, m2: 2.5 }) };
}

// Side-by-side sheet: left = the source pixels stretched the way a browser would show them,
// right = the processed asset. Glyphs are shown on their intended background.
async function reviewPanel(asset, outBuf) {
  const [, , w, h] = asset.rect;
  const W = w * asset.scale, H = h * asset.scale;
  const bg = asset.color === "white" ? "#01244A" : "#ffffff";
  const before = await crop(asset).resize(W, H, { kernel: "cubic" }).png().toBuffer();
  const after = await sharp(outBuf).flatten({ background: bg }).png().toBuffer();
  const col = Math.max(W, 380), gap = 24, label = 28;
  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${col * 2 + gap}" height="${label}">` +
      `<text x="0" y="20" font-family="Arial" font-size="18" fill="#222">Trước (ảnh PDF phóng thường)</text>` +
      `<text x="${col + gap}" y="20" font-family="Arial" font-size="18" fill="#222">Sau (đã xử lý) — ${asset.id}</text></svg>`,
  );
  return sharp({ create: { width: col * 2 + gap, height: H + label, channels: 3, background: "#ffffff" } })
    .composite([
      { input: svg, left: 0, top: 0 },
      { input: before, left: 0, top: label },
      { input: after, left: col + gap, top: label },
    ])
    .png()
    .toBuffer();
}

const manifestPath = path.join(outDir, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : { assets: {} };
const panels = {};
for (const asset of selected) {
  const handler = { glyph, photo, graphic }[asset.kind];
  const { pipeline, inkColor } = await handler(asset);
  const buf = await pipeline.png({ compressionLevel: 9 }).toBuffer();
  const file = path.join(outDir, asset.page, `${asset.id}.png`);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, buf);
  const meta = await sharp(buf).metadata();
  const sourceHash = sha256(readFileSync(path.join(refDir, asset.source)));
  manifest.assets[asset.id] = {
    file: file.replaceAll("\\", "/"),
    status: "temporary - extracted from blueprint PDF (D-007)",
    page: asset.page,
    use: asset.use,
    source: `${refDir}/${asset.source}`,
    sourceSha256: sourceHash,
    rect: asset.rect,
    scale: asset.scale,
    processing:
      asset.kind === "glyph"
        ? `ink coverage -> alpha, lanczos3 x${asset.scale}, edge levels 0.25-0.75, colour rgb(${inkColor.join(",")})`
        : asset.kind === "photo"
          ? `lanczos3 x${asset.scale}, unsharp sigma 0.9`
          : `lanczos3 x${asset.scale}, unsharp sigma 1.2`,
    size: [meta.width, meta.height],
    sha256: sha256(buf),
    ...(asset.limitation ? { limitation: asset.limitation } : {}),
  };
  (panels[asset.page] ??= []).push(await reviewPanel(asset, buf));
  console.log(`${asset.id}: ${meta.width} x ${meta.height}`);
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

// One review sheet per page, panels stacked vertically.
mkdirSync(reviewDir, { recursive: true });
for (const [page, list] of Object.entries(panels)) {
  const metas = await Promise.all(list.map((b) => sharp(b).metadata()));
  const width = Math.max(...metas.map((m) => m.width)) + 48;
  const height = metas.reduce((s, m) => s + m.height + 40, 24);
  let top = 24;
  const composite = list.map((input, i) => { const c = { input, left: 24, top }; top += metas[i].height + 40; return c; });
  await sharp({ create: { width, height, channels: 3, background: "#f2f2f2" } }).composite(composite).png().toFile(path.join(reviewDir, `${page}.png`));
}
