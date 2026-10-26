// The Proposal / Comparison copy — verbatim from approved images R1, W8, H1, C1
// (IMG blocks in docs/sections/comparison.md; TXT:1857-2011). Checked by `npm run check:copy`.
// `em` parts are the bold phrases shown in the images.
import type { AssetId } from "@/lib/assets";

const img = (id: AssetId) => id;
export type Part = string | { em: string };
export type Row = { icon: string; label?: string; title?: string; text: Part[] };

export const comparisonLinks = {
  communityPlan: "https://planhillsborough.org/wp-content/uploads/2025/12/LIVABLE-COMMUNITIES.pdf",
} as const;

// Proposed Change has no supplied copy or layout (TXT:102, TXT:143; D-015 OQ-20, OQ-29).
export const proposed = { title: "Not available yet" } as const;

export const roads = {
  kicker: ["COMPARISON 01", "ROADS & SAFETY"],
  title: "SHOULD THE LOOK OF A ROAD MATTER MORE THAN THE SAFETY OF THE PEOPLE USING IT?",
  photo: img("comparison-r1-gunn"),
  photoAlt: "Gunn Highway, a two-lane road through trees",
  caption: { line: "Gunn Highway · April 20, 2016", before: "Photo:", link: "Alex Nitzman / AARoads" },
  intro: "We can value rural character and still question the restrictions that shape our roads.",
  community: {
    title: "COMMUNITY PLAN",
    rows: [
      { icon: "file", label: "ROAD DESIGN", title: "WHY LIMIT THE OPTIONS BEFORE ASSESSING THE NEED?", text: ["The Community Plan prioritizes rural, two-lane road character and limits certain changes."] },
      { icon: "ban", label: "GUNN HIGHWAY", title: "SHOULD A ROAD RESTRICTION BE BEYOND QUESTION?", text: ["Gunn Highway is subject to expansion restrictions."] },
      { icon: "lamp", label: "LIGHTING", title: "DOES SOMEONE HAVE TO GET HURT FIRST?", text: ["The Community Plan discourages street lighting and allows it when public safety is at risk."] },
      { icon: "walk", label: "WALKING AND CROSSINGS", title: "WHY SHOULD RURAL CHARACTER LIMIT THE DISCUSSION?", text: ["The Community Plan permits specified improvements and supports trails while retaining rural road character."] },
    ] satisfies Row[],
  },
  county: {
    title: "COUNTY FRAMEWORK",
    rows: [
      { icon: "check", label: "ROAD DESIGN", title: "ASSESS SAFETY, MOBILITY AND LOCAL CONDITIONS.", text: ["Countywide policies address road-user needs and context-sensitive design."] },
      { icon: "refresh", label: "GUNN HIGHWAY", title: "REASSESS THE RESTRICTIONS.", text: ["County policy calls for reevaluating constrained roads before each long-range transportation plan update."] },
      { icon: "bulb", label: "LIGHTING", title: "LIGHTING CAN RESPECT ITS SURROUNDINGS.", text: ["County policies address context-sensitive lighting and intersection visibility."] },
      { icon: "users", label: "WALKING AND CROSSINGS", title: "MAKE PEOPLE’S NEEDS CENTRAL TO THE ASSESSMENT.", text: ["County policies address crossing visibility, walking, cycling and safe routes to schools."] },
    ] satisfies Row[],
  },
  illustration: img("comparison-r1-illustration"),
  closing: "PROTECT THE CHARACTER OF THE AREA. QUESTION THE RULES THAT GOVERN ITS ROADS.",
  note: "Countywide policies already apply. Retiring the Community Plan and changing related restrictions would not automatically approve or fund road projects.",
  cta: "View the Full Roads Comparison →",
};

export const water = {
  kicker: ["COMPARISON 02", "WATER & WASTEWATER"],
  title: ["From Infrastructure Limits", "to More Response Tools"],
  photo: img("comparison-w8-header"),
  photoAlt: "Water storage tank beside a lake and trees",
  community: {
    title: "COMMUNITY PLAN",
    subtitle: "Emphasizes water protection but has more limited infrastructure response options.",
    rows: [
      { icon: "drop", text: ["Makes protection of water resources a priority, but does not contain the same requirement to consider soil conditions and permeability."] },
      { icon: "house", text: ["Does not contain a comparable policy for aging or failing septic systems."] },
      { icon: "tap", text: ["Does not create a specific septic/wastewater response for wellhead or wellfield protection areas."] },
      { icon: "waves", text: ["Calls for stormwater management plans, but does not set the same technical standard for cumulative flooding and water quality."] },
    ] satisfies Row[],
  },
  county: {
    title: "COUNTY FRAMEWORK",
    subtitle: "Provides a broader planning framework and specific response tools.",
    rows: [
      { icon: "leaf", text: ["Requires development decisions to consider physical land and soil conditions, including permeability."] },
      { icon: "cog", text: ["Provides a pathway to respond when septic creates a documented environmental problem."] },
      { icon: "shield", text: ["Allows centralized service in certain Wellhead Resource Protection Areas and Tampa Bay Water Wellfield Mitigation Areas when conditions are met."] },
      { icon: "waves", text: ["Requires stormwater technical standards to address cumulative impacts on flooding and water quality."] },
    ] satisfies Row[],
  },
  limit: { title: "KEYSTONE–ODESSA LIMIT", text: "One Water Policy 4.3.7 excludes properties within the Keystone–Odessa Community Plan boundary from the wellhead/wellfield pathway described above." },
  illustration: img("comparison-w8-illustration"),
  closing: ["The County framework provides more specific tools", "to respond to current water, septic, groundwater, and stormwater", "conditions."],
  cta: "View the Full Water Comparison →",
};

