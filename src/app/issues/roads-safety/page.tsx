import type { Metadata } from "next";
import { RoadsPageContent } from "@/components/roads/roads-page";
import "./roads.css";

export const metadata: Metadata = { title: "Roads & Safety" };
export default function RoadsPage() { return <RoadsPageContent />; }
