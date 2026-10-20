import type { Metadata } from "next";
import { ActionPageContent } from "@/components/action/action-page";
import "./action.css";

export const metadata: Metadata = { title: "Take Action" };
export default function ActionPage() { return <ActionPageContent />; }
