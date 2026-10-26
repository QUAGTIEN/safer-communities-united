// Water & Septic page copy — verbatim from the approved section images W6, W3, R2, W1, W2, W4, W5, W7
// (IMG blocks in docs/sections/water.md; later-page references, TXT:1509-1736). Checked by `npm run check:copy`.
import type { AssetId } from "@/lib/assets";

const img = (id: AssetId) => id;

export const links = {
  epa: "https://www.epa.gov/septic/septic-systems-and-drinking-water",
  countyPlan: "https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf",
  oneWater437: "https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=233",
} as const;

export const label = "WATER & SEPTIC";
export const crumbs = { issues: "ISSUES", water: "WATER & SEPTIC" } as const;

// Water section menu (TXT:1553, D-015 OQ-21): 04 and 05 have no section and open the notice.
export const waterMenu = [
  { number: "01", label: "Septic Concentration", target: "septic-concentration", icon: "database" },
  { number: "02", label: "Septic Repairs", target: "septic-repairs", icon: "wrench" },
  { number: "03", label: "Connected System", target: "connected-system", icon: "waves" },
  { number: "04", label: "Groundwater", target: null, icon: "droplet" },
  { number: "05", label: "Lakes & Wetlands", target: null, icon: "sprout" },
  { number: "06", label: "Infrastructure", target: "water-wastewater-options", icon: "cog" },
] as const;

// Issues-level menu under the W6 hero (D-015 OQ-21).
export const issuesMenu = [
  { number: "01", label: "Roads & Safety", href: "/issues/roads-safety", icon: "road" },
  { number: "02", label: "Water & Septic", href: "/issues/water-septic", icon: "droplet" },
  { number: "03", label: "Services & Access", href: "/issues/growth-daily-life", icon: "building" },
  { number: "04", label: "The Community Plan", href: "/issues#community-plan", icon: "file" },
] as const;

export const hero = {
  title: "Protect our water. Open the door to better solutions.",
  intro: "Residents who rely on wells and septic systems deserve workable options. The Community Plan must be judged by how well it protects water resources, and the County’s restrictions on water and wastewater options in Keystone–Odessa deserve scrutiny.",
  cta: "View the Issue ↓",
  photo: img("water-hero-lake-keystone"),
  photoAlt: "Aerial photograph of Lake Keystone, Odessa, with tree-lined shores",
  caption: "Lake Keystone, Odessa · Source: Noble Star Realty · Photo date unverified",
  steps: [
    { title: "SEPTIC SYSTEMS", text: "Wastewater is managed onsite through septic systems in many properties.", image: img("water-circle-septic") },
    { title: "GROUNDWATER", text: "Septic systems and drinking-water wells share the same groundwater environment.", image: img("water-circle-groundwater") },
    { title: "PRIVATE WELLS", text: "Groundwater supplies drinking water to many properties.", image: img("water-circle-wells") },
  ],
  message: "When septic systems, private wells and groundwater are connected, water and wastewater planning becomes a health, safety and environmental issue.",
};

export const concentration = {
  crumb: "SEPTIC CONCENTRATION",
  kicker: "01 — SEPTIC CONCENTRATION",
  title: "The scale of septic is not a small issue.",
  intro: "Thousands of records in Odessa are classified as septic-related.",
  total: { value: "7,191", label: "Total records (Odessa ZIP 33556)" },
  groups: [
    { id: "known", value: "1,626", label: "Known Septic" },
    { id: "likely", value: "1,210", label: "Likely Septic" },
    { id: "somewhat", value: "251", label: "Somewhat Likely Septic" },
  ],
  summary: { before: "A total of", value: "3,087", after: "records are in the three septic classification groups in the Odessa ZIP 33556 dataset." },
  map: img("water-septic-map"),
  mapAlt: "Map of septic records in Odessa ZIP 33556 (known, likely and somewhat likely septic) with the Keystone–Odessa Community Plan boundary",
  message: "This is an actual condition that the Keystone–Odessa planning framework must be able to address.",
};

export const repairs = {
  crumb: "SEPTIC REPAIRS",
  kicker: "02 — SEPTIC REPAIRS",
  title: "Septic systems have needed repairs for many years.",
  intro: "806 repair records show that this is an issue that has continued over time.",
  stats: [
    { id: "total", value: "806", label: "EHDConst–Repair records (1998 – 2023)" },
    { id: "known", value: "738", label: "Known Septic" },
    { id: "likely", value: "41", label: "Likely Septic" },
    { id: "somewhat", value: "27", label: "Somewhat Likely Septic" },
  ],
  map: img("water-repairs-map"),
  mapAlt: "Map of septic repair records 1998–2023 within the Keystone–Odessa Community Plan boundary",
  message: "Planning policy must be able to respond to the actual conditions of today.",
};

