import Link from "next/link";
import {
  ArrowUpRight, BarChart3, CalendarDays, ChevronDown, Construction, Droplet, FileText, Home as HomeIcon, Landmark, Layers, Map,
  MapPin, Megaphone, Scale, Search, Settings, type LucideIcon,
} from "lucide-react";
import { issues, library, type LibraryRecord } from "@/content/evidence";
import { asset, type AssetId } from "@/lib/assets";
import { NoticeLink } from "@/components/issues/notice-link";

// The Facts — Evidence & Records: approved R3 (four issue cards) and E1 (library) images, desktop only.
// "View … Evidence" buttons and unverified source links open the "Not available yet" notice (D-015 OQ-22, OQ-26).

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

const groupIcons: Record<string, LucideIcon> = { data: BarChart3, map: MapPin, records: FileText, policies: Settings, documents: FileText, comparison: Scale };
const cardIcons: Record<string, LucideIcon> = { roads: Construction, water: Droplet, growth: HomeIcon, plans: FileText };
const filterIcons: Record<string, LucideIcon> = { layers: Layers, file: FileText, landmark: Landmark, calendar: CalendarDays };

export function IssueEvidence() {
  const s = issues;
  return <section id="explore-evidence" className="ev-section" aria-labelledby="ev-title">
    <div className="ev-wrap">
      <p className="ev-eyebrow"><span aria-hidden="true"><Map strokeWidth={2} /></span>{s.eyebrow}</p>
      <h1 id="ev-title" className="ev-title">{s.title}</h1>
      <p className="ev-intro">{s.intro}</p>
    </div>
    <ul className="ev-cards">
      {s.cards.map((card) => {
        const Icon = cardIcons[card.id];
        return <li key={card.id} className={`ev-card is-${card.id}`}>
          <Img id={card.image} alt={card.alt} className="ev-card-image" />
          <p className="ev-card-caption">{card.caption.line}
            {"link" in card.caption && <><br />{card.caption.before} <NoticeLink className="ev-inline-link">{card.caption.link}</NoticeLink></>}
          </p>
          <div className="ev-card-head">
            <span aria-hidden="true"><Icon strokeWidth={2} /></span>
            <h2>{card.title}</h2>
          </div>
          <dl>
            {card.groups.map((g) => {
              const G = groupIcons[g.icon];
              return <div key={g.label}>
                <dt><G aria-hidden="true" strokeWidth={2} />{g.label}</dt>
                <dd>{g.text}</dd>
              </div>;
            })}
          </dl>
          <NoticeLink className="ev-card-button">{card.cta}</NoticeLink>
        </li>;
      })}
    </ul>
  </section>;
}

function Record({ record }: { record: LibraryRecord }) {
  const s = library;
  const action = <>{s.action} <ArrowUpRight aria-hidden="true" strokeWidth={2} /></>;
  return <li className="ev-record">
    <Img id={record.image} className="ev-record-thumb" />
    <div className="ev-record-main">
      <h3>{record.title}</h3>
      <p className="ev-record-meta">
        <span><FileText aria-hidden="true" strokeWidth={2} />{record.type}</span>
        <span><Landmark aria-hidden="true" strokeWidth={2} />{record.agency}</span>
        {record.date && <span><CalendarDays aria-hidden="true" strokeWidth={2} />{record.date}</span>}
      </p>
      <p className="ev-record-uses"><strong>{s.usesLabel}</strong> {record.uses}</p>
    </div>
    <div className="ev-record-side">
      <p className="ev-related-label">{s.relatedLabel}</p>
      <ul className="ev-tags">{record.related.map((t) => <li key={t}>{t}</li>)}</ul>
      {record.href
        ? <a href={record.href} className="ev-record-button" target="_blank" rel="noopener noreferrer">{action}</a>
        : <NoticeLink className="ev-record-button">{action}</NoticeLink>}
    </div>
  </li>;
}

export function EvidenceLibrary() {
  const s = library;
  return <section id="evidence-library" className="ev-section ev-library" aria-labelledby="ev-library-title">
    <div className="ev-wrap is-library">
      <div className="ev-library-head">
        <div>
          <p className="ev-eyebrow is-strong"><span aria-hidden="true"><FileText strokeWidth={2} /></span>{s.eyebrow}</p>
          <h2 id="ev-library-title" className="ev-title is-small">{s.title}</h2>
        </div>
        <Img id={s.header} className="ev-library-header" />
      </div>
      <p className="ev-intro is-small">{s.intro}</p>
      {/* Static preview controls only: no live filtering, search or sorting (TXT:2079). */}
      <div className="ev-filters" aria-label="Static preview of library filters">
        {s.filters.map((f) => {
          const Icon = filterIcons[f.icon];
          return <div key={f.label} className="ev-filter">
            <p className="ev-filter-label"><Icon aria-hidden="true" strokeWidth={2} />{f.label}</p>
            <p className="ev-select">{f.value}<ChevronDown aria-hidden="true" strokeWidth={2} /></p>
          </div>;
        })}
        <p className="ev-search"><Search aria-hidden="true" strokeWidth={2} />{s.search.placeholder}</p>
        <p className="ev-search-button">{s.search.button}</p>
      </div>
      <div className="ev-results-bar">
        <p className="ev-count">{s.count}</p>
        <p className="ev-sort">{s.sort.label} <span>{s.sort.value}<ChevronDown aria-hidden="true" strokeWidth={2} /></span></p>
      </div>
      <ul className="ev-records">{s.records.map((r) => <Record key={r.id} record={r} />)}</ul>
      <p className="ev-pages" aria-hidden="true">{s.pages.map((p, i) => <span key={i} className={p === "1" ? "is-current" : undefined}>{p}</span>)}</p>
      <div className="ev-action">
        <p className="ev-eyebrow is-strong"><span aria-hidden="true"><Megaphone strokeWidth={2} /></span>{s.action2.eyebrow}</p>
        <h2 className="ev-action-title">{s.action2.title}</h2>
        <p className="ev-action-text">{s.action2.text}</p>
        <div className="ev-action-row">
          <Img id={s.action2.strip} className="ev-action-strip" />
          <Link href={s.action2.cta.href} className="ev-action-button">{s.action2.cta.label}</Link>
        </div>
      </div>
    </div>
  </section>;
}
