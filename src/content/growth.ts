// Growth, Infrastructure & Daily Life copy — verbatim from approved images G1, G2, G4, G5
// (IMG blocks in docs/sections/growth.md; TXT:1742-1856). Checked by `npm run check:copy`.
// Rich text is split into parts; `em` parts are the coloured/bold phrases shown in the images.
import type { AssetId } from "@/lib/assets";

const img = (id: AssetId) => id;
export type Part = string | { em: string };

export const label = "GROWTH & DAILY LIFE";
export const crumbs = { issues: "ISSUES", growth: "GROWTH, INFRASTRUCTURE & DAILY LIFE" } as const;
export const planPage20 = "https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf#page=20";

export const hero = {
  title: "The community has changed. Planning needs to keep up.",
  intro: "The Keystone–Odessa Community Plan maintains a very-low-density development pattern and limits where many commercial activities can be located and how large they can be. These rules affect housing, distance to services, travel needs, and the ability to provide infrastructure efficiently.",
  // G1 is a PRIVATE PLACEHOLDER (TXT:1767-1769, D-015 OQ-09): keep the red note and all ten sample cells.
  notice: { label: "PRIVATE PLACEHOLDER · OFFICIAL DATA PENDING", text: "Fake data. Official data request pending. I will implement before publication." },
  then: { image: img("growth-then"), alt: "Conceptual aerial illustration of Keystone–Odessa when the Community Plan was created, early 2000s (title and legend are part of the artwork)" },
  today: { image: img("growth-today"), alt: "Conceptual aerial illustration of Keystone–Odessa today, 2026, with newer subdivisions and commercial areas (title and legend are part of the artwork)" },
  thenCells: [
    { icon: "users", value: "~ 4,000", label: "Population" },
    { icon: "house", value: "~ 1,100", label: "Housing units" },
    { icon: "road", value: "Limited", label: "Road network" },
    { icon: "store", value: "Few", label: "Commercial areas" },
    { icon: "tree", value: "Rural character", label: "Mostly large lots and open space" },
  ],
  todayCells: [
    { icon: "users", value: "~ 7,000+", label: "Population" },
    { icon: "house", value: "~ 2,500+", label: "Housing units", up: true },
    { icon: "road", value: "More", label: "Road network", up: true },
    { icon: "store", value: "More", label: "Commercial areas", up: true },
    { icon: "tree", value: "Continued low-density pattern", label: "Growing subdivisions and more development" },
  ],
};

export const density = {
  crumb: "LOW-DENSITY DEVELOPMENT",
  kicker: { number: "03", text: "LOW-DENSITY DEVELOPMENT" },
  title: ["Are we protecting nature,", "or protecting one way of building?"],
  plan: {
    label: "WHAT THE PLAN SAYS",
    text: "The Plan favors a density of one home per five gross acres and discourages amendments to higher density.",
    source: { before: "Policy summary:", link: "Keystone–Odessa Community Plan, Residential provisions." },
  },
  panels: [
    { id: "five", title: "FIVE ACRES. ONE HOME.", subtitle: "A density preference worth challenging.", badge: { small: "ILLUSTRATIVE", text: "10 homes on 50 acres" },
      image: img("growth-density-five-acre"), alt: "Conceptual aerial illustration of ten homes on fifty acres in a five-acre lot pattern",
      view: "OUR VIEW", opinion: ["Calling a pattern “rural” does not settle whether it serves today’s community.", { em: "The five-acre preference deserves scrutiny, not automatic deference." }] },
    { id: "choice", title: "RURAL CHARACTER. MORE CHOICE.", subtitle: "Give alternatives a fair hearing.", badge: { small: null, text: "Same amount of land" },
      image: img("growth-density-moderate"), alt: "Conceptual aerial illustration of the same amount of land with a moderate low-density pattern and narrow rural lanes",
      view: "OUR VIEW", opinion: ["Protect rural character. Demand a fair test of alternatives.", { em: "Conservation, infrastructure and residents’ needs should drive the decision." }] },
  ],
  qualification: "Conceptual illustration, not a measured or engineered site plan. Actual development yield depends on applicable rules and site conditions.",
  questionsTitle: "Five questions the five-acre preference should have to answer",
  questions: [
    { id: "land", title: "Land use", text: "Is this the best use of land?" },
    { id: "housing", title: "Housing choice", text: "Which options should residents have?" },
    { id: "infrastructure", title: "Infrastructure", text: "What are the real service costs?" },
    { id: "services", title: "Daily services", text: "Can daily needs be closer to home?" },
    { id: "travel", title: "Travel choices", text: "Can trips be shorter or less car-dependent?" },
  ],
  note: "Changes to permitted density would still require the applicable policy and zoning approvals.",
};

