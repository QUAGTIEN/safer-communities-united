"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Car, Droplet, FileText, House, type LucideIcon } from "lucide-react";
import { tabs } from "@/content/issues";

// ISS-TABS — four in-page anchors (TXT:397-407). The tab of the section currently in view
// takes the highlighted treatment shown for Roads & Safety in reference p030.
const icons: Record<(typeof tabs)[number]["id"], LucideIcon> = {
  "roads-safety": Car, "water-septic": Droplet, "growth-daily-life": House, "community-plan": FileText,
};

export function IssueTabs() {
  const [current, setCurrent] = useState<string>(tabs[0].id);

  useEffect(() => {
    const sections = tabs.map((tab) => document.getElementById(tab.id)).filter((el): el is HTMLElement => !!el);
    const update = () => {
      const line = window.innerHeight * 0.35;
      let active: string = tabs[0].id;
      for (const section of sections) if (section.getBoundingClientRect().top <= line) active = section.id;
      setCurrent(active);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <nav className="iss-tabs" aria-label="Issues">
      <ul className="iss-tabs-list">
        {tabs.map((tab) => {
          const Icon = icons[tab.id];
          const active = current === tab.id;
          return <li key={tab.id}>
            <a href={`#${tab.id}`} className={`iss-tab is-${tab.id}${active ? " is-current" : ""}`}
              aria-current={active ? "location" : undefined}>
              <span className="iss-tab-icon" aria-hidden="true"><Icon strokeWidth={2.25} /></span>
              <span className="iss-tab-label">{tab.label}</span>
              <span className="iss-tab-arrow" aria-hidden="true"><ArrowRight strokeWidth={2.5} /></span>
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
}
