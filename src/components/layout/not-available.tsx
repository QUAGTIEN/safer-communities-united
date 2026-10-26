"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { a11y, notice } from "@/content/site";

// The approved "Not available yet" notice (TXT:64-65, TXT:2322; reference p262):
// small panel, exact title, dimmed page, × close; closing returns to the unchanged page.
const NoticeContext = createContext<() => void>(() => {});

export function useNotAvailable() {
  return useContext(NoticeContext);
}

// The notice is opened from many controls without a Radix Trigger, so remember the opener and
// return keyboard focus to it on close (S8-2).
export function useReturnFocus() {
  const opener = useRef<HTMLElement | null>(null);
  return {
    remember: () => { opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null; },
    restore: (event: Event) => { if (opener.current?.isConnected) { event.preventDefault(); opener.current.focus(); } },
  };
}

export function NotAvailableProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const focus = useReturnFocus();
  return (
    <NoticeContext value={() => { focus.remember(); setOpen(true); }}>
      {children}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="notice-overlay" />
          <DialogPrimitive.Content className="notice-panel" aria-describedby={undefined} onCloseAutoFocus={focus.restore}>
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
