import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, ChevronRight, Cylinder, Droplets, FileText, Leaf, Settings, ShieldPlus, Waves, Wrench, X } from "lucide-react";
import { water } from "@/content/water";
import { getDemoPhoto, illustrativeDocumentAssets, screenshotVisualAssets } from "@/content/assets";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SourceLink } from "@/components/content/source-link";
import { DemoPreview } from "@/components/demo/demo-preview";

const icons = { septic: Cylinder, repair: Wrench, water: Waves, well: Droplets, nature: Leaf, options: Settings };
function WaterImage({ id, kind = "visual", alt = "", eager = false }: { id: string; kind?: "visual" | "photo" | "document"; alt?: string; eager?: boolean }) {
  const asset = kind === "photo" ? getDemoPhoto(id) : kind === "visual" ? screenshotVisualAssets.find((a) => a.id === id) : illustrativeDocumentAssets.find((a) => a.id === id);
  if (!asset?.publicPath || !asset.width || !asset.height) throw new Error(`Missing Water asset: ${id}`);
  return <Image src={asset.publicPath} width={asset.width} height={asset.height} unoptimized alt={alt}
    loading={eager ? "eager" : "lazy"} className="water-image" style={{ maxWidth: asset.width }} data-water-asset={id} />;
}
function WaterFigure({ id, alt, caption, anchor }: { id: string; alt: string; caption: string; anchor?: string }) {
  const asset = screenshotVisualAssets.find((a) => a.id === id);
  if (!asset) throw new Error(`Missing Water illustration: ${id}`);
  return <figure className="water-figure" id={anchor}><WaterImage id={id} alt={alt} /><figcaption>
    <p>{caption}</p><a href={asset.publicPath} className="water-source-link" target="_blank" rel="noopener noreferrer">View full-size illustration<ArrowRight className="size-4" aria-hidden="true" /><span className="sr-only"> — {alt} (opens in a new tab)</span></a>
  </figcaption></figure>;
}
function WaterSource({ id, children }: { id: string; children: ReactNode }) { return <SourceLink sourceId={id} className="water-source-link">{children}</SourceLink>; }
function WaterCTA({ href, children, down = false }: { href: string; children: string; down?: boolean }) { return <Button asChild className="water-cta"><Link href={href}>{children.replace(/ [→↓]$/, "")}{down ? <ArrowDown aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}</Link></Button>; }
function WaterNavigation() { return <nav aria-label="Water topics" className="water-topic-nav">{water.navigation.map((item) => { const Icon = icons[item.icon]; return <a href={`#${item.id}`} key={item.id}><Icon aria-hidden="true" /><span>{item.label}</span><ArrowRight className="size-4" aria-hidden="true" /></a>; })}</nav>; }
function WaterScope() { return <p className="water-scope">{water.scope}</p>; }
function WaterHero() { return <section className="water-hero" data-blueprint-section="W-01" aria-labelledby="water-title"><Container>
  <nav className="water-breadcrumb" aria-label="Breadcrumb"><Link href="/issues">Issues</Link><ChevronRight aria-hidden="true" className="size-3" /><span aria-current="page">Water &amp; Septic</span></nav>
  <div className="water-hero-grid"><div><p className="eyebrow text-teal">WATER &amp; SEPTIC</p><h1 id="water-title">{water.hero.title}</h1><p className="water-lead">{water.hero.text}</p><WaterCTA href="#septic-scale" down>{water.hero.cta}</WaterCTA></div>
    <div><WaterImage id="W01-landscape" alt="Visible portion of the selected hero landscape, including the conceptual Community Plan boundary overlay; not a verified aerial survey." eager /><p className="water-caption">Illustration</p></div>
  </div>
  <ol className="water-hero-connections">{water.hero.connections.map((item) => <li key={item.title}><WaterImage id={item.image} /><div><h2>{item.title}</h2><p>{item.text}</p></div></li>)}</ol>
  <p className="water-statement">{water.hero.closing}</p><WaterNavigation />
</Container></section>; }
function ClassificationNumbers({ repair = false }: { repair?: boolean }) {
  const data = repair ? water.repairs : water.scale;
  return <div className="water-numbers"><dl className="water-total"><dt>{data.totalLabel}</dt><dd>{data.total}</dd></dl>
    <dl className="water-groups">{data.groups.map((group) => <div key={group.label}><dt>{group.label}</dt><dd>{group.value}</dd></div>)}</dl></div>;
}
function SepticScale() { return <section id="septic-scale" className="water-section" data-blueprint-section="W-02" aria-labelledby="scale-title"><Container>
  <div className="water-data-grid"><div><p className="eyebrow text-teal">01 — SEPTIC CONCENTRATION</p><h2 id="scale-title" className="water-heading">{water.scale.title}</h2><p className="water-lead">{water.scale.text}</p><ClassificationNumbers /><p className="water-detail">{water.scale.detail}</p><WaterScope /></div>
    <WaterFigure id="W02-map" alt="Selected septic-classification map illustration for Odessa ZIP 33556, retaining Known/Likely/Somewhat Likely legend, boundary, roads, scale and north arrow." caption="Illustration — geographic distribution not independently verified." />
  </div><p className="water-statement">{water.scale.closing}</p><WaterNavigation />
</Container></section>; }
function RepairRecords() { return <section id="repair-records" className="water-section water-white" data-blueprint-section="W-03" aria-labelledby="repair-title"><Container>
  <div className="water-data-grid"><div><p className="eyebrow text-coral">02 — SEPTIC REPAIRS</p><h2 id="repair-title" className="water-heading">{water.repairs.title}</h2><p className="water-lead">{water.repairs.text}</p><ClassificationNumbers repair /><p className="water-detail">{water.repairs.detail}</p>
    <p className="water-date-range"><span>1998</span><ArrowRight aria-hidden="true" /><span>2023</span></p>
    <WaterFigure id="W03-chart" alt="Unverified illustrative repair-record chart from the selected artwork, with its original year labels and axes; annual inputs have not been supplied." caption="Illustrative chart — annual inputs unverified; not failure counts." />
    <WaterScope /></div><WaterFigure id="W03-map" alt="Selected repair-record map illustration with 738 Known, 41 Likely and 27 Somewhat Likely records; original legend, boundary and scale retained." caption="Illustration — construction/repair records, not failure counts." />
  </div><p className="water-statement">{water.repairs.closing}</p><WaterNavigation />
</Container></section>; }
function ConnectedWater() { return <section id="connected-water" className="water-section" data-blueprint-section="W-04" aria-labelledby="connected-title"><Container>
  <div className="water-connected-grid"><div><p className="eyebrow text-teal">03 — CONNECTED SYSTEM</p><h2 id="connected-title" className="water-heading">{water.connected.title}</h2><p className="water-lead">{water.connected.text}</p></div>
    <WaterFigure id="W04-system" anchor="lakes-wetlands" alt="Selected conceptual connected-water system illustration showing septic, private wells, lakes and wetlands, groundwater protection, and wellhead/wellfield areas; all callouts retained." caption={water.connected.scope} />
  </div><p className="water-statement">{water.connected.connection}</p>
  <WaterFigure id="W04-cutaway" anchor="groundwater" alt="Original selected conceptual cutaway connecting a septic system, private well, lake/wetland and groundwater, with all labels and directional arrows retained." caption={water.connected.scope} />
  <div className="water-reading"><h3>{water.connected.question}</h3><p>{water.connected.closing}</p></div>
  <div className="water-petition-band"><div><h3>{water.connected.petitionTitle}</h3><p>{water.connected.petition}</p></div><WaterCTA href="/take-action#petition">Read the petition</WaterCTA></div>
  <WaterSource id="SRC-17">Source: EPA — Septic Systems and Drinking Water</WaterSource><WaterNavigation />
</Container></section>; }
function WaterOptions() { return <section id="water-options" className="water-section water-white" data-blueprint-section="W-05" aria-labelledby="options-title"><Container>
  <div className="water-options-grid"><div><p className="eyebrow text-teal">WATER &amp; WASTEWATER OPTIONS</p><h2 id="options-title" className="water-heading">{water.options.title}</h2><p className="water-lead">{water.options.text}</p><WaterImage id="P049-01" kind="photo" alt="Selected lake illustration with the original baked-in fade preserved." /></div>
    <ol className="water-options-steps">{water.options.steps.map((step, index) => <li key={step.title}><div className="water-step-heading"><span aria-hidden="true">{index + 1}</span><h3>{step.title}</h3></div>
      {index === 0 && <div className="water-option-photos">{["P049-02", "P049-03", "P049-04"].map((id) => <WaterImage key={id} id={id} kind="photo" />)}</div>}
      <p>{step.text}</p>{index < 3 && <ArrowDown className="water-step-arrow" aria-hidden="true" />}
    </li>)}</ol>
  </div><div className="water-reading"><h3>{water.options.policyHeading}</h3><p>{water.options.policy}</p><WaterSource id="SRC-16">Read the County policy and full criteria</WaterSource></div>
  <div className="water-options-closing"><h3>{water.options.closing}</h3><p>{water.options.petition}</p><p className="water-scope water-remaining-route">{water.options.remaining}</p><div className="water-source-row"><WaterCTA href="/take-action#petition">Sign our petition</WaterCTA><WaterSource id="SRC-16">Read the exclusions — One Water 4.3.7</WaterSource></div></div><WaterNavigation />
</Container></section>; }
function CoreConflict() { return <section id="core-conflict" className="water-section" data-blueprint-section="W-06" aria-labelledby="conflict-title"><Container>
  <aside className="water-research" aria-label="Supporting research and source qualifications"><p className="eyebrow text-teal">Supporting research and source qualifications</p><p>{water.conflict.history}</p><p>{water.conflict.support}</p><p className="water-source-note">{water.conflict.qualification}</p>
    <div className="water-source-row"><WaterSource id="SRC-19">Read the May 9, 2024 Board minutes — Book 576, pages 39–40</WaterSource><WaterSource id="SRC-20">Read the 2024 staff report and agency comments</WaterSource></div>
  </aside>
  <div className="water-conflict-panel"><h2 id="conflict-title">{water.conflict.title}</h2><WaterImage id="P051-01" kind="photo" />
    <p className="water-conflict-intro">{water.conflict.text}</p><div className="water-conflict-cards"><article><h3><FileText aria-hidden="true" />{water.conflict.staffTitle}</h3><p>{water.conflict.staffText}</p><WaterSource id="SRC-20">Read the 2024 staff report →</WaterSource></article>
      <article><h3><ShieldPlus aria-hidden="true" />{water.conflict.interestsTitle}</h3><p>{water.conflict.interestsText}</p><WaterSource id="SRC-18">Read Policies 4.3.5 and 4.3.7 →</WaterSource></article></div>
    <p className="water-conflict-closing">{water.conflict.closing}</p><p className="water-source-note">{water.conflict.sources}</p>
  </div>
</Container></section>; }
function WaterComparison() { return <section id="water-comparison-summary" className="water-section water-white" data-blueprint-section="W-07" aria-labelledby="comparison-title"><Container>
  <p className="eyebrow text-teal">COMMUNITY PLAN VS COUNTY COMPREHENSIVE PLAN</p><h2 id="comparison-title" className="water-heading">{water.comparison.title}</h2><p className="water-lead">{water.comparison.intro}</p>
  <div className="water-comparison-grid">{[{ title: water.comparison.localTitle, points: water.comparison.local, photo: "P052-01", source: "SRC-10", county: false }, { title: water.comparison.countyTitle, points: water.comparison.county, photo: "P052-02", source: "SRC-16", county: true }].map((side) => {
    const Icon = side.county ? Check : X; return <article key={side.title} className={`water-comparison-panel ${side.county ? "water-county-panel" : ""}`}><div className="water-comparison-heading"><h3>{side.title}</h3><WaterImage id={side.photo} kind="photo" /></div>
      <ul>{side.points.map((point) => <li key={point}><Icon aria-hidden="true" /><span>{point}</span></li>)}</ul><WaterSource id={side.source}>{side.county ? "Read the County policy and full criteria" : "Read the Community Plan"}</WaterSource></article>;
  })}</div><div className="water-comparison-action"><WaterCTA href="/the-proposal#water-comparison">{water.comparison.cta}</WaterCTA></div>
</Container></section>; }
function WaterEvidence() { return <section id="water-evidence" className="water-section" data-blueprint-section="W-08" aria-labelledby="water-evidence-title"><Container>
  <p className="eyebrow text-teal">EVIDENCE</p><h2 id="water-evidence-title" className="water-heading">{water.evidence.title}</h2>
  <div className="water-evidence-grid">{water.evidence.cards.map((card) => <article key={card.id} className={`water-evidence-card water-evidence-${card.id}`} aria-labelledby={`water-card-${card.id}`}>
    <WaterImage id={card.image} kind={card.kind} alt={card.kind === "photo" ? "Illustrative photograph from the selected evidence-card design; not a verified local record." : "Illustrative map/document thumbnail from the selected artwork; not an authenticated original record."} />
    <h3 id={`water-card-${card.id}`}>{card.title}</h3><p className="water-card-subtitle">{card.subtitle}</p><p className="water-demo-label">Illustrative evidence card — finding, source and date unverified.</p>
    <p className="water-card-finding"><strong>Finding: </strong>{card.finding}</p><dl><div><dt>Source:</dt><dd>{card.source}</dd></div><div><dt>Date:</dt><dd>{card.date}</dd></div></dl>
    <DemoPreview title={`${card.title} — original source not supplied or verified`}>View Original Document</DemoPreview>
  </article>)}</div><div className="water-source-row"><WaterSource id="SRC-10">Read the Community Plan</WaterSource><WaterSource id="SRC-16">Read the County policy and full criteria</WaterSource></div><WaterScope />
</Container></section>; }
function NextIssue() { return <section id="next-issue" className="water-section water-white" data-blueprint-section="W-09" aria-labelledby="next-title"><Container className="water-next-grid">
  <div><p className="eyebrow text-teal">NEXT ISSUE</p><h2 id="next-title" className="water-heading">{water.next.title}</h2><p className="water-lead">{water.next.text}</p><WaterCTA href="/issues/growth-daily-life">{water.next.cta}</WaterCTA></div>
  <WaterImage id="P053-06" kind="photo" alt="Visible road and housing portion from the selected next-issue design; not a verified local street photograph." />
</Container></section>; }
export function WaterPageContent() { return <div className="water-page"><WaterHero /><SepticScale /><RepairRecords /><ConnectedWater /><WaterOptions /><CoreConflict /><WaterComparison /><WaterEvidence /><NextIssue /></div>; }
