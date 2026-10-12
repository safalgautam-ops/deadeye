"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { GlitchImage } from "./glitch-avatar";

const MIN_MS = 5000;
const REDUCED_MOTION_MS = 1200;

export default function IntroOverlay() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minMs = reduced ? REDUCED_MOTION_MS : MIN_MS;

    // The morph measures the target at scroll 0, so the page must start (and stay) at the top.
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    html.style.overflow = "hidden";

    let loaded = document.readyState === "complete";
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener("load", onLoad);

    let timeline: gsap.core.Timeline | null = null;

    const finish = () => {
      html.dataset.intro = "done";
      html.style.overflow = "";
      setDone(true);
      // Reveal triggers were measured while the page was locked; re-measure now that layout is final.
      ScrollTrigger.refresh();
    };

    const fadeOut = () =>
      gsap.timeline({ onComplete: finish }).to(rootRef.current, { opacity: 0, duration: 0.4 });

    const morph = () => {
      const logo = logoRef.current;
      const target = document.querySelector("[data-logo-target]");
      if (!logo || !target) return fadeOut();

      const from = logo.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      const glitch = logo.querySelector(".glitch");

      return gsap
        .timeline({ onComplete: finish })
        .to(hudRef.current, { opacity: 0, y: 8, duration: 0.3, ease: "power2.in" })
        .call(() => {
          glitch?.classList.replace("glitch-intense", "glitch-frantic");
        })
        .to(logo, {
          x: to.left + to.width / 2 - (from.left + from.width / 2),
          y: to.top + to.height / 2 - (from.top + from.height / 2),
          scale: to.width / from.width,
          duration: 1,
          ease: "expo.inOut",
        })
        .to(backdropRef.current, { opacity: 0, duration: 0.75, ease: "power2.out" }, "<0.3")
        .call(() => glitch?.classList.remove("glitch-frantic"));
    };

    // performance.now() counts from navigation start; the overlay is server-rendered and
    // visible from first paint, so time spent loading JS already counts toward the minimum.
    const ticker = setInterval(() => {
      const timeShare = Math.min(performance.now() / minMs, 1);
      const next = loaded ? timeShare : Math.min(timeShare, 0.99);
      setProgress(next);

      if (next < 1) return;
      clearInterval(ticker);
      timeline = reduced ? fadeOut() : morph();
    }, 50);

    return () => {
      clearInterval(ticker);
      timeline?.kill();
      window.removeEventListener("load", onLoad);
      html.style.overflow = "";
    };
  }, []);

  if (done) return null;

  const percent = Math.floor(progress * 100);

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading portfolio"
      className="intro fixed inset-0 z-[200] flex items-center justify-center"
    >
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_60%_45%_at_50%_45%,oklch(0.66_0.235_29/0.12),transparent)]"
      />

      <div className="relative flex flex-col items-center gap-8">
        <div ref={logoRef} className="w-44 sm:w-52">
          <GlitchImage alt="" className="glitch-intense" />
        </div>

        <div ref={hudRef} className="flex w-44 flex-col items-center gap-3 sm:w-52">
          <p className="pl-[0.5em] font-mono text-xs tracking-[0.5em] text-foreground/80">DEADEYE</p>

          <div className="h-px w-full overflow-hidden bg-white/10">
            <div className="h-full bg-live" style={{ width: `${percent}%` }} />
          </div>

          <p className="font-mono text-[11px] text-muted-foreground tabular-nums">{percent}%</p>
        </div>
      </div>
    </div>
  );
}
