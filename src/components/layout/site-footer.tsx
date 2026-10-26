import { a11y, footer, mainNavigation } from "@/content/site";
import { NavLink } from "./nav-link";
import { SocialIcons } from "./social-icons";
import { Wordmark } from "./wordmark";

// Shared footer F1 for every page (D-010): 22 October 2026 Home footer,
// references p023 (desktop), p087 (tablet), p093 (phone).
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-row">
        <div className="footer-brand">
          <Wordmark inverse className="footer-wordmark" />
          <p className="footer-tagline">{footer.tagline}</p>
        </div>
        <nav aria-label={a11y.footerNavigation} className="footer-links">
          {mainNavigation.map((item) => <NavLink key={item.label} item={item} className="footer-link" />)}
        </nav>
        <div className="footer-actions">
          <SocialIcons />
          <NavLink item={footer.subscribe} className="footer-subscribe" />
        </div>
      </div>
    </footer>
  );
}
