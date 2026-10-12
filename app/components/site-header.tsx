"use client";

import { useSyncExternalStore } from "react";

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

export default function SiteHeader() {
  const clock = useSyncExternalStore(subscribe, () => snapshot, () => placeholder);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#identity" className="font-mono text-sm text-foreground">
          deadeye
        </a>

        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground tabular-nums">
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
