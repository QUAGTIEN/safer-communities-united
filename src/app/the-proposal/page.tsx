import type { Metadata } from "next";
import { FoundationPage } from "@/components/demo/foundation-page";

export const metadata: Metadata = { title: "The Proposal" };
export default function ProposalPage() { return <FoundationPage path="/the-proposal" />; }
