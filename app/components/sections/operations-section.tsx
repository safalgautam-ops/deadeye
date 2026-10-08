"use client";

import Section from "../section";
import { useReveal } from "../use-reveal";

const achievements = [
  { rank: 3, event: "Pentester Nepal 13th Anniversary CTF", scope: "National CTF", date: "Aug 2026" },
  { rank: 2, event: "Kavach", scope: "Inter-college CTF", date: "Jul 2026" },
  { rank: 5, event: "Hackastra", scope: "National CTF", date: "May–Jun 2026" },
  { rank: 1, event: "Netanix", scope: "Softwarica 24-hour CTF", date: "May 2026" },
  { rank: 2, event: "TriKode Hackathon 2026", scope: "Intra-college hackathon · Softwarica", date: "Jan 2026" },
];

const ordinal = (n: number) => `${n}${n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"}`;

export default function OperationsSection() {
  const scope = useReveal<HTMLUListElement>();

  return (
    <Section id="operations">
      <ul ref={scope} className="divide-y divide-border">
        {achievements.map((item) => {
          const isWin = item.rank === 1;

          return (
            <li key={`${item.event}-${item.date}`} data-reveal className="flex items-center gap-4 py-4">
              <span
                className={`flex h-10 w-12 shrink-0 items-center justify-center rounded-md border font-mono text-sm tabular-nums ${
                  isWin
                    ? "border-live/40 bg-live/10 text-live"
                    : "border-border bg-card/40 text-foreground"
                }`}
              >
                {ordinal(item.rank)}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{item.event}</p>
                <p className="text-sm text-muted-foreground">{item.scope}</p>
              </div>

              <span className="shrink-0 text-right font-mono text-xs text-muted-foreground tabular-nums">
                {item.date}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
