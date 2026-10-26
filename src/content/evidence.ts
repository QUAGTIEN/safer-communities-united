// The Facts — Evidence & Records copy, verbatim from approved images R3 and E1
// (IMG blocks in docs/sections/evidence.md; TXT:2018-2095). Checked by `npm run check:copy`.
// Library filters, search, sort and pagination are static preview labels only (TXT:2079-2080, D-015 OQ-26).
import type { AssetId } from "@/lib/assets";

const img = (id: AssetId) => id;

export const evidenceLinks = {
  livable: "https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf",
} as const;

export const issues = {
  eyebrow: "EVIDENCE",
  title: "Explore Evidence by Issue",
  intro: "Browse data, maps, public records, and policies for each key issue in Keystone–Odessa.",
  cards: [
    { id: "roads", image: img("evidence-r3-roads"), alt: "Gunn Highway, Keystone", caption: { line: "Gunn Highway, Keystone · April 20, 2016", before: "Source:", link: "Alex Nitzman / AARoads" }, title: "ROADS & SAFETY",
      groups: [{ icon: "data", label: "Data", text: "Crash · Severity · Traffic · Speed" }, { icon: "map", label: "Maps", text: "Road Network · Corridors · Intersections · Community Plan Boundary" }, { icon: "records", label: "Records", text: "Projects · Studies · Agency Responses" }, { icon: "policies", label: "Policies", text: "Gunn Highway · Road Configuration · Lighting" }],
      cta: "View Road Evidence →" },
    { id: "water", image: img("evidence-r3-water"), alt: "Lake Rogers, Odessa", caption: { line: "Lake Rogers, Odessa · Photo date unverified", before: "Source:", link: "Florida Hikes" }, title: "WATER & SEPTIC",
      groups: [{ icon: "data", label: "Data", text: "Septic Classification · Repair Records" }, { icon: "map", label: "Maps", text: "Septic · Wells · Groundwater · Wellfield/Wellhead · Lakes & Wetlands" }, { icon: "records", label: "Records", text: "Water Infrastructure · Drainage · Monitoring" }, { icon: "policies", label: "Policies", text: "Community Plan · One Water · Water/Wastewater Policies" }],
      cta: "View Water Evidence →" },
    { id: "growth", image: img("evidence-r3-growth"), alt: "", caption: { line: "Planning symbol · not a geographic map" }, title: "GROWTH, HOUSING & SERVICES",
      groups: [{ icon: "data", label: "Data", text: "Housing · Lots · Development · Travel" }, { icon: "map", label: "Maps", text: "Land Use · Residential Pattern · Services · Infrastructure" }, { icon: "records", label: "Records", text: "Development & Infrastructure Records" }, { icon: "policies", label: "Policies", text: "Density · Commercial Development · Future Land Use" }],
      cta: "View Growth Evidence →" },
    { id: "plans", image: img("evidence-r3-plans"), alt: "", caption: { line: "Illustration · not original document covers" }, title: "COMMUNITY PLAN & COUNTY FRAMEWORK",
      groups: [{ icon: "documents", label: "Documents", text: "Community Plan · Comprehensive Plan · Land Development Code" }, { icon: "policies", label: "Policies", text: "Roads · Water · Growth · Housing · Infrastructure · Environment" }, { icon: "comparison", label: "Comparison", text: "Policy → Practical Effect → County Framework → Source" }],
      cta: "View Planning Documents →" },
  ],
};

export type LibraryRecord = { id: string; title: string; type: string; agency: string; date?: string; uses: string; related: string[]; image: AssetId; href: string | null };

export const library = {
  eyebrow: "EVIDENCE LIBRARY",
  title: "Find All Data and Documents",
  intro: "Search and browse the full collection of data, maps, public records, planning documents, and studies related to Keystone–Odessa.",
  header: img("evidence-e1-header"),
  filters: [
    { icon: "layers", label: "Topic", value: "All Topics" },
    { icon: "file", label: "Source Type", value: "All Types" },
    { icon: "landmark", label: "Agency", value: "All Agencies" },
    { icon: "calendar", label: "Year", value: "All Years" },
  ],
  search: { placeholder: "Search documents, maps, records...", button: "Search" },
  // Illustrative count and metadata (TXT:2090): not a verified inventory.
  count: "124 results",
  sort: { label: "Sort by:", value: "Newest First" },
  usesLabel: "The website uses this document to:",
  relatedLabel: "RELATED TO",
  action: "View the Original Document →",
  records: [
    { id: "livable", title: "Livable Communities Element (includes Keystone–Odessa Community Plan)", type: "Planning Document", agency: "Hillsborough County", uses: "Show the adopted Keystone–Odessa Community Plan and countywide comprehensive plan policies.", related: ["Community Plan", "Land Use", "Growth"], image: img("evidence-e1-thumb-livable"), href: evidenceLinks.livable },
    // The supplied link is a private Google Drive file (D-015 OQ-23): not exposed.
    { id: "records", title: "Response to Public Records Request", type: "Public Record", agency: "Hillsborough County Planning Commission", uses: "Confirm that no new plan update has been requested by the Board of County Commissioners and provide information on financial records.", related: ["Community Plan", "Planning Process"], image: img("evidence-e1-thumb-public-records"), href: null },
    { id: "water", title: "Water Infrastructure Records", type: "Public Record", agency: "Hillsborough County Environmental Health Division", uses: "Provide records related to water infrastructure, drainage issues, and monitoring in the Keystone–Odessa area.", related: ["Water", "Drainage", "Environment"], image: img("evidence-e1-thumb-water"), href: null },
    { id: "repair", title: "Septic System Repair Records (1998–2023)", type: "Data", agency: "Hillsborough County Environmental Health", date: "1998 – 2023", uses: "Show 806 construction/repair records and application dates.", related: ["Septic", "Water", "Infrastructure"], image: img("evidence-e1-thumb-septic-repair"), href: null },
    { id: "classification", title: "Septic Classification Data (ZIP 33556)", type: "Data", agency: "Hillsborough County", date: "N/A", uses: "Show 7,191 records analyzed, including 1,626 Known, 1,210 Likely, and 251 Somewhat Likely Septic.", related: ["Septic", "Water", "Environment"], image: img("evidence-e1-thumb-septic-classification"), href: null },
  ] satisfies LibraryRecord[],
  pages: ["‹", "1", "2", "3", "4", "5", "…", "13", "›"],
  action2: {
    eyebrow: "FROM EVIDENCE TO ACTION",
    title: "The Community’s Voice Can Help Shape What Happens Next.",
    text: "You’ve seen the issues, the evidence, and the plan. Now you can take action to support a safer, healthier, and stronger future for Keystone–Odessa.",
    strip: img("drawn-landscape"), // 5B, D-025 (landscape band); redrawn as vector, D-026
    cta: { label: "Take Action →", href: "/take-action" },
  },
};
