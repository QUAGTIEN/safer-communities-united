import type { Metadata } from "next";
import { GrowthPageContent } from "@/components/growth/growth-page";
import "./growth.css";

export const metadata: Metadata = { title: "Growth & Daily Life" };
export default function GrowthPage() { return <GrowthPageContent />; }
