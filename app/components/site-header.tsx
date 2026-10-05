"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { sections } from "./site-config";

const nptFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kathmandu",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

type Clocks = { utc: string; npt: string };

const placeholder: Clocks = { utc: "--:--", npt: "--:--" };

// Cached so getSnapshot returns a stable reference between ticks.
let snapshot: Clocks = placeholder;

function read(): Clocks {
  const now = new Date();
  return { utc: now.toISOString().slice(11, 16), npt: nptFormatter.format(now) };
}

function subscribe(onChange: () => void) {
  snapshot = read();
  onChange();

  const timer = setInterval(() => {
    snapshot = read();
    onChange();
  }, 1000);

  return () => clearInterval(timer);
}

const navItems = sections.filter((section) => section.nav);

export default function SiteHeader() {
  const clock = useSyncExternalStore(subscribe, () => snapshot, () => placeholder);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-5 sm:px-8">
        <a href="#identity" className="shrink-0 font-mono text-sm text-foreground">
          deadeye
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 font-mono text-xs text-muted-foreground tabular-nums">
          <span>
            <span className="text-muted-foreground/60">NPT</span> {clock.npt}
          </span>
          <span className="hidden sm:inline">
            <span className="text-muted-foreground/60">UTC</span> {clock.utc}
          </span>
        </div>
      </div>
    </header>
  );
}
