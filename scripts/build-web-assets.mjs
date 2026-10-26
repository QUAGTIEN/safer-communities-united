// Prepare website images from the approved asset sources (runs before dev/build).
// - assets/extracted/**.png (temporary, D-007): encoded to WebP for the web; the PNG masters stay unchanged.
// - assets/source/maps/*.png (original maps, D-005): copied byte-for-byte, never re-encoded.
// Writes public/assets/ (git-ignored) and src/content/assets.generated.json (git-ignored).
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync, existsSync, statSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = "public/assets";
const manifest = JSON.parse(readFileSync("assets/extracted/manifest.json", "utf8")).assets;
const index = {};

for (const [id, asset] of Object.entries(manifest)) {
  const out = path.join(outDir, asset.page, `${id}.webp`);
  mkdirSync(path.dirname(out), { recursive: true });
  // Re-encode only when the master is newer than the web copy.
  if (!existsSync(out) || statSync(out).mtimeMs < statSync(asset.file).mtimeMs) {
    const lossless = asset.processing.startsWith("ink coverage");
    await sharp(asset.file).webp(lossless ? { lossless: true } : { quality: 82, effort: 5 }).toFile(out);
  }
  const [, , width, height] = asset.rect;
  index[id] = { src: `/assets/${asset.page}/${id}.webp`, width, height, intrinsic: asset.size };
}

const mapsDir = "assets/source/maps";
mkdirSync(path.join(outDir, "maps"), { recursive: true });
for (const file of readdirSync(mapsDir).filter((f) => f.endsWith(".png"))) {
  copyFileSync(path.join(mapsDir, file), path.join(outDir, "maps", file));
  const { width, height } = await sharp(path.join(mapsDir, file)).metadata();
  index[path.basename(file, ".png")] = { src: `/assets/maps/${file}`, width, height, intrinsic: [width, height] };
}

writeFileSync("src/content/assets.generated.json", JSON.stringify(index, null, 2) + "\n");
console.log(`web assets: ${Object.keys(index).length} files in ${outDir}`);
