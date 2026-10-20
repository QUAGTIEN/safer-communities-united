import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeftRight, ArrowRight, Ban, ClipboardCheck, Droplets, FileText, Footprints, House, Landmark, Layers, Leaf, Lightbulb, Map, MapPin, RefreshCw, Route, Settings, ShieldCheck, Trees, TriangleAlert, Users, Waves } from "lucide-react";
import { proposal } from "@/content/proposal";
import { getDemoPhoto, illustrativeDocumentAssets, screenshotVisualAssets } from "@/content/assets";
import { getBlueprintSource } from "@/content/sources";
import { Container } from "@/components/layout/container";
import { SourceLink } from "@/components/content/source-link";
import { DemoPreview } from "@/components/demo/demo-preview";
import { Button } from "@/components/ui/button";

function ProposalImage({ id, kind = "photo", alt = "", eager = false }: { id: string; kind?: "photo" | "visual" | "document"; alt?: string; eager?: boolean }) {
  const asset = kind === "photo" ? getDemoPhoto(id) : (kind === "visual" ? screenshotVisualAssets : illustrativeDocumentAssets).find((item) => item.id === id);
  if (!asset?.publicPath || !asset.width || !asset.height) throw new Error(`Missing Proposal asset: ${id}`);
  return <Image src={asset.publicPath} width={asset.width} height={asset.height} unoptimized alt={alt} loading={eager ? "eager" : "lazy"} className="proposal-image" style={{ maxWidth: asset.width }} data-proposal-asset={id} />;
}

function Introduction() {
  return <section className="proposal-intro" data-blueprint-section="P-01" aria-labelledby="proposal-title"><Container>
    <p className="eyebrow text-teal">DEMO PREVIEW</p><h1 id="proposal-title" className="page-title">The Proposal</h1>
    <div className="page-preview-notice"><p className="preview-heading text-teal">Proposed Change introduction — demo preview</p><p>Approved introduction copy and a separate selected layout have not been supplied. The comparisons below follow the supplied blueprint.</p></div>
    <div className="proposal-intro-links"><Button asChild><a href="#compare-the-two-plans">Compare the Two Plans<ArrowDown aria-hidden="true" /></a></Button><Button asChild variant="outline"><Link href="/take-action#petition">Read the petition<ArrowRight aria-hidden="true" /></Link></Button></div>
  </Container></section>;
}

function ComparisonHeading({ eyebrow, label, title, image, icon, intro }: { eyebrow?: string; label: string; title: string; image: string; icon: ReactNode; intro?: string }) {
  return <><div className="comparison-heading"><div><div className="comparison-kicker"><span className="comparison-icon" aria-hidden="true">{icon}</span><p>{eyebrow && <span>{eyebrow}</span>}{label}</p></div><h2>{title}</h2></div><ProposalImage id={image} alt="Visible landscape portion from the selected comparison artwork; the obscured background has not been reconstructed." /></div>{intro && <p className="comparison-intro">{intro}</p>}</>;
}

function Sources({ ids }: { ids: readonly string[] }) {
  return <aside className="comparison-sources" aria-label="Supplied source links"><p>Supplied source links — policy summaries have not been independently verified.</p><ul>{ids.map((id) => <li key={id}><SourceLink sourceId={id}>{getBlueprintSource(id).first_label}</SourceLink></li>)}</ul></aside>;
}

