import { comparisonLink, issueNavigation, mainNavigation, type SiteLink, type SitePath } from "./site";

type PagePreview = {
  title: string;
  eyebrow: string;
  sourceSection: string;
  related: SiteLink[];
};

// Round 1 route scaffolds only. Detailed page copy/layout follows in rounds 2–10.
// Labels are from Foundation/current page headings; no campaign copy is invented.
export const pagePreviews: Record<SitePath, PagePreview> = {
  "/": {
    title: "Putting the health, safety, and welfare of people first.",
    eyebrow: "A SAFER, STRONGER KEYSTONE–ODESSA",
    sourceSection: "H-01",
    related: mainNavigation.filter((link) => link.href !== "/"),
  },
  "/issues": {
    title: "Issues affecting Keystone–Odessa.", eyebrow: "ISSUES", sourceSection: "I-01",
    related: [...issueNavigation, { label: "Community Plan", href: "/issues#outdated-community-plan" }],
  },
  "/issues/roads-safety": {
    title: "Our roads must be safe for everyone.", eyebrow: "ROADS & SAFETY", sourceSection: "R-01",
    related: [{ label: "Issues", href: "/issues" }, { label: "The Facts", href: "/the-facts" }, comparisonLink],
  },
  "/issues/water-septic": {
    title: "Protect our water. Open the door to better solutions.", eyebrow: "WATER & SEPTIC", sourceSection: "W-01",
    related: [{ label: "Issues", href: "/issues" }, { label: "The Facts", href: "/the-facts" }, comparisonLink],
  },
  "/issues/growth-daily-life": {
    title: "The community has changed. Planning needs to keep up.", eyebrow: "GROWTH & DAILY LIFE", sourceSection: "L-01",
    related: [{ label: "Issues", href: "/issues" }, { label: "The Facts", href: "/the-facts" }, comparisonLink],
  },
  "/the-facts": {
    title: "The Facts", eyebrow: "EVIDENCE & RECORDS", sourceSection: "F-01",
    related: [{ label: "Issues", href: "/issues" }, comparisonLink, { label: "Take Action", href: "/take-action" }],
  },
  "/the-proposal": {
    title: "The Proposal", eyebrow: "DEMO PREVIEW", sourceSection: "P-01",
    related: [comparisonLink, { label: "The Facts", href: "/the-facts" }, { label: "Take Action", href: "/take-action" }],
  },
  "/take-action": {
    title: "DEMAND CHANGE. RETIRE THE KEYSTONE–ODESSA COMMUNITY PLAN.", eyebrow: "TAKE ACTION", sourceSection: "A-01",
    related: [{ label: "Our Community", href: "/" }, { label: "The Facts", href: "/the-facts" }, { label: "The Proposal", href: "/the-proposal" }],
  },
  "/about": {
    title: "About", eyebrow: "SAFER COMMUNITIES UNITED", sourceSection: "B-01",
    related: [{ label: "Our Community", href: "/" }, { label: "The Facts", href: "/the-facts" }],
  },
};

// Existing approved destinations get labelled previews until their page round.
export const pageAnchors: Partial<Record<SitePath, { id: string; label: string }[]>> = {
  "/": [{ id: "map-comparison", label: "Map Comparison" }],
  "/issues": [{ id: "outdated-community-plan", label: "Outdated Community Plan" }],
  "/issues/roads-safety": [{ id: "street-lighting", label: "Street Lighting" }],
  "/issues/water-septic": [{ id: "septic-scale", label: "Septic Concentration" }],
  "/the-proposal": [
    { id: "compare-the-two-plans", label: "Compare the Two Plans" },
    { id: "roads-comparison", label: "Roads & Safety" },
    { id: "water-comparison", label: "Water & Wastewater" },
    { id: "growth-housing-comparison", label: "Growth & Housing" },
  ],
  "/the-facts": [
    { id: "road-evidence", label: "Roads & Safety" },
    { id: "water-evidence", label: "Water & Septic" },
    { id: "growth-evidence", label: "Growth, Housing & Services" },
    { id: "planning-documents", label: "Community Plan & County Framework" },
  ],
  "/take-action": [
    { id: "add-your-support", label: "Add Your Support" },
    { id: "supporter-application", label: "Supporter Application" },
    { id: "petition", label: "Read and sign the petition" },
  ],
};
