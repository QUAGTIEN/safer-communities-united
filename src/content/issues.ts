// Issues page copy — verbatim from the 22 October 2026 Issues inventory (docs/sections/issues.md,
// TXT:386-621). Checked by `npm run check:copy`. Strings split at the inventory's forced
// desktop line breaks (↵) or at a colour change keep the exact characters.
import type { AssetId } from "@/lib/assets";

export const opening = {
  eyebrow: "ISSUES",
  title: "Issues affecting Keystone–Odessa",
  intro: "From roads and water to growth, housing, infrastructure and essential services, the current Community Plan creates real challenges for today’s residents. Explore each issue below to see how these problems affect our community and why change is needed.",
} as const;

export const tabs = [
  { id: "roads-safety", label: "Roads & Safety" },
  { id: "water-septic", label: "Water & Septic" },
  { id: "growth-daily-life", label: "Growth & Daily Life" },
  { id: "community-plan", label: "Community Plan" },
] as const;

export const roads = {
  eyebrow: "ROADS & SAFETY",
  title: "Roads must meet the safety needs of today’s community",
  image: "issues-roads-gunn-highway" satisfies AssetId,
  credit: { text: "Gunn Highway, Keystone · April 20, 2016 · Photo:", link: "Alex Nitzman / AARoads" },
  intro: "Our road network serves residents, commuters, students, emergency responders, deliveries and essential services. Safe and reliable roads are critical for everyone in Keystone–Odessa.",
  topics: [
    { id: "gunn", title: "Gunn Highway", text: "A key corridor with specific restrictions under the current Community Plan." },
    { id: "lighting", title: "Street Lighting", text: "Limited by current rules, even where lighting could improve safety." },
    { id: "traffic", title: "Traffic & Intersections", text: "Growing traffic and safety concerns at key intersections." },
    { id: "walking", title: "Walking & Biking", text: "Limited pedestrian and bicycle facilities along many roads." },
    { id: "emergency", title: "Emergency Access", text: "Road conditions can affect emergency response times." },
  ],
  cta: { label: "Explore Roads & Safety →", href: "/issues/roads-safety" },
} as const;

export const water = {
  eyebrow: "WATER & SEPTIC",
  title: "WHAT ARE WE PROTECTING IF WE DON’T PUT CLEAN WATER FIRST?",
  intro: "Private wells. Septic systems. Lakes. Wetlands. The water beneath our homes matters far more than a planning label. Protecting Keystone–Odessa should mean protecting the people who live here, not treating its Community Plan as untouchable.",
  stats: [
    { id: "records", value: "7,191", label: "source records", note: "ZIP 33556 inventory extract." },
    { id: "classified", value: "3,087", label: "classified source rows", note: "Three septic classifications · ZIP 33556." },
    { id: "repairs", value: "806", label: "septic construction/repair records", note: "ZIP 33556 · Application dates: 1998–April 7, 2023." },
  ],
  map: "issues-water-septic-map" satisfies AssetId,
  mapAlt: "Map of the Keystone–Odessa Community Plan area showing septic systems, private wells, lakes, wetlands and wellfield protection areas",
  issuesTitle: "KEY WATER & SEPTIC ISSUES",
  issues: [
    { label: "Septic Concentration", image: "issues-water-thumb-septic-concentration" },
    { label: "Septic Repairs", image: "issues-water-thumb-septic-repairs" },
    { label: "Private Wells", image: "issues-water-thumb-private-wells" },
    { label: "Groundwater", image: "issues-water-thumb-groundwater" },
    { label: "Wellfields, Lakes & Wetlands", image: "issues-water-thumb-wellfields" },
    { label: "Water & Wastewater Infrastructure", image: "issues-water-thumb-infrastructure" },
  ] satisfies { label: string; image: AssetId }[],
  closing: ["KEEP WHAT MAKES KEYSTONE–ODESSA SPECIAL.", "CHANGE THE PLAN THAT SHAPES ITS FUTURE."],
  closingText: "Our petition calls for removing the Keystone–Odessa Community Plan and relying on the County’s broader planning framework. Our priority: health, safety and welfare.",
  cta: { label: "Explore Water & Septic →", href: "/issues/water-septic" },
} as const;

export const growth = {
  eyebrow: "EVERYDAY NEEDS, GROWTH & INFRASTRUCTURE",
  title: "YOU CHOSE RURAL LIVING. SHOULD THAT MEAN COMPROMISING ON SAFETY?",
  intro: "A longer drive for groceries may be a choice you’re happy to make. But protecting rural character should never be an excuse to dismiss safe roads, essential services or responsible infrastructure. Loving Keystone–Odessa does not mean treating its Community Plan as untouchable.",
  map: "issues-growth-services-map" satisfies AssetId,
  mapAlt: "Illustrative map of the Keystone–Odessa Community Plan area with schematic pins for housing, healthcare, food, childcare, jobs and infrastructure",
  caption: { title: "Illustration", text: "Schematic service pins, not verified locations." },
  points: [
    { number: "01", title: "THE QUESTION ISN’T HOW FAR YOU DRIVE. IT’S HOW SAFELY YOU GET THERE.", text: "Distance alone tells only part of the story. Road conditions, crossings, lighting and safe connections matter too." },
    { number: "02", title: "ESSENTIAL SERVICES ARE MORE THAN SHOPPING CONVENIENCE.", text: "Healthcare, childcare and everyday necessities belong in the discussion about a community’s future. A rural setting does not make those needs disappear." },
    { number: "03", title: "PROTECT THE COUNTRYSIDE. DON’T TREAT THE PLAN AS SACRED.", text: "A planning document is a policy choice. Supporting the landscape does not require supporting every restriction written into that document." },
  ],
  closing: "We want the Keystone–Odessa Community Plan retired. Our priority is a planning framework that puts health, safety and welfare at the centre of decisions about our community.",
  cta: { label: "Explore Growth & Daily Life →", href: "/issues/growth-daily-life" },
} as const;

