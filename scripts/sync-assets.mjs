import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = async (name) => JSON.parse(await readFile(path.join(root, name), "utf8"));
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
const archive = await readJson("assets/blueprint/manifest.json");
const crops = await readJson("assets/demo-current/manifest.json");
const documentFragments = await readJson("assets/demo-current/document-fragments.json");
const visualFragments = await readJson("assets/demo-current/visual-fragments.json");
const review = await readJson("docs/section-review.json");

// Read the immutable source archive; never optimize, resize or rewrite it.
for (const asset of archive.assets) {
  if (hash(await readFile(path.join(root, asset.path))) !== asset.sha256) {
    throw new Error(`Source archive checksum mismatch: ${asset.path}`);
  }
}
if (hash(await readFile(path.join(root, archive.source_pdf))) !== archive.source_pdf_sha256) {
  throw new Error("Blueprint PDF checksum mismatch");
}

async function publishFile(source, destination, expectedHash) {
  const bytes = await readFile(path.join(root, source));
  if (hash(bytes) !== expectedHash) throw new Error(`Asset checksum mismatch: ${source}`);
  const absolute = path.resolve(root, "public", destination);
  const publicRoot = path.resolve(root, "public") + path.sep;
  if (!absolute.startsWith(publicRoot)) throw new Error("Asset path outside public directory");
  await mkdir(path.dirname(absolute), { recursive: true });
  await copyFile(path.join(root, source), absolute);
  if (hash(await readFile(absolute)) !== expectedHash) throw new Error(`Copy mismatch: ${destination}`);
  return "/" + destination.split(path.sep).join("/");
}

const maps = [];
for (const asset of archive.assets.filter((a) => a.role === "map")) {
  const publicPath = await publishFile(asset.path, `assets/maps/${path.basename(asset.path)}`, asset.sha256);
  maps.push({ id: asset.id, publicPath, sourcePath: asset.path, sourcePages: asset.pdf_pages,
    width: asset.width, height: asset.height, sha256: asset.sha256, immutable: true });
}
const photos = [];
for (const slot of crops.slots) {
  const publicPath = slot.path
    ? await publishFile(slot.path, `assets/demo/${slot.path.split("/photos/")[1]}`, slot.sha256)
    : null;
  photos.push({ id: slot.slot_id, publicPath, sourcePath: slot.path, parentPath: slot.parent_path,
    sourcePages: slot.source_pdf_pages, sectionIds: slot.section_ids, width: slot.width ?? null,
    height: slot.height ?? null, sha256: slot.sha256 ?? null, flags: slot.flags,
    status: slot.status, qualityApprovedForFinalDisplay: false });
}
const contentDir = path.join(root, "src/content");
await mkdir(contentDir, { recursive: true });
const illustrativeDocuments = [];
for (const fragment of documentFragments.documents) {
  if (hash(await readFile(path.join(root, fragment.parent_path))) !== fragment.parent_sha256) {
    throw new Error(`Document reference checksum mismatch: ${fragment.parent_path}`);
  }
  const publicPath = await publishFile(fragment.path, `assets/demo/documents/${path.basename(fragment.path)}`, fragment.sha256);
  illustrativeDocuments.push({ ...fragment, publicPath });
}
const screenshotVisuals = [];
for (const visual of visualFragments.visuals) {
  if (hash(await readFile(path.join(root, visual.parent_path))) !== visual.parent_sha256) {
    throw new Error(`Visual reference checksum mismatch: ${visual.parent_path}`);
  }
  const publicPath = await publishFile(visual.path, `assets/demo/visuals/${path.basename(visual.path)}`, visual.sha256);
  screenshotVisuals.push({ ...visual, publicPath });
}
await writeFile(path.join(contentDir, "assets.generated.json"), JSON.stringify({ maps, photos, illustrativeDocuments, screenshotVisuals }, null, 2) + "\n");
// Preserve all source excerpts and provenance as data. They contain editorial
// labels and must not be rendered directly as page copy.
await writeFile(path.join(contentDir, "blueprint.generated.json"), JSON.stringify({
  sourcePdfSha256: archive.source_pdf_sha256,
  sections: review.sections.map((s) => ({ id: s.id, sourcePages: s.pdf_pages,
    copyBlocks: s.copy_blocks, assetIds: s.asset_ids, sourceIds: s.source_ids })),
}, null, 2) + "\n");
console.log(`Assets ready: ${maps.length} immutable maps, ${photos.filter((p) => p.publicPath).length} photo crops, ${review.sections.length} source sections. Original archive checksums verified.`);
