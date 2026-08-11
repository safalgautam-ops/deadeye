"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const certifications = [
  {
    title: "Blue Team Fundamentals (BTF)",
    platform: "CyberWarfare Labs",
    year: "August 2026",
  },
  {
    title: "Cybersecurity Red Team Analyst (CRTA)",
    platform: "CyberWarfare Labs",
    year: "March 2026",
  },
  {
    title: "Introduction to Cybersecurity",
    platform: "Cisco Networking Academy",
    year: "January 2025",
  },
];

export default function CertificationsSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-cert-row]").forEach((row) => {
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
      id="certifications"
      ref={scope}
      className="scroll-mt-24 py-12 md:py-16"
    >
      <p className="font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_cat_'] sm:text-base">
        certifications.txt
      </p>

      <div className="mt-6 border-t border-border md:mt-8">
        {certifications.map((item) => (
          <article
            key={item.title}
            data-cert-row
            className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-3 sm:py-5 md:gap-4 md:py-6"
          >
            <div className="space-y-1">
              <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground sm:text-base">{item.platform}</p>
            </div>

            <p className="font-mono text-xs text-muted-foreground sm:text-sm">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
