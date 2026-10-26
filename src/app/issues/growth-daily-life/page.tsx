import type { Metadata } from "next";
import { Density, GrowthEvidence, GrowthHero, PlanComparison } from "@/components/growth/sections";
import "./growth.css";

export const metadata: Metadata = { title: "Growth, Infrastructure & Daily Life" };

// Growth (S5): G1 hero (private placeholder) → 03 G2 → 07 G4 → 09/10 G5 (docs/sections/growth.md, D-015 OQ-05).
export default function GrowthDailyLifePage() {
  return <div className="gr-page">
    <GrowthHero />
    <Density />
    <PlanComparison />
    <GrowthEvidence />
  </div>;
}
