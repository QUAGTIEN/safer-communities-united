import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ambulance, ArrowDown, ArrowRight, Bike, CarFront, ChevronRight, FileText, Footprints, Lightbulb, Map, Moon, Route, Scale, ShieldCheck, Signpost, TriangleAlert, Users } from "lucide-react";
import { roads } from "@/content/roads";
import { getDemoPhoto, illustrativeDocumentAssets, screenshotVisualAssets } from "@/content/assets";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { DemoPreview } from "@/components/demo/demo-preview";
import { SourceLink } from "@/components/content/source-link";

const navigationIcons = { lighting: Lightbulb, road: Route, walking: Footprints, emergency: Ambulance };
const evidenceIcons = { safety: TriangleAlert, traffic: CarFront, map: Map, records: FileText, plan: FileText };

function RoadImage({ id, kind = "photo", alt = "", eager = false }: {
  id: string; kind?: "photo" | "visual" | "document"; alt?: string; eager?: boolean;
}) {
  const asset = kind === "photo" ? getDemoPhoto(id) : kind === "visual"
    ? screenshotVisualAssets.find((item) => item.id === id)
    : illustrativeDocumentAssets.find((item) => item.id === id);
  if (!asset?.publicPath || !asset.width || !asset.height) throw new Error(`Missing Roads asset: ${id}`);
  return <Image src={asset.publicPath} width={asset.width} height={asset.height} alt={alt}
    unoptimized loading={eager ? "eager" : "lazy"} className="roads-image" style={{ maxWidth: asset.width }}
    data-road-asset={id} data-asset-kind={kind} />;
}

function RoadSource({ id, children }: { id: string; children: ReactNode }) {
  return <SourceLink sourceId={id} className="roads-source-link">{children}</SourceLink>;
}

