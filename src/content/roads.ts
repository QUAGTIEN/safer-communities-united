// Roads & Safety page copy — verbatim from the 22 October 2026 Roads inventory
// (docs/sections/roads.md, TXT:692-1012). Checked by `npm run check:copy`.
// Strings are split only at forced line breaks (↵) or where the reference changes colour/weight.
// External links: docs/LINK_REGISTER.md (L-01 … L-15).
import type { AssetId } from "@/lib/assets";

const img = (id: AssetId) => id;

export const links = {
  plan24: "https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf#page=24",
  plan25: "https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf#page=25",
  fhwaLighting: "https://highways.dot.gov/safety/proven-safety-countermeasures/lighting",
  fhwaWalkways: "https://highways.dot.gov/safety/proven-safety-countermeasures/walkways",
  countyTable: "https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=250",
  countyMobility: "https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf#page=127",
  countyPlan: "https://planhillsborough.org/wp-content/uploads/2025/04/HC-Comp-Plan-1.pdf",
  traffic2024: "https://services.arcgis.com/apTfC6SUmnNfnxuF/arcgis/rest/services/LOS_Update_2024/FeatureServer/6/query?objectIds=582%2C136%2C53%2C108%2C479&outFields=%2A&returnGeometry=false&f=json",
  crashData: "https://www.arcgis.com/home/item.html?id=4617ca58d79b4f74b86876f5605815b1",
  vanDykeStudy: "https://planhillsborough.org/wp-content/uploads/2025/06/LRC-June-Draft-Agenda-Packet.pdf#page=13",
  parcelGis: "https://maps.hillsboroughcounty.org/arcgis1a/rest/services/SDEMapServices/ParcelPublishing/FeatureServer/12",
  boundaryGis: "https://maps.hillsboroughcounty.org/arcgisapp/rest/services/DSD_Viewer/Landuse_and_Planning/MapServer/2",
} as const;

export const sectionNav = [
  { id: "street-lighting", number: "01", label: "Street Lighting" },
  { id: "gunn-highway", number: "02", label: "Gunn Highway" },
  { id: "walking-biking-crossings", number: "03", label: "Walking, Biking & Crossings" },
  { id: "emergency-access", number: "04", label: "Emergency Access" },
] as const;

export const crumbs = { issues: "ISSUES", roads: "ROADS & SAFETY" } as const;

export const lighting = {
  crumb: null,
  kicker: "01 — STREET LIGHTING",
  title: ["Street lighting should", "respond to public", "safety needs."],
  question: "Does someone have to get hurt first?",
  intro: "The Community Plan takes a restrictive approach to street lighting and allows lighting when public safety is at risk.",
  image: img("roads-street-lighting"),
  imageAlt: "Illustration of a rural road at night with car headlights and a pedestrian crossing sign",
  rule: {
    title: "CURRENT COMMUNITY PLAN RULE",
    text: "The Community Plan takes a restrictive approach to street lighting and allows lighting when public safety is at risk.",
    quote: ["“Street lighting should not be", "required nor permitted unless", "public safety is at risk.”"],
    cite: "— Keystone–Odessa Community Plan",
    link: { label: "View the Full Policy in the Community Plan →", href: links.plan24 },
  },
  needs: {
    title: "ACTUAL SAFETY NEEDS",
    lead: "Adequate street lighting is important for:",
    items: ["Visibility for drivers", "Intersections and high-risk areas", "Pedestrians and cyclists", "Night travel and daily commutes"],
  },
  matters: {
    title: "WHY IT MATTERS",
    text: "Limited street lighting can make it more difficult and dangerous to travel at night, increasing the risk of crashes and affecting the safety of residents, students, commuters and emergency responders.",
    callout: "It directly impacts the health, safety and welfare of our community.",
  },
  evidence: {
    text: "FHWA explains that modern lighting can precisely target where light is needed while minimizing spill into the night sky and neighboring properties. Rural character should drive better design, not end the safety discussion.",
    source: "Source: Federal Highway Administration Lighting safety countermeasure. FHWA-SA-21-050, Applications and Considerations. Modern lighting control and reduced spill; general engineering guidance.",
    links: [{ label: "Read FHWA guidance on lighting", href: links.fhwaLighting }],
  },
};

