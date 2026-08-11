"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  { title: "Nirikshan OS: A Browser-Based DFIR Workstation", year: "June-July 2026" },
  { title: "LLM Security Command Center", year: "January 2026" },
  { title: "Encapsula: A Steganography Toolkit", year: "June 2025" },
];

export default function ProjectsSection() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>("[data-project-row]").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              end: "top 40%",
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
      id="projects"
      ref={scope}
      className="scroll-mt-24 py-12 md:py-16"
    >
      <p className="font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_cat_'] sm:text-base">
        projects.txt
      </p>

      <div className="mt-6 border-t border-border md:mt-8">
        {projects.map((project) => (
          <article
            key={project.title}
            data-project-row
            className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-3 sm:py-5 md:gap-4 md:py-6"
          >
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground sm:text-base md:text-lg">
              {project.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
