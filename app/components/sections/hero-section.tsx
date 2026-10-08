import { ArrowUpRight, Github, Linkedin, Mail, Newspaper } from "lucide-react";
import GlitchAvatar from "../glitch-avatar";
import { EMAIL, socials } from "../site-config";

const PIXEL_FONT: Record<string, number[][]> = {
  D: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
};

const DEADEYE_LETTERS = ["D", "E", "A", "D", "E", "Y", "E"];

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Medium: Newspaper };

const stats = [
  { value: "5", label: "Top-5 competition finishes" },
  { value: "1st", label: "Netanix 24h CTF" },
  { value: "4", label: "Projects" },
  { value: "3", label: "Certifications" },
];

export default function HeroSection() {
  return (
    <section id="identity" className="relative scroll-mt-24 pb-12 pt-16 text-center sm:pb-16 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-14 -z-10 mx-auto h-80 max-w-2xl bg-[radial-gradient(closest-side,oklch(0.66_0.235_29/0.14),transparent)]"
      />

      <div className="flex flex-col items-center">
        <GlitchAvatar />

        <div aria-hidden className="mt-8 flex items-end justify-center gap-[3px] sm:gap-1.5">
          {DEADEYE_LETTERS.map((letter, letterIndex) => (
            <div key={`${letter}-${letterIndex}`} className="grid grid-cols-5 gap-px sm:gap-[1.5px]">
              {PIXEL_FONT[letter].flatMap((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                  <span
                    key={`${letterIndex}-${rowIndex}-${cellIndex}`}
                    className={`h-1 w-1 sm:h-1.5 sm:w-1.5 ${cell ? "bg-live" : ""}`}
                  />
                )),
              )}
            </div>
          ))}
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Safal Gautam
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-xl">Cybersecurity Enthusiast</p>

        <p className="mt-5 whitespace-nowrap text-[clamp(11px,3.3vw,14px)] text-muted-foreground">
          Focused on digital forensics and binary exploitation
        </p>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
          </span>
          Open to work &amp; paid internships
        </span>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md bg-live px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>

          {socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {social.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
              </a>
            );
          })}
        </div>
      </div>

      <dl className="mt-14 grid grid-cols-2 overflow-hidden rounded-xl border border-border text-left sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse gap-1 bg-card/40 p-4 sm:p-5 ${index % 2 === 1 ? "border-l border-border" : ""} ${
              index >= 2 ? "border-t border-border sm:border-t-0" : ""
            } ${index === 2 ? "sm:border-l" : ""}`}
          >
            <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight text-foreground">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