export const gunn = {
  crumb: "GUNN HIGHWAY",
  kicker: "02 — GUNN HIGHWAY",
  title: ["Expansion of Gunn Highway", "is restricted."],
  intro: { before: "The Community Plan identifies Gunn Highway as a", strong: "road with restrictions", after: "on further expansion." },
  photo: img("roads-gunn-photo"),
  photoAlt: "Traffic on Gunn Highway beside a Gunn Hwy street sign",
  map: img("roads-gunn-map"),
  mapAlt: "Map of the Keystone–Odessa Community Plan area with Gunn Highway highlighted from road 54 to South Mobley Road",
  mapButton: "View larger map",
  rule: { title: "COMMUNITY PLAN RULE", text: "Gunn Highway cannot be widened further.", link: { label: "View the Community Plan Policy →", href: links.plan24 } },
  table: { title: "COUNTY CONSTRAINED-ROAD TABLE", text: "The County’s constrained-road table also references the Community Plan for this section.", link: { label: "View the County Table →", href: links.countyTable } },
  matters: { title: "WHY IT MATTERS", text: "Limits on expanding Gunn Highway affect traffic, safety and access for residents, commuters, students and emergency services." },
  evidence: {
    title: "19,912 DAILY VEHICLE MOVEMENTS. TWO LANES.",
    text: "The County’s 2024 data put Gunn Highway from the Pasco County line to Van Dyke Road at 19,912 annual-average daily vehicle movements. Both daily and peak-direction service are rated E against a D standard. These figures demand a serious response.",
    source: "Source: County 2024 level-of-service traffic sections. County 2024 traffic layer. OBJECTID 582: Gunn Highway, Pasco County line to Van Dyke Road, AADT 19,912. OBJECTID 136: Van Dyke Road, Gunn Highway to Suncoast north ramp, AADT 17,500. Both have two lanes, daily and peak-direction LOS E, and standard D.",
    links: [{ label: "Read the County’s 2024 traffic data", href: links.traffic2024 }],
  },
};

export const walking = {
  crumb: "WALKING, BIKING & CROSSINGS",
  kicker: "03 — WALKING, BIKING & CROSSINGS",
  title: ["Pedestrians and cyclists", "face safety risks."],
  intro: "The safety of pedestrians, cyclists, and people crossing the road needs to be considered together with traffic, speed, crossings and the actual conditions on each corridor.",
  image: img("roads-walking"),
  imageAlt: "Illustration of a cyclist and a pedestrian beside traffic on a rural road",
  rule: {
    title: "COMMUNITY PLAN RULE",
    question: "Is “when possible” enough for safe, connected routes?",
    text: "The Plan directs the County to encourage pedestrian and equestrian trails along designated scenic corridors. Off-road trails and bikeways in preserved greenways are to be developed when possible, without a delivery timetable in these provisions.",
    note: "Policy summary · Livable Communities Element, p. 25",
    link: { label: "View the Relevant Policy in the Community Plan →", href: links.plan25 },
  },
  conditions: {
    title: "ACTUAL CONDITIONS",
    items: ["Traffic and higher speeds", "Limited pedestrian and bicycle facilities", "Safety at intersections and crossings", "Continuous routes are limited"],
  },
  matters: {
    title: "WHY IT MATTERS",
    text: "Limited and unsafe conditions for pedestrians and cyclists increase the risk of crashes and affect the safety of residents, students, commuters and everyone who uses these roads.",
    callout: "Safe walking and biking routes are essential for a safer, healthier and more connected community.",
  },
  evidence: {
    title: "SAFE WALKING SHOULD NOT BE AN EXCEPTION.",
    text: "County Mobility Objective 2.2 calls for protecting pedestrians, children, seniors and people with disabilities. FHWA recommends connected walking routes without gaps. A safe route matters whether you are going to school, visiting a neighbor or using a wheelchair.",
    source: "Sources: County Comprehensive Plan, Mobility Objective 2.2 and Policies 2.2.1–2.2.7, p. 127; FHWA Walkways, FHWA-SA-21-047, connected routes and accessibility.",
    links: [
      { label: "Read the County policy and full criteria", href: links.countyMobility },
      { label: "Read FHWA guidance on walkways", href: links.fhwaWalkways },
    ],
  },
};

