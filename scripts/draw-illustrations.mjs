// Vector redraws of the small decorative illustrations (D-026). The originals exist only as tiny crops of the
// blueprint PDF (171–242 px wide, upscaled 3x) and looked blurry; the user approved clear redraws that need not
// match exactly. Same subjects, palette and frame proportions as the crops, so layouts do not move.
// Usage: node scripts/draw-illustrations.mjs  → writes assets/drawn/*.svg (committed).
import { mkdirSync, writeFileSync } from "node:fs";

const out = "assets/drawn";
mkdirSync(out, { recursive: true });

// Deterministic pseudo-random numbers so the drawings do not change between runs.
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

const f = (n) => Math.round(n * 10) / 10;

function tree(x, base, h, fill, trunk = fill) {
  const r = h * 0.3;
  const top = base - h;
  const lobes = [[0, top + r], [-r * 0.75, top + r * 1.55], [r * 0.75, top + r * 1.55], [-r * 0.35, top + r * 0.95], [r * 0.4, top + r * 1.05]];
  return `<rect x="${f(x - h * 0.035)}" y="${f(top + r * 1.6)}" width="${f(h * 0.07)}" height="${f(base - top - r * 1.6)}" fill="${trunk}"/>`
    + lobes.map(([dx, cy], i) => `<circle cx="${f(x + dx)}" cy="${f(cy)}" r="${f(r * (i === 0 ? 1 : 0.82))}" fill="${fill}"/>`).join("");
}

function streetlight(x, base, h, dir, fill) {
  const top = base - h;
  return `<rect x="${f(x - 2)}" y="${f(top)}" width="4" height="${f(h)}" fill="${fill}"/>`
    + `<path d="M${f(x)} ${f(top + 2)} q${f(dir * h * 0.12)} -${f(h * 0.06)} ${f(dir * h * 0.24)} 0" stroke="${fill}" stroke-width="4" fill="none"/>`
    + `<rect x="${f(x + dir * h * 0.24 - 9)}" y="${f(top)}" width="18" height="6" rx="3" fill="${fill}"/>`;
}

function car(x, base, w, fill, glass) {
  const h = w * 0.55;
  return `<rect x="${f(x - w / 2)}" y="${f(base - h * 0.6)}" width="${f(w)}" height="${f(h * 0.45)}" rx="${f(w * 0.08)}" fill="${fill}"/>`
    + `<path d="M${f(x - w * 0.36)} ${f(base - h * 0.58)} L${f(x - w * 0.26)} ${f(base - h)} H${f(x + w * 0.26)} L${f(x + w * 0.36)} ${f(base - h * 0.58)} Z" fill="${fill}"/>`
    + `<rect x="${f(x - w * 0.22)}" y="${f(base - h * 0.92)}" width="${f(w * 0.44)}" height="${f(h * 0.26)}" rx="3" fill="${glass}"/>`
    + `<rect x="${f(x - w * 0.42)}" y="${f(base - h * 0.18)}" width="${f(w * 0.14)}" height="${f(h * 0.2)}" fill="${fill}"/>`
    + `<rect x="${f(x + w * 0.28)}" y="${f(base - h * 0.18)}" width="${f(w * 0.14)}" height="${f(h * 0.2)}" fill="${fill}"/>`;
}

function house(x, base, w, fill, light) {
  const h = w * 0.55, roof = w * 0.42;
  return `<rect x="${f(x - w / 2)}" y="${f(base - h)}" width="${f(w)}" height="${f(h)}" fill="${fill}"/>`
    + `<path d="M${f(x - w * 0.6)} ${f(base - h)} L${f(x)} ${f(base - h - roof)} L${f(x + w * 0.6)} ${f(base - h)} Z" fill="${fill}"/>`
    + `<rect x="${f(x - w * 0.12)}" y="${f(base - h * 0.62)}" width="${f(w * 0.24)}" height="${f(h * 0.62)}" fill="${light}"/>`
    + `<rect x="${f(x - w * 0.4)}" y="${f(base - h * 0.75)}" width="${f(w * 0.18)}" height="${f(w * 0.14)}" fill="${light}"/>`
    + `<rect x="${f(x + w * 0.22)}" y="${f(base - h * 0.75)}" width="${f(w * 0.18)}" height="${f(w * 0.14)}" fill="${light}"/>`;
}

function fence(x1, x2, base, h, fill) {
  let s = `<rect x="${f(x1)}" y="${f(base - h * 0.75)}" width="${f(x2 - x1)}" height="${f(h * 0.1)}" fill="${fill}"/><rect x="${f(x1)}" y="${f(base - h * 0.35)}" width="${f(x2 - x1)}" height="${f(h * 0.1)}" fill="${fill}"/>`;
  for (let x = x1; x <= x2; x += h * 0.9) s += `<rect x="${f(x)}" y="${f(base - h)}" width="${f(h * 0.12)}" height="${f(h)}" fill="${fill}"/>`;
  return s;
}

