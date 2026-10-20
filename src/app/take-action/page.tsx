import type { Metadata } from "next";
import { FoundationPage } from "@/components/demo/foundation-page";

export const metadata: Metadata = { title: "Take Action" };
export default function ActionPage() { return <FoundationPage path="/take-action" />; }
