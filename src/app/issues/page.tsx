import type { Metadata } from "next";
import { IssuesPageContent } from "@/components/issues/issues-page";
import "./issues.css";

export const metadata: Metadata = { title: "Issues" };
export default function IssuesPage() { return <IssuesPageContent />; }
