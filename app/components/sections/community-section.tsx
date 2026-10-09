"use client";

import Section from "../section";
import { useReveal } from "../use-reveal";

const events = [
  {
    role: "Attended",
    title: "13th Anniversary Conference & Meetup — Pentester Nepal",
    date: "Aug 2026",
    description:
      "A full-day cybersecurity conference bringing together security professionals, students, researchers, and enthusiasts from across Nepal. The event featured technical talks from industry experts, community recognition awards, and networking sessions that highlighted the continued growth of Nepal's cybersecurity community.",
  },
  {
    role: "Attended",
    title: "8th OWASP Kathmandu Chapter Event",
    date: "Apr 2026",
    description:
      "Explored key areas of web application security, ethical hacking, and bug bounty hunting through sessions led by experienced security researchers, gaining insight into practical vulnerability discovery and responsible disclosure practices.",
  },
  {
    role: "Conducted",
    title: "Cyber Hygiene & Online Safety Awareness Program",
    date: "2024–2026",
    description:
      "Delivered interactive awareness sessions for grade 8 and 9 students across various districts of Nepal, helping them recognize online risks, safeguard their digital identities, and understand how common cyberattacks unfold.",
  },
];

export default function CommunitySection() {
  const scope = useReveal<HTMLOListElement>();

  return (
    <Section id="community">
      <ol ref={scope} className="divide-y divide-border">
        {events.map((event) => (
          <li key={event.title} data-reveal className="py-5 first:pt-1">
            <div className="flex items-center justify-between gap-3">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs ${
                  event.role === "Conducted"
                    ? "border-live/40 bg-live/10 text-live"
                    : "border-border text-muted-foreground"
                }`}
              >
                {event.role}
              </span>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">{event.date}</span>
            </div>

            <h3 className="mt-3 font-medium text-foreground">{event.title}</h3>
            <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {event.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
