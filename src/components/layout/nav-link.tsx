"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { NavItem } from "@/content/site";
import { useNotAvailable } from "./not-available";

// Renders a site destination: a normal link, or a button that opens the
// "Not available yet" notice when no destination has been supplied.
export function NavLink({ item, className, children, onNavigate, current }: {
  item: NavItem;
  className?: string;
  children?: ReactNode;
  onNavigate?: () => void;
  current?: boolean;
}) {
  const openNotice = useNotAvailable();
  const content = children ?? item.label;
  if ("notice" in item.to) {
    return <button type="button" className={className} aria-haspopup="dialog"
      onClick={() => { onNavigate?.(); openNotice(); }}>{content}</button>;
  }
  return <Link href={item.to.href} className={className} onClick={onNavigate}
    aria-current={current ? "page" : undefined}>{content}</Link>;
}
