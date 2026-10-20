import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";
import { footerDemo, mainNavigation, site } from "@/content/site";
import { DemoPreview } from "@/components/demo/demo-preview";
import { Container } from "./container";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  const socialIcons = { Facebook, Instagram, Email: Mail };
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <Wordmark inverse /><p className="mt-6 max-w-64 text-sm leading-7">{site.slogan}</p>
          <p className="footer-location">{footerDemo.location}</p>
          <div className="footer-connect"><h2 className="footer-heading">Connect</h2>
            <div className="footer-social">{footerDemo.social.map((label) => { const Icon = socialIcons[label]; return (
              <DemoPreview key={label} title={`${label} — Demo version`} textLink><Icon aria-hidden="true" /><span className="sr-only">{label} — Demo version</span></DemoPreview>
            ); })}</div><p className="footer-demo-caption">Social links — demo previews.</p>
          </div>
        </div>
        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore" className="footer-heading">Explore</h2>
          <ul className="footer-list">{mainNavigation.slice(0, 4).map((link) => <li key={link.href}>
            <Link className="footer-link" href={link.href}>{link.label}</Link>
          </li>)}</ul>
        </nav>
        <nav aria-labelledby="footer-involved">
          <h2 id="footer-involved" className="footer-heading">Get Involved</h2>
          <ul className="footer-list">
            <li><Link className="footer-link" href="/take-action">Take Action</Link></li>
            <li><DemoPreview title="Updates" textLink>Updates</DemoPreview></li>
            <li><DemoPreview title="Contact" textLink>Contact</DemoPreview></li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-information">
          <h2 id="footer-information" className="footer-heading">Information</h2>
          <ul className="footer-list">
            <li><Link className="footer-link" href="/about">About</Link></li>
            {(["Sources & Methods", "Accessibility", "Edits", "Privacy"] as const).map((title) => <li key={title}>
              <DemoPreview title={title} textLink>{title}</DemoPreview>
            </li>)}
          </ul>
        </nav>
      </Container>
      <Container className="footer-demo-info">
        <p><span className="footer-version">{footerDemo.version}</span> {footerDemo.description}</p>
        <p>{site.demoNotice}</p>
      </Container>
      <Container className="footer-bottom">
        <p>{footerDemo.copyright}</p>
        <nav aria-label="Demo legal information">
          <DemoPreview title="Terms & Copyright — Demo version" textLink>Terms &amp; Copyright</DemoPreview>
          <DemoPreview title="Privacy — Demo version" textLink>Privacy</DemoPreview>
        </nav>
      </Container>
    </footer>
  );
}
