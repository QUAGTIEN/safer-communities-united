import Link from "next/link";
import {
  Activity, Ambulance, ArrowRight, BriefcaseBusiness, Building2, CalendarDays, Car, Construction, Droplet, FileText, Heart, HeartHandshake,
  HeartPulse, House, Leaf, Lightbulb, MapPin, Plus, Route, Settings, Shield, ShieldCheck, Store, Users, Waves, Wrench, type LucideIcon,
} from "lucide-react";
import { connected, growth, opening, plan, roads, water } from "@/content/issues";
import { asset, type AssetId } from "@/lib/assets";
import { NoticeLink } from "./notice-link";

// Issues page sections — references p028–p043 (1536), p095–p130 (768/390).
// Topic icons are redrawn as vectors (ASSET_REGISTER §1b: UI icons are not extracted).

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

function Cta({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return <Link href={href} className={`iss-button ${className}`}>{label}</Link>;
}

export function IssuesOpening() {
  return (
    <section className="iss-opening" aria-labelledby="issues-title">
      <div className="iss-wrap">
        <p className="iss-eyebrow is-plain">{opening.eyebrow}</p>
        <h1 id="issues-title" className="iss-opening-title">{opening.title}</h1>
        <p className="iss-opening-intro">{opening.intro}</p>
      </div>
    </section>
  );
}

const roadIcons: Record<(typeof roads.topics)[number]["id"], LucideIcon> = {
  gunn: Route, lighting: Lightbulb, traffic: Plus, walking: Users, emergency: Ambulance,
};

export function IssuesRoads() {
  return (
    <section id="roads-safety" className="iss-section iss-roads" aria-labelledby="roads-title">
      <div className="iss-wrap iss-roads-grid">
        <div className="iss-roads-main">
          <p className="iss-eyebrow is-red">{roads.eyebrow}</p>
          <h2 id="roads-title" className="iss-roads-title">{roads.title}</h2>
          <figure className="iss-roads-figure">
            <Img id={roads.image} alt="Gunn Highway in Keystone, a two-lane road through trees" />
            <figcaption className="iss-credit">
              {roads.credit.text} <NoticeLink className="iss-credit-link">{roads.credit.link}</NoticeLink>
            </figcaption>
          </figure>
          <p className="iss-roads-intro">{roads.intro}</p>
        </div>
        <div className="iss-roads-side">
          <ul className="iss-topics">
            {roads.topics.map((topic) => {
              const Icon = roadIcons[topic.id];
              return <li key={topic.id} className={`iss-topic is-${topic.id}`}>
                <span className="iss-topic-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
                <div>
                  <h3 className="iss-topic-title">{topic.title}</h3>
                  <p className="iss-topic-text">{topic.text}</p>
                </div>
              </li>;
            })}
          </ul>
          <Cta href={roads.cta.href} label={roads.cta.label} className="iss-roads-cta" />
        </div>
      </div>
    </section>
  );
}

const statIcons: Record<(typeof water.stats)[number]["id"], LucideIcon> = { records: FileText, classified: House, repairs: Wrench };

export function IssuesWater() {
  return (
    <section id="water-septic" className="iss-section iss-water" aria-labelledby="water-title">
      <div className="iss-wrap">
        <p className="iss-eyebrow">{water.eyebrow}</p>
        <h2 id="water-title" className="iss-display iss-water-title">{water.title}</h2>
        <p className="iss-lead iss-water-intro">{water.intro}</p>
        <dl className="iss-stats">
          {water.stats.map((stat) => {
            const Icon = statIcons[stat.id];
            return <div key={stat.id} className={`iss-stat is-${stat.id}`}>
              <span className="iss-stat-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
              <div>
                <dd className="iss-stat-value">{stat.value}</dd>
                <dt className="iss-stat-label">{stat.label}</dt>
                <dd className="iss-stat-note">{stat.note}</dd>
              </div>
            </div>;
          })}
        </dl>
        <div className="iss-water-grid">
          <Img id={water.map} alt={water.mapAlt} className="iss-water-map" />
          <div>
            <h3 className="iss-water-issues-title">{water.issuesTitle}</h3>
            <ul className="iss-thumbs">
              {water.issues.map((item) => <li key={item.label}>
                <Img id={item.image} />
                <span>{item.label}</span>
              </li>)}
            </ul>
          </div>
        </div>
        <div className="iss-water-closing">
          <div>
            <h3 className="iss-display iss-water-closing-title">{water.closing[0]}<br />{water.closing[1]}</h3>
            <p className="iss-water-closing-text">{water.closingText}</p>
          </div>
          <Cta href={water.cta.href} label={water.cta.label} />
        </div>
      </div>
    </section>
  );
}

export function IssuesGrowth() {
  return (
    <section id="growth-daily-life" className="iss-section iss-growth" aria-labelledby="growth-title">
      <div className="iss-wrap">
        <p className="iss-eyebrow">{growth.eyebrow}</p>
        <h2 id="growth-title" className="iss-display iss-growth-title">{growth.title}</h2>
        <p className="iss-growth-intro">{growth.intro}</p>
        <div className="iss-growth-grid">
          <figure className="iss-growth-figure">
            <Img id={growth.map} alt={growth.mapAlt} />
            <figcaption>
              <strong>{growth.caption.title}</strong>
              <span>{growth.caption.text}</span>
            </figcaption>
          </figure>
          <ol className="iss-points">
            {growth.points.map((point) => <li key={point.number} className="iss-point">
              <span className="iss-point-number" aria-hidden="true">{point.number}</span>
              <div className="iss-point-body">
                <h3 className="iss-display iss-point-title">{point.title}</h3>
                <p className="iss-point-text">{point.text}</p>
              </div>
            </li>)}
          </ol>
        </div>
        <div className="iss-growth-closing">
          <p>{growth.closing}</p>
          <Cta href={growth.cta.href} label={growth.cta.label} className="iss-growth-cta" />
        </div>
      </div>
    </section>
  );
}

const areaIcons: Record<(typeof plan.areas)[number]["id"], LucideIcon> = { roads: Car, water: Droplet, growth: House, infrastructure: Building2 };

export function IssuesPlan() {
  return (
    <section id="community-plan" className="iss-section iss-plan" aria-labelledby="plan-title">
      <div className="iss-wrap">
        <p className="iss-eyebrow is-strong">{plan.eyebrow}</p>
        <h2 id="plan-title" className="iss-plan-title">
          {plan.title.lead}<br className="iss-desktop-break" /> {plan.title.place} <em>{plan.title.emphasis}</em>
        </h2>
        <p className="iss-plan-intro">{plan.intro[0]}<br className="iss-desktop-break" /> {plan.intro[1]}</p>
      </div>
      <div className="iss-plan-wide">
        <div className="iss-plan-grid">
          <Img id={plan.map} alt={plan.mapAlt} className="iss-plan-map" />
          <ol className="iss-timeline">
            {plan.timeline.map((step, index) => <li key={step.id} className={`iss-step is-${step.id}`}>
              {index > 0 && <span className="iss-step-arrow" aria-hidden="true"><ArrowRight strokeWidth={2.5} /></span>}
              <div className="iss-step-head">
                <span className="iss-step-icon" aria-hidden="true"><CalendarDays strokeWidth={2} /></span>
                <span className="iss-step-year">{step.year}</span>
              </div>
              <div className="iss-step-body">
                <h3 className="iss-step-title">{step.title}</h3>
                <p className="iss-step-text">{step.text}</p>
              </div>
              <Img id={step.image} className="iss-step-photo" />
            </li>)}
          </ol>
        </div>
        <h3 className="iss-areas-title">{plan.areasTitle}</h3>
        <div className="iss-areas-row">
          <ul className="iss-areas">
            {plan.areas.map((area) => {
              const Icon = areaIcons[area.id];
              return <li key={area.id} className={`iss-area is-${area.id}`}>
                <div className="iss-area-head">
                  <span className="iss-area-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
                  <h4 className="iss-area-title">{area.title}</h4>
                </div>
                <p className="iss-area-text">{area.text}</p>
                <Img id={area.image} className="iss-area-photo" />
              </li>;
            })}
          </ul>
          <Cta href={plan.cta.href} label={plan.cta.label} className="iss-plan-cta" />
        </div>
      </div>
    </section>
  );
}

const ruleIcons: Record<string, LucideIcon> = {
  Traffic: Car, Lighting: Lightbulb, "Ability to Improve Roads": Construction, Safety: ShieldCheck, Mobility: Car, "Emergency Access": Ambulance,
  Septic: BriefcaseBusiness, Wells: Building2, Groundwater: Waves, Wellfield: Droplet, Health: HeartPulse, "Water Resources": Droplet, Environment: Leaf,
  Housing: House, Infrastructure: Settings, "Service Locations": Store, "Travel Distance": MapPin, Access: Users, "Quality of Life": Users, Welfare: HeartHandshake,
};
const columnIcons: Record<(typeof connected.columns)[number]["id"], LucideIcon> = { roads: Car, water: Droplet, growth: House };
const priorityIcons: LucideIcon[] = [Heart, Shield, Leaf];

export function IssuesConnected() {
  return (
    <section className="iss-section iss-connected" aria-labelledby="connected-title">
      <div className="iss-wrap">
        <p className="iss-eyebrow is-plain">{connected.eyebrow}</p>
        <h2 id="connected-title" className="iss-connected-title">{connected.title[0]}<br className="iss-desktop-break" /> {connected.title[1]}</h2>
        <p className="iss-connected-intro">{connected.intro.map((line, i) => <span key={line}>{i > 0 && <br className="iss-desktop-break" />}{i > 0 && " "}{line}</span>)}</p>
      </div>
      <div className="iss-diagram">
        <Img id="issues-connected-side-left" className="iss-diagram-side is-left" />
        <Img id="issues-connected-side-right" className="iss-diagram-side is-right" />
        <div className="iss-wrap">
          <div className="iss-hub">
            <span className="iss-hub-icon" aria-hidden="true"><FileText strokeWidth={1.75} /></span>
            <p>{connected.hub}</p>
          </div>
          <div className="iss-hub-lines" aria-hidden="true">
            {connected.columns.map((column) => <span key={column.id}>{connected.arrow}</span>)}
          </div>
          <ul className="iss-columns">
            {connected.columns.map((column) => {
              const Icon = columnIcons[column.id];
              return <li key={column.id} className={`iss-column is-${column.id}`}>
                <Img id={column.image} className="iss-column-photo" />
                <div className="iss-column-head">
                  <span className="iss-column-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
                  <div>
                    <h3 className="iss-column-title">{column.title}</h3>
                    <p className="iss-column-subtitle">{column.subtitle}</p>
                  </div>
                </div>
                <div className="iss-column-body">
                  <h4 className="iss-column-question">{column.question}</h4>
                  <p className="iss-column-text">{column.text}</p>
                  <ul className="iss-chips">
                    {column.rules.map((rule) => <Chip key={rule} label={rule} />)}
                  </ul>
                </div>
                <span className="iss-column-arrow" aria-hidden="true">{connected.arrow}</span>
                <ul className="iss-chips is-outcomes">
                  {column.outcomes.map((outcome) => <Chip key={outcome} label={outcome} />)}
                </ul>
              </li>;
            })}
          </ul>
          <span className="iss-priorities-arrow" aria-hidden="true">{connected.arrow}</span>
          <div className="iss-priorities">
            {connected.priorities.map((word, index) => {
              const Icon = priorityIcons[index];
              return <span key={word} className="iss-priority">
                <span className="iss-priority-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>{word}
              </span>;
            })}
            <span className="iss-priority is-label">{connected.prioritiesLabel}</span>
          </div>
          <p className="iss-connected-closing">{connected.closing.map((line, i) => <span key={line}>{i > 0 && <br className="iss-desktop-break" />}{i > 0 && " "}{line}</span>)}</p>
        </div>
      </div>
    </section>
  );
}

function Chip({ label }: { label: string }) {
  const Icon = ruleIcons[label] ?? Activity;
  return <li className="iss-chip">
    <span className="iss-chip-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
    <span>{label}</span>
  </li>;
}
