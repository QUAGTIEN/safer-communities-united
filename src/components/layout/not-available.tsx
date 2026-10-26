"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { a11y, notice } from "@/content/site";

// The approved "Not available yet" notice (TXT:64-65, TXT:2322; reference p262):
// small panel, exact title, dimmed page, × close; closing returns to the unchanged page.
const NoticeContext = createContext<() => void>(() => {});

export function useNotAvailable() {
  return useContext(NoticeContext);
}

export function NotAvailableProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <NoticeContext value={() => setOpen(true)}>
      {children}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="notice-overlay" />
          <DialogPrimitive.Content className="notice-panel" aria-describedby={undefined}>
            <DialogPrimitive.Title className="notice-title">{notice.title}</DialogPrimitive.Title>
            <DialogPrimitive.Close className="notice-close" aria-label={a11y.close}>
              <X aria-hidden="true" strokeWidth={1.75} />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </NoticeContext>
  );
}
