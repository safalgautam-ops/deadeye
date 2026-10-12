"use client";

import { achievements, ordinal } from "../../content/achievements";
import Section from "../section";
import { useReveal } from "../use-reveal";

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
