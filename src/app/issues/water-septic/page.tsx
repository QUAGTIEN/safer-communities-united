import type { Metadata } from "next";
import { WaterPageContent } from "@/components/water/water-page";
import "./water.css";

export const metadata: Metadata = { title: "Water & Septic" };
export default function WaterPage() { return <WaterPageContent />; }
