"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const achievements = [
  {
    title: "2nd Position — Kavach: Inter-College CTF Competition",
    date: "July 2026",
  },
  {
    title: "5th Position — Hackastra: National CTF Competition",
    date: "May-June 2026",
  },
  {
    title: "1st Position — Netanix: Softwarica 24 Hours CTF Competition",
    date: "May 2026",
  },
  {
    title: "2nd Position — Intra-College TriKode Hackathon 2026, Softwarica",
    date: "January 2026",
  },
];

export default function AchievementsSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-achievement-row]").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 42%",
              scrub: 0.7,
            },
          },
        );
      });
    },
    { scope },
  );

  return (
    <section
      id="achievements"
      ref={scope}
      className="scroll-mt-24 py-12 md:py-16"
    >
      <p className="font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_cat_'] sm:text-base">
        achievements.txt
      </p>

      <div className="mt-6 border-t border-border md:mt-8">
        {achievements.map((item) => (
          <article
            key={item.title}
            data-achievement-row
            className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-3 sm:py-5 md:gap-4 md:py-6"
          >
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
              {item.title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              {item.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
