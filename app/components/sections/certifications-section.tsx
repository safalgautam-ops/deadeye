"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { certifications } from "../../content/certifications";
import Section from "../section";
import { useReveal } from "../use-reveal";

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
                className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border bg-white/[0.04] ${item.issuer.padding}`}
              >
                <Image
                  src={item.issuer.logo}
                  alt={`${item.issuer.name} logo`}
                  width={88}
                  height={88}
                  className="h-full w-full object-contain"
                />
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-medium text-foreground">{item.title}</span>
                  {item.code && (
                    <span className="rounded border border-border px-1.5 py-px font-mono text-[11px] text-muted-foreground">
                      {item.code}
                    </span>
                  )}
                </span>
                <span className="block text-sm text-muted-foreground">{item.issuer.name}</span>
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
