import type { Metadata } from "next";
import { FoundationPage } from "@/components/demo/foundation-page";

export const metadata: Metadata = { title: "About" };
export default function AboutPage() { return <FoundationPage path="/about" />; }
