import type { Metadata } from "next";
import { Comparison, Concentration, Conflict, Connected, Evidence, Options, Repairs, WaterHero } from "@/components/water/sections";
import "./water.css";

export const metadata: Metadata = { title: "Water & Septic" };

// Water & Septic (S5): W6 hero → 01 W3 → 02 R2 → 03 W1 → 06 W2 → W4 core conflict → 08 W5 → 09/10 W7
// (docs/sections/water.md; order and menu targets: D-015 OQ-21).
export default function WaterSepticPage() {
  return <div className="ws-page">
    <WaterHero />
    <Concentration />
    <Repairs />
    <Connected />
    <Options />
    <Conflict />
    <Comparison />
    <Evidence />
  </div>;
}
