"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function useReveal<T extends HTMLElement>() {
  const scope = useRef<T>(null);

  useGSAP(
    () => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: { trigger: scope.current, start: "top 92%", once: true },
      });
    },
    { scope },
  );

  return scope;
}
