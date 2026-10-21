import type { ReactNode } from "react";
import { informationNotices, type InformationDestination } from "@/content/information";
import { DemoPreview } from "./demo-preview";

export function InformationPreview({ destination, children, textLink = false }: {
  destination: InformationDestination; children?: ReactNode; textLink?: boolean;
}) {
  return <DemoPreview title={`${destination} — Demo version`} description={informationNotices[destination]} textLink={textLink}>
    {children ?? destination}
  </DemoPreview>;
}
