"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { Maximize2, X } from "lucide-react";
import { a11y } from "@/content/site";
import { asset, type AssetId } from "@/lib/assets";

// "View larger map" (TXT:1070, D-015 OQ-30): full-screen view of the same map file,
// with a close button. No zoom or pan tools are added.
export function MapViewer({ id, alt, label, className }: { id: AssetId; alt: string; label: string; className?: string }) {
  const image = asset(id);
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger className={`map-viewer-button ${className ?? ""}`}>
        <Maximize2 aria-hidden="true" strokeWidth={2} />{label}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="map-viewer-overlay" />
        <DialogPrimitive.Content className="map-viewer-panel" aria-describedby={undefined}>
          <DialogPrimitive.Title className="sr-only">{alt}</DialogPrimitive.Title>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export serves the original file */}
          <img src={image.src} width={image.width} height={image.height} alt={alt} />
          <DialogPrimitive.Close className="map-viewer-close" aria-label={a11y.close}>
            <X aria-hidden="true" strokeWidth={2} />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