function RoadCTA({ href, children, down = false }: { href: string; children: string; down?: boolean }) {
  return <Button asChild className="roads-cta"><Link href={href}>{children.replace(/ [→↓]$/, "")}
    {down ? <ArrowDown aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
  </Link></Button>;
}

function SafetyNavigation({ current }: { current?: string }) {
  return <nav className="roads-safety-nav" aria-label={current ? `Road issues after ${current}` : "Road safety issues"}>
    {roads.navigation.map((item, index) => { const Icon = navigationIcons[item.icon]; return <a key={item.id} href={`#${item.id}`}
      className={current === item.id ? "roads-current-issue" : undefined}>
      <span className="roads-nav-icon" aria-hidden="true"><Icon /></span>
      <span><span className="roads-nav-number">0{index + 1}</span>{item.label}</span>
      <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
    </a>; })}
  </nav>;
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="eyebrow roads-section-label"><span>{number}</span> — {children}</p>;
}

function InfoCard({ title, children, icon: Icon = FileText, tone = "navy" }: {
  title: string; children: ReactNode; icon?: typeof FileText; tone?: "navy" | "teal" | "coral";
}) {
  return <div className={`roads-info-card roads-tone-${tone}`}>
    <div className="roads-card-heading"><Icon aria-hidden="true" /><h3>{title}</h3></div>
    <div className="roads-card-content">{children}</div>
  </div>;
}

function DesignExcerpt({ children }: { children: string }) {
  return <div className="roads-design-excerpt"><p>{children}</p><span>Selected design excerpt — not a verified policy quotation</span></div>;
}

function RoadHero() {
  return <section className="roads-hero" data-blueprint-section="R-01" aria-labelledby="roads-title">
    <Container>
      <nav className="roads-breadcrumb" aria-label="Breadcrumb"><Link href="/issues">Issues</Link><ChevronRight aria-hidden="true" className="size-3" /><span aria-current="page">Roads &amp; Safety</span></nav>
      <div className="roads-hero-grid">
        <div><p className="eyebrow text-coral">ROADS &amp; SAFETY</p><h1 id="roads-title">{roads.hero.title}</h1>
          {roads.hero.paragraphs.map((paragraph) => <p key={paragraph} className="roads-lead">{paragraph}</p>)}
          <p className="roads-hero-topics">{roads.hero.topics}</p>
          <RoadCTA href="#street-lighting" down>{roads.hero.cta}</RoadCTA>
        </div>
        <div className="roads-hero-preview" aria-label="Hero image demo preview"><Route aria-hidden="true" />
          <p className="eyebrow text-teal">Demo preview</p><p>Hero image not supplied.</p>
        </div>
      </div>
      <SafetyNavigation />
    </Container>
  </section>;
}

function StreetLighting() {
  const needIcons = [CarFront, Signpost, Footprints, Moon];
  return <section id="street-lighting" className="roads-section" data-blueprint-section="R-02" aria-labelledby="lighting-title">
    <Container>
      <div className="roads-feature-grid">
        <div><SectionLabel number="01">STREET LIGHTING</SectionLabel><h2 id="lighting-title" className="roads-heading">{roads.lighting.title}</h2><p className="roads-lead">{roads.lighting.text}</p></div>
        <RoadImage id="P030-01" alt="Illustrative night road scene from the selected blueprint, with vehicles, a crossing sign and nearby homes." eager />
      </div>
      <div className="roads-info-grid">
        <InfoCard title="CURRENT COMMUNITY PLAN RULE" tone="coral"><p>{roads.lighting.rule}</p><DesignExcerpt>{roads.lighting.excerpt}</DesignExcerpt><RoadSource id="SRC-10">Read the Community Plan</RoadSource></InfoCard>
        <InfoCard title="ACTUAL SAFETY NEEDS" icon={TriangleAlert} tone="teal"><p>{roads.lighting.needsIntro}</p><ul className="roads-factor-list">{roads.lighting.needs.map((need, index) => { const Icon = needIcons[index]; return <li key={need}><Icon aria-hidden="true" /><span>{need}</span></li>; })}</ul></InfoCard>
        <InfoCard title="WHY IT MATTERS" icon={Users}><p>{roads.lighting.impact}</p><p className="roads-card-closing">{roads.lighting.closing}</p></InfoCard>
      </div>
      <div className="roads-reading"><p>{roads.lighting.guidance}</p><p className="roads-source-note">{roads.lighting.sourceNote}</p><RoadSource id="SRC-11">Read FHWA guidance on lighting</RoadSource></div>
      <SafetyNavigation current="street-lighting" />
    </Container>
  </section>;
}

function GunnHighway() {
  const illustration = screenshotVisualAssets.find((item) => item.id === "R03-map");
  if (!illustration) throw new Error("Gunn Highway illustration is missing");
  return <section id="gunn-highway" className="roads-section roads-section-white" data-blueprint-section="R-03" aria-labelledby="gunn-title">
    <Container>
      <div className="roads-gunn-grid">
        <div><SectionLabel number="02">GUNN HIGHWAY</SectionLabel><h2 id="gunn-title" className="roads-heading">{roads.gunn.title}</h2><p className="roads-lead">{roads.gunn.text}</p>
          <div className="roads-gunn-photo"><RoadImage id="P031-01" alt="Illustrative two-lane road and traffic scene from the Gunn Highway selected design." /></div>
        </div>
        <figure className="roads-route-map"><RoadImage id="R03-map" kind="visual" alt="Selected Gunn Highway illustration with Community Plan boundary, named roads, Pasco County, South Mobley Road, north arrow, scale and complete legend." />
          <figcaption><strong>Illustration</strong><a href={illustration.publicPath} target="_blank" rel="noopener noreferrer" className="roads-source-link">View full-size illustration<ArrowRight className="size-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></figcaption>
        </figure>
      </div>
      <div className="roads-info-grid">
        <InfoCard title="COMMUNITY PLAN RULE" tone="coral"><p className="roads-rule-emphasis">{roads.gunn.rule}</p><RoadSource id="SRC-10">View the Community Plan Policy →</RoadSource></InfoCard>
        <InfoCard title="COUNTY CONSTRAINED-ROAD TABLE" icon={FileText} tone="teal"><p>{roads.gunn.county}</p><RoadSource id="SRC-16">View the County Table →</RoadSource><p className="roads-source-note">Constrained roads: pp. 250–251.</p></InfoCard>
        <InfoCard title="WHY IT MATTERS" icon={Users}><p>{roads.gunn.impact}</p></InfoCard>
      </div>
      <div className="roads-reading"><p>{roads.gunn.scope}</p></div>
      <div className="roads-data-note"><h3>{roads.gunn.dataHeading}</h3><p>{roads.gunn.data}</p><p className="roads-source-note">{roads.gunn.sourceNote}</p><RoadSource id="SRC-12">Read the County’s 2024 traffic data</RoadSource></div>
      <SafetyNavigation current="gunn-highway" />
    </Container>
  </section>;
}

function WalkingCrossings() {
  const conditionIcons = [CarFront, Footprints, TriangleAlert, Bike];
  return <section id="walking-biking-crossings" className="roads-section" data-blueprint-section="R-04" aria-labelledby="walking-title">
    <Container>
      <div className="roads-feature-grid"><div><SectionLabel number="03">WALKING, BIKING &amp; CROSSINGS</SectionLabel><h2 id="walking-title" className="roads-heading">{roads.walking.title}</h2>{roads.walking.paragraphs.map((paragraph) => <p className="roads-lead" key={paragraph}>{paragraph}</p>)}</div>
        <figure><RoadImage id="P032-01" alt="Illustration from the selected blueprint showing a cyclist and pedestrian beside road traffic; the original Illustration label is retained." /><figcaption className="roads-photo-caption">Illustration</figcaption></figure>
      </div>
      <div className="roads-info-grid">
        <InfoCard title="COMMUNITY PLAN RULE" tone="coral"><p className="roads-rule-emphasis">{roads.walking.rule}</p><RoadSource id="SRC-10">Read the Community Plan</RoadSource></InfoCard>
        <InfoCard title="ACTUAL CONDITIONS" icon={TriangleAlert} tone="teal"><ul className="roads-factor-list">{roads.walking.conditions.map((condition, index) => { const Icon = conditionIcons[index]; return <li key={condition}><Icon aria-hidden="true" /><span>{condition}</span></li>; })}</ul></InfoCard>
        <InfoCard title="WHY IT MATTERS" icon={Users}><p>{roads.walking.impact}</p><p className="roads-card-closing">{roads.walking.closing}</p></InfoCard>
      </div>
      <div className="roads-reading"><h3>{roads.walking.guidanceHeading}</h3><p>{roads.walking.guidance}</p><p className="roads-source-note">{roads.walking.sourceNote}</p><div className="roads-source-row"><RoadSource id="SRC-13">Read the County policy and full criteria</RoadSource><RoadSource id="SRC-14">Read FHWA guidance on walkways</RoadSource></div></div>
      <SafetyNavigation current="walking-biking-crossings" />
    </Container>
  </section>;
}

function EmergencyAccess() {
  const factorIcons = [Ambulance, Signpost, TriangleAlert, Route, ShieldCheck];
  return <section id="emergency-access" className="roads-section roads-section-white" data-blueprint-section="R-05" aria-labelledby="emergency-title">
    <Container>
      <div className="roads-feature-grid"><div><SectionLabel number="04">EMERGENCY ACCESS</SectionLabel><h2 id="emergency-title" className="roads-heading">{roads.emergency.title}</h2><p className="roads-lead">{roads.emergency.text}</p></div><RoadImage id="P033-01" alt="Illustrative emergency vehicles on a two-lane road from the selected blueprint, not a documented response-time event." /></div>
      <div className="roads-info-grid">
        <InfoCard title="COMMUNITY PLAN RULE" tone="coral"><p className="roads-rule-emphasis">{roads.emergency.rule}</p><DesignExcerpt>{roads.emergency.excerpt}</DesignExcerpt><RoadSource id="SRC-10">Read the Community Plan</RoadSource></InfoCard>
        <InfoCard title="KEY FACTORS" icon={TriangleAlert} tone="teal"><ul className="roads-factor-list">{roads.emergency.factors.map((factor, index) => { const Icon = factorIcons[index]; return <li key={factor}><Icon aria-hidden="true" /><span>{factor}</span></li>; })}</ul></InfoCard>
        <InfoCard title="WHY IT MATTERS" icon={Users}><p>{roads.emergency.impact}</p><p className="roads-card-closing">{roads.emergency.closing}</p></InfoCard>
      </div>
      <p className="roads-demo-note">Demo — response-time and delay measurements have not been supplied.</p>
      <SafetyNavigation current="emergency-access" />
    </Container>
  </section>;
}

function TransportationMaps() {
  return <section id="transportation-maps" className="roads-section" data-blueprint-section="R-06" aria-labelledby="transportation-maps-title">
    <Container><p className="eyebrow text-teal">THE NIMBY MAP VS. THE ACTUAL MAP</p><h2 id="transportation-maps-title" className="roads-heading">{roads.maps.title}</h2>
      <div className="roads-reading">{roads.maps.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <div className="roads-map-descriptions">{roads.maps.descriptions.map((item) => <article key={item.title}><Map aria-hidden="true" className="size-7 text-teal" /><h3>{item.title}</h3><p className="font-semibold">{item.lead}</p><p>{item.text}</p></article>)}</div>
      <p className="roads-map-message">{roads.maps.closing}</p>
      <RoadCTA href="/#map-comparison">Home section 2A</RoadCTA>
    </Container>
  </section>;
}

function RecordsEvidence() {
  return <section id="records-evidence" className="roads-section roads-section-white" data-blueprint-section="R-07" aria-labelledby="road-evidence-title">
    <Container><p className="eyebrow text-coral">RECORDS &amp; EVIDENCE</p><h2 id="road-evidence-title" className="roads-heading">{roads.evidence.title}</h2><p className="roads-lead">{roads.evidence.intro}</p>
      <div className="roads-evidence-grid">{roads.evidence.cards.map((card) => { const Icon = evidenceIcons[card.id]; return <article className={`roads-evidence-card roads-evidence-${card.id}`} key={card.id} aria-labelledby={`road-evidence-${card.id}`}>
        <div className="roads-evidence-category"><Icon aria-hidden="true" /><h3>{card.category}</h3></div><p className="roads-evidence-topics">{card.topics}</p>
        <RoadImage id={card.image} kind={card.kind} alt={card.kind === "visual" ? "Selected Gunn Highway and Community Plan area schematic, with complete legend and original map labels." : card.kind === "document" ? "Illustrative document fragment from the selected design; not a verified original record." : "Illustrative photograph from the selected evidence-card design; not verified local incident evidence."} />
        {card.id === "safety" && <p className="roads-demo-note">Demo — unverified example. Finding, agency and dates are not verified.</p>}
        {card.kind === "visual" && <p className="roads-demo-note">Illustrative map preview — source and metadata unverified.</p>}
        {card.kind === "document" && <p className="roads-demo-note">Illustrative document preview</p>}
        <h4 id={`road-evidence-${card.id}`}>{card.title}</h4><p className="roads-evidence-text">{card.text}</p>
        <div className="roads-evidence-metadata"><p>{card.agency}</p>{card.date && <p>{card.date}</p>}</div>
        {card.sourceId ? <RoadSource id={card.sourceId}>{card.action}</RoadSource> : <DemoPreview title={`${card.category} — original source not supplied or verified`}>{card.action}</DemoPreview>}
      </article>; })}</div>
      <div className="roads-evidence-reading">
        <article className="roads-data-note"><h3>{roads.evidence.studyHeading}</h3><p>{roads.evidence.study}</p><p className="roads-source-note">{roads.evidence.studySource}</p><RoadSource id="SRC-09">Read the Van Dyke study — page 13</RoadSource></article>
        <article className="roads-data-note"><h3>{roads.evidence.trafficHeading}</h3><p>{roads.evidence.traffic}</p><p className="roads-source-note">{roads.gunn.sourceNote}</p><RoadSource id="SRC-12">Read the County’s 2024 traffic data</RoadSource></article>
      </div>
      <div className="roads-petition-band"><p>{roads.evidence.petition}</p><RoadCTA href="/take-action#petition">{roads.evidence.cta}</RoadCTA></div>
    </Container>
  </section>;
}

function PlanningSummary() {
  const data = roads.comparison;
  return <section id="planning-frameworks" className="roads-section" data-blueprint-section="R-08" aria-labelledby="road-comparison-title">
    <Container><p className="eyebrow text-teal">ROADS &amp; SAFETY</p><h2 id="road-comparison-title" className="roads-heading">{data.title}</h2><p className="roads-lead">{data.intro}</p>
      <div className="roads-comparison-grid">
        <article className="roads-comparison-panel"><div className="roads-comparison-header"><Map aria-hidden="true" /><h3>{data.localTitle}</h3></div><p className="roads-comparison-intro">{data.localIntro}</p>
          <div className="roads-comparison-inner"><figure><figcaption>Illustrative cover</figcaption><RoadImage id="R08-community" kind="document" alt="Illustrative Community Plan cover and road composition preserved from the selected design; not an official publication cover." /></figure>
            <ul>{data.local.map((item) => <li key={item.title}><h4>{item.title}</h4><p>{item.text}</p></li>)}</ul></div>
          <RoadSource id="SRC-10">Read the Community Plan</RoadSource>
        </article>
        <article className="roads-comparison-panel roads-county-panel"><div className="roads-comparison-header"><Scale aria-hidden="true" /><h3>{data.countyTitle}</h3></div><p className="roads-comparison-intro">{data.countyIntro}</p>
          <div className="roads-comparison-inner"><ul>{data.county.map((item) => <li key={item.title}><h4>{item.title}</h4><p>{item.text}</p></li>)}</ul>
            <figure><figcaption>Illustrative cover — publication details unverified</figcaption><RoadImage id="R08-county" kind="document" alt="Illustrative County Comprehensive Plan cover and city/road composition preserved from the selected design; publication details shown in the artwork are unverified." /></figure></div>
          <RoadSource id="SRC-16">Read the County policy and full criteria</RoadSource>
        </article>
      </div>
      <div className="roads-reading"><h3>{data.policyHeading}</h3><p>{data.policy}</p><p className="roads-source-note">{data.sourceNote}</p><RoadSource id="SRC-16">Read the County policy and full criteria</RoadSource></div>
      <div className="roads-summary-action"><p>{data.closing}</p><RoadCTA href="/the-proposal#roads-comparison">{data.cta}</RoadCTA></div>
    </Container>
  </section>;
}

export function RoadsPageContent() {
  return <div className="roads-page"><RoadHero /><StreetLighting /><GunnHighway /><WalkingCrossings /><EmergencyAccess /><TransportationMaps /><RecordsEvidence /><PlanningSummary /></div>;
}
