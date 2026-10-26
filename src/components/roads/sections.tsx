import Link from "next/link";
import {
  Ambulance, ArrowRight, BarChart3, BookOpen, CalendarDays, Car, CloudSnow, Construction, Database,
  FileText, Gauge, Info, Landmark, LampFloor, Map, Moon, PersonStanding, Plus, Scale, Settings, Share2, Shield, Siren,
  Table2, Trees, TriangleAlert, Users, Bike, type LucideIcon,
} from "lucide-react";
import { crumbs, emergency, frameworks, gunn, lighting, maps, records, sectionNav, walking, type CompareRow, type RecordCard } from "@/content/roads";
import { asset, type AssetId } from "@/lib/assets";
import { NoticeLink } from "@/components/issues/notice-link";
import { MapViewer } from "./map-viewer";

// Roads & Safety sections — references p051–p071 (1536), p131–p186 (768/390).
// UI icons are vectors (ASSET_REGISTER §1b); photos, artwork and the three original maps are image files.

type Section = "street-lighting" | "gunn-highway" | "walking-biking-crossings" | "emergency-access";
const sectionIcons: Record<Section, LucideIcon> = {
  "street-lighting": LampFloor, "gunn-highway": Construction, "walking-biking-crossings": Bike, "emergency-access": Ambulance,
};

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Crumbs({ last }: { last: string | null }) {
  return <p className="rd-crumbs">
    <Link href="/issues">{crumbs.issues}</Link><span aria-hidden="true">›</span>
    {last ? <><span>{crumbs.roads}</span><span aria-hidden="true">›</span><span>{last}</span></> : <span>{crumbs.roads}</span>}
  </p>;
}

function Kicker({ id, text }: { id: Section | "records" | "frameworks"; text: string }) {
  const Icon = id === "records" ? FileText : id === "frameworks" ? Scale : sectionIcons[id];
  const [number, ...rest] = text.split(" — ");
  return <p className={`rd-kicker is-${id}`}>
    <span className="rd-kicker-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
    <span><span className="rd-kicker-number">{number}</span> — {rest.join(" — ")}</span>
  </p>;
}

function Title({ lines, accentFrom }: { lines: readonly string[]; accentFrom?: number }) {
  return <h2 className="rd-title">
    {lines.map((line, i) => <span key={line} className={accentFrom !== undefined && i >= accentFrom ? "is-accent" : undefined}>
      {i > 0 && <br className="rd-break" />}{i > 0 && " "}{line}
    </span>)}
  </h2>;
}

function CardHead({ icon: Icon, tone, title }: { icon: LucideIcon; tone: string; title: string }) {
  return <div className="rd-card-head">
    <span className={`rd-card-icon is-${tone}`} aria-hidden="true"><Icon strokeWidth={2} /></span>
    <h3 className="rd-card-title">{title}</h3>
  </div>;
}

function IconList({ items, icons }: { items: readonly string[]; icons: LucideIcon[] }) {
  return <ul className="rd-icon-list">
    {items.map((item, i) => {
      const Icon = icons[i];
      return <li key={item}><span aria-hidden="true"><Icon strokeWidth={2} /></span>{item}</li>;
    })}
  </ul>;
}

function Callout({ text }: { text: string }) {
  return <p className="rd-callout"><span aria-hidden="true"><ArrowRight strokeWidth={2} /></span>{text}</p>;
}

function Evidence({ title, text, source, links }: { title?: string; text: string; source: string; links: readonly { label: string; href: string }[] }) {
  return <div className="rd-evidence">
    {title && <h3 className="rd-evidence-title">{title}</h3>}
    <p className="rd-evidence-text">{text}</p>
    <p className="rd-evidence-source">{source}</p>
    {links.map((link) => <p key={link.label} className="rd-evidence-link"><Ext href={link.href}>{link.label}</Ext></p>)}
  </div>;
}