export type CompareRow = { id: string; title: string; text: Part[] };

export const comparison = {
  crumb: "PLAN COMPARISON",
  kicker: { number: "07", text: "PLAN COMPARISON" },
  title: "Two Approaches to Growth and Development",
  intro: "The Keystone–Odessa Community Plan and the Hillsborough County Comprehensive Plan take different approaches to growth, land use, and development.",
  community: {
    title: ["KEYSTONE–ODESSA", "COMMUNITY PLAN"], subtitle: "Emphasizes a very-low-density rural pattern.",
    rows: [
      { id: "land", title: "LAND USE PATTERN", text: ["Emphasizes a", { em: "very-low-density rural pattern." }] },
      { id: "density", title: "DENSITY POLICIES", text: ["Policies of approximately", { em: "1 dwelling unit per 5 acres" }, "in the relevant areas."] },
      { id: "commercial", title: "COMMERCIAL DEVELOPMENT", text: [{ em: "Limits commercial development" }, "by location, scale, and rural character."] },
      { id: "flex", title: "FLEXIBILITY", text: [{ em: "Limits the ability of the development pattern" }, "to adapt as community conditions change."] },
    ] satisfies CompareRow[],
  },
  county: {
    title: ["HILLSBOROUGH COUNTY", "COMPREHENSIVE PLAN"], subtitle: "Plans land use within a countywide framework.",
    rows: [
      { id: "framework", title: "COUNTYWIDE LAND USE FRAMEWORK", text: ["Plans land use through a", { em: "countywide framework that considers growth, development, and infrastructure together." }] },
      { id: "tools", title: "LAND-USE AND DEVELOPMENT TOOLS", text: ["Provides", { em: "additional land-use and development tools" }, "for evaluating how and where development can occur."] },
      { id: "services", title: "SERVICES AND DEVELOPMENT", text: ["Allows", { em: "service and development needs" }, "to be evaluated together with land use and infrastructure."] },
      { id: "growth", title: "GROWTH AND INFRASTRUCTURE", text: ["Allows", { em: "growth to be evaluated together with infrastructure capacity" }, "and countywide planning standards."] },
    ] satisfies CompareRow[],
  },
  detail: {
    title: "See the Detailed Policy Comparison",
    text: "This section provides a summary comparison. For the full side-by-side analysis of policies, standards, and their impacts, please visit the Complete Growth & Development Comparison page.",
    cta: { label: "View the Growth & Development Comparison →", href: "/comparison#growth-housing" },
  },
};

export const evidence = {
  crumb: "EVIDENCE",
  kicker: { number: "09", text: "EVIDENCE" },
  title: "See the Evidence Behind the Issue",
  intro: "These documents, data, and maps show how the Community Plan affects growth, development, and daily life in Keystone–Odessa.",
  // Card destinations have not been supplied (D-015 OQ-22): each opens the "Not available yet" notice.
  cards: [
    { id: "plan", title: "Community Plan", text: "Density, rural character, commercial policies", action: "View Document →", image: img("growth-evidence-plan") },
    { id: "landuse", title: "Land-Use Maps", text: "Residential pattern & development", action: "View Map →", image: img("growth-evidence-landuse") },
    { id: "housing", title: "Housing Data", text: "Lots, housing units & development", action: "View Data →", image: img("growth-evidence-housing") },
    { id: "service", title: "Service Map", text: "Grocery, healthcare, childcare & employment", action: "View Map →", image: img("growth-evidence-service") },
    { id: "travel", title: "Travel Data", text: "Distances, drive times & traffic", action: "View Data →", image: img("growth-evidence-travel") },
    { id: "infrastructure", title: "Infrastructure Records", text: "Roads, utilities, drainage & development", action: "View Records →", image: img("growth-evidence-infrastructure") },
  ],
};

export const next = {
  kicker: { number: "10", text: "NEXT" },
  title: "Outdated Community Plan",
  text: "A Community Plan created for the conditions of more than two decades ago continues to shape the roads, water, growth, and daily life of Keystone–Odessa today.",
  cta: { label: "Learn About the Community Plan →", href: "/issues#community-plan" },
  image: img("growth-next-aerial"),
};
