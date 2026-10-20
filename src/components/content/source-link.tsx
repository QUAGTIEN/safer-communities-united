import { ExternalLink } from "lucide-react";
import { getBlueprintSource } from "@/content/sources";
import { cn } from "@/lib/utils";

export function SourceLink({ sourceId, children, className, inline = false }: {
  sourceId: string; children: React.ReactNode; className?: string; inline?: boolean;
}) {
  const source = getBlueprintSource(sourceId);
  return <a href={source.url} target="_blank" rel="noopener noreferrer"
    data-source-id={sourceId} className={cn(inline ? "source-inline" : "source-link", className)}>
    {children}{!inline && <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>;
}
