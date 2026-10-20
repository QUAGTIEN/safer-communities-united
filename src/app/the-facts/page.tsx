import type { Metadata } from "next";
import { FactsPageContent } from "@/components/facts/facts-page";
import "./facts.css";

export const metadata: Metadata = { title: "The Facts" };
export default function FactsPage() { return <FactsPageContent />; }
