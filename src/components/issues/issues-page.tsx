import Image from "next/image";
import Link from "next/link";
import { Ambulance, ArrowDown, ArrowRight, Building2, CalendarDays, CarFront, Cylinder, Droplets, FileText, Footprints, Heart, HeartPulse, House, Landmark, Leaf, Lightbulb, MapPin, Route, Settings, ShieldCheck, Signpost, Users, Waves } from "lucide-react";
import { issues } from "@/content/issues";
import { getDemoPhoto, screenshotVisualAssets } from "@/content/assets";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SourceLink } from "@/components/content/source-link";
import { DemoPreview } from "@/components/demo/demo-preview";

const icons = { roads: CarFront, water: Droplets, growth: House, plan: FileText, services: Building2,
  road: Route, light: Lightbulb, traffic: Signpost, walking: Footprints, emergency: Ambulance };
const termIcons = {
  Traffic: CarFront, Lighting: Lightbulb, "Ability to Improve Roads": Route,
  Safety: ShieldCheck, Mobility: CarFront, "Emergency Access": Ambulance,
  Septic: Cylinder, Wells: Landmark, Groundwater: Waves, Wellfield: Droplets,
  Health: HeartPulse, "Water Resources": Droplets, Environment: Leaf,
  Housing: House, Infrastructure: Settings, "Service Locations": Building2, "Travel Distance": MapPin,
  Access: Footprints, "Quality of Life": Users, Welfare: Heart,
};

function DiagramTerms({ text, outcomes = false }: { text: string; outcomes?: boolean }) {
  return <ul className={`issues-diagram-terms ${outcomes ? "issues-diagram-outcomes" : "issues-diagram-topics"}${text.split(" · ").length === 4 ? " issues-four-terms" : ""}`}>
    {text.split(" · ").map((term, index) => {
      const Icon = termIcons[term as keyof typeof termIcons];
      return <li key={term}>{index > 0 && <span className="sr-only"> · </span>}
        <Icon aria-hidden="true" /><span>{term}</span>
      </li>;
    })}
  </ul>;
}

function IssuePhoto({ slot, alt = "", eager = false }: { slot: string; alt?: string; eager?: boolean }) {
  const photo = getDemoPhoto(slot);
  if (!photo.publicPath || !photo.width || !photo.height) throw new Error(`Missing Issues photo: ${slot}`);
  return <Image src={photo.publicPath} width={photo.width} height={photo.height} alt={alt}
    unoptimized loading={eager ? "eager" : "lazy"} className="issues-photo"
    style={{ maxWidth: photo.width }} data-photo-slot={slot} />;
}

function IssueMap({ id, alt, schematic = false }: { id: string; alt: string; schematic?: boolean }) {
  const visual = screenshotVisualAssets.find((item) => item.id === id);
  if (!visual) throw new Error(`Missing Issues illustration: ${id}`);
  return <figure className="issues-map" data-visual-id={id}>
    <Image src={visual.publicPath} width={visual.width} height={visual.height} alt={alt}
      unoptimized className="issues-map-image" style={{ maxWidth: visual.width }} />
    <figcaption>
      <strong>Illustration</strong>
      {schematic && <p>Schematic service pins, not verified locations.</p>}
      <a href={visual.publicPath} target="_blank" rel="noopener noreferrer" className="issues-source-link">
        View full-size illustration<ArrowRight className="size-4" aria-hidden="true" />
        <span className="sr-only"> — {alt} (opens in a new tab)</span>
      </a>
    </figcaption>
  </figure>;
}

