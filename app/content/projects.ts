export type Project = {
  name: string;
  summary: string;
  tag: string;
  date: string;
  href: string | null;
};

export const projects: Project[] = [
  {
    name: "os-ground-up",
    summary: "OS internals & C",
    tag: "OS · C",
    date: "May–Aug 2026",
    href: "https://github.com/safalgautam-ops/os-ground-up",
  },
  {
    name: "Nirikshan OS",
    summary: "Browser-based DFIR workstation",
    tag: "DFIR",
    date: "Jun–Jul 2026",
    href: "https://github.com/safalgautam-ops/NirikshanOS",
  },
  {
    name: "LLM Security Command Center",
    summary: "LLM jailbreak testing & defense",
    tag: "AI security",
    date: "Jan 2026",
    href: null,
  },
  {
    name: "Encapsula",
    summary: "Steganography toolkit with TUI and CLI",
    tag: "Steganography",
    date: "Jun 2025",
    href: "https://github.com/safalgautam-ops/Encapsula",
  },
];
