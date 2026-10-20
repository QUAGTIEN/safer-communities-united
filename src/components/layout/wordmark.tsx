import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

// A text wordmark is used until a separate approved logo file is supplied.
export function Wordmark({ inverse = false, onClick }: { inverse?: boolean; onClick?: MouseEventHandler<HTMLAnchorElement> }) {
  return (
    <Link href="/" aria-label={`${site.name} — Our Community`} onClick={onClick}
      className={cn("wordmark", inverse && "text-white")}>
      <span>Safer</span>
      <span>Communities United</span>
    </Link>
  );
}
