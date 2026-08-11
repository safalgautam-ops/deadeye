"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const events = [
  {
    title: "Attended the 13th Anniversary Conference & Meetup of Pentester Nepal",
    description: "A full-day cybersecurity conference bringing together security professionals, students, researchers, and enthusiasts from across Nepal. The event featured technical talks from industry experts, community recognition awards, and networking sessions that highlighted the continued growth of Nepal's cybersecurity community.",
    date: "August 2026",
  },
  {
    title: "Attended the 8th OWASP Kathmandu Chapter Event",
    description: "Explored key areas of web application security, ethical hacking, and bug bounty hunting through sessions led by experienced security researchers, gaining insight into practical vulnerability discovery and responsible disclosure practices.",
    date: "April 2026",
  },
  {
    title: "Conducted Cyber Hygiene and Online Safety Awareness Program",
    description: "Delivered interactive awareness sessions for grade 8 and 9 students across various districts of Nepal, helping them recognize online risks, safeguard their digital identities, and understand how common cyberattacks unfold.",
    date: "2024/2025/2026",
  },
];

export default function EventsSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-events-item]").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
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
      id="events"
      ref={scope}
      className="scroll-mt-24 py-12 md:py-16"
    >
      <p className="mb-7 font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_cat_'] sm:text-base">
        events.txt
      </p>

      <div className="border-t border-border">
        {events.map((event) => (
          <article
            key={event.title}
            data-events-item
            className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-3 sm:py-5 md:gap-4 md:py-6"
          >
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
              {event.title}
            </h3>
            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              {event.date}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-2 sm:text-base">
              {event.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