function IssueCTA({ href, children }: { href: string; children: string }) {
  return <Button asChild className="issues-cta"><Link href={href}>{children.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></Link></Button>;
}

function IssuesIntro() {
  return <section className="issues-intro" data-blueprint-section="I-01" aria-labelledby="issues-title">
    <Container>
      <p className="eyebrow text-coral">ISSUES</p>
      <h1 id="issues-title">Issues affecting <span className="text-teal">Keystone–Odessa.</span></h1>
      <p className="issues-lead">{issues.intro.text}</p>
      <nav className="issues-jump-nav" aria-label="Issue groups">
        {issues.navigation.map((item) => { const Icon = icons[item.icon]; return <a key={item.id} href={`#${item.id}`}>
          <span className="issues-icon" aria-hidden="true"><Icon /></span><span>{item.label}</span><ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </a>; })}
      </nav>
    </Container>
  </section>;
}

function RoadsOverview() {
  return <section id="roads-safety" className="issues-section issues-roads" data-blueprint-section="I-02" aria-labelledby="roads-title">
    <Container className="issues-road-grid">
      <div>
        <p className="eyebrow text-coral">ROADS &amp; SAFETY</p>
        <h2 id="roads-title" className="issues-heading">{issues.roads.title}</h2>
        <IssuePhoto slot={issues.roads.photo} alt="Illustrative road scene from the selected blueprint: traffic, a cyclist and a crossing sign." eager />
        <p className="issues-road-closing">{issues.roads.closing}</p>
      </div>
      <div className="issues-road-details">
        <ul className="issues-road-topics">{issues.roads.topics.map((topic) => { const Icon = icons[topic.icon]; return <li key={topic.title}>
          <span className="issues-icon" aria-hidden="true"><Icon /></span>
          <div><h3>{topic.title}</h3><p>{topic.text}</p></div>
        </li>; })}</ul>
        <SourceLink sourceId="SRC-10" className="issues-source-link">Read the Community Plan</SourceLink>
        <IssueCTA href="/issues/roads-safety">{issues.roads.cta}</IssueCTA>
      </div>
    </Container>
  </section>;
}

function WaterOverview() {
  return <section id="water-septic" className="issues-section" data-blueprint-section="I-03" aria-labelledby="water-title">
    <Container>
      <p className="eyebrow text-coral">WATER &amp; SEPTIC</p>
      <h2 id="water-title" className="issues-heading issues-wide-heading">{issues.water.title}</h2>
      <p className="issues-lead">{issues.water.text}</p>
      <div className="issues-water-grid">
        <div>
          <IssueMap id="I03-map" alt="Blueprint water illustration showing the Community Plan area, septic categories, private wells, lakes, wetlands, wellfield protection areas and complete legend." />
        </div>
        <div aria-describedby="issues-water-scope">
          <dl className="issues-data-grid">{issues.water.data.map((data) => <div key={data.value}>
            <dt>{data.label}</dt><dd>{data.value}</dd>
          </div>)}</dl>
          <h3 className="issues-utility-heading">KEY WATER &amp; SEPTIC ISSUES</h3>
          <ul className="issues-water-topics">{issues.water.topics.map((topic) => <li key={topic.title}>
            <IssuePhoto slot={topic.photo} /><h4>{topic.title}</h4>
          </li>)}</ul>
        </div>
      </div>
      <p id="issues-water-scope" className="issues-scope">{issues.water.scope}</p>
      <div className="issues-source-row">
        <SourceLink sourceId="SRC-16" className="issues-source-link">Read the County policy and full criteria</SourceLink>
        <SourceLink sourceId="SRC-17" className="issues-source-link">Source: EPA — Septic Systems and Drinking Water</SourceLink>
      </div>
      <div className="issues-closing">
        <h3>{issues.water.closing}</h3><p>{issues.water.petition}</p>
        <IssueCTA href="/issues/water-septic">{issues.water.cta}</IssueCTA>
      </div>
    </Container>
  </section>;
}

function EverydayOverview() {
  return <section id="everyday-needs" className="issues-section issues-everyday" data-blueprint-section="I-04" aria-labelledby="everyday-title">
    <Container>
      <p className="eyebrow text-coral">EVERYDAY NEEDS, GROWTH &amp; INFRASTRUCTURE</p>
      <h2 id="everyday-title" className="issues-heading issues-wide-heading">{issues.everyday.title}</h2>
      <p className="issues-lead">{issues.everyday.text}</p>
      <div className="issues-everyday-grid">
        <IssueMap id="I04-map" alt="Selected schematic services map with housing, healthcare, food, childcare, jobs and infrastructure pins; full boundary, legend and scale retained." schematic />
        <ol className="issues-messages">{issues.everyday.messages.map((message, index) => <li key={message.title}>
          <span className="issues-message-number" aria-hidden="true">0{index + 1}</span>
          <div><h3>{message.title}</h3><p>{message.text}</p></div>
        </li>)}</ol>
      </div>
      <div className="issues-closing issues-centered">
        <h3>{issues.everyday.closing}</h3><p>{issues.everyday.petition}</p>
        <IssueCTA href="/issues/growth-daily-life">{issues.everyday.cta}</IssueCTA>
      </div>
    </Container>
  </section>;
}

function PlanOverview() {
  return <section id="outdated-community-plan" className="issues-section" data-blueprint-section="I-05" aria-labelledby="plan-title">
    <Container>
      <p className="eyebrow text-coral">COMMUNITY PLAN</p>
      <h2 id="plan-title" className="issues-heading issues-wide-heading">{issues.plan.title}</h2>
      <p className="issues-lead">{issues.plan.text}{" "}{issues.plan.continuation}</p>
      <div className="issues-plan-grid">
        <IssueMap id="I05-map" alt="Community Plan boundary illustration preserved from the selected blueprint, including area label, roads, north arrow and scale." />
        <div>
          <ol className="issues-timeline" aria-label="Community Plan timeline">{issues.plan.timeline.map((event) => <li key={event.year}>
            <div className="issues-timeline-year"><CalendarDays className="size-5" aria-hidden="true" /><span>{event.year}</span></div>
            <div className="issues-timeline-copy"><h3>{event.label}</h3><p>{event.text}</p></div>
            <IssuePhoto slot={event.photo} />
          </li>)}</ol>
          <div className="issues-source-row">
            <SourceLink sourceId="SRC-21" className="issues-source-link">Read the September 23, 2026 agency response</SourceLink>
            <SourceLink sourceId="SRC-10" className="issues-source-link">Read the Community Plan</SourceLink>
          </div>
          <h3 className="issues-utility-heading">{issues.plan.areasTitle}</h3>
          <ul className="issues-policy-areas">{issues.plan.areas.map((area) => { const Icon = icons[area.icon]; return <li key={area.title}>
            <div className="issues-policy-copy"><Icon aria-hidden="true" className="size-5 text-teal" /><h4>{area.title}</h4><p>{area.text}</p></div>
            <IssuePhoto slot={area.photo} />
          </li>; })}</ul>
        </div>
      </div>
      <div className="issues-end-action"><IssueCTA href="/the-proposal#compare-the-two-plans">{issues.plan.cta}</IssueCTA></div>
    </Container>
  </section>;
}

function ConnectionsOverview() {
  return <section id="issues-connected" className="issues-section issues-connections" data-blueprint-section="I-06" aria-labelledby="connections-title">
    <Container>
      <p className="eyebrow text-coral">THE ISSUES ARE CONNECTED</p>
      <h2 id="connections-title" className="issues-heading issues-wide-heading">{issues.connections.title}</h2>
      <p className="issues-lead">{issues.connections.text}</p>
      <div className="issues-diagram" aria-label="Connections between policy topics and community priorities">
        <div className="issues-diagram-center"><FileText aria-hidden="true" /><p>{issues.connections.center}</p></div>
        <div className="issues-diagram-branches">{issues.connections.branches.map((branch) => { const Icon = icons[branch.icon]; return <article key={branch.title} className={`issues-branch issues-branch-${branch.icon}`}>
          <ArrowDown className="issues-branch-arrow" aria-hidden="true" />
          <IssuePhoto slot={branch.photo} />
          <div className="issues-branch-heading"><Icon aria-hidden="true" /><div><h3>{branch.title}</h3><p>{branch.subtitle}</p></div></div>
          <div className="issues-branch-copy"><h4>{branch.question}</h4><p>{branch.text}</p>
            <DiagramTerms text={branch.topics} />
            <ArrowDown aria-hidden="true" className="issues-flow-arrow" />
            <DiagramTerms text={branch.outcomes} outcomes />
            <DemoPreview title={`${branch.title} — supporting source pending verification`}>Source preview</DemoPreview>
          </div>
        </article>; })}</div>
        <ArrowDown className="issues-flow-arrow" aria-hidden="true" />
        <p className="issues-convergence">{issues.connections.convergence}</p>
      </div>
      <p className="issues-scope">{issues.connections.scope}</p>
      <div className="issues-petition-link"><Link href="/take-action#petition">{issues.connections.petition}<ArrowRight aria-hidden="true" className="size-5 shrink-0" /></Link></div>
    </Container>
  </section>;
}

export function IssuesPageContent() {
  return <div className="issues-page"><IssuesIntro /><RoadsOverview /><WaterOverview /><EverydayOverview /><PlanOverview /><ConnectionsOverview /></div>;
}
