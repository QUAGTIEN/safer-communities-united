import Link from "next/link";
import {
  ArrowRight, ArrowUp, BarChart3, Building2, Car, FileText, House, Map, MapPin, Scale, Settings, ShoppingCart, Store,
  TrendingDown, Trees, Users, type LucideIcon, Construction, Grid2x2,
} from "lucide-react";
import { comparison, crumbs, density, evidence, hero, label, next, planPage20, type Part } from "@/content/growth";
import { asset, type AssetId } from "@/lib/assets";
import { NoticeLink } from "@/components/issues/notice-link";

// Growth, Infrastructure & Daily Life — approved later-page images G1, G2, G4, G5 (desktop only).
// Tablet/phone layouts are proposals (TXT:27). UI icons are vectors; aerial artwork is image files.

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

function Rich({ parts }: { parts: Part[] }) {
  return <>{parts.map((p, i) => <span key={i}>{i > 0 && " "}{typeof p === "string" ? p : <strong>{p.em}</strong>}</span>)}</>;
}

function Crumbs({ last }: { last?: string }) {
  return <p className="gr-crumbs">
    <Link href="/issues">{crumbs.issues}</Link><span aria-hidden="true">&gt;</span>
    {last ? <><a href="#top">{crumbs.growth}</a><span aria-hidden="true">&gt;</span><span>{last}</span></> : <span>{crumbs.growth}</span>}
  </p>;
}

function Kicker({ icon: Icon, kicker, id }: { icon: LucideIcon; kicker?: { number: string; text: string }; id?: string }) {
  return <div className="gr-kicker">
    <span className="gr-kicker-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
    <p id={id}><span className="gr-kicker-label">{label}</span>
      {kicker && <span className="gr-kicker-text"><span className="gr-kicker-number">{kicker.number}</span> — {kicker.text}</span>}</p>
  </div>;
}

const cellIcons: Record<string, LucideIcon> = { users: Users, house: House, road: Construction, store: Store, tree: Trees };

export function GrowthHero() {
  return <section id="top" className="gr-section gr-hero" aria-labelledby="gr-hero-title">
    <div className="gr-crumb-band"><div className="gr-wrap"><Crumbs /></div></div>
    <div className="gr-wrap">
      <Kicker icon={BarChart3} />
      <h1 id="gr-hero-title" className="gr-hero-title">{hero.title}</h1>
      <p className="gr-hero-intro">{hero.intro}</p>
    </div>
    <div className="gr-placeholder" role="note">
      <p className="gr-placeholder-label">{hero.notice.label}</p>
      <p className="gr-placeholder-text">{hero.notice.text}</p>
    </div>
    <div className="gr-split">
      <Img id={hero.then.image} alt={hero.then.alt} />
      <span className="gr-split-arrow" aria-hidden="true"><ArrowRight strokeWidth={2.5} /></span>
      <Img id={hero.today.image} alt={hero.today.alt} />
    </div>
    <div className="gr-cells">
      {[{ side: "then", cells: hero.thenCells }, { side: "today", cells: hero.todayCells }].map(({ side, cells }) =>
        <ul key={side} className={`gr-cell-row is-${side}`}>
          {cells.map((cell) => {
            const Icon = cellIcons[cell.icon];
            return <li key={cell.label}>
              <span className="gr-cell-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
              <strong>{cell.value}</strong>
              <span>{cell.label}</span>
              {"up" in cell && cell.up === true && <ArrowUp className="gr-cell-up" aria-label="increased" strokeWidth={2.5} />}
            </li>;
          })}
        </ul>)}
    </div>
  </section>;
}

const questionIcons: Record<string, LucideIcon> = { land: Grid2x2, housing: House, infrastructure: Construction, services: Store, travel: Car };

export function Density() {
  const s = density;
  return <section id="low-density-development" className="gr-section" aria-labelledby="gr-03">
    <div className="gr-crumb-band"><div className="gr-wrap"><Crumbs last={s.crumb} /></div></div>
    <div className="gr-wrap">
      <Kicker icon={BarChart3} kicker={s.kicker} />
      <h2 id="gr-03" className="gr-title">{s.title[0]}<br className="gr-break" /> {s.title[1]}</h2>
      <p className="gr-plan-label">{s.plan.label}</p>
      <p className="gr-plan-text">{s.plan.text}</p>
      <p className="gr-plan-source">{s.plan.source.before} <a href={planPage20} target="_blank" rel="noopener noreferrer">{s.plan.source.link}</a></p>
    </div>
    <div className="gr-panels">
      {s.panels.map((panel) => <div key={panel.id} className={`gr-panel is-${panel.id}`}>
        <div className="gr-panel-head">
          <div>
            <h3>{panel.title}</h3>
            <p>{panel.subtitle}</p>
          </div>
          <p className="gr-panel-badge">{panel.badge.small && <small>{panel.badge.small}</small>}{panel.badge.text}</p>
        </div>
        <Img id={panel.image} alt={panel.alt} className="gr-panel-image" />
        <div className="gr-panel-view">
          <p className="gr-panel-view-label">{panel.view}</p>
          <p><Rich parts={panel.opinion} /></p>
        </div>
      </div>)}
    </div>
    <div className="gr-wrap is-wide">
      <p className="gr-small">{s.qualification}</p>
      <h3 className="gr-questions-title">{s.questionsTitle}</h3>
      <ul className="gr-questions">
        {s.questions.map((q) => {
          const Icon = questionIcons[q.id];
          return <li key={q.id} className={`is-${q.id}`}>
            <span aria-hidden="true"><Icon strokeWidth={2} /></span>
            <div><h4>{q.title}</h4><p>{q.text}</p></div>
          </li>;
        })}
      </ul>
      <p className="gr-small is-ruled">{s.note}</p>
    </div>
  </section>;
}

