import type { Metadata } from "next";
import localFont from "next/font/local";
import { Emergency, Frameworks, GunnHighway, MapArea, Records, StreetLighting, Walking } from "@/components/roads/sections";
import "./roads.css";

export const metadata: Metadata = { title: "Roads & Safety" };

// Condensed display lettering used only by the three-map campaign area (TXT:49); Anton, OFL 1.1.
const anton = localFont({
  src: "../../../../node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2",
  variable: "--font-anton", weight: "400", display: "swap",
});

// Roads & Safety (S4): no hero; 01 → 04, three-map area (section 4), 06 Records, 07 frameworks (docs/sections/roads.md).
export default function RoadsSafetyPage() {
  return <div className={`rd-page ${anton.variable}`}>
    <StreetLighting />
    <GunnHighway />
    <Walking />
    <Emergency />
    <MapArea />
    <Records />
    <Frameworks />
  </div>;
}
