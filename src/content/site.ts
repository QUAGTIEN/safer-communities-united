// Public navigation and footer copy: blueprint PDF 3–6 (G-01/G-02).
export const site = {
  name: "Safer Communities United",
  slogan: "Putting the health, safety, and welfare of people first.",
  demoNotice: "Demo only. Nothing is submitted or saved.",
  signatureNotice: "Demo only. No signature has been collected.",
} as const;

// User-authorized footer additions; destinations/legal text are demo previews.
export const footerDemo = {
  location: "Keystone–Odessa · Hillsborough County, Florida",
  version: "Demo version",
  description: "A preview of the Safer Communities United website.",
  copyright: "© 2026 Safer Communities United. Demo version.",
  social: ["Facebook", "Instagram", "Email"],
} as const;

export const routes = {
  home: "/",
  issues: "/issues",
  roads: "/issues/roads-safety",
  water: "/issues/water-septic",
  growth: "/issues/growth-daily-life",
  facts: "/the-facts",
  proposal: "/the-proposal",
  action: "/take-action",
  about: "/about",
} as const;

export type SitePath = (typeof routes)[keyof typeof routes];
export type SiteLink = { label: string; href: SitePath | `${SitePath}#${string}` };

export const mainNavigation: SiteLink[] = [
  { label: "Our Community", href: routes.home },
  { label: "Issues", href: routes.issues },
  { label: "The Facts", href: routes.facts },
  { label: "The Proposal", href: routes.proposal },
  { label: "Take Action", href: routes.action },
  { label: "About", href: routes.about },
];

export const issueNavigation: SiteLink[] = [
  { label: "Roads & Safety", href: routes.roads },
  { label: "Water & Septic", href: routes.water },
  { label: "Growth & Daily Life", href: routes.growth },
];

export const comparisonLink: SiteLink = {
  label: "Compare the Two Plans",
  href: "/the-proposal#compare-the-two-plans",
};

export const informationPreviews = [
  "Updates", "Contact", "Sources & Methods", "Accessibility", "Edits", "Privacy",
] as const;

export type InformationPreview = (typeof informationPreviews)[number];
