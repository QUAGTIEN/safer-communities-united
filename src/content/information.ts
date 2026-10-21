import type { InformationPreview } from "./site";

// B-01/B-02, PDF 3/5/6: labels only; D-02 permits labelled missing-content previews.
// These notices describe missing inputs, not approved organization or policy copy.
export const aboutPreview = {
  notice: "Approved About content and a selected page layout have not been supplied for this demo.",
  informationNotice: "These information links open demo previews. Their approved content and destinations have not been supplied.",
} as const;

export type InformationDestination = InformationPreview | "Facebook" | "Instagram" | "Email" | "Terms & Copyright";

export const informationNotices = {
  Updates: "Approved updates and an updates destination have not been supplied for this demo.",
  Contact: "Approved contact information and a contact destination have not been supplied for this demo.",
  "Sources & Methods": "Approved sources and methods information has not been supplied for this preview.",
  Accessibility: "An approved accessibility statement has not been supplied for this demo.",
  Edits: "Approved edits information and an edits destination have not been supplied for this demo.",
  Privacy: "An approved privacy notice has not been supplied for this demo.",
  Facebook: "An approved Facebook profile link has not been supplied for this demo.",
  Instagram: "An approved Instagram profile link has not been supplied for this demo.",
  Email: "An approved email address has not been supplied for this demo.",
  "Terms & Copyright": "Approved terms and copyright information have not been supplied for this demo.",
} as const satisfies Record<InformationDestination, string>;