export const emergency = {
  crumb: "EMERGENCY ACCESS",
  kicker: "04 — EMERGENCY ACCESS",
  title: ["Emergency access", "must be reliable."],
  intro: "Emergency access should be judged by evidence, not by a fixed preference for road size. The Community Plan accepts that safety may require change, yet narrows the options for making it.",
  image: img("roads-emergency"),
  imageAlt: "Illustration of an ambulance and fire engine on a rural road (artwork, not a documented local event)",
  plan: {
    title: "WHAT THE PLAN SAYS",
    lead: "Safety changes are allowed. The road options are constrained.",
    quote: "The plan favors turn lanes, crossings and traffic controls instead of widening, and says Gunn Highway cannot be widened further.",
    cite: "Summary: Community Plan, p. 24",
    text: "It also allows lighting when public safety is at risk and supports widening the Suncoast Parkway.",
    link: { label: "View the Relevant Policy in the Community Plan →", href: links.plan24 },
  },
  factors: {
    title: "KEY FACTORS",
    items: ["Emergency response time", "Intersections and road design", "Congestion and delays", "Road conditions", "Access during severe weather"],
  },
  matters: {
    title: "WHY IT MATTERS",
    text: "Reliable emergency access is essential for residents, students, commuters and the entire community. Delays can affect emergency response times and public safety.",
    callout: "Road decisions should support faster, safer emergency access for the community.",
  },
};

export const maps = {
  brand: "SAFER COMMUNITIES UNITED",
  explore: "EXPLORE THE AREA",
  nimby: {
    title: "THE NIMBY MAP",
    source: "Source: Keystone-Odessa Community Plan",
    map: img("home-official-boundary-map"),
    alt: "Keystone–Odessa Community Plan boundary map (Figure 3) showing the plan area outlined in red with local roads",
  },
  viewLarger: "View larger map",
  vs: "VS",
  versus: { line1: "WHAT THE NIMBY MAP", line2: "DOESN’T SHOW YOU", sub: "The land. The neighborhoods. The traffic." },
  area: {
    map: img("home-wider-area-map"),
    alt: "Keystone–Odessa area map showing public conservation and water land, wetlands, lakes, improved residential parcels and the official Community Plan boundary",
  },
  here: { title: "LOOK AT WHAT’S ALREADY HERE.", text: "Existing homes, divided lots and major roads are part of Keystone–Odessa today. The map shows an established residential community alongside its natural landscape." },
  nature: {
    title: ["THE COMMUNITY PLAN ISN’T THE", "ONLY THING PROTECTING NATURE."],
    highlight: "Over one-third of the Keystone–Odessa Community Plan area is mapped conservation land, lakes, reservoirs or ponds.",
    text: "Public conservation lands and lakes are part of what makes this area special. Separate ownership and environmental protections also matter; removing the Community Plan would not automatically remove them.",
  },
  question: "PROTECT THE LANDSCAPE. QUESTION THE PLAN.",
  gis: "GIS measurement, 16 October 2026: 34.3% (8,025 of 23,387 acres); conservation land and mapped lakes/reservoirs/ponds clipped to the adopted Plan boundary, with overlaps counted once.",
  gisSources: "Sources: Plan Hillsborough; FNAI (September 2026); acquired ELAPP; SWFWMD (2023).",
  slogans: [
    { id: "nature", lines: ["PROTECT", "NATURE.", "PROTECT PEOPLE."], icon: "roads-map-protect-nature-icon" },
    { id: "homes", lines: ["THOUSANDS OF HOMES.", "REAL INFRASTRUCTURE", "NEEDS."], icon: "roads-map-homes-icon" },
  ] satisfies { id: string; lines: string[]; icon: AssetId }[],
  conservation: "Conservation lands, lakes and water-resource protections already exist here.",
  parcels: "Our parcel analysis identified 4,542 improved single-family parcels. Nearly half were smaller than one acre. Infrastructure decisions must reflect the community already here.",
  analysis: "SCU analysis of the October 2, 2026 County GIS snapshot: 2,249 of 4,542 selected improved single-family parcels had reported acreage below one acre (49.5%). Parcels are not a count of occupied homes. Public holdings, wetlands and water-protection layers describe different protections; they are not all government-owned land.",
  sourceLinks: [
    { label: "Parcel source and calculation inputs — County parcel GIS", href: links.parcelGis },
    { label: "Official Community Plan boundary — County GIS", href: links.boundaryGis },
  ],
  method: "unique tax folios assigned to the official boundary by an interior point; single-family classification, positive building value and at least one recorded building; full reported parcel acreage. The October 2 snapshot is dated, not a live count.",
  roads: {
    title: "MAJOR ROADS. EVERYONE’S SAFETY MATTERS.",
    map: img("home-roads-map"),
    alt: "Keystone–Odessa roads and traffic map with main roads in red, lettered traffic sections and a 2024 traffic-by-section table",
  },
  closing: {
    title: "KEEP THE LANDSCAPE.",
    evidence: { label: "Explore the evidence →", href: "/evidence" },
    petition: { label: "Read the petition", href: "/take-action#petition" },
  },
};

