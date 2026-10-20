"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { mainNavigation } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Wordmark } from "./wordmark";

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
      <div className="site-container header-row">
        <Wordmark onClick={() => closeMenu()} />
        <nav aria-label="Main navigation" className="desktop-navigation">
          {mainNavigation.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/"));
            return <Link key={link.href} href={link.href} className={cn("header-link", active && "is-active")}
              aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>;
          })}
        </nav>
        <Button asChild className="desktop-cta"><Link href="/take-action">Get Involved<ArrowRight aria-hidden="true" /></Link></Button>
        <Button ref={menuButton} variant="outline" className="mobile-menu-button min-[72rem]:hidden"
          aria-expanded={menuOpen} aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}<span>{menuOpen ? "Close" : "Menu"}</span>
        </Button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="mobile-navigation">
        <div className="site-container mobile-navigation-content">
          {mainNavigation.map((link) => <Link key={link.href} href={link.href} className="mobile-nav-link"
            aria-current={pathname === link.href ? "page" : undefined} onClick={() => closeMenu()}>
            {link.label}<ArrowRight className="size-4" aria-hidden="true" />
          </Link>)}
          <Button asChild className="mt-4"><Link href="/take-action" onClick={() => closeMenu()}>Get Involved<ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </nav>
    </header>
  );
}
