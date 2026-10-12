"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import { sections, socials } from "./site-config";
import IntroOverlay from "./intro-overlay";
import SiteHeader from "./site-header";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [helpOpen, setHelpOpen] = useState(false);

  const toggleHelp = useCallback(() => setHelpOpen((prev) => !prev), []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (document.documentElement.dataset.intro === "running") return;

      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;

      if (event.key === "Escape") {
        setHelpOpen(false);
        return;
      }

      // Match the physical key too, so it works with or without Shift.
      if (event.key === "?" || event.code === "Slash") {
        event.preventDefault();
        toggleHelp();
        return;
      }

      const section = sections.find((item) => item.hotkey === event.key);
      if (section) {
        document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const social = socials.find((item) => item.key === event.key.toLowerCase());
      if (social) window.open(social.href, "_blank", "noopener,noreferrer");
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleHelp]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <IntroOverlay />
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl px-5 sm:px-8">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Safal Gautam{" "}
            <span className="text-muted-foreground/50">·</span>{" "}
            <span className="font-mono">deadeye</span>
          </p>
          <button
            type="button"
            onClick={toggleHelp}
            className="hidden w-fit text-left transition-colors hover:text-foreground sm:block"
          >
            Press{" "}
            <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-foreground">
              ?
            </kbd>{" "}
            for keyboard shortcuts
          </button>
        </div>
      </footer>

      {helpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
          onClick={() => setHelpOpen(false)}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-sm rounded-xl border border-border bg-card p-5 shadow-2xl"
          >
            <p className="mb-4 text-sm font-semibold text-foreground">Keyboard shortcuts</p>

            <dl className="space-y-1.5 text-sm">
              {[
                ...sections.map((section) => ({ key: section.hotkey, label: section.label })),
                ...socials.map((social) => ({ key: social.key, label: `Open ${social.label}` })),
                { key: "esc", label: "Close" },
              ].map((row) => (
                <div key={row.key} className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd>
                    <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-foreground">
                      {row.key}
                    </kbd>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