export type RecordCard = {
  id: string; title: string; tags: [string, string]; image: AssetId; heading: string; text: string; source?: string;
  meta: string; date?: string; action: string; href?: string;
};

export const records = {
  crumb: "RECORDS & EVIDENCE",
  kicker: "06 — RECORDS & EVIDENCE",
  title: { dark: "THE NUMBERS", accent: "DEMAND ACTION" },
  intro: "Read the records. Review the policy. Ask the County to put people first.",
  cards: [
    { id: "safety", title: "SAFETY DATA", tags: ["Crash · Severity", "Location · Time"], image: "roads-records-safety", heading: "Crash records for Gunn Highway",
      text: "Fatal and serious-injury crashes have been recorded along Gunn Highway.",
      source: "Source: Hillsborough County fatal and serious-injury crash data (“Fatal Severe 2017_2021”). Verified period: 2020–2021. Road section: Pasco County line to South Mobley Road, including intersections.",
      meta: "Hillsborough County Crash Data", date: "2020 – 2021", action: "View Original Document", href: links.crashData },
    { id: "traffic", title: "TRAFFIC DATA", tags: ["Traffic Volume · Speed", "Turning Movements"], image: "roads-records-traffic", heading: "19,912 DAILY VEHICLE MOVEMENTS",
      text: "Gunn Highway: Pasco County line to Van Dyke Road.", meta: "Hillsborough County AADT", date: "2024", action: "View Original Document", href: links.traffic2024 },
    { id: "maps", title: "MAPS", tags: ["Road Network · Plan Boundary", "Corridors · Intersections"], image: "roads-records-maps", heading: "Gunn Highway and the Community Plan area",
      text: "Map showing Gunn Highway and the section within/serving Keystone–Odessa.", meta: "Hillsborough County GIS", date: "2024", action: "View Original Map" },
    { id: "public", title: "PUBLIC RECORDS", tags: ["Projects · Studies · Requests", "Agency Responses"], image: "roads-records-public", heading: "STUDY THE OPTIONS.",
      text: "Van Dyke: Gunn Highway to west of Suncoast Parkway was excluded from capacity-improvement analysis because of Comprehensive Plan constraints.",
      meta: "Read the study fact sheet · packet page 13", action: "View Original Document", href: links.vanDykeStudy },
    { id: "plan", title: "COMMUNITY PLAN", tags: ["Transportation · Road Configuration", "Lighting · Gunn Highway"], image: "roads-records-plan", heading: "Restrictions on expansion for Gunn Highway",
      text: "The Community Plan identifies Gunn Highway as a road with restrictions on further expansion.", meta: "Keystone–Odessa Community Plan", action: "View Original Document", href: links.plan24 },
  ] satisfies RecordCard[],
  banner: { title: "DON’T RULE OUT SOLUTIONS BEFORE STUDYING THEM.", text: "Demand a full evaluation. Ask the County to reconsider the constraints.", cta: { label: "SUPPORT THE PETITION →", href: "/take-action#petition" } },
};

