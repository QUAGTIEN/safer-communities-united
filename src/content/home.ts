// Home (Our Community) copy — verbatim from the 22 October 2026 Home inventory
// (docs/sections/home.md: TXT:279-289 opening, TXT:294-315 issue cards). Checked by `npm run check:copy`.
// Card titles keep the inventory's forced desktop line break (↵) as two strings.
import type { AssetId } from "@/lib/assets";

export const opening = {
  eyebrow: "A SAFER, STRONGER KEYSTONE–ODESSA",
  title: "Putting the health, safety, and welfare of people first.",
  vision: "We envision a future where community growth protects people and places, supported by responsible planning, safer infrastructure, environmental stewardship, and decisions that reflect the needs of today’s residents and generations to come.",
  alert: {
    lead: "The Keystone–Odessa community’s health, safety and welfare is endangered due to its",
    emphasis: "outdated community plan.",
  },
  primary: { label: "View the Issues →", href: "/issues" },
  secondary: { label: "View the Evidence →", href: "/evidence" },
} as const;

export type IssueCard = {
  id: "roads" | "water" | "needs" | "plan";
  image: AssetId;
  caption?: readonly [string, string];
  title: readonly [string, string];
  text: string;
  href: string;
  linkName: string;
};

export const issueSection = {
  eyebrow: "OUR KEY ISSUES",
  title: "Major problems under the current community plan",
  intro: "Click on each issue below to learn more about how these problems impact our community and why change is needed.",
} as const;

export const issueCards: readonly IssueCard[] = [
  {
    id: "roads",
    image: "home-card-roads",
    caption: ["Gunn Highway, Keystone · AARoads (2016)", "Road setting only, not crash evidence"],
    title: ["Our roads", "are dangerous!"],
    text: "Traffic, intersections, lighting, road safety and emergency access put residents, students and commuters at risk.",
    href: "/issues/roads-safety",
    linkName: "View Roads & Safety",
  },
  {
    id: "water",
    image: "home-card-water",
    caption: ["Lake Rogers, Odessa · Florida Hikes", "Landscape only, not contamination evidence"],
    title: ["Our water", "is at risk!"],
    text: "1,626 known septic systems, 1,210 likely septic, and 806 repair records. Septic systems and wells threaten groundwater, drinking water, health and the environment.",
    href: "/issues/water-septic",
    linkName: "View Water & Septic",
  },
  {
    id: "needs",
    image: "home-card-everyday-needs",
    title: ["Everyday needs", "are harder to access!"],
    text: "Housing, commute time, healthcare, food, jobs and essential services are limited due to current restrictions.",
    href: "/issues/growth-daily-life",
    linkName: "View Growth & Daily Life",
  },
  {
    id: "plan",
    image: "home-card-community-plan",
    title: ["The Community Plan", "is holding our community back!"],
    text: "Outdated rules adopted in 2001 continue to limit solutions for our roads, water, infrastructure, housing, and essential services.",
    // "View the Community Plan" opens the website's explanation first (TXT:115, D-008).
    href: "/issues#community-plan",
    linkName: "View the Community Plan",
  },
];
