import { ReactNode } from "react";
import { sections, SectionId } from "./site-config";

export default function Section({ id, children }: { id: Exclude<SectionId, "identity">; children: ReactNode }) {
  const position = sections.findIndex((section) => section.id === id);
  const section = sections[position];

  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <header className="mb-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-live tabular-nums">
            {String(position).padStart(2, "0")}
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">{section.label}</h2>
        </div>
        <span className="hidden font-mono text-xs text-muted-foreground/60 sm:inline">
          $ {section.command}
        </span>
      </header>

      {children}
    </section>
  );
}