export const connected = {
  crumb: "CONNECTED SYSTEM",
  kicker: "03 — CONNECTED SYSTEM",
  title: "WHAT GOES INTO THE GROUND CAN REACH THE WATER WE RELY ON.",
  intro: "Private wells draw from groundwater. When septic systems fail or wastewater is inadequately treated, contaminants can reach that water. Soil conditions, the number of systems and distance to wells matter.",
  block: img("water-connected-3d"),
  blockAlt: "Conceptual 3D illustration of septic systems, private wells, lakes and wetlands, groundwater protection areas and wellfields in one landscape",
  banner: "THE CONNECTION DOESN’T STOP AT YOUR PROPERTY LINE.",
  section: img("water-connected-cross-section"),
  sectionAlt: "Conceptual cross-section showing a septic system, a private well, a lake or wetland and the shared groundwater beneath them",
  disclaimer: "Conceptual illustration; not a documented contamination event.",
  question: ["WHAT GOOD IS PROTECTING A RURAL IMAGE", "IF WE DON’T PUT WATER PROTECTION FIRST?"],
  text: "Keeping Keystone–Odessa beautiful should include serious scrutiny of the rules governing water and wastewater infrastructure. No planning document should be beyond question.",
  callout: { title: "PROTECT OUR WATER. RETHINK THE RULES.", text: "Our petition calls for retiring the Community Plan and changing the related restrictions, with health, safety and welfare at the centre of County decisions." },
  source: { label: "Source: EPA — Septic Systems and Drinking Water", link: "epa.gov/septic/septic-systems-and-drinking-water" },
};

export const options = {
  crumb: "WATER & WASTEWATER OPTIONS",
  kicker: "06 — WATER & WASTEWATER OPTIONS",
  title: ["OUR WATER.", "FEWER OPTIONS.", "WHY?"],
  intro: "The County has water and sewer pathways for certain environmental problems, septic concerns and water-resource protection. Keystone–Odessa is expressly excluded from several of them. Why should our community accept fewer options for addressing these needs?",
  photo: img("water-options-lake"),
  photoAlt: "Lake Rogers, Odessa, seen through native grasses and shrubs",
  steps: [
    { number: "1", title: "REAL CONDITIONS. REAL NEEDS.", text: "Private wells, septic systems and sensitive water resources make infrastructure choices important." },
    { number: "2", title: "THE COUNTY HAS TOOLS TO RESPOND.", text: "Specific policies allow consideration of connections for qualifying environmental and public-interest circumstances." },
    { number: "3", title: "KEYSTONE–ODESSA: EXPLICITLY LEFT OUT.", text: "Policy 4.3.7 excludes this area from several of those pathways." },
    { number: "4", title: "WHY DEFEND A RESTRICTION BEFORE CONSIDERING A SOLUTION?", text: "Preserving rural character should not put these policy choices beyond scrutiny." },
  ],
  circles: [img("water-options-circle-1"), img("water-options-circle-2"), img("water-options-circle-3")],
  door: {
    title: "OUR COMMUNITY DESERVES MORE THAN A CLOSED DOOR.",
    text: "Sign our petition to retire the Community Plan and support the related County policy changes needed to reopen these options.",
    cta: { label: "Get Involved", href: "/take-action" },
    note: "Some connection routes remain available, including the documented public-health-hazard route.",
    exclusions: { label: "Read the exclusions →", note: "One Water 4.3.7", href: links.oneWater437 },
  },
  policy: {
    title: "THE EXCLUSIONS ARE WRITTEN INTO POLICY.",
    text: "One Water 4.3.7 excludes Keystone–Odessa from specified environmental, flood-prone septic and wellhead-area routes, plus the overriding-public-interest process. Read the criteria behind each route.",
    source: "Source: County Comprehensive Plan One Water and Mobility. County compilation dated June 26, 2026. One Water 4.3.2–4.3.7: pp. 229–234. Mobility 5.1.2–5.1.4: p. 135. Constrained roads: pp. 250–251.",
    link: { label: "Read the County policy and full criteria", href: links.countyPlan },
  },
};

