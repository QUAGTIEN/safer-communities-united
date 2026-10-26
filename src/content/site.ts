// Shared header, mobile menu, footer and notice copy.
// Visible strings are verbatim from the 22 October 2026 blueprint (docs/sections/shared.md);
// `npm run check:copy` verifies them. Routes follow decision D-008.
export const site = {
  name: "Safer Communities United",
  slogan: "Putting the health, safety, and welfare of people first.",
} as const;

export const routes = {
  home: "/",
  issues: "/issues",
  roads: "/issues/roads-safety",
  water: "/issues/water-septic",
  growth: "/issues/growth-daily-life",
  evidence: "/evidence",
  comparison: "/comparison",
  action: "/take-action",
} as const;

export type SitePath = (typeof routes)[keyof typeof routes];

// A destination is either a built route (optionally with an anchor) or the approved
// "Not available yet" notice (TXT:64-65) when no content or URL has been supplied.
export type Destination = { href: SitePath | `${SitePath}#${string}` } | { notice: true };
export type NavItem = { label: string; to: Destination; activeFor?: SitePath };

export const proposalAnchor = "proposed-change";
export const comparisonAnchor = "compare-the-two-plans";

export const mainNavigation: NavItem[] = [
  { label: "Our Community", to: { href: routes.home }, activeFor: routes.home },
  { label: "Issues", to: { href: routes.issues }, activeFor: routes.issues },
  { label: "The Facts", to: { href: routes.evidence }, activeFor: routes.evidence },
  { label: "The Proposal", to: { href: `${routes.comparison}#${proposalAnchor}` }, activeFor: routes.comparison },
  { label: "Take Action", to: { href: routes.action }, activeFor: routes.action },
  // About has no supplied content yet (OQ-20, D-015).
  { label: "About", to: { notice: true } },
];

// Mobile menu only: nested under The Proposal (TXT:113, TXT:1079-1085).
export const comparisonLink: NavItem = {
  label: "Compare the Two Plans",
  to: { href: `${routes.comparison}#${comparisonAnchor}` },
};

export const getInvolved: NavItem = { label: "Get Involved", to: { href: routes.action } };

export const header = {
  menu: "Menu",
} as const;

export const footer = {
  tagline: "A safer, stronger Keystone–Odessa for today and future generations.",
  subscribe: { label: "Subscribe for Updates", to: { notice: true } } satisfies NavItem,
} as const;

export const notice = {
  title: "Not available yet",
} as const;

// Accessible names only; not rendered as visible text.
export const a11y = {
  home: "Safer Communities United — Our Community",
  mainNavigation: "Main navigation",
  mobileNavigation: "Mobile navigation",
  footerNavigation: "Footer navigation",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  close: "Close",
  search: "Search",
  social: "Social media",
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  skipLink: "Skip to content",
} as const;
