import Link from "next/link";
import { ArrowDown, Ban, CircleAlert, ClipboardCheck, Cog, Construction, Droplet, FileText, House, Landmark, Layers, Leaf, Lightbulb, LampFloor, Map, PersonStanding, RefreshCw, Shield, ShowerHead, Users, Waves, type LucideIcon } from "lucide-react";
import { comparisonLinks, housing, proposed, remains, roads, water, type Part, type Row } from "@/content/comparison";
import { asset, type AssetId } from "@/lib/assets";
import { NoticeLink } from "@/components/issues/notice-link";
import { comparisonAnchor, routes } from "@/content/site";

// The Proposal / Comparison — approved later-page images R1, W8, H1, C1 (desktop only); Proposed Change is
// not supplied (D-015 OQ-20, OQ-29). "View the Full … Comparison" and "Learn More About the County Framework"
// have no destination (OQ-26) and open the "Not available yet" notice.

const icons: Record<string, LucideIcon> = {
  file: FileText, ban: Ban, lamp: LampFloor, walk: PersonStanding, check: ClipboardCheck, refresh: RefreshCw, bulb: Lightbulb, users: Users,
  drop: Droplet, house: House, tap: ShowerHead, waves: Waves, leaf: Leaf, cog: Cog, shield: Shield, map: Map, doc: FileText, road: Construction,
};

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

function Rich({ parts }: { parts: Part[] }) {
  return <>{parts.map((p, i) => {
    const next = parts[i + 1];
    const glue = typeof next === "string" && /^[?.,]/.test(next);
    return <span key={i}>{typeof p === "string" ? p : <strong>{p.em}</strong>}{i < parts.length - 1 && !glue && " "}</span>;
  })}</>;
}

// Page opening at #proposed-change (D-027): title, the two next steps and a jump list to the four comparisons.
export function ProposedChange() {
  const p = proposed;
  return <section id="proposed-change" className="cp-proposed" aria-labelledby="cp-proposed-title">
    <div className="cp-wrap">
      <h1 id="cp-proposed-title" className="cp-title cp-proposed-title">{p.title}</h1>
      <div className="cp-proposed-actions">
        <a href={`#${comparisonAnchor}`} className="cp-button">{p.compare}<ArrowDown aria-hidden="true" strokeWidth={2.25} /></a>
        <Link href={`${routes.action}#petition`} className="cp-button is-outline">{p.petition}</Link>
      </div>
      <nav className="cp-proposed-nav" aria-label={p.compare}>
        <ul>{p.sections.map((s) => <li key={s.anchor}><a href={`#${s.anchor}`}>{s.label}<ArrowDown aria-hidden="true" strokeWidth={2.25} /></a></li>)}</ul>
      </nav>
    </div>
  </section>;
}

function RoadsColumn({ side, data }: { side: "community" | "county"; data: typeof roads.community }) {
  return <div className={`cp-r1-col is-${side}`}>
    <h3 className="cp-r1-head">{data.title}</h3>
    <ul>
      {data.rows.map((row) => {
        const Icon = icons[row.icon];
        return <li key={row.title}>
          <span className="cp-r1-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
          <div>
            <p className="cp-r1-label">{row.label}</p>
            <h4>{row.title}</h4>
            <p><Rich parts={row.text} /></p>
          </div>
        </li>;
      })}
    </ul>
  </div>;
}

export function RoadsComparison() {
  const s = roads;
  return <section id="roads" className="cp-section cp-r1" aria-labelledby="cp-r1-title">
    <div className="cp-wrap is-narrow">
      <div className="cp-r1-top">
        <div>
          <div className="cp-kicker">
            <span className="cp-kicker-icon" aria-hidden="true"><Construction strokeWidth={2} /></span>
            <p>{s.kicker[0]}<br />{s.kicker[1]}</p>
          </div>
          <h2 id="cp-r1-title" className="cp-display">{s.title}</h2>
        </div>
        <figure className="cp-r1-photo">
          <Img id={s.photo} alt={s.photoAlt} />
          <figcaption>{s.caption.line}<br />{s.caption.before} <NoticeLink className="cp-inline-link">{s.caption.link}</NoticeLink></figcaption>
        </figure>
      </div>
      <p className="cp-intro">{s.intro}</p>
      <div className="cp-r1-grid">
        <RoadsColumn side="community" data={s.community} />
        <RoadsColumn side="county" data={s.county} />
      </div>
      <div className="cp-r1-closing">
        <Img id={s.illustration} className="cp-small-art" />
        <p>{s.closing}</p>
      </div>
      <p className="cp-r1-note">{s.note}</p>
      <p className="cp-center"><NoticeLink className="cp-button">{s.cta}</NoticeLink></p>
    </div>
  </section>;
}

function WaterColumn({ side, data }: { side: "community" | "county"; data: typeof water.community }) {
  return <div className={`cp-w8-col is-${side}`}>
    <div className="cp-w8-head">
      <h3>{data.title}</h3>
      <p>{data.subtitle}</p>
    </div>
    <ul>
      {data.rows.map((row, i) => {
        const Icon = icons[row.icon];
        return <li key={i}>
          <span className="cp-w8-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
          <p><Rich parts={row.text} /></p>
        </li>;
      })}
    </ul>
  </div>;
}