export type CompareRow = { id: string; title: string; question?: string; text: string; extra?: string };

export const frameworks = {
  kicker: "07 — HOW DO THE COMMUNITY PLAN AND COMPREHENSIVE PLAN APPROACH THE ISSUE?",
  title: "Two planning frameworks. Two approaches to roads and safety.",
  community: {
    title: "KEYSTONE–ODESSA COMMUNITY PLAN",
    rows: [
      { id: "rural", title: "Rural road characteristics", question: "Should a rural appearance come before people’s daily needs?", text: "The plan prioritizes two-lane rural roads and limits changes that increase capacity or urbanize the area. (Community Plan, Transportation)" },
      { id: "config", title: "Road configuration", question: "Why limit the options before assessing what people need?", text: "The plan identifies preferred road configurations, including two-lane rural sections, and the types of improvements considered appropriate for the area." },
      { id: "gunn", title: "Gunn Highway", question: "How much traffic is enough to reconsider the restrictions?", text: "Gunn Highway is identified as a road with restrictions on further expansion and included in the constrained-road tables. (Community Plan, related policies)" },
      { id: "lighting", title: "Lighting", question: "Does someone have to get hurt first?", text: "The plan allows lighting when public safety is at risk.", extra: "Identify the danger. Act before someone is injured." },
      { id: "improvements", title: "Transportation improvements", question: "Should a safety improvement have to pass a rural-character test?", text: "The plan allows intersection, cycling, walking and traffic-control improvements while requiring rural character to be maintained." },
    ] satisfies CompareRow[],
  },
  county: {
    title: "HILLSBOROUGH COUNTY COMPREHENSIVE PLAN",
    rows: [
      { id: "safety", title: "Transportation safety", text: "Includes countywide policies to improve transportation safety, reduce crashes, and address safety for all users, including drivers, pedestrians and cyclists. (Mobility Section)" },
      { id: "mobility", title: "Mobility", text: "Supports a connected and functional multimodal network, including roadways, transit, bicycle and pedestrian facilities. (Mobility Section)" },
      { id: "infrastructure", title: "Infrastructure needs", text: "Addresses transportation infrastructure needs based on current and future conditions, including roadway capacity, intersection improvements and system performance. (Mobility Section)" },
      { id: "evaluation", title: "Evaluation of conditions", text: "Uses data, level-of-service standards and network evaluation to identify needed improvements across the county. (Mobility Section)" },
      { id: "tools", title: "Planning tools", text: "Provides broader transportation planning tools, such as the Cost Feasible Plan, the Transportation Improvement Program (TIP) and coordination with the Long Range Transportation Plan (LRTP). (Mobility Section)" },
    ] satisfies CompareRow[],
  },
  note: "This is a summary comparison. The detailed analysis of each policy, with side-by-side excerpts from both plans, is on the Comparison Page.",
  cta: { label: "Detailed Roads & Safety Comparison →", href: "/comparison#roads" },
  evidence: {
    title: "A ROAD RESTRICTION IS NOT A PERMANENT ANSWER.",
    text: "County Mobility Policy 5.1.4 calls for the constrained-road list to be reevaluated before each long-range transportation plan update, balancing community preservation, safety and growing traffic congestion. Put Gunn Highway’s restriction back under serious public scrutiny.",
    source: "Source: County Comprehensive Plan One Water and Mobility. County compilation dated June 26, 2026. One Water 4.3.2–4.3.7: pp. 229–234. Mobility 5.1.2–5.1.4: p. 135. Constrained roads (Capital Improvements Section, Table 2): pp. 249–251.",
    links: [{ label: "Read the County policy and full criteria", href: links.countyPlan }],
  },
};
