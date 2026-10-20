import type { Metadata } from "next";
import { ProposalPageContent } from "@/components/proposal/proposal-page";
import "./proposal.css";

export const metadata: Metadata = { title: "The Proposal" };
export default function ProposalPage() { return <ProposalPageContent />; }
