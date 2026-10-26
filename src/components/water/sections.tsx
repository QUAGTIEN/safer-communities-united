import Link from "next/link";
import {
  ArrowRight, Building2, Check, Construction, Database, Droplet, FileText, Map, Sprout, Settings, Waves, Wrench, X, BookOpen,
  type LucideIcon,
} from "lucide-react";
import { comparison, concentration, conflict, connected, crumbs, evidence, hero, issuesMenu, label, links, next, options, repairs, waterMenu } from "@/content/water";
import { asset, type AssetId } from "@/lib/assets";
import { NoticeLink } from "@/components/issues/notice-link";

// Water & Septic sections — approved later-page images W6, W3, R2, W1, W2, W4, W5, W7 (desktop only).
// Tablet/phone layouts are proposals (TXT:27). UI icons are vectors; photos, maps and artwork are image files.

const menuIcons: Record<string, LucideIcon> = { database: Database, wrench: Wrench, waves: Waves, droplet: Droplet, sprout: Sprout, cog: Settings, road: Construction, building: Building2, file: FileText };

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Crumbs({ last }: { last?: string }) {
  return <p className="ws-crumbs">
    <Link href="/issues">{crumbs.issues}</Link><span aria-hidden="true">›</span>
    {last ? <><Link href="/issues/water-septic">{crumbs.water}</Link><span aria-hidden="true">›</span><span>{last}</span></> : <span>{crumbs.water}</span>}
  </p>;
}

function Kicker({ icon: Icon, tone, text, id }: { icon: LucideIcon; tone: string; text: string; id?: string }) {
  return <div className="ws-kicker">
    <span className={`ws-kicker-icon is-${tone}`} aria-hidden="true"><Icon strokeWidth={2} /></span>
    <p><span className="ws-kicker-label">{label}</span><span id={id} className="ws-kicker-text">{text}</span></p>
  </div>;
}

function WaterMenu({ current }: { current: string }) {
  return <nav className="ws-menu" aria-label="Water & Septic topics">
    <ul>
      {waterMenu.map((item) => {
        const Icon = menuIcons[item.icon];
        const inner = <>
          <span className={`ws-menu-icon is-${item.icon}`} aria-hidden="true"><Icon strokeWidth={2} /></span>
          <span className="ws-menu-text"><span className="ws-menu-number">{item.number}</span><span>{item.label}</span></span>
          <ArrowRight className="ws-menu-arrow" aria-hidden="true" strokeWidth={2} />
        </>;
        const cls = `ws-menu-link${item.target === current ? " is-current" : ""}`;
        return <li key={item.number}>
          {item.target
            ? <a href={`#${item.target}`} className={cls} aria-current={item.target === current ? "location" : undefined}>{inner}</a>
            : <NoticeLink className={cls}>{inner}</NoticeLink>}
        </li>;
      })}
    </ul>
  </nav>;
}

export function WaterHero() {
  return <section className="ws-section ws-hero" aria-labelledby="ws-hero-title">
    <div className="ws-hero-grid">
      <div className="ws-hero-copy">
        <Crumbs />
        <div className="ws-kicker is-hero">
          <span className="ws-kicker-icon is-teal" aria-hidden="true"><Droplet strokeWidth={2} /></span>
          <p className="ws-hero-label">{label}</p>
        </div>
        <h1 id="ws-hero-title" className="ws-hero-title">{hero.title}</h1>
        <p className="ws-hero-intro">{hero.intro}</p>
        <a href="#septic-concentration" className="ws-button">{hero.cta}</a>
      </div>
      <figure className="ws-hero-figure">
        <Img id={hero.photo} alt={hero.photoAlt} />
        <figcaption>{hero.caption}</figcaption>
      </figure>
    </div>
    <div className="ws-wrap">
      <ol className="ws-steps">
        {hero.steps.map((step, i) => <li key={step.title}>
          {i > 0 && <ArrowRight className="ws-steps-arrow" aria-hidden="true" strokeWidth={2.5} />}
          <Img id={step.image} className="ws-step-circle" />
          <div>
            <h2 className="ws-step-title">{step.title}</h2>
            <p>{step.text}</p>
          </div>
        </li>)}
      </ol>
      <p className="ws-hero-message">{hero.message}</p>
      <nav className="ws-menu is-issues" aria-label="Issues">
        <ul>
          {issuesMenu.map((item) => {
            const Icon = menuIcons[item.icon];
            const current = item.href === "/issues/water-septic";
            return <li key={item.number}>
              <Link href={item.href} className={`ws-menu-link${current ? " is-current" : ""}`} aria-current={current ? "page" : undefined}>
                <span className={`ws-menu-icon is-issue-${item.number}`} aria-hidden="true"><Icon strokeWidth={2} /></span>
                <span className="ws-menu-text is-serif"><span className="ws-menu-number">{item.number}</span><span>{item.label}</span></span>
                <ArrowRight className="ws-menu-arrow" aria-hidden="true" strokeWidth={2} />
              </Link>
            </li>;
          })}
        </ul>
      </nav>
    </div>
  </section>;
}

