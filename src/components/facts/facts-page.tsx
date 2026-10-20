import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CalendarDays, Droplets, FileText, House, Map, Route, Scale, Settings } from "lucide-react";
import { facts } from "@/content/facts";
import { water } from "@/content/water";
import { getBlueprintSource } from "@/content/sources";
import { getDemoPhoto, illustrativeDocumentAssets, screenshotVisualAssets } from "@/content/assets";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SourceLink } from "@/components/content/source-link";
import { DemoPreview } from "@/components/demo/demo-preview";

const groupIcons = { road: Route, water: Droplets, growth: House, plan: FileText };
const categoryIcons = { Data: BarChart3, Maps: Map, Records: FileText, Policies: Settings, Documents: FileText, Comparison: Scale };
function FactsImage({ id, kind = "photo", alt = "", eager = false }: { id: string; kind?: "photo" | "document" | "visual"; alt?: string; eager?: boolean }) {
  const asset = kind === "photo" ? getDemoPhoto(id) : kind === "document" ? illustrativeDocumentAssets.find((a) => a.id === id) : screenshotVisualAssets.find((a) => a.id === id);
  if (!asset?.publicPath || !asset.width || !asset.height) throw new Error(`Missing Facts asset: ${id}`);
  return <Image src={asset.publicPath} width={asset.width} height={asset.height} unoptimized alt={alt} loading={eager ? "eager" : "lazy"} className="facts-image" style={{ maxWidth: asset.width }} data-facts-asset={id} />;
}
function IssueGroups() { return <section className="facts-section facts-overview" data-blueprint-section="F-01" aria-labelledby="facts-title"><Container>
  <div className="facts-heading-grid"><div><p className="eyebrow text-teal">EVIDENCE</p><h1 id="facts-title">{facts.title}</h1><p className="facts-lead">{facts.intro}</p></div><FactsImage id="P070-01" alt="Visible portion of the selected faded landscape illustration; original baked-in fade preserved." eager /></div>
  <div className="facts-group-grid">{facts.groups.map((group) => { const Icon = groupIcons[group.icon]; return <article key={group.id} className={`facts-group facts-group-${group.icon}`} aria-labelledby={`group-${group.id}`}>
    <FactsImage id={group.image} kind={group.kind} alt={group.kind === "document" ? "Illustrative composition of the Community Plan, Comprehensive Plan and Land Development Code covers; not authenticated original documents." : "Illustrative photograph from the selected evidence-group design; not a verified local record."} eager />
    <div className="facts-group-content"><div className="facts-group-title"><span><Icon aria-hidden="true" /></span><h2 id={`group-${group.id}`}>{group.title}</h2></div>
      <dl className="facts-category-list">{group.categories.map((category) => { const CategoryIcon = categoryIcons[category.label]; return <div key={category.label}><dt><CategoryIcon aria-hidden="true" />{category.label}</dt><dd>{category.text}</dd></div>; })}</dl>
      {group.kind === "document" && <p className="facts-image-caption">Illustrative document preview</p>}
      <Button asChild className="facts-group-cta"><a href={`#${group.id}`}>{group.cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></a></Button>
    </div>
  </article>; })}</div>
</Container></section>; }
function LibraryToolsPreview() { return <aside className="facts-tools-preview" aria-label="Library tools demo preview"><div><h3>Library tools — demo preview</h3><p>Search, filters, sorting and pagination are not available in this demo. Browse the fixed source list below.</p></div><DemoPreview title="Search and filters — demo preview">Preview library tools</DemoPreview></aside>; }
function LibraryRecords() { return <div className="facts-records">{facts.library.records.map((record) => <article key={record.id} id={`record-${record.id}`} className="facts-record" aria-labelledby={`title-${record.id}`}>
  <div className="facts-record-image"><FactsImage id={record.image} kind={record.kind} alt={record.kind === "photo" ? "Illustrative photograph from the selected library row; not a verified source record." : record.kind === "visual" ? "Complete visible septic map thumbnail from the selected library illustration; not verified GIS data." : "Illustrative document thumbnail from the selected library design; not an authenticated preview of the linked original."} /><p className="facts-image-caption">{record.kind === "photo" ? "Illustrative photograph" : record.kind === "visual" ? "Illustrative map preview" : "Illustrative document preview"}</p></div>
  <div className="facts-record-main"><h3 id={`title-${record.id}`}>{record.title}</h3><p className="facts-record-notice">Illustrative record — metadata and purpose unverified.</p>
    <dl className="facts-record-meta"><div><dt><FileText aria-hidden="true" /><span className="sr-only">Document Type: </span></dt><dd>{record.type}</dd></div><div><dt><Building2 aria-hidden="true" /><span className="sr-only">Agency: </span></dt><dd>{record.agency}</dd></div><div><dt><CalendarDays aria-hidden="true" /><span className="sr-only">Date: </span></dt><dd>{record.date ?? "Not supplied in the selected artwork."}</dd></div></dl>
    <p className="facts-purpose"><strong>The website uses this document to: </strong>{record.purpose}</p>
  </div><div className="facts-record-related"><h4>RELATED TO</h4><ul>{record.related.map((label) => <li key={label}>{label}</li>)}</ul></div>
  <div className="facts-record-action">{record.sourceId ? <><SourceLink sourceId={record.sourceId} className="facts-source-link">View the Original Document<ArrowRight className="size-4" aria-hidden="true" /></SourceLink><p>Supplied link; thumbnail, metadata and purpose have not been authenticated against this original.</p></> : <DemoPreview title={`${record.title} — original source not supplied or verified`}>View the Original Document<ArrowRight aria-hidden="true" /></DemoPreview>}</div>
</article>)}</div>; }
function SuppliedSources() { return <div className="facts-source-catalog" aria-labelledby="supplied-sources-title"><h3 id="supplied-sources-title">Supplied source links</h3><p className="facts-source-note">These are the links supplied in the blueprint, grouped for browsing. This is not a complete or verified record inventory. Multiple links can refer to the same document. A supplied link does not authenticate the illustrative records above or verify a local finding.</p>
  <div className="facts-source-groups">{facts.groups.map((group) => <section key={group.id} id={group.id} className="facts-source-group" aria-labelledby={`sources-${group.id}`}><h4 id={`sources-${group.id}`}>{group.title}</h4><ul>{group.sourceIds.map((id) => { const source = getBlueprintSource(id); return <li key={id}><SourceLink sourceId={id} className="facts-source-link">{source.first_label}</SourceLink><span>Supplied link — claims not independently verified.</span></li>; })}</ul></section>)}</div>
</div>; }
function EvidenceLibrary() { return <section id="evidence-library" className="facts-section facts-library" data-blueprint-section="F-02" aria-labelledby="facts-library-title"><Container>
  <div className="facts-heading-grid"><div><p className="eyebrow text-coral">EVIDENCE LIBRARY</p><h2 id="facts-library-title" className="facts-heading">{facts.library.title}</h2><p className="facts-lead">{facts.library.intro}</p></div><FactsImage id="P072-01" alt="Visible portion of the selected library landscape; original baked-in fade preserved." /></div>
  <LibraryToolsPreview /><p className="facts-library-notice">Selected record previews — not a verified full inventory. No verified result count is available. Dates, agencies and purposes shown in these examples require confirmation against the original records.</p>
  <LibraryRecords /><p className="facts-scope">{water.scope}</p><SuppliedSources />
  <div className="facts-action" aria-labelledby="facts-action-title"><div><p className="eyebrow text-teal">FROM EVIDENCE TO ACTION</p><h3 id="facts-action-title">{facts.action.title}</h3><p>{facts.action.text}</p></div><div className="facts-action-side"><Button asChild className="facts-action-cta"><Link href="/take-action">{facts.action.cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></Link></Button><FactsImage id="P072-07" alt="Small visible countryside strip from the selected action banner; the hidden background has not been reconstructed." /></div></div>
</Container></section>; }
export function FactsPageContent() { return <div className="facts-page"><IssueGroups /><EvidenceLibrary /></div>; }
