import { ArrowUpRight } from "lucide-react";
import Section from "../section";

const platforms = [
  { name: "TryHackMe", handle: "d3adeye", href: "https://tryhackme.com/p/d3adeye" },
  {
    name: "Hack The Box",
    handle: "profile/019c66bf",
    href: "https://profile.hackthebox.com/profile/019c66bf-0b41-71de-b179-c23cc802c5e5",
  },
  { name: "CTFtime", handle: "team/437642", href: "https://ctftime.org/team/437642" },
];

export default function PlatformsSection() {
  return (
    <Section id="platforms">
      <div className="grid gap-3 sm:grid-cols-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card/40 px-4 py-3.5 transition-colors hover:border-white/20 hover:bg-card"
          >
            <span className="min-w-0">
              <span className="block text-sm font-medium text-foreground">{platform.name}</span>
              <span className="block truncate font-mono text-xs text-muted-foreground">{platform.handle}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-live" />
          </a>
        ))}
      </div>
    </Section>
  );
}