export function Concentration() {
  const s = concentration;
  return <section id="septic-concentration" className="ws-section" aria-labelledby="ws-01">
    <div className="ws-wrap">
      <div className="ws-two">
        <div>
          <Crumbs last={s.crumb} />
          <Kicker icon={Database} tone="teal" text={s.kicker} />
          <h2 id="ws-01" className="ws-title">{s.title}</h2>
          <p className="ws-intro">{s.intro}</p>
          <div className="ws-stat-card">
            <div className="ws-stat-main">
              <p className="ws-stat-total">{s.total.value}</p>
              <p>{s.total.label}</p>
            </div>
            <ul className="ws-stat-groups">
              {s.groups.map((g) => <li key={g.id} className={`is-${g.id}`}><strong>{g.value}</strong><span>{g.label}</span></li>)}
            </ul>
            <p className="ws-stat-summary">{s.summary.before} <strong>{s.summary.value}</strong> {s.summary.after}</p>
          </div>
        </div>
        <Img id={s.map} alt={s.mapAlt} className="ws-map" />
      </div>
      <p className="ws-message">{s.message}</p>
      <WaterMenu current="septic-concentration" />
    </div>
  </section>;
}

export function Repairs() {
  const s = repairs;
  return <section id="septic-repairs" className="ws-section" aria-labelledby="ws-02">
    <div className="ws-wrap">
      <div className="ws-two is-repairs">
        <div>
          <Crumbs last={s.crumb} />
          <Kicker icon={Wrench} tone="red" text={s.kicker} />
          <h2 id="ws-02" className="ws-title is-wide">{s.title}</h2>
          <p className="ws-intro is-small">{s.intro}</p>
          <dl className="ws-repair-stats">
            {s.stats.map((st) => <div key={st.id} className={`is-${st.id}`}><dd>{st.value}</dd><dt>{st.label}</dt></div>)}
          </dl>
        </div>
        <Img id={s.map} alt={s.mapAlt} className="ws-map is-small" />
      </div>
      <p className="ws-message is-red">{s.message}</p>
      <WaterMenu current="septic-repairs" />
    </div>
  </section>;
}

export function Connected() {
  const s = connected;
  return <section id="connected-system" className="ws-section ws-connected" aria-labelledby="ws-03">
    <div className="ws-wrap ws-two is-connected">
      <div>
        <Crumbs last={s.crumb} />
        <Kicker icon={Waves} tone="teal" text={s.kicker} />
        <h2 id="ws-03" className="ws-display">{s.title}</h2>
        <p className="ws-intro is-small">{s.intro}</p>
      </div>
      <div>
        <Img id={s.block} alt={s.blockAlt} className="ws-block" />
        <p className="ws-banner">{s.banner}</p>
      </div>
    </div>
    <figure className="ws-cross">
      <Img id={s.section} alt={s.sectionAlt} />
      <figcaption>{s.disclaimer}</figcaption>
    </figure>
    <div className="ws-wrap">
      <h3 className="ws-display is-medium">{s.question[0]}<br className="ws-break" /> {s.question[1]}</h3>
      <p className="ws-intro is-small">{s.text}</p>
      <div className="ws-callout">
        <span className="ws-callout-icon" aria-hidden="true"><Sprout strokeWidth={2} /></span>
        <div>
          <h3>{s.callout.title}</h3>
          <p>{s.callout.text}</p>
        </div>
      </div>
      <p className="ws-source">{s.source.label}<br /><Ext href={links.epa}>{s.source.link}</Ext></p>
      <WaterMenu current="connected-system" />
    </div>
  </section>;
}

