import type { Metadata } from "next";
import { TakeActionContent } from "@/components/action/sections";
import "./action.css";

export const metadata: Metadata = { title: "Take Action" };

// Take Action (S6): A1 hero → A2 three actions (+ supporter application, A3 story, A4 sharing) → A5 stories → A6 petition
// (docs/sections/action.md). Form sending is simulated in this preview (docs/FORMS_SPEC.md §0).
export default function TakeActionPage() {
  return <TakeActionContent />;
}
