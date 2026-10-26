import Link from "next/link";
import { opening } from "@/content/home";
import { asset } from "@/lib/assets";

// HOME-OPENING — references p019 (1536), p083 (768), p089 (390).
// Approved Home exception colours: warm white, charcoal, burgundy, #FCEAEA panel, #E51C17 emphasis (TXT:44).
export function HomeOpening() {
  const sign = asset("home-welcome-sign");
  const warning = asset("home-warning-triangle");
  return (
    <section className="home-opening" aria-labelledby="home-title">
      <div className="home-opening-grid">
        <div className="home-opening-copy">
          <p className="home-eyebrow">{opening.eyebrow}</p>
          <h1 id="home-title" className="home-title">{opening.title}</h1>
          <p className="home-vision">{opening.vision}</p>
          <div className="home-alert">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP */}
            <img src={warning.src} width={warning.width} height={warning.height} alt="" className="home-alert-icon" />
            <p>{opening.alert.lead} <strong>{opening.alert.emphasis}</strong></p>
          </div>
          <div className="home-actions">
            <Link href={opening.primary.href} className="home-button is-primary">{opening.primary.label}</Link>
            <Link href={opening.secondary.href} className="home-button is-secondary">{opening.secondary.label}</Link>
          </div>
        </div>
        {/* User-supplied Keystone Odessa welcome sign, full frame (TXT:44, TXT:1045). Its lettering is part of the photo. */}
        {/* eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP */}
        <img src={sign.src} width={sign.width} height={sign.height} alt="Keystone Odessa welcome sign" className="home-sign" />
      </div>
    </section>
  );
}