export const conflict = {
  title: "LEFT OUT. BY CHOICE.",
  strip: img("water-leftout-strip"),
  intro: ["In 2024, the County expanded rural water and sewer options.", "Commissioners excluded Keystone–Odessa from several of them."],
  cards: [
    { id: "staff", icon: img("water-leftout-document-icon"), title: ["STAFF SUPPORTED", "CONSISTENCY"], text: ["Planning staff said safeguards", "addressed development concerns.", "Commissioners chose exclusion."], link: { label: "Read the 2024 staff report →", href: null } },
    { id: "health", icon: img("water-leftout-shield-icon"), title: ["HEALTH. SAFETY.", "WELFARE."], text: ["One excluded utility review weighs", "these public interests.", "Why exclude Keystone–Odessa?"], link: { label: "Read Policies 4.3.5 and 4.3.7 →", href: links.oneWater437 } },
  ],
  closing: { icon: img("water-leftout-drop-icon"), title: ["REVERSE THE EXCLUSIONS.", "OPEN THE OPTIONS."] },
  sources: "Sources: HC/CPA 23-18 • May 9, 2024 Board minutes • One Water 4.3.5 and 4.3.7",
};

export const comparison = {
  crumb: "COMMUNITY PLAN VS COUNTY COMPREHENSIVE PLAN",
  kicker: "08 — COMMUNITY PLAN VS COUNTY COMPREHENSIVE PLAN",
  title: "Two Approaches to the Same Issue",
  intro: "Both plans address water and wastewater, but they take different approaches. The Keystone–Odessa Community Plan relies heavily on private wells and septic and limits some solutions, while the Hillsborough County Comprehensive Plan has a broader framework with more pathways to respond to environmental conditions and infrastructure needs.",
  community: {
    title: ["KEYSTONE–ODESSA", "COMMUNITY PLAN"],
    photo: img("water-compare-community"),
    rows: ["Relies heavily on private wells and septic.", "Limits some utility extensions.", "Does not have a specific equivalent safeguard for septic concentration.", "Some Countywide pathways are excluded.", "Water protection is a goal, but response options are more limited."],
  },
  county: {
    title: ["HILLSBOROUGH COUNTY", "COMPREHENSIVE PLAN"],
    photo: img("water-compare-county"),
    rows: ["Has a broader water & wastewater framework.", "Has pathways for some environmental conditions.", "Has a pathway related to septic concentration under specified conditions.", "Has tools related to wellhead/wellfield protection.", "Combines resource protection with infrastructure response."],
  },
  cta: { label: "View the Full Water & Wastewater Comparison →", href: "/comparison#water" },
};

export type EvidenceCard = { id: string; title: string; subtitle: string; finding: string; source: string; date: string; image: AssetId };

export const evidence = {
  kicker: "09 — EVIDENCE",
  title: "See the Data and Records Behind the Issue.",
  intro: "These sources show the data and records related to water, septic, wellhead/wellfield protection, and planning policies in Keystone–Odessa.",
  labels: { finding: "Finding:", source: "Source:", date: "Date:", action: "View Original Document →" },
  cards: [
    { id: "septic", title: "Septic Data", subtitle: "FLWMI Odessa ZIP 33556", finding: "1,626 known septic, 1,210 likely septic, and 251 somewhat likely septic in Odessa ZIP 33556.", source: "Florida Water Management Inventory (FLWMI)", date: "2024 (latest available)", image: img("water-evidence-septic") },
    { id: "repair", title: "Repair Records", subtitle: "EHDConst–Repair 1998–2023", finding: "806 records for septic system construction/repair (738 known septic, 41 likely septic, 27 somewhat likely septic).", source: "EHDConst–Repair applications", date: "1998–2023", image: img("water-evidence-repair") },
    { id: "maps", title: "Water & Well Maps", subtitle: "Wells, groundwater and protection areas", finding: "Maps show private wells, groundwater, wellhead/ wellfield protection areas, lakes and wetlands in the area.", source: "Hillsborough County and partner data", date: "Various (latest available)", image: img("water-evidence-maps") },
    { id: "records", title: "Public Records", subtitle: "Water/wastewater infrastructure and monitoring records", finding: "Documents include water infrastructure, drainage, and water monitoring records related to the area.", source: "Hillsborough County (Records provided in response to public records requests)", date: "2024–2025", image: img("water-evidence-public") },
    { id: "policies", title: "Planning Policies", subtitle: "Community Plan + One Water + County Comprehensive Plan", finding: "Policies show water protection goals, Countywide One Water pathways, and exclusion of some pathways for the Community Plan area.", source: "Livable Communities Element (Keystone–Odessa), One Water, County Comprehensive Plan", date: "Various (latest available)", image: img("water-evidence-policies") },
  ] satisfies EvidenceCard[],
};

export const next = {
  eyebrow: "NEXT ISSUE",
  kicker: "10 — WHAT’S NEXT",
  title: "Water is part of a larger issue.",
  text: "The Community Plan rules also affect growth, infrastructure, housing, and access to everyday services.",
  cta: { label: "Next: Growth, Infrastructure & Daily Life →", href: "/issues/growth-daily-life" },
  photo: img("water-next-road"),
};
