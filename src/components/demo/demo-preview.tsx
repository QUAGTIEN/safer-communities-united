"use client";

import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function DemoPreview({ title, children, textLink = false, signature = false }: {
  title: string; children: ReactNode; textLink?: boolean; signature?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {textLink ? <button type="button" className="footer-link">{children}</button> : <Button variant="outline">{children}</Button>}
      </DialogTrigger>
      <DialogContent>
        <p className="eyebrow text-teal">Demo preview</p>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>This content is not available in this demo.</DialogDescription>
        <p className="border-l-2 border-teal bg-cream p-4 text-sm leading-relaxed">
          {signature ? site.signatureNotice : site.demoNotice}
        </p>
        <div className="pt-2"><DialogClose asChild><Button>Close preview</Button></DialogClose></div>
      </DialogContent>
    </Dialog>
  );
}