export const housing = {
  kicker: "COMPARISON 03 · GROWTH & HOUSING",
  title: "Where is the plan for homes people can afford?",
  community: {
    title: "COMMUNITY PLAN",
    rows: [
      { icon: img("comparison-h1-community-dwelling"), text: ["Uses approximately", { em: "one dwelling unit per five acres" }, "in the relevant areas."] },
      { icon: img("comparison-h1-community-low-density"), text: ["Favors a", { em: "low-density, scattered" }, "residential pattern."] },
      { icon: img("comparison-h1-community-amendments"), text: ["The residential section discourages higher-density amendments. Where is its explicit commitment to", { em: "housing affordability" }, "?"] },
      { icon: img("comparison-h1-community-rural"), text: ["The residential policies focus strongly on maintaining the area’s", { em: "rural development pattern" }, "."] },
    ] satisfies Row[],
  },
  county: {
    title: "COUNTY FRAMEWORK",
    rows: [
      { icon: img("comparison-h1-county-mapped"), text: ["Uses mapped land-use categories that establish", { em: "maximum densities and intensities" }, "."] },
      { icon: img("comparison-h1-county-rural-limits"), text: ["Rural density limits still apply, including the general", { em: "one dwelling per five gross acres" }, "policy, with specified exceptions."] },
      { icon: img("comparison-h1-county-housing-goals"), text: ["Has housing goals and policies related to", { em: "housing choice and affordability" }, "."] },
      { icon: img("comparison-h1-county-tools"), text: ["Supports tools including", { em: "infill, small lots, accessory homes, and different housing types" }, ", with adequate infrastructure."] },
    ] satisfies Row[],
  },
  illustration: img("comparison-h1-illustration"),
  closing: "Protecting rural character matters. So does whether people can afford a home. A community plan should address both.",
  cta: "View the Full Growth & Housing Comparison →",
};

export const remains = {
  kicker: ["IF THE COMMUNITY PLAN", "IS REMOVED, WHAT REMAINS?"],
  title: "Keystone–Odessa will still be planned and managed.",
  photo: img("comparison-c1-aerial"),
  photoAlt: "Aerial photograph of the Lake Keystone area, Odessa",
  caption: "Lake Keystone area, Odessa · Coldwell Banker · Metadata: Nov 19, 2025",
  remove: { title: "REMOVE", image: img("comparison-c1-remove"), alt: "Keystone–Odessa Community Plan, area-specific policy layer, crossed out (illustration)" },
  arrow: img("comparison-c1-arrow"),
  keep: {
    title: "REMAINS",
    plan: "HILLSBOROUGH COUNTY COMPREHENSIVE PLAN",
    items: [
      { icon: "map", text: "Land Development Code" },
      { icon: "doc", text: "Future Land Use Policies" },
      { icon: "road", text: "Mobility & Safety Policies" },
      { icon: "leaf", text: "Water & Environmental Policies" },
      { icon: "house", text: "Zoning & Development Standards" },
      { icon: "shield", text: "Applicable Health/Engineering/ Environmental Standards" },
    ],
  },
  illustration: img("comparison-c1-illustration"),
  panel: { title: "The proposed change is a change to the policy layer that applies to Keystone–Odessa.", text: "The Countywide planning framework continues to apply.", cta: "Learn More About the County Framework →" },
  campaign: {
    title: "RETIRE THE EXTRA PLAN. KEEP THE PROTECTIONS.",
    text: "Ask the County to retire the separate Community Plan, reconsider related restrictions and retain enforceable safeguards through the amendment process.",
    source: "Source: Livable Communities Element. Livable Communities compilation dated June 26, 2026. Effective dates: p. 3. County framework relationship: pp. 4–5. Keystone–Odessa: pp. 17–27. Transportation and lighting: p. 24.",
    link: "Read the Community Plan",
  },
};
