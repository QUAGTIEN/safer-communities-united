"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { a11y, comparisonLink, getInvolved, header, mainNavigation, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";
import { NavLink } from "./nav-link";
import { Wordmark } from "./wordmark";

function isActive(item: NavItem, pathname: string) {
  if (!item.activeFor) return false;
  if (item.activeFor === "/") return pathname === "/";
  return pathname === item.activeFor || pathname.startsWith(item.activeFor + "/");
}

// Shared header (D-010): 22 October 2026 Home header, references p017 / p082 / p088,
// mobile menu p079. The search icon is shown but inert (D-009).
export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function closeMenu(returnFocus = false) {
    setMenuOpen(false);
    if (returnFocus) menuButton.current?.focus();
  }

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) { event.preventDefault(); closeMenu(true); }
    }}>
      <div className="header-row">
        <Wordmark className="header-wordmark" onClick={() => closeMenu()} />
        <nav aria-label={a11y.mainNavigation} className="desktop-navigation">
          {mainNavigation.map((item) => {
            const active = isActive(item, pathname);
            // The active underline is a real element with a view-transition name, so on navigation it slides
            // from the old menu item to the new one (D-028).
            return <NavLink key={item.label} item={item} current={active && pathname === item.activeFor}
              className={cn("header-link", active && "is-active")}>
              {item.label}{active && <span className="header-indicator" aria-hidden="true" />}
            </NavLink>;
          })}
          <span className="header-search" aria-hidden="true"><Search strokeWidth={1.75} /></span>
        </nav>
        <NavLink item={getInvolved} className="header-cta" />
        <button ref={menuButton} type="button" className="menu-button"
          aria-expanded={menuOpen} aria-controls="mobile-navigation"
          aria-label={menuOpen ? a11y.closeMenu : a11y.openMenu} onClick={() => setMenuOpen(!menuOpen)}>
          <span>{header.menu}</span>
          <svg viewBox="0 0 20 14" aria-hidden="true" className="menu-icon">
            <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label={a11y.mobileNavigation} hidden={!menuOpen} className="mobile-navigation">
        <ul className="mobile-nav-list">
          {mainNavigation.map((item) => <li key={item.label}>
            <NavLink item={item} className="mobile-nav-link" onNavigate={() => closeMenu()}
              current={isActive(item, pathname) && pathname === item.activeFor} />
            {item.label === "The Proposal" && <ul>
              <li><NavLink item={comparisonLink} className="mobile-nav-link is-nested" onNavigate={() => closeMenu()} /></li>
            </ul>}
          </li>)}
        </ul>
        <NavLink item={getInvolved} className="mobile-cta" onNavigate={() => closeMenu()} />
      </nav>
    </header>
  );
}
