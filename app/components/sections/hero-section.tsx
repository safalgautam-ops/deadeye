"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Newspaper } from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ROLE_PREFIX = "Cybersecurity ";
const ROLE_WORDS = ["Student", "Enthusiast"];

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

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/safalgautam-ops",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/safalgautam09/",
    Icon: Linkedin,
  },
  {
    label: "Medium",
    href: "https://medium.com/@safalgautam",
    Icon: Newspaper,
  },
];

export default function HeroSection() {
  const scope = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROLE_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseAtFull = 1400;
    const pauseAtEmpty = 300;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex((prev) => prev + 1);
        return;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
        return;
      }

      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % ROLE_WORDS.length);
    }, !isDeleting && charIndex === currentWord.length
      ? pauseAtFull
      : isDeleting && charIndex === 0
        ? pauseAtEmpty
        : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline.from("[data-gsap='heading']", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
      });

      timeline.from(
        "[data-gsap='social']",
        {
          y: 14,
          opacity: 0,
          scale: 0.94,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
        },
        "-=0.2",
      );
    },
    { scope },
  );

  return (
    <section
      id="home"
      ref={scope}
      className="relative isolate flex flex-col items-start gap-4 overflow-hidden py-16 text-left sm:gap-5 sm:py-24"
    >
      <div
        data-gsap="heading"
        aria-hidden="true"
        role="presentation"
        className="z-10 hidden items-end gap-1 sm:flex md:gap-1.5"
      >
        {DEADEYE_LETTERS.map((letter, letterIndex) => (
          <div
            key={`${letter}-${letterIndex}`}
            className="grid grid-cols-5 gap-[1.5px] md:gap-[2px]"
          >
            {PIXEL_FONT[letter].flatMap((row, rowIndex) =>
              row.map((cell, cellIndex) => (
                <span
                  key={`${letterIndex}-${rowIndex}-${cellIndex}`}
                  className={`h-1.5 w-1.5 md:h-2 md:w-2 ${cell ? "bg-foreground" : ""}`}
                />
              )),
            )}
          </div>
        ))}
      </div>
      <p
        data-gsap="heading"
        className="z-10 font-mono text-xs tracking-[0.2em] text-muted-foreground sm:hidden"
      >
        [ deadeye ]
      </p>

      <p
        data-gsap="heading"
        className="z-10 font-mono text-xs text-muted-foreground before:text-muted-foreground/50 before:content-['$_'] sm:text-sm"
      >
        whoami
      </p>

      <h1
        data-gsap="heading"
        className="z-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
      >
        Safal Gautam
      </h1>

      <p
        data-gsap="heading"
        className="z-10 font-mono text-xl text-muted-foreground sm:text-2xl"
      >
        {ROLE_PREFIX}
        {ROLE_WORDS[wordIndex].slice(0, charIndex)}
        <span className="ml-0.5 inline-block h-[0.85em] w-[2px] animate-pulse bg-muted-foreground align-[-2px]" />
      </p>

      <div className="z-10 mt-2 flex items-center gap-5 sm:mt-4">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            data-gsap="social"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </a>
        ))}
      </div>
    </section>
  );
}