export const plan = {
  eyebrow: "COMMUNITY PLAN",
  // Desktop: two lines; the second part is shown in burgundy (reference p040).
  title: { lead: "The Community Plan was created for a", place: "Keystone–Odessa of", emphasis: "more than two decades ago." },
  intro: ["The Keystone–Odessa Community Plan was adopted in 2001 and continues to place a specific policy layer over the area.", "During that time, the community’s population, traffic, infrastructure needs, development conditions, and everyday needs have changed."],
  map: "issues-plan-map" satisfies AssetId,
  mapAlt: "Map of the Keystone–Odessa Community Plan area between roads 54 and 589 and Gunn Highway",
  timeline: [
    { id: "2001", year: "2001", title: "COMMUNITY PLAN ADOPTED", text: "The Keystone–Odessa Community Plan was adopted.", image: "issues-plan-2001" },
    { id: "today", year: "TODAY", title: "MORE THAN TWO DECADES LATER", text: "The community’s population, traffic, infrastructure needs, development conditions, and everyday needs have changed.", image: "issues-plan-today" },
    { id: "2026", year: "2026", title: "CURRENT STATUS", text: "According to a public report response, the BOCC had not requested the Planning Commission to complete a new update to the Keystone–Odessa Community Plan.", image: "issues-plan-2026" },
  ] satisfies { id: string; year: string; title: string; text: string; image: AssetId }[],
  timelineArrow: "→",
  areasTitle: "AREAS AFFECTED BY THIS POLICY LAYER",
  areas: [
    { id: "roads", title: "Roads & Transportation", text: "Rules related to road expansion, lighting, and transportation characteristics.", image: "issues-plan-area-roads" },
    { id: "water", title: "Water & Wastewater", text: "Rules and exceptions related to water and wastewater infrastructure.", image: "issues-plan-area-water" },
    { id: "growth", title: "Growth & Housing", text: "Specific requirements related to density, lot size, and development.", image: "issues-plan-area-growth" },
    { id: "infrastructure", title: "Infrastructure & Services", text: "Rules that affect how the community can respond to infrastructure and service needs.", image: "issues-plan-area-infrastructure" },
  ] satisfies { id: string; title: string; text: string; image: AssetId }[],
  // "Learn About the Community Plan" opens the website's explanation first (TXT:115, D-008).
  cta: { label: "Learn About the Community Plan →", href: "/issues#community-plan" },
} as const;

export const connected = {
  eyebrow: "THE ISSUES ARE CONNECTED",
  title: ["NO PLAN IS MORE IMPORTANT", "THAN THE PEOPLE IT SERVES."],
  // The inventory keeps hard line breaks in this paragraph and in the closing (TXT:559-561, TXT:617-619).
  intro: ["Your roads. Your water. Your daily life. The Keystone–Odessa Community Plan influences decisions", "across all three. A document with that much influence should earn its place by serving the community,", "not remain beyond question."],
  hub: "ONE PLAN. DECISIONS THAT REACH INTO EVERYDAY LIFE.",
  arrow: "↓",
  columns: [
    {
      id: "roads", title: "ROADS & SAFETY", subtitle: "Road Rules", image: "issues-connected-roads",
      question: "WHAT GOOD IS RURAL CHARACTER WITHOUT SAFE WAYS TO GET AROUND?",
      text: "Lighting, crossings, road improvements and reliable access belong at the heart of planning for people.",
      rules: ["Traffic", "Lighting", "Ability to Improve Roads"],
      outcomes: ["Safety", "Mobility", "Emergency Access"],
    },
    {
      id: "water", title: "WATER & SEPTIC", subtitle: "Water & Wastewater Rules", image: "issues-connected-water",
      question: "ARE WE PROTECTING OUR WATER—OR DEFENDING A SET OF RULES?",
      text: "Water and wastewater policies should be judged by how well they protect people and the environment.",
      rules: ["Septic", "Wells", "Groundwater", "Wellfield"],
      outcomes: ["Health", "Water Resources", "Environment"],
    },
    {
      id: "growth", title: "GROWTH & DAILY LIFE", subtitle: "Land Use & Development Rules", image: "issues-connected-growth",
      question: "SHOULD PEOPLE HAVE TO FIT THE PLAN, OR SHOULD THE PLAN SERVE PEOPLE?",
      text: "Housing, infrastructure and access to essential services shape everyday life. Those needs deserve more than a rural label.",
      rules: ["Housing", "Infrastructure", "Service Locations", "Travel Distance"],
      outcomes: ["Access", "Quality of Life", "Welfare"],
    },
  ] satisfies { id: string; title: string; subtitle: string; image: AssetId; question: string; text: string; rules: string[]; outcomes: string[] }[],
  // Band words are shown in the selected image p043 (IMG block in issues.md).
  priorities: ["HEALTH.", "SAFETY.", "WELFARE."],
  prioritiesLabel: "THESE SHOULD BE THE PRIORITIES.",
  closing: ["We believe Keystone–Odessa needs a different planning approach.", "Sign the petition to retire the Community Plan and put health, safety and welfare", "at the centre of the County’s decisions."],
} as const;
