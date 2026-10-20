import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ChevronRight, Cross, House, Map, ShoppingCart, Users, Utensils } from "lucide-react";
import { growth } from "@/content/growth";
import { getDemoPhoto, illustrativeDocumentAssets, screenshotVisualAssets } from "@/content/assets";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SourceLink } from "@/components/content/source-link";
import { DemoPreview } from "@/components/demo/demo-preview";

function GrowthImage({ id, kind = "visual", alt = "", eager = false }: { id: string; kind?: "visual" | "photo" | "document"; alt?: string; eager?: boolean }) {
  const asset = kind === "photo" ? getDemoPhoto(id) : kind === "visual" ? screenshotVisualAssets.find((a) => a.id === id) : illustrativeDocumentAssets.find((a) => a.id === id);
  if (!asset?.publicPath || !asset.width || !asset.height) throw new Error(`Missing Growth asset: ${id}`);
  return <Image src={asset.publicPath} width={asset.width} height={asset.height} unoptimized alt={alt} loading={eager ? "eager" : "lazy"} className="growth-image" style={{ maxWidth: asset.width }} data-growth-asset={id} />;
}
function FullSize({ id }: { id: string }) {
  const asset = screenshotVisualAssets.find((a) => a.id === id);
  if (!asset) throw new Error(`Missing Growth illustration: ${id}`);
  return <a className="growth-source-link" href={asset.publicPath} target="_blank" rel="noopener noreferrer">View full-size illustration<ArrowRight aria-hidden="true" className="size-4" /><span className="sr-only"> — {id} (opens in a new tab)</span></a>;
}
function Source({ id, children }: { id: string; children: ReactNode }) { return <SourceLink sourceId={id} className="growth-source-link">{children}</SourceLink>; }
function CTA({ href, children }: { href: string; children: string }) { return <Button asChild className="growth-cta"><Link href={href}>{children.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></Link></Button>; }
function Hero() { return <section data-blueprint-section="L-01" className="growth-hero growth-section" aria-labelledby="growth-title"><Container>
  <nav className="growth-breadcrumb" aria-label="Breadcrumb"><Link href="/issues">Issues</Link><ChevronRight aria-hidden="true" className="size-3" /><span aria-current="page">Growth, Infrastructure &amp; Daily Life</span></nav>
  <p className="eyebrow text-teal">GROWTH &amp; DAILY LIFE</p><h1 id="growth-title">{growth.hero.title}</h1><p className="growth-lead">{growth.hero.text}</p>
  <p className="growth-notice">Unverified sample data — population and housing counts are illustrative, not verified local counts. The Then/Today maps are illustrations, not authenticated historical surveys.</p>
  <div className="growth-then-today">{growth.hero.sides.map((side, index) => <article key={side.image} className={index ? "growth-today" : ""}>
    <div className="growth-panel-heading"><h2>{side.title}</h2><p>{side.date}</p></div>
    <GrowthImage id={side.image} alt={index ? "Selected Today map illustration with original residential, subdivision, commercial and road labels and legend retained; not verified GIS." : "Selected Then map illustration with original residential, limited commercial and road labels and legend retained; not a verified historical map."} eager />
    <dl className="growth-stats">{side.stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl><FullSize id={side.image} />
  </article>)}</div><Source id="SRC-10">Read the Community Plan</Source>
</Container></section>; }
function Density() { return <section id="rural-density" data-blueprint-section="L-02" className="growth-section growth-white" aria-labelledby="density-title"><Container>
  <p className="eyebrow text-coral">LOW-DENSITY DEVELOPMENT</p><h2 id="density-title" className="growth-heading">{growth.density.title}</h2><p className="growth-lead">{growth.density.text}</p>
  <div className="growth-density-grid">{growth.density.sides.map((side, index) => <figure key={side.image} className={index ? "growth-density-moderate" : ""}>
    <figcaption className="growth-panel-heading"><h3>{side.title}</h3><p>{side.text}</p><strong>{side.label}</strong></figcaption>
    <GrowthImage id={side.image} alt={index ? "Selected Natural Rural Density illustration, right panel: smaller lots with more homes, comparable tree cover and narrow rural lanes on the same amount of land." : "Selected Natural Rural Density illustration, left panel: ten homes on fifty acres, five-acre lots, trees and open land."} /><FullSize id={side.image} />
  </figure>)}</div><p className="growth-notice">{growth.density.qualification}</p>
  <ol className="growth-density-flow">{growth.density.flow.map((text, i) => <li key={text}><span>{String(i + 1).padStart(2, "0")}</span><p>{text}</p>{i < 4 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
  <Source id="SRC-10">Read the Community Plan</Source>
</Container></section>; }
function Housing() { return <section id="housing-options" data-blueprint-section="L-03" className="growth-section" aria-labelledby="housing-title"><Container>
  <p className="eyebrow text-teal">LOW DENSITY AFFECTS HOUSING</p><h2 id="housing-title" className="growth-heading">{growth.housing.title}</h2><p className="growth-lead">{growth.housing.text}</p>
  <div className="growth-scenarios">{growth.housing.scenarios.map((scenario, i) => { const Icon = [House, House, Map][i]; return <article key={scenario.title}><Icon aria-hidden="true" /><h3>{scenario.title}</h3><p>{scenario.text}</p></article>; })}</div>
  <aside className="growth-preview"><h3>Low-density policy map — preview</h3><p>The selected map and three separate scenario illustrations have not been supplied. The Natural Rural Density Comparison above retains the selected two-panel illustration.</p><p>Master Assessment source not supplied; the assessment statements remain unverified.</p><DemoPreview title="Low-density policy map — source not supplied">View map preview</DemoPreview></aside>
  <div className="growth-source-row"><Source id="SRC-10">Read the Community Plan</Source><Source id="SRC-16">Read the County policy and full criteria</Source></div>
</Container></section>; }
const serviceIcons = { grocery: ShoppingCart, health: Cross, childcare: Users, restaurant: Utensils, jobs: BriefcaseBusiness };
function Services() { return <section id="everyday-services" data-blueprint-section="L-04" className="growth-section growth-white" aria-labelledby="services-title"><Container>
  <p className="eyebrow text-coral">THE COMMUNITY PLAN LIMITS WHERE SERVICES CAN DEVELOP</p><h2 id="services-title" className="growth-heading">{growth.services.title}</h2><p className="growth-lead">{growth.services.text}</p><p className="growth-needs"><strong>People still need:</strong> {growth.services.needs}</p><p className="growth-lead">{growth.services.closing}</p>
  <p className="growth-notice">{growth.services.qualification}<br />{growth.services.scope} Schematic pins and shaded areas are illustrative, not verified locations or measured travel zones.</p>
  <div className="growth-services-grid"><figure><GrowthImage id="L04-map" alt="Preserved static service-map illustration with its complete original color legend and caveat, residential and service pins, shaded illustrative travel zones, Community Plan boundary, road names, north arrow and mileage scale." /><figcaption><FullSize id="L04-map" /></figcaption>
    <div className="growth-map-key"><h3>KEYSTONE–ODESSA</h3><p>Residential areas and key services with estimated drive times</p><ul>{growth.services.legend.map((label) => <li key={label}>{label}</li>)}</ul><p>{growth.services.qualification}</p></div></figure>
    <aside className="growth-service-list"><h3>KEY SERVICES</h3><p>Approximate drive times from residential areas</p><ul>{growth.services.labels.map((item) => { const Icon = serviceIcons[item.icon]; return <li key={item.title}><Icon aria-hidden="true" /><div><h4>{item.title}</h4><p>{item.time}</p></div><GrowthImage id={item.image} kind="photo" /></li>; })}</ul></aside>
  </div><Source id="SRC-10">Read the Community Plan</Source>
</Container></section>; }
function Infrastructure() { return <section id="growth-infrastructure" data-blueprint-section="L-05" className="growth-section" aria-labelledby="infrastructure-title"><Container>
  <p className="eyebrow text-teal">GROWTH AND INFRASTRUCTURE NEED TO BE PLANNED TOGETHER</p><h2 id="infrastructure-title" className="growth-heading">{growth.infrastructure.title}</h2>
  <aside className="growth-preview"><h3>Growth and infrastructure timeline — preview</h3><p>Selected timeline/map and quantitative series not supplied. Years below are planned comparison points; no measured change is shown.</p><ol className="growth-years">{growth.infrastructure.years.map((year) => <li key={year}>{year}</li>)}</ol><p>{growth.infrastructure.tracks}</p><DemoPreview title="Growth and infrastructure timeline — data and selected visual not supplied">View timeline preview</DemoPreview></aside>
  <p className="growth-statement">{growth.infrastructure.message}</p><p className="growth-lead">{growth.infrastructure.support}</p><p className="growth-source-note">Master Assessment source not supplied; this assessment statement has not been independently verified.</p>
</Container></section>; }
function Comparison() { return <section id="growth-comparison-summary" data-blueprint-section="L-06" className="growth-section growth-white" aria-labelledby="growth-comparison-title"><Container>
  <p className="eyebrow text-teal">COMMUNITY PLAN VS COUNTY COMPREHENSIVE PLAN</p><h2 id="growth-comparison-title" className="growth-heading">{growth.comparison.title}</h2><p className="growth-lead">{growth.comparison.intro}</p>
  <div className="growth-comparison-grid">{growth.comparison.sides.map((side, index) => <article key={side.title} className={`growth-comparison-panel ${index ? "growth-county-panel" : ""}`}><h3>{side.title}</h3><div className="growth-comparison-body"><GrowthImage id={side.image} kind="photo" alt="Visible portion of the selected comparison landscape; an illustration, not a verified development record." /><ol>{side.points.map((point) => <li key={point}>{point}</li>)}</ol></div><Source id={side.sourceId}>{index ? "Read the County policy and full criteria" : "Read the Community Plan"}</Source></article>)}</div>
  <div className="growth-comparison-action"><p>{growth.comparison.qualification}</p><CTA href="/the-proposal#growth-housing-comparison">{growth.comparison.cta}</CTA></div>
</Container></section>; }
function Evidence() { return <section id="growth-evidence" data-blueprint-section="L-07" className="growth-section" aria-labelledby="growth-evidence-title"><Container>
  <p className="eyebrow text-teal">EVIDENCE</p><h2 id="growth-evidence-title" className="growth-heading">{growth.evidence.title}</h2><p className="growth-source-note">Source categories and illustrative thumbnails — not authenticated records. Card-level findings and dates have not been supplied or verified. Supplied policy and GIS links do not validate the sample counts, drive times or assessment statements.</p>
  <div className="growth-evidence-grid">{growth.evidence.cards.map((card) => <article key={card.id} className={`growth-evidence-card growth-evidence-${card.id}`} aria-labelledby={`growth-card-${card.id}`}>
    <GrowthImage id={card.image} kind={card.kind} alt={card.kind === "photo" ? "Illustrative photograph from the selected evidence design; not a verified local record." : "Illustrative map or cover thumbnail from the selected design; not an authenticated original document."} /><h3 id={`growth-card-${card.id}`}>{card.title}</h3><p>{card.text}</p>
    <p className="growth-demo-label">Illustrative {card.kind === "document" ? "document preview" : card.kind === "visual" ? "map preview" : "photograph"}</p>
    <dl><div><dt>Main Finding:</dt><dd>Not supplied or verified.</dd></div><div><dt>Source:</dt><dd>{card.sourceId ? "Supplied source link below; card-level evidence unverified." : "Original source not supplied."}</dd></div><div><dt>Date:</dt><dd>Not supplied or verified.</dd></div></dl>
    {card.sourceId ? <Source id={card.sourceId}>{card.id === "plan" ? "View Document" : "View Map"}</Source> : <DemoPreview title={`${card.title} — original source not supplied or verified`}>{card.id === "service" ? "View Map" : card.id === "infrastructure" ? "View Records" : "View Data"}</DemoPreview>}
  </article>)}</div><div className="growth-source-row"><Source id="SRC-06">Parcel source and calculation inputs — County parcel GIS</Source><Source id="SRC-07">Official Community Plan boundary — County GIS</Source><Source id="SRC-16">Read the County policy and full criteria</Source></div>
</Container></section>; }
function Continuation() { return <section id="next-issue" data-blueprint-section="L-08" className="growth-section growth-white" aria-labelledby="growth-next-title"><Container className="growth-next-grid">
  <div><p className="eyebrow text-teal">NEXT</p><h2 id="growth-next-title" className="growth-heading">{growth.next.title}</h2><p className="growth-lead">{growth.next.text}</p><CTA href="/issues#outdated-community-plan">{growth.next.cta}</CTA></div><GrowthImage id="P060-07" kind="photo" alt="Visible portion of the selected rural aerial illustration; original fade retained." />
</Container></section>; }
export function GrowthPageContent() { return <div className="growth-page"><Hero /><Density /><Housing /><Services /><Infrastructure /><Comparison /><Evidence /><Continuation /></div>; }
