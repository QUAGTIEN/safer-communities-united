"use client";

import { ViewTransition, type ReactNode } from "react";
import { usePathname } from "next/navigation";

// Only route content fades. Shared header/footer persist, and hash changes do
// not replace this boundary. Unsupported browsers retain normal navigation.
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition key={pathname} name="page-content" share="page-crossfade" enter="page-crossfade" exit="page-crossfade" default="none">
      <div className="page-content">{children}</div>
    </ViewTransition>
  );
}