function ResultBanner({ image, children, cta }: { image: string; children: ReactNode; cta?: string }) {
  return <div className="comparison-result"><ProposalImage id={image} kind="visual" alt="Preserved decorative landscape illustration from the selected comparison banner." /><div className="comparison-result-text">{children}</div>{cta && <DemoPreview title={`${cta.replace(/ →$/, "")} — full policy-by-policy document not supplied`}>{cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></DemoPreview>}</div>;
}

// Selected artwork emphasis; the underlying approved sentences stay intact.
const policyEmphasis = ["protection of water resources a priority", "soil conditions and permeability", "aging or failing septic systems", "wellhead or wellfield protection areas", "cumulative flooding and water quality", "physical land and soil conditions", "permeability", "documented environmental problem", "Wellhead Resource Protection Areas", "Tampa Bay Water Wellfield Mitigation Areas", "one dwelling unit per five acres", "low-density, scattered", "housing affordability", "rural development pattern", "maximum densities and intensities", "one dwelling per five gross acres", "housing choice and affordability", "infill, small lots, accessory homes, and different housing types"].sort((a, b) => b.length - a.length);
function PolicyText({ text }: { text: string }) {
  const pattern = new RegExp(`(${policyEmphasis.join("|")})`, "g");
  return <>{text.split(pattern).map((part, i) => policyEmphasis.includes(part) ? <strong key={i}>{part}</strong> : part)}</>;
}

const roadIcons = [[FileText, Ban, Lightbulb, Footprints], [ClipboardCheck, RefreshCw, Lightbulb, Users]];
function RoadsComparison() {
  const content = proposal.roads;
  return <section id="roads-comparison" className="proposal-section" data-blueprint-section="C-01" aria-label="Roads & Safety comparison"><Container>
    <ComparisonHeading {...content} image="P063-01" icon={<Route />} />
    <div className="comparison-columns comparison-roads">{(["community", "county"] as const).map((side, sideIndex) => <article className={`comparison-column comparison-${side}`} key={side} aria-labelledby={`roads-${side}-title`}>
      <header><h3 id={`roads-${side}-title`}>{side === "community" ? "COMMUNITY PLAN" : "COUNTY FRAMEWORK"}</h3></header>
      <div className="comparison-road-image"><ProposalImage id={side === "community" ? "P063-02" : "P063-03"} alt="Illustrative rural road photograph from the selected comparison; not an approved road project or verified local condition." eager /></div>
      {content.rows.map((row, i) => { const Icon = roadIcons[sideIndex][i]; return <div className="comparison-row" key={row.label}><span className="comparison-icon" aria-hidden="true"><Icon /></span><div><p className="comparison-row-label">{row.label}</p><h4>{side === "community" ? row.communityTitle : row.countyTitle}</h4><p>{row[side]}</p></div></div>; })}
    </article>)}</div>
    <p className="comparison-image-note">Illustrative photographs — not verified local conditions or proposed project designs.</p>
    <ResultBanner image="C01-banner"><p>{content.result}</p></ResultBanner><p className="comparison-caveat">{content.caveat}</p>
    <div className="comparison-full"><DemoPreview title="Full Roads Comparison — full policy-by-policy document not supplied">{content.cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></DemoPreview></div><Sources ids={content.sourceIds} />
  </Container></section>;
}

const waterIcons = [[Droplets, House, Droplets, Waves], [Leaf, Settings, ShieldCheck, Waves]];
function WaterComparison() {
  const content = proposal.water;
  return <section id="water-comparison" className="proposal-section" data-blueprint-section="C-02" aria-label="Water & Wastewater comparison"><Container>
    <ComparisonHeading {...content} image="P065-01" icon={<Droplets />} />
    <div className="comparison-water-wrap"><div className="comparison-columns comparison-water">{(["community", "county"] as const).map((side, sideIndex) => <article key={side} className={`comparison-column comparison-${side}`} aria-labelledby={`water-${side}-title`}>
      <header><h3 id={`water-${side}-title`}>{side === "community" ? "COMMUNITY PLAN" : "COUNTY FRAMEWORK"}</h3><p>{side === "community" ? content.communityIntro : content.countyIntro}</p></header>
      {content.rows.map((row, i) => { const Icon = waterIcons[sideIndex][i]; return <div className="comparison-row" key={i}><span className="comparison-icon" aria-hidden="true"><Icon /></span><p><PolicyText text={row[side]} /></p></div>; })}
    </article>)}</div><ArrowLeftRight className="comparison-between" aria-hidden="true" /></div>
    <aside className="comparison-limit"><TriangleAlert aria-hidden="true" /><div><h3>{content.limitTitle}</h3><p>{content.limit}</p></div></aside>
    <ResultBanner image="C02-banner" cta={content.cta}><p>{content.result}</p></ResultBanner><Sources ids={content.sourceIds} />
  </Container></section>;
}

const growthIcons = [[Users, House, FileText, Trees], [MapPin, Trees, Users, House]];
function GrowthComparison() {
  const content = proposal.growth;
  return <section id="growth-housing-comparison" className="proposal-section" data-blueprint-section="C-03" aria-label="Growth & Housing comparison"><Container>
    <ComparisonHeading {...content} image="P067-01" icon={<House />} />
    <div className="comparison-columns comparison-growth">{(["community", "county"] as const).map((side, sideIndex) => <article key={side} className={`comparison-column comparison-${side}`} aria-labelledby={`growth-${side}-title`}>
      <header><h3 id={`growth-${side}-title`}>{side === "community" ? "COMMUNITY PLAN" : "COUNTY FRAMEWORK"}</h3></header>
      {content.rows.map((row, i) => { const Icon = growthIcons[sideIndex][i]; const id = side === "community" ? `P067-0${i + 2}` : i === 0 ? "C03-map" : `P067-0${i + 5}`; return <div className="comparison-row comparison-illustrated-row" key={i}>
        <ProposalImage id={id} kind={id === "C03-map" ? "visual" : "photo"} alt={id === "C03-map" ? "Complete visible land-use map thumbnail from Screenshot 110; not verified GIS or a parcel-level policy map." : "Preserved illustrative housing photograph from Screenshot 110; location and project provenance unverified."} />
        <span className="comparison-icon" aria-hidden="true"><Icon /></span><p><PolicyText text={row[side]} /></p>
      </div>; })}
    </article>)}</div>
    <p className="comparison-image-note">Illustrative photographs and map thumbnail — not verified local projects, GIS data or parcel-level policy determinations.</p>
    <ResultBanner image="C03-banner" cta={content.cta}><p>{content.result}</p></ResultBanner><Sources ids={content.sourceIds} />
  </Container></section>;
}

const protectionIcons = [Map, FileText, Route, Leaf, House, ShieldCheck];
function WhatRemains() {
  const content = proposal.remains;
  return <section id="what-remains" className="proposal-section proposal-remains" data-blueprint-section="C-04" aria-label="What remains if the Community Plan is removed"><Container>
    <ComparisonHeading {...content} image="P068-01" icon={<Layers />} />
    <div className="comparison-remains-diagram"><article className="comparison-remove" aria-labelledby="remove-title"><h3 id="remove-title">REMOVE</h3><ProposalImage id="C04-cover" kind="document" alt="Selected illustrative Community Plan cover with its original diagonal strike preserved; not an authenticated official document cover." /><h4 className="sr-only">{content.removeTitle}</h4><p className="sr-only">{content.removeText}</p><p className="comparison-image-note">Illustrative document preview</p></article>
      <ArrowRight className="comparison-remains-arrow" aria-hidden="true" />
      <article className="comparison-kept" aria-labelledby="remains-title"><h3 id="remains-title">REMAINS</h3><h4 className="comparison-county"><Landmark aria-hidden="true" />{content.county}</h4><ul>{content.protections.map((text, i) => { const Icon = protectionIcons[i]; return <li key={text}><span className="comparison-icon" aria-hidden="true"><Icon /></span><p>{text}</p></li>; })}</ul></article>
    </div>
    <ResultBanner image="C04-banner"><p>{content.message}</p><SourceLink sourceId="SRC-16" className="comparison-county-cta">{content.countyCta}<ArrowRight aria-hidden="true" /></SourceLink></ResultBanner>
    <div className="comparison-campaign"><h3>{content.campaignTitle}</h3><p>{content.campaign}</p></div>
    <aside className="comparison-source-note"><p>{content.sourceNote}</p><SourceLink sourceId="SRC-10">Read the Community Plan</SourceLink><p>Supplied source references; policy interpretation and document dates have not been independently verified.</p></aside>
  </Container></section>;
}

export function ProposalPageContent() {
  return <div className="proposal-page"><Introduction /><div id="compare-the-two-plans"><Container><nav className="proposal-comparison-nav" aria-label="Compare the Two Plans"><p className="eyebrow text-teal">Compare the Two Plans</p><div><a href="#roads-comparison">Roads & Safety<ArrowDown aria-hidden="true" /></a><a href="#water-comparison">Water & Wastewater<ArrowDown aria-hidden="true" /></a><a href="#growth-housing-comparison">Growth & Housing<ArrowDown aria-hidden="true" /></a><a href="#what-remains">What Remains?<ArrowDown aria-hidden="true" /></a></div></nav></Container><RoadsComparison /><WaterComparison /><GrowthComparison /><WhatRemains /></div></div>;
}
