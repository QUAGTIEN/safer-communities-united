import type { Metadata } from "next";
import { FoundationPage } from "@/components/demo/foundation-page";

export const metadata: Metadata = { title: "The Facts" };
export default function FactsPage() { return <FoundationPage path="/the-facts" />; }