const rowIcons: Record<string, LucideIcon> = {
  land: House, density: Map, commercial: Store, flex: TrendingDown, framework: MapPin, tools: FileText, services: Users, growth: Settings,
};

function CompareColumn({ side, data }: { side: "community" | "county"; data: typeof comparison.community }) {
  const HeadIcon = side === "community" ? House : Building2;
  return <div className={`gr-compare is-${side}`}>
    <div className="gr-compare-head">
      <span aria-hidden="true"><HeadIcon strokeWidth={2} /></span>
      <div>
        <h3>{data.title[0]}<br />{data.title[1]}</h3>
        <p>{data.subtitle}</p>
      </div>
    </div>
    <ul>
      {data.rows.map((row) => {
        const Icon = rowIcons[row.id];
        return <li key={row.id}>
          <span className="gr-compare-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
          <div><h4>{row.title}</h4><p><Rich parts={row.text} /></p></div>
        </li>;
      })}
    </ul>
  </div>;
}

export function PlanComparison() {
  const s = comparison;
  return <section id="plan-comparison" className="gr-section" aria-labelledby="gr-07">
    <div className="gr-crumb-band"><div className="gr-wrap"><Crumbs last={s.crumb} /></div></div>
    <div className="gr-wrap">
      <Kicker icon={Scale} kicker={s.kicker} />
      <h2 id="gr-07" className="gr-title">{s.title}</h2>
      <p className="gr-intro">{s.intro}</p>
      <div className="gr-compare-grid">
        <CompareColumn side="community" data={s.community} />
        <CompareColumn side="county" data={s.county} />
      </div>
    </div>
    <div className="gr-wrap is-wide">
      <div className="gr-detail">
        <span className="gr-detail-icon" aria-hidden="true"><FileText strokeWidth={2} /></span>
        <div>
          <h3>{s.detail.title}</h3>
          <p>{s.detail.text}</p>
        </div>
        <Link href={s.detail.cta.href} className="gr-detail-button">{s.detail.cta.label}</Link>
      </div>
    </div>
  </section>;
}

const evidenceIcons: Record<string, LucideIcon> = { plan: FileText, landuse: Map, housing: House, service: ShoppingCart, travel: Car, infrastructure: Settings };

export function GrowthEvidence() {
  const s = evidence;
  return <section id="growth-evidence" className="gr-section gr-evidence" aria-labelledby="gr-09">
    <div className="gr-crumb-band"><div className="gr-wrap"><Crumbs last={s.crumb} /></div></div>
    <div className="gr-wrap">
      <Kicker icon={FileText} kicker={s.kicker} />
      <h2 id="gr-09" className="gr-title">{s.title}</h2>
      <p className="gr-intro">{s.intro}</p>
    </div>
    <ul className="gr-cards">
      {s.cards.map((card) => {
        const Icon = evidenceIcons[card.id];
        return <li key={card.id} className={`gr-card is-${card.id}`}>
          <div className="gr-card-body">
            <div className="gr-card-head">
              <span aria-hidden="true"><Icon strokeWidth={2} /></span>
              <div><h3>{card.title}</h3><p>{card.text}</p></div>
            </div>
            <NoticeLink className="gr-card-action"><span aria-hidden="true"><ArrowRight strokeWidth={2.5} /></span>{card.action}</NoticeLink>
          </div>
          <Img id={card.image} className="gr-card-image" />
        </li>;
      })}
    </ul>
    <div className="gr-next">
      <div className="gr-next-copy">
        <p className="gr-next-kicker"><span>{next.kicker.number}</span> — {next.kicker.text}</p>
        <h2 className="gr-title is-next">{next.title}</h2>
        <p>{next.text}</p>
        <Link href={next.cta.href} className="gr-next-button">{next.cta.label}</Link>
      </div>
      <Img id={next.image} className="gr-next-image" />
    </div>
  </section>;
}