export function SectionNav({ current }: { current: Section }) {
  return <nav className="rd-nav" aria-label="Roads & Safety topics">
    <ul>
      {sectionNav.map((item) => {
        const Icon = sectionIcons[item.id];
        return <li key={item.id}>
          <a href={`#${item.id}`} className={`rd-nav-link is-${item.id}${item.id === current ? " is-current" : ""}`}
            aria-current={item.id === current ? "location" : undefined}>
            <span className="rd-nav-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
            <span className="rd-nav-text"><span className="rd-nav-number">{item.number}</span><span>{item.label}</span></span>
            <span className="rd-nav-arrow" aria-hidden="true"><ArrowRight strokeWidth={2} /></span>
          </a>
        </li>;
      })}
    </ul>
  </nav>;
}

export function StreetLighting() {
  const s = lighting;
  return <section id="street-lighting" className="rd-section rd-lighting" aria-labelledby="rd-lighting-title">
    <div className="rd-wrap">
      <div className="rd-hero">
        <div>
          <Crumbs last={null} />
          <Kicker id="street-lighting" text={s.kicker} />
          <div id="rd-lighting-title"><Title lines={s.title} /></div>
          <p className="rd-question">{s.question}</p>
          <p className="rd-intro">{s.intro}</p>
        </div>
        <Img id={s.image} alt={s.imageAlt} className="rd-hero-image" />
      </div>
      <div className="rd-cards">
        <div className="rd-card">
          <CardHead icon={FileText} tone="red" title={s.rule.title} />
          <p className="rd-card-text is-indented">{s.rule.text}</p>
          <blockquote className="rd-quote">
            <p>{s.rule.quote.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</p>
            <footer>{s.rule.cite}</footer>
          </blockquote>
          <Ext href={s.rule.link.href} className="rd-text-link is-strong">{s.rule.link.label}</Ext>
        </div>
        <div className="rd-card">
          <CardHead icon={TriangleAlert} tone="teal" title={s.needs.title} />
          <p className="rd-card-text is-indented">{s.needs.lead}</p>
          <IconList items={s.needs.items} icons={[Car, Plus, PersonStanding, Moon]} />
        </div>
        <div className="rd-card">
          <CardHead icon={Users} tone="orange" title={s.matters.title} />
          <p className="rd-card-text is-indented">{s.matters.text}</p>
          <Callout text={s.matters.callout} />
        </div>
      </div>
      <Evidence text={s.evidence.text} source={s.evidence.source} links={s.evidence.links} />
      <SectionNav current="street-lighting" />
    </div>
  </section>;
}

export function GunnHighway() {
  const s = gunn;
  return <section id="gunn-highway" className="rd-section rd-gunn" aria-labelledby="rd-gunn-title">
    <div className="rd-wrap">
      <div className="rd-gunn-grid">
        <div className="rd-gunn-copy">
          <Crumbs last={s.crumb} />
          <Kicker id="gunn-highway" text={s.kicker} />
          <div id="rd-gunn-title"><Title lines={s.title} accentFrom={1} /></div>
          <p className="rd-intro">{s.intro.before} <strong>{s.intro.strong}</strong> {s.intro.after}</p>
        </div>
        <Img id={s.photo} alt={s.photoAlt} className="rd-gunn-photo" />
        <div className="rd-gunn-map">
          <Img id={s.map} alt={s.mapAlt} />
          <MapViewer id={s.map} alt={s.mapAlt} label={s.mapButton} className="is-phone-only" />
        </div>
      </div>
      <div className="rd-cards is-tinted">
        <div className="rd-card is-rule">
          <div className="rd-card-head is-split">
            <span className="rd-card-icon is-red" aria-hidden="true"><FileText strokeWidth={2} /></span>
            <div>
              <h3 className="rd-card-title">{s.rule.title}</h3>
              <p className="rd-card-lead">{s.rule.text}</p>
              <Ext href={s.rule.link.href} className="rd-text-link">{s.rule.link.label}</Ext>
            </div>
          </div>
        </div>
        <div className="rd-card is-table">
          <div className="rd-card-head is-split">
            <span className="rd-card-icon is-teal" aria-hidden="true"><Table2 strokeWidth={2} /></span>
            <div>
              <h3 className="rd-card-title">{s.table.title}</h3>
              <p className="rd-card-text">{s.table.text}</p>
              <Ext href={s.table.link.href} className="rd-text-link">{s.table.link.label}</Ext>
            </div>
          </div>
        </div>
        <div className="rd-card is-matters">
          <div className="rd-card-head is-split">
            <span className="rd-card-icon is-orange" aria-hidden="true"><Users strokeWidth={2} /></span>
            <div>
              <h3 className="rd-card-title">{s.matters.title}</h3>
              <p className="rd-card-text">{s.matters.text}</p>
            </div>
          </div>
        </div>
      </div>
      <Evidence {...s.evidence} />
      <SectionNav current="gunn-highway" />
    </div>
  </section>;
}

export function Walking() {
  const s = walking;
  return <section id="walking-biking-crossings" className="rd-section rd-walking" aria-labelledby="rd-walking-title">
    <div className="rd-wrap">
      <div className="rd-hero">
        <div>
          <Crumbs last={s.crumb} />
          <Kicker id="walking-biking-crossings" text={s.kicker} />
          <div id="rd-walking-title"><Title lines={s.title} accentFrom={1} /></div>
          <p className="rd-intro">{s.intro}</p>
        </div>
        <Img id={s.image} alt={s.imageAlt} className="rd-hero-image" />
      </div>
      <div className="rd-cards is-tinted">
        <div className="rd-card is-rule">
          <CardHead icon={FileText} tone="red" title={s.rule.title} />
          <p className="rd-card-lead">{s.rule.question}</p>
          <p className="rd-card-text is-ruled">{s.rule.text}</p>
          <p className="rd-card-note">{s.rule.note}</p>
          <Ext href={s.rule.link.href} className="rd-text-link">{s.rule.link.label}</Ext>
        </div>
        <div className="rd-card is-table">
          <CardHead icon={TriangleAlert} tone="teal" title={s.conditions.title} />
          <IconList items={s.conditions.items} icons={[Car, PersonStanding, TriangleAlert, Bike]} />
        </div>
        <div className="rd-card is-matters">
          <CardHead icon={Users} tone="orange" title={s.matters.title} />
          <p className="rd-card-text is-ruled-bottom">{s.matters.text}</p>
          <Callout text={s.matters.callout} />
        </div>
      </div>
      <Evidence {...s.evidence} />
      <SectionNav current="walking-biking-crossings" />
    </div>
  </section>;
}

export function Emergency() {
  const s = emergency;
  return <section id="emergency-access" className="rd-section rd-emergency" aria-labelledby="rd-emergency-title">
    <div className="rd-wrap">
      <div className="rd-hero">
        <div>
          <Crumbs last={s.crumb} />
          <Kicker id="emergency-access" text={s.kicker} />
          <div id="rd-emergency-title"><Title lines={s.title} /></div>
          <p className="rd-intro">{s.intro}</p>
        </div>
        <Img id={s.image} alt={s.imageAlt} className="rd-hero-image" />
      </div>
      <div className="rd-cards">
        <div className="rd-card">
          <CardHead icon={FileText} tone="red" title={s.plan.title} />
          <p className="rd-card-lead">{s.plan.lead}</p>
          <blockquote className="rd-quote is-large">
            <p>{s.plan.quote}</p>
            <footer>{s.plan.cite}</footer>
          </blockquote>
          <p className="rd-card-text">{s.plan.text}</p>
          <Ext href={s.plan.link.href} className="rd-text-link">{s.plan.link.label}</Ext>
        </div>
        <div className="rd-card">
          <CardHead icon={TriangleAlert} tone="teal" title={s.factors.title} />
          <IconList items={s.factors.items} icons={[Ambulance, Plus, TriangleAlert, Construction, CloudSnow]} />
        </div>
        <div className="rd-card">
          <CardHead icon={Users} tone="orange" title={s.matters.title} />
          <p className="rd-card-text">{s.matters.text}</p>
          <Callout text={s.matters.callout} />
        </div>
      </div>
      <SectionNav current="emergency-access" />
    </div>
  </section>;
}

export function MapArea() {
  const m = maps;
  return <section id="explore-the-area" className="rd-maps" aria-labelledby="rd-maps-title">
    <div className="rd-maps-wrap">
      <p className="rd-maps-brand">{m.brand} <span aria-hidden="true">•</span> {m.explore}</p>
      <div className="rd-maps-head">
        <h2 id="rd-maps-title" className="rd-display">{m.nimby.title}</h2>
        <Img id="roads-map-heading-tree" className="rd-maps-tree" />
      </div>
      <p className="rd-maps-source">{m.nimby.source}</p>
      <div className="rd-map is-nimby"><Img id={m.nimby.map} alt={m.nimby.alt} /></div>
      <MapViewer id={m.nimby.map} alt={m.nimby.alt} label={m.viewLarger} />

      <p className="rd-vs" aria-hidden="true">{m.vs}</p>
      <h2 className="rd-display rd-versus"><span>{m.versus.line1}</span> <span className="is-teal">{m.versus.line2}</span></h2>
      <p className="rd-versus-sub">{m.versus.sub}</p>
      <div className="rd-map is-area"><Img id={m.area.map} alt={m.area.alt} /></div>
      <MapViewer id={m.area.map} alt={m.area.alt} label={m.viewLarger} />

      <div className="rd-maps-cols">
        <div>
          <h3 className="rd-display rd-maps-h3">{m.here.title}</h3>
          <p className="rd-maps-text">{m.here.text}</p>
        </div>
        <div>
          <h3 className="rd-display rd-maps-h3">{m.nature.title[0]}<br className="rd-break" /> {m.nature.title[1]}</h3>
          <p className="rd-maps-text is-blue">{m.nature.highlight}</p>
          <p className="rd-maps-text">{m.nature.text}</p>
        </div>
      </div>
      <h3 className="rd-display rd-maps-question">{m.question}</h3>
    </div>
    <div className="rd-gis">
      <div className="rd-maps-wrap rd-maps-cols">
        <p>{m.gis}</p>
        <p>{m.gisSources}</p>
      </div>
    </div>
    <div className="rd-maps-wrap">
      <div className="rd-maps-cols rd-slogans">
        {m.slogans.map((slogan) => <p key={slogan.id} className={`rd-slogan is-${slogan.id}`}>
          <Img id={slogan.icon} className="rd-slogan-icon" />
          <span className="rd-display">{slogan.lines.map((line, i) => <span key={line} className={i === slogan.lines.length - 1 ? "is-last" : undefined}>{line}</span>)}</span>
        </p>)}
      </div>
      <div className="rd-maps-cols">
        <div>
          <p className="rd-maps-text">{m.conservation}</p>
          <p className="rd-maps-text">{m.parcels}</p>
        </div>
        <div className="rd-maps-small">
          <p>{m.analysis}</p>
          {m.sourceLinks.map((link) => <p key={link.label}><Ext href={link.href} className="rd-maps-link">{link.label}</Ext></p>)}
          <p>{m.method}</p>
        </div>
      </div>
      <h2 className="rd-display rd-roads-title">{m.roads.title}</h2>
      <div className="rd-map is-roads"><Img id={m.roads.map} alt={m.roads.alt} /></div>
      <MapViewer id={m.roads.map} alt={m.roads.alt} label={m.viewLarger} />
    </div>
    {/* Forest band from the map-area reference; its baked-in lettering is masked so only the tree edges show. */}
    <div className="rd-keep" style={{ "--forest": `url(${asset("roads-map-forest-band").src})` } as React.CSSProperties}>
      <h2 className="rd-display">{m.closing.title}</h2>
      <Link href={m.closing.evidence.href} className="rd-keep-button">{m.closing.evidence.label}</Link>
      <Link href={m.closing.petition.href} className="rd-keep-link">{m.closing.petition.label}</Link>
    </div>
  </section>;
}

const recordIcons: Record<string, LucideIcon> = { safety: Siren, traffic: Gauge, maps: Map, public: FileText, plan: BookOpen };
const metaIcons: Record<string, LucideIcon> = { safety: FileText, traffic: Database, maps: Map, public: FileText, plan: FileText };

function Record({ card }: { card: RecordCard }) {
  const Icon = recordIcons[card.id];
  const Meta = metaIcons[card.id];
  const action = <><FileText aria-hidden="true" strokeWidth={1.75} /><span>{card.action}</span><ArrowRight aria-hidden="true" strokeWidth={2} /></>;
  return <li className={`rd-record is-${card.id}`}>
    <div className="rd-record-head">
      <span className="rd-record-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
      <div>
        <h3 className="rd-record-title">{card.title}</h3>
        <p className="rd-record-tags">{card.tags[0]}<br />{card.tags[1]}</p>
      </div>
    </div>
    <Img id={card.image} className="rd-record-image" />
    <h4 className="rd-record-heading">{card.heading}</h4>
    <p className="rd-record-text">{card.text}</p>
    {card.source && <p className="rd-record-source">{card.source}</p>}
    <div className="rd-record-meta">
      <p><Meta aria-hidden="true" strokeWidth={1.75} />{card.meta}</p>
      {card.date && <p><CalendarDays aria-hidden="true" strokeWidth={1.75} />{card.date}</p>}
    </div>
    {card.href
      ? <Ext href={card.href} className="rd-record-action">{action}</Ext>
      : <NoticeLink className="rd-record-action">{action}</NoticeLink>}
  </li>;
}

export function Records() {
  const r = records;
  return <section id="records-evidence" className="rd-section rd-records" aria-labelledby="rd-records-title">
    <div className="rd-wrap">
      <Crumbs last={r.crumb} />
      <Kicker id="records" text={r.kicker} />
      <h2 id="rd-records-title" className="rd-records-title">{r.title.dark} <span>{r.title.accent}</span></h2>
      <p className="rd-records-intro">{r.intro}</p>
    </div>
    <div className="rd-wide">
      <ul className="rd-record-list">{r.cards.map((card) => <Record key={card.id} card={card} />)}</ul>
      <div className="rd-banner">
        <span className="rd-banner-icon" aria-hidden="true"><FileText strokeWidth={2} /></span>
        <div>
          <h3 className="rd-banner-title">{r.banner.title}</h3>
          <p>{r.banner.text}</p>
        </div>
        <Link href={r.banner.cta.href} className="rd-banner-button">{r.banner.cta.label}</Link>
      </div>
    </div>
  </section>;
}

const communityIcons: Record<string, LucideIcon> = { rural: Trees, config: Construction, gunn: Car, lighting: LampFloor, improvements: Settings };
const countyIcons: Record<string, LucideIcon> = { safety: Shield, mobility: Share2, infrastructure: Construction, evaluation: BarChart3, tools: FileText };

function CompareColumn({ title, rows, icons, headIcon: HeadIcon, side }: { title: string; rows: CompareRow[]; icons: Record<string, LucideIcon>; headIcon: LucideIcon; side: string }) {
  return <div className={`rd-compare is-${side}`}>
    <div className="rd-compare-head">
      <span aria-hidden="true"><HeadIcon strokeWidth={2} /></span>
      <h3>{title}</h3>
    </div>
    <ul>
      {rows.map((row) => {
        const Icon = icons[row.id];
        return <li key={row.id} className={`rd-compare-row is-${row.id}`}>
          <span className="rd-compare-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
          <div>
            <h4>{row.title}</h4>
            {row.extra
              ? <p><strong>{row.question}</strong><br />{row.text}<br />{row.extra}</p>
              : <p>{row.question && <><strong>{row.question}</strong>{" "}</>}{row.text}</p>}
          </div>
        </li>;
      })}
    </ul>
  </div>;
}

export function Frameworks() {
  const f = frameworks;
  return <section id="two-planning-frameworks" className="rd-section rd-frameworks" aria-labelledby="rd-frameworks-title">
    <div className="rd-wrap">
      <Kicker id="frameworks" text={f.kicker} />
      <h2 id="rd-frameworks-title" className="rd-frameworks-title">{f.title}</h2>
      <div className="rd-compare-grid">
        <CompareColumn title={f.community.title} rows={f.community.rows} icons={communityIcons} headIcon={Map} side="community" />
        <span className="rd-compare-swap" aria-hidden="true">↔</span>
        <CompareColumn title={f.county.title} rows={f.county.rows} icons={countyIcons} headIcon={Landmark} side="county" />
      </div>
      <div className="rd-note">
        <span className="rd-note-icon" aria-hidden="true"><Info strokeWidth={2.5} /></span>
        <p>{f.note}</p>
        <Link href={f.cta.href} className="rd-note-button">{f.cta.label}</Link>
      </div>
      <Evidence {...f.evidence} />
    </div>
  </section>;
}
