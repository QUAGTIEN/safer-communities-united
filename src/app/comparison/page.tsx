import type { Metadata } from "next";
import { HousingComparison, ProposedChange, RoadsComparison, WaterComparison, WhatRemains } from "@/components/comparison/sections";
import { comparisonAnchor } from "@/content/site";
import "./comparison.css";

export const metadata: Metadata = { title: "The Proposal" };

// The Proposal (S5): #proposed-change (not supplied — notice panel) → Compare the Two Plans:
// R1 Roads → W8 Water → H1 Growth & Housing → C1 What remains (docs/sections/comparison.md, D-015 OQ-29).
export default function ComparisonPage() {
  return <div className="cp-page">
    <ProposedChange />
    <div id={comparisonAnchor}>
      <RoadsComparison />
      <WaterComparison />
      <HousingComparison />
      <WhatRemains />
    </div>
  </div>;
}
