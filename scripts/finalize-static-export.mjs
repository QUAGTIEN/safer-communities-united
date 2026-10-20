import { copyFile, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const output = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../out");
let copied = 0;

// Next 16.4.2 export collects segment paths with path.relative(), then its
// convertSegmentPathToStaticExportFilename() replaces only forward slashes.
// On Windows this leaves nested __next.* directories, while the browser asks
// for dot-separated .txt files. Add the expected byte-identical output files;
// do not patch Next, change routes, or alter the RSC payloads.
async function publishSegments(directory, prefix, parent) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    const filename = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      await publishSegments(source, filename, parent);
    } else if (entry.isFile() && entry.name.endsWith(".txt")) {
      const target = path.join(parent, filename);
      const bytes = await readFile(source);
      let existing;
      try { existing = await readFile(target); } catch (error) { if (error.code !== "ENOENT") throw error; }
      if (existing && !existing.equals(bytes)) throw new Error(`Export segment collision: ${filename}`);
      if (!existing) { await copyFile(source, target); copied++; }
      if (!(await readFile(target)).equals(bytes)) throw new Error(`Export segment copy mismatch: ${filename}`);
    }
  }
}

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "assets" || entry.name === "_next") continue;
    const child = path.join(directory, entry.name);
    if (entry.name.startsWith("__next.")) await publishSegments(child, entry.name, directory);
    else await visit(child);
  }
}

if (process.platform === "win32") await visit(output);
console.log(`Static export finalized: ${copied} byte-identical Windows segment files added.`);
