import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getMap } from "@/content/assets";

export function MapFigure({ assetId, alt, title, caption }: { assetId: string; alt: string; title: string; caption?: string }) {
  const map = getMap(assetId);
  return <figure className="home-map-figure" data-map-id={map.id}>
    <Image src={map.publicPath} width={map.width} height={map.height} alt={alt}
      unoptimized className="home-map-image" />
    <figcaption className="home-map-caption">
      {caption && <p className="home-map-summary">{caption}</p>}
      <a href={map.publicPath} target="_blank" rel="noopener noreferrer" className="source-link">
        View full-size map<ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
        <span className="sr-only"> — {title} (opens in a new tab)</span>
      </a>
    </figcaption>
  </figure>;
}
