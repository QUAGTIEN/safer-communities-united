// PDF 69–72; artwork-only copy is transcribed in FACTS_ARTWORK_TRANSCRIPT.md.
// Metadata and purposes from the selected library mockup are unverified examples.
export const facts = {
  title: "Explore Evidence by Issue",
  intro: "Browse data, maps, public records, and policies for each key issue in Keystone–Odessa.",
  groups: [
    { id: "road-evidence", title: "ROADS & SAFETY", image: "P070-02", kind: "photo", icon: "road", cta: "View Road Evidence →", categories: [
      { label: "Data", text: "Crash · Severity · Traffic · Speed" },
      { label: "Maps", text: "Road Network · Corridors · Intersections · Community Plan Boundary" },
      { label: "Records", text: "Projects · Studies · Agency Responses" },
      { label: "Policies", text: "Gunn Highway · Road Configuration · Lighting" },
    ], sourceIds: ["SRC-08", "SRC-09", "SRC-11", "SRC-12", "SRC-13", "SRC-14", "SRC-15"] },
    { id: "water-evidence", title: "WATER & SEPTIC", image: "P070-03", kind: "photo", icon: "water", cta: "View Water Evidence →", categories: [
      { label: "Data", text: "Septic Classification · Repair Records" },
      { label: "Maps", text: "Septic · Wells · Groundwater · Wellfield/Wellhead · Lakes & Wetlands" },
      { label: "Records", text: "Water Infrastructure · Drainage · Monitoring" },
      { label: "Policies", text: "Community Plan · One Water · Water/Wastewater Policies" },
    ], sourceIds: ["SRC-17", "SRC-18"] },
    { id: "growth-evidence", title: "GROWTH, HOUSING & SERVICES", image: "P070-04", kind: "photo", icon: "growth", cta: "View Growth Evidence →", categories: [
      { label: "Data", text: "Housing · Lots · Development · Travel" },
      { label: "Maps", text: "Land Use · Residential Pattern · Services · Infrastructure" },
      { label: "Records", text: "Development & Infrastructure Records" },
      { label: "Policies", text: "Density · Commercial Development · Future Land Use" },
    ], sourceIds: ["SRC-02", "SRC-03", "SRC-04", "SRC-05", "SRC-06", "SRC-07"] },
    { id: "planning-documents", title: "COMMUNITY PLAN & COUNTY FRAMEWORK", image: "F01-documents", kind: "document", icon: "plan", cta: "View Planning Documents →", categories: [
      { label: "Documents", text: "Community Plan · Comprehensive Plan · Land Development Code" },
      { label: "Policies", text: "Roads · Water · Growth · Housing · Infrastructure · Environment" },
      { label: "Comparison", text: "Policy → Practical Effect → County Framework → Source" },
    ], sourceIds: ["SRC-01", "SRC-10", "SRC-16", "SRC-19", "SRC-20", "SRC-21"] },
  ],
  library: {
    title: "Find All Data and Documents",
    intro: "Demo: browse the selected source cards and supplied document links.",
    records: [
      { id: "livable-communities", title: "Livable Communities Element (includes Keystone–Odessa Community Plan)", type: "Planning Document", agency: "Hillsborough County", date: null,
        purpose: "Show the adopted Keystone–Odessa Community Plan and countywide comprehensive plan policies.",
        related: ["Community Plan", "Land Use", "Growth"], image: "F02-cover", kind: "document", sourceId: "SRC-10" },
      { id: "agency-response", title: "Response to Public Records Request", type: "Public Record", agency: "Hillsborough County Planning Commission", date: null,
        purpose: "Confirm that no new update has been requested by the Board of County Commissioners and provide information on financial records.",
        related: ["Community Plan", "Planning Process"], image: "F02-response", kind: "document", sourceId: "SRC-21" },
      { id: "water-records", title: "Water Infrastructure Records", type: "Public Record", agency: "Hillsborough County Environmental Health Division", date: null,
        purpose: "Provide records related to water infrastructure, drainage issues, and monitoring in the Keystone–Odessa area.",
        related: ["Water", "Drainage", "Environment"], image: "P072-04", kind: "photo", sourceId: null },
      { id: "repair-records", title: "Septic System Repair Records (1998–2023)", type: "Data", agency: "Hillsborough County Environmental Health", date: "1998 – 2023",
        purpose: "Show 806 construction/repair records and application dates.",
        related: ["Septic", "Water", "Infrastructure"], image: "P072-05", kind: "photo", sourceId: null },
      { id: "classification-data", title: "Septic Classification Data (ZIP 33556)", type: "Data", agency: "Hillsborough County", date: "N/A",
        purpose: "Show 7,191 records analyzed, including 1,626 Known, 1,210 Likely, and 251 Somewhat Likely Septic.",
        related: ["Septic", "Water", "Environment"], image: "F02-map", kind: "visual", sourceId: null },
    ],
  },
  action: {
    title: "The Community’s Voice Can Help Shape What Happens Next.",
    text: "You’ve seen the issues, the evidence and the plan. Now you can take action to support a safer, healthier, and stronger future for Keystone–Odessa.",
    cta: "Take Action →",
  },
} as const;
