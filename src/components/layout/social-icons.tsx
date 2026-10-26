import { Instagram } from "lucide-react";
import { a11y } from "@/content/site";

// Footer F1 social icons. No URLs were supplied, so they stay visible but inert (D-009, D-015 OQ-08).
// Facebook and YouTube are drawn filled as in reference p023; the cut-out uses the footer colour.
export function SocialIcons() {
  return (
    <ul className="footer-social" aria-label={a11y.social}>
      <li>
        <svg viewBox="0 0 24 24" role="img" aria-label={a11y.facebook}>
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path d="M13.3 23v-8.2h2.6l.4-3h-3V9.9c0-.9.3-1.5 1.5-1.5h1.6V5.7a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.6v3h2.6V23z"
            fill="var(--footer-bg)" />
        </svg>
      </li>
      <li><Instagram role="img" aria-label={a11y.instagram} strokeWidth={2.1} /></li>
      <li>
        <svg viewBox="0 0 26 24" role="img" aria-label={a11y.youtube}>
          <rect x="0.5" y="4" width="25" height="17" rx="5" fill="currentColor" />
          <path d="M10.6 8.6v7.8l6.6-3.9z" fill="var(--footer-bg)" />
        </svg>
      </li>
    </ul>
  );
}