export function WaterComparison() {
  const s = water;
  return <section id="water" className="cp-section cp-w8" aria-labelledby="cp-w8-title">
    <div className="cp-w8-top">
      <div className="cp-w8-copy">
        <div className="cp-kicker">
          <span className="cp-kicker-icon" aria-hidden="true"><Droplet strokeWidth={2} /></span>
          <p><span className="cp-kicker-light">{s.kicker[0]}</span><br />{s.kicker[1]}</p>
        </div>
        <h2 id="cp-w8-title" className="cp-title">{s.title[0]}<br className="cp-break" /> {s.title[1]}</h2>
      </div>
      <Img id={s.photo} alt={s.photoAlt} className="cp-w8-photo" />
    </div>
    <div className="cp-wrap">
      <div className="cp-w8-grid">
        <WaterColumn side="community" data={s.community} />
        <span className="cp-swap" aria-hidden="true">↔</span>
        <WaterColumn side="county" data={s.county} />
      </div>
      <div className="cp-limit">
        <span aria-hidden="true"><CircleAlert strokeWidth={2.5} /></span>
        <div><h3>{s.limit.title}</h3><p>{s.limit.text}</p></div>
      </div>
      <div className="cp-closing-row">
        <Img id={s.illustration} className="cp-small-art" />
        <p>{s.closing[0]}<br className="cp-break" /> {s.closing[1]}<br className="cp-break" /> {s.closing[2]}</p>
        <NoticeLink className="cp-button">{s.cta}</NoticeLink>
      </div>
    </div>
  </section>;
}

function HousingColumn({ data }: { data: typeof housing.community }) {
  return <div className="cp-h1-col">
    <h3>{data.title}</h3>
    <ul>
      {data.rows.map((row: Row) => <li key={row.icon}>
        <Img id={row.icon as AssetId} className="cp-h1-icon" />
        <p><Rich parts={row.text} /></p>
      </li>)}
    </ul>
  </div>;
}

export function HousingComparison() {
  const s = housing;
  return <section id="growth-housing" className="cp-section cp-h1" aria-labelledby="cp-h1-title">
    <div className="cp-wrap">
      <p className="cp-h1-kicker">{s.kicker}</p>
      <h2 id="cp-h1-title" className="cp-title">{s.title}</h2>
      <div className="cp-h1-grid">
        <HousingColumn data={s.community} />
        <HousingColumn data={s.county} />
      </div>
      <div className="cp-closing-row is-ruled">
        <Img id={s.illustration} className="cp-small-art" />
        <p>{s.closing}</p>
        <NoticeLink className="cp-button is-plain">{s.cta}</NoticeLink>
      </div>
    </div>
  </section>;
}

export function WhatRemains() {
  const s = remains;
  return <section id="what-remains" className="cp-section cp-c1" aria-labelledby="cp-c1-title">
    <div className="cp-wrap">
      <div className="cp-c1-top">
        <div>
          <div className="cp-kicker">
            <span className="cp-kicker-icon" aria-hidden="true"><Layers strokeWidth={2} /></span>
            <p className="cp-kicker-strong">{s.kicker[0]}<br />{s.kicker[1]}</p>
          </div>
          <h2 id="cp-c1-title" className="cp-title is-tight">{s.title}</h2>
        </div>
        <figure className="cp-c1-photo">
          <Img id={s.photo} alt={s.photoAlt} />
          <figcaption>{s.caption}</figcaption>
        </figure>
      </div>
      <div className="cp-c1-diagram">
        <div className="cp-c1-remove">
          <h3>{s.remove.title}</h3>
          <Img id={s.remove.image} alt={s.remove.alt} />
        </div>
        <Img id={s.arrow} className="cp-c1-arrow" />
        <div className="cp-c1-keep">
          <h3>{s.keep.title}</h3>
          <p className="cp-c1-plan"><span aria-hidden="true"><Landmark strokeWidth={2} /></span>{s.keep.plan}</p>
          <ul>
            {s.keep.items.map((item) => {
              const Icon = icons[item.icon];
              return <li key={item.text} className={`is-${item.icon}`}><span aria-hidden="true"><Icon strokeWidth={2} /></span>{item.text}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="cp-c1-panel">
        <Img id={s.illustration} className="cp-small-art" />
        <div><h3>{s.panel.title}</h3><p>{s.panel.text}</p></div>
        <NoticeLink className="cp-button is-plain">{s.panel.cta}</NoticeLink>
      </div>
    </div>
    <div className="cp-campaign">
      <div className="cp-wrap">
        <h2 className="cp-campaign-title">{s.campaign.title}</h2>
        <p className="cp-campaign-text">{s.campaign.text}</p>
        <p className="cp-campaign-source">{s.campaign.source}</p>
        <a href={comparisonLinks.communityPlan} className="cp-campaign-link" target="_blank" rel="noopener noreferrer">{s.campaign.link}</a>
      </div>
    </div>
  </section>;
}
