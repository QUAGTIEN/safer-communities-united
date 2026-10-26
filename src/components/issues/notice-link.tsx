"use client";

import type { ReactNode } from "react";
import { useNotAvailable } from "@/components/layout/not-available";

// Inline control for a supplied label whose destination is not available yet
// (no verified public URL — D-015 OQ-22). Opens the shared "Not available yet" notice.
export function NoticeLink({ children, className }: { children: ReactNode; className?: string }) {
  const open = useNotAvailable();
  return <button type="button" className={className} aria-haspopup="dialog" onClick={open}>{children}</button>;
}
