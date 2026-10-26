import type { Metadata } from "next";
import { EvidenceLibrary, IssueEvidence } from "@/components/evidence/sections";
import "./evidence.css";

export const metadata: Metadata = { title: "The Facts" };

// The Facts — Evidence & Records (S5): R3 explore by issue → E1 library + From Evidence to Action
// (docs/sections/evidence.md). Active menu item: The Facts (TXT:2065).
export default function EvidencePage() {
  return <div className="ev-page">
    <IssueEvidence />
    <EvidenceLibrary />
  </div>;
}