const svg = (w, h, title, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${title}">${body}</svg>\n`;

// Blues and greens sampled from the original crops.
const sky = "#eaf1f9", blue = "#55779f", mid = "#7f9cc2", pale = "#b9cbe2", green = "#4b7f57", greenPale = "#e9f2e7", greenMid = "#79a582";

// R1 — tree-lined road with street lights and a car (frame 171 × 52 → 684 × 208).
{
  const W = 684, H = 208, g = 186;
  let b = `<rect width="${W}" height="${H}" rx="10" fill="${sky}"/>`;
  b += `<path d="M0 ${g} H${W} V${H} H0 Z" fill="${pale}"/><path d="M200 ${H} L334 116 H350 L484 ${H} Z" fill="#dfe8f3"/>`;
  b += `<path d="M342 206 V192 M342 182 V172 M342 150 V142 M342 134 V128" stroke="#fff" stroke-width="3"/>`;
  b += tree(95, g, 150, blue) + tree(40, g, 92, mid) + tree(165, g, 112, blue) + tree(220, g, 70, mid) + tree(262, g, 48, mid);
  b += tree(470, g, 72, mid) + tree(540, g, 100, blue) + tree(610, g, 78, mid) + tree(650, g, 54, mid);
  b += streetlight(250, g, 150, 1, blue) + streetlight(452, g, 150, -1, blue);
  b += car(342, 176, 52, blue, sky);
  writeFileSync(`${out}/drawn-road.svg`, svg(W, H, "Tree-lined road with street lights", b));
}

// W8 — tree line on a lake with its reflection (frame 232 × 79 → 696 × 237).
{
  const W = 696, H = 237, shore = 128;
  let trees = "";
  const xs = [40, 92, 140, 196, 250, 300, 360, 412, 470, 520, 580, 630, 672];
  xs.forEach((x, i) => { trees += tree(x, shore, 48 + ((i * 37) % 5) * 13, i % 3 ? mid : blue); });
  let b = `<rect width="${W}" height="${H}" rx="10" fill="${sky}"/>`;
  b += `<path d="M0 ${shore - 6} Q${W / 2} ${shore - 22} ${W} ${shore - 6} V${shore} H0 Z" fill="${mid}"/>` + trees;
  b += `<rect y="${shore}" width="${W}" height="${H - shore}" fill="#dbe6f3"/>`;
  b += `<g opacity="0.45" transform="translate(0 ${shore * 2}) scale(1 -1)">${trees}</g>`;
  for (let y = shore + 14; y < H; y += 20) b += `<rect x="0" y="${y}" width="${W}" height="2" fill="#dbe6f3"/>`;
  b += `<rect y="${shore}" width="${W}" height="3" fill="${blue}"/>`;
  writeFileSync(`${out}/drawn-lake.svg`, svg(W, H, "Trees reflected in a lake", b));
}

// H1 — homes among trees behind a fence (frame 242 × 64 → 726 × 192).
{
  const W = 726, H = 192, g = 176;
  let b = `<rect width="${W}" height="${H}" rx="10" fill="${sky}"/>`;
  b += `<ellipse cx="120" cy="34" rx="34" ry="8" fill="#dbe6f3"/><ellipse cx="420" cy="26" rx="40" ry="8" fill="#dbe6f3"/>`;
  b += tree(60, g, 100, blue) + tree(330, g, 104, mid) + tree(420, g, 150, blue) + tree(500, g, 96, mid) + tree(640, g, 156, blue);
  b += house(140, g, 64, mid, sky) + house(230, g, 96, blue, sky);
  b += `<path d="M0 ${g} H${W} V${H} H0 Z" fill="${blue}"/>` + fence(270, 726, g, 34, blue);
  writeFileSync(`${out}/drawn-homes.svg`, svg(W, H, "Homes among trees behind a fence", b));
}

// C1 — green trees, a small home and a fence (frame 188 × 58 → 564 × 174).
{
  const W = 564, H = 174, g = 160;
  let b = `<rect width="${W}" height="${H}" rx="10" fill="${greenPale}"/>`;
  b += tree(150, g, 140, green) + tree(270, g, 84, greenMid) + tree(345, g, 96, green) + tree(450, g, 140, green) + tree(530, g, 70, greenMid) + tree(30, g, 56, greenMid);
  b += house(80, g, 48, green, greenPale);
  b += `<path d="M0 ${g} H${W} V${H} H0 Z" fill="${green}"/>` + fence(110, 520, g, 28, green);
  writeFileSync(`${out}/drawn-green.svg`, svg(W, H, "Green trees, a small home and a fence", b));
}

// A5 — pale rolling landscape band with trees and a fence (frame 1876 × 86).
{
  const W = 1876, H = 86;
  let b = `<rect width="${W}" height="${H}" fill="#eef4fb"/>`;
  b += `<path d="M0 46 Q300 14 640 40 T1260 30 T1876 36 V${H} H0 Z" fill="#e0eaf6"/>`;
  b += `<path d="M0 62 Q420 40 900 60 T1876 52 V${H} H0 Z" fill="#d3e1f2"/>`;
  for (let i = 0; i < 34; i++) {
    const x = 20 + i * 54 + rand() * 30;
    const base = 66 - Math.sin(x / 300) * 4;
    b += tree(x, base, 16 + rand() * 40, rand() > 0.5 ? "#bfd1e9" : "#c9d9ee");
  }
  b += `<path d="M0 72 Q500 60 980 72 T1876 66 V${H} H0 Z" fill="#c6d7ee"/>`;
  b += fence(1520, 1860, 70, 18, "#b3c8e4") + fence(420, 640, 76, 10, "#bfd1e9");
  writeFileSync(`${out}/drawn-landscape.svg`, svg(W, H, "Rolling landscape with trees and a fence", b));
}

// Display size (CSS px) = the crop each drawing replaces, so pages keep their layout.
const manifest = {
  "drawn-road": { replaces: "comparison-r1-illustration", display: [171, 52] },
  "drawn-lake": { replaces: "comparison-w8-illustration", display: [232, 79] },
  "drawn-homes": { replaces: "comparison-h1-illustration", display: [242, 64] },
  "drawn-green": { replaces: "comparison-c1-illustration", display: [188, 58] },
  "drawn-landscape": { replaces: "action-stories-landscape", display: [1876, 86] },
};
writeFileSync(`${out}/manifest.json`, JSON.stringify(manifest, null, 2) + "\n");
console.log("drawn: 5 SVG illustrations in", out);
