"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../../content/projects";
import Section from "../section";
import { useReveal } from "../use-reveal";

export default function ProjectsSection() {
  const scope = useReveal<HTMLDivElement>();

  return (
    <Section id="projects">
      <div ref={scope} className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const body = (
            <>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium text-foreground">{project.name}</h3>
                {project.href && (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-live" />
                )}
              </div>

              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs">
                <span className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                  {project.tag}
                </span>
                <span className="flex items-center gap-3 font-mono text-muted-foreground tabular-nums">
                  {project.href && <Github className="h-3.5 w-3.5" aria-label="GitHub repository" />}
                  {project.date}
                </span>
              </div>
            </>
          );

          const cardClass =
            "group flex min-h-36 flex-col rounded-xl border border-border bg-card/40 p-5 transition-colors";

          return project.href ? (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className={`${cardClass} hover:border-white/20 hover:bg-card`}
            >
              {body}
            </a>
          ) : (
            <div key={project.name} data-reveal className={cardClass}>
              {body}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
