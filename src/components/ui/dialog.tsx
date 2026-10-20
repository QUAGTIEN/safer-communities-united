"use client";

// Adapted from shadcn/ui new-york-v4 Dialog (Radix), MIT.
// Source animations are intentionally omitted to follow the blueprint.
import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;

function DialogContent({ className, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy/50" />
      <DialogPrimitive.Content className={cn(
        "fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-3rem)] w-[calc(100%-2.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-5 overflow-y-auto rounded-md border border-gray bg-white p-7 text-navy shadow-lg sm:p-9", className,
      )} {...props}>
        {children}
        <DialogPrimitive.Close className="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-md hover:bg-cream">
          <X className="size-5" aria-hidden="true" /><span className="sr-only">Close preview</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className={cn("pr-8 font-heading text-3xl leading-tight font-semibold", className)} {...props} />;
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className={cn("text-base leading-relaxed", className)} {...props} />;
}

export { Dialog, DialogTrigger, DialogClose, DialogContent, DialogTitle, DialogDescription };
