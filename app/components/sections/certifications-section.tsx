"use client";

import { ArrowUpRight } from "lucide-react";
import Section from "../section";
import { useReveal } from "../use-reveal";

const certifications = [
  {
    code: "BTF",
    title: "Blue Team Fundamentals",
    issuer: "CyberWarfare Labs",
    date: "Aug 2026",
    href: "https://labs.cyberwarfare.live/credential/achievement/6a70debd8aed14e94c97581f",
  },
  {
    code: "CRTA",
    title: "Certified Red Team Analyst",
    issuer: "CyberWarfare Labs",
    date: "Mar 2026",
    href: "https://labs.cyberwarfare.live/credential/achievement/69b237a2f598fb51b71b56cc",
  },
  {
    code: null,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jan 2025",
    href: "https://www.credly.com/badges/edcdc0f0-1433-4d90-8b45-9e6425de74d3/public_url",
  },
];

export default function CertificationsSection() {
  const scope = useReveal<HTMLUListElement>();

  return (
    <Section id="certifications">
      <ul ref={scope} className="divide-y divide-border">
        {certifications.map((item) => (
          <li key={item.title} data-reveal>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${item.title} credential (opens in a new tab)`}
              className="group -mx-3 flex items-center gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-card/60"
            >
              <span
                className={`flex h-10 w-12 shrink-0 items-center justify-center rounded-md border font-mono text-xs ${
                  item.code
                    ? "border-live/40 bg-live/10 text-live"
                    : "border-border text-muted-foreground/50"
                }`}
              >
                {item.code ?? "—"}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-medium text-foreground">{item.title}</span>
                <span className="block text-sm text-muted-foreground">{item.issuer}</span>
              </span>

              <span className="flex shrink-0 flex-col items-end gap-1">
                <span className="font-mono text-xs text-muted-foreground tabular-nums">{item.date}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-live">
                  Verify
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
