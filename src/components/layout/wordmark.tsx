import Link from "next/link";
import type { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { a11y } from "@/content/site";
import { asset } from "@/lib/assets";

// Wordmark artwork extracted from the blueprint header (temporary asset, D-007/D-013).
export function Wordmark({ inverse = false, className, onClick }: {
  inverse?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const image = asset(inverse ? "shared-wordmark-white" : "shared-wordmark-navy");
  return (
    <Link href="/" aria-label={a11y.home} onClick={onClick} className={cn("wordmark", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP */}
      <img src={image.src} width={image.width} height={image.height} alt="" />
    </Link>
  );
}
