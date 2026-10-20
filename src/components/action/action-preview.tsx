"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { site } from "@/content/site";

// These three hash destinations open read-only previews. Only the URL fragment
// changes; no application information or consent is entered, saved or sent.
export function ActionPreview({ anchor, title, label, primary = false, children }: {
  anchor: string; title: string; label: string; primary?: boolean; children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const readHash = () => setOpen(window.location.hash === `#${anchor}`);
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [anchor]);

  function changeOpen(next: boolean) {
    setOpen(next);
    if (next || window.location.hash === `#${anchor}`) {
      window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}${next ? `#${anchor}` : ""}`);
    }
  }

  return <div id={anchor} className="action-preview-destination"><Dialog open={open} onOpenChange={changeOpen}>
    <DialogTrigger asChild><Button type="button" variant={primary ? "default" : "outline"} className="action-card-cta">{label.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></Button></DialogTrigger>
    <DialogContent className="action-preview-modal" onOpenAutoFocus={(event) => { event.preventDefault(); titleRef.current?.focus(); }}>
      <div className="action-preview-heading"><p className="eyebrow text-teal">Demo preview</p><DialogTitle ref={titleRef} tabIndex={-1}>{title}</DialogTitle><DialogDescription>{site.demoNotice}</DialogDescription></div>
      {children}
      <DialogClose asChild><Button type="button" variant="outline" className="action-close-preview">Close preview</Button></DialogClose>
    </DialogContent>
  </Dialog></div>;
}