export function Options() {
  const s = options;
  const stepIcons: (LucideIcon | null)[] = [null, FileText, X, null];
  return <section id="water-wastewater-options" className="ws-section ws-options" aria-labelledby="ws-06">
    <div className="ws-options-grid">
      <div className="ws-options-copy">
        <div className="ws-options-text">
          <Crumbs last={s.crumb} />
          <Kicker icon={Settings} tone="gray" text={s.kicker} />
          <h2 id="ws-06" className="ws-display is-large">{s.title.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</h2>
          <p className="ws-intro is-small">{s.intro}</p>
        </div>
        <Img id={s.photo} alt={s.photoAlt} className="ws-options-photo" />
      </div>
      <ol className="ws-flow">
        {s.steps.map((step, i) => {
          const Icon = stepIcons[i];
          return <li key={step.number} className={`ws-flow-step is-${step.number}`}>
            <span className="ws-flow-number" aria-hidden="true">{step.number}</span>
            {i === 0
              ? <div className="ws-flow-body is-first">
                <h3>{step.title}</h3>
                <div className="ws-flow-circles">{s.circles.map((c) => <Img key={c} id={c} />)}</div>
                <p>{step.text}</p>
              </div>
              : <>
                <span className="ws-flow-icon" aria-hidden="true">{Icon ? <Icon strokeWidth={2} /> : "!"}</span>
                <div className="ws-flow-body"><h3>{step.title}</h3><p>{step.text}</p></div>
              </>}
          </li>;
        })}
      </ol>
    </div>
    <div className="ws-door">
      <div className="ws-wrap">
        <h3 className="ws-display is-medium">{s.door.title}</h3>
        <p>{s.door.text}</p>
        <div className="ws-door-row">
          <Link href={s.door.cta.href} className="ws-button">{s.door.cta.label}</Link>
          <p className="ws-door-note">{s.door.note}</p>
          <div className="ws-door-exclusions">
            <Ext href={s.door.exclusions.href} className="ws-button">{s.door.exclusions.label}</Ext>
            <span>{s.door.exclusions.note}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="ws-wrap">
      <div className="ws-policy">
        <h3 className="ws-display is-small">{s.policy.title}</h3>
        <p className="ws-policy-text">{s.policy.text}</p>
        <p className="ws-policy-source">{s.policy.source}</p>
        <Ext href={s.policy.link.href} className="ws-policy-link">{s.policy.link.label}</Ext>
      </div>
      <WaterMenu current="water-wastewater-options" />
    </div>
  </section>;
}

export function Conflict() {
  const s = conflict;
  return <section id="left-out" className="ws-section ws-conflict" aria-labelledby="ws-conflict">
    <h2 id="ws-conflict" className="ws-conflict-title">{s.title}</h2>
    <Img id={s.strip} className="ws-conflict-strip" />
    <div className="ws-wrap is-wide">
      <p className="ws-conflict-intro">{s.intro[0]}<br className="ws-break" /> {s.intro[1]}</p>
      <div className="ws-conflict-cards">
        {s.cards.map((card) => <div key={card.id} className="ws-conflict-card">
          <div className="ws-conflict-head">
            <Img id={card.icon} className="ws-conflict-icon" />
            <h3>{card.title[0]}<br />{card.title[1]}</h3>
          </div>
          <p>{card.text.map((line, i) => <span key={line}>{i > 0 && <br className="ws-break" />}{i > 0 && " "}{line}</span>)}</p>
          {card.link.href
            ? <Ext href={card.link.href} className="ws-conflict-link">{card.link.label}</Ext>
            : <NoticeLink className="ws-conflict-link">{card.link.label}</NoticeLink>}
        </div>)}
      </div>
      <div className="ws-conflict-closing">
        <Img id={s.closing.icon} className="ws-conflict-drop" />
        <p>{s.closing.title[0]}<br />{s.closing.title[1]}</p>
      </div>
      <p className="ws-conflict-sources">{s.sources}</p>
    </div>
  </section>;
}

function CompareColumn({ side, data }: { side: "community" | "county"; data: typeof comparison.community }) {
  return     <div className={`ws-compare is-${side}`}>
      <div className="ws-compare-head">
        <span aria-hidden="true"><FileText strokeWidth={1.75} /></span>
        <h3>{data.title[0]}<br />{data.title[1]}</h3>
        <Img id={data.photo} className="ws-compare-photo" />
      </div>
      <ul>
        {data.rows.map((row) => <li key={row}>
          <span className="ws-compare-mark" aria-hidden="true">{side === "community" ? <X strokeWidth={3} /> : <Check strokeWidth={3} />}</span>
          <p>{row}</p>
        </li>)}
      </ul>
    </div>;
}

export function Comparison() {
  const s = comparison;
  return <section id="community-plan-vs-county" className="ws-section" aria-labelledby="ws-08">
    <div className="ws-wrap">
      <Crumbs last={s.crumb} />
      <Kicker icon={Settings} tone="gray" text={s.kicker} />
      <h2 id="ws-08" className="ws-title is-wide">{s.title}</h2>
      <p className="ws-intro is-small is-measure">{s.intro}</p>
      <div className="ws-compare-grid">
        <CompareColumn side="community" data={s.community} />
        <CompareColumn side="county" data={s.county} />
      </div>
      <Link href={s.cta.href} className="ws-compare-cta">
        <span aria-hidden="true"><FileText strokeWidth={1.75} /></span>{s.cta.label}
      </Link>
      <WaterMenu current="" />
    </div>
  </section>;
}

const evidenceIcons: Record<string, LucideIcon> = { septic: Database, repair: Wrench, maps: Map, records: FileText, policies: BookOpen };

export function Evidence() {
  const s = evidence;
  return <section id="water-evidence" className="ws-section ws-evidence" aria-labelledby="ws-09">
    <div className="ws-wrap">
      <Kicker icon={Settings} tone="gray" text={s.kicker} />
      <div className="ws-evidence-head">
        <h2 id="ws-09" className="ws-title">{s.title}</h2>
        <p>{s.intro}</p>
      </div>
    </div>
    <ul className="ws-evidence-cards">
      {s.cards.map((card) => {
        const Icon = evidenceIcons[card.id];
        return <li key={card.id} className={`ws-evidence-card is-${card.id}`}>
          <Img id={card.image} className="ws-evidence-photo" />
          <div className="ws-evidence-title">
            <span aria-hidden="true"><Icon strokeWidth={2} /></span>
            <div><h3>{card.title}</h3><p>{card.subtitle}</p></div>
          </div>
          <dl>
            <div className="is-finding"><dt>{s.labels.finding}</dt><dd>{card.finding}</dd></div>
            <div className="is-meta"><dt>{s.labels.source}</dt><dd>{card.source}</dd></div>
            <div><dt>{s.labels.date}</dt><dd>{card.date}</dd></div>
          </dl>
          <NoticeLink className="ws-evidence-action"><FileText aria-hidden="true" strokeWidth={1.75} />{s.labels.action}</NoticeLink>
        </li>;
      })}
    </ul>
    <div className="ws-next">
      <div className="ws-next-copy">
        <div className="ws-kicker">
          <span className="ws-kicker-icon is-gray" aria-hidden="true"><Settings strokeWidth={2} /></span>
          <p><span className="ws-kicker-label">{next.eyebrow}</span><span className="ws-kicker-text">{next.kicker}</span></p>
        </div>
        <h2 className="ws-title is-small">{next.title}</h2>
        <p className="ws-intro is-small">{next.text}</p>
        <Link href={next.cta.href} className="ws-button">{next.cta.label}</Link>
      </div>
      <Img id={next.photo} className="ws-next-photo" />
    </div>
  </section>;
}
