const platforms = [
  {
    key: "TRYHACKME",
    label: "tryhackme.com/p/d3adeye",
    href: "https://tryhackme.com/p/d3adeye",
  },
  {
    key: "HACKTHEBOX",
    label: "profile.hackthebox.com/profile/019c66bf-0b41-71de-b179-c23cc802c5e5",
    href: "https://profile.hackthebox.com/profile/019c66bf-0b41-71de-b179-c23cc802c5e5",
  },
  {
    key: "CTFTIME",
    label: "ctftime.org/team/437642",
    href: "https://ctftime.org/team/437642",
  },
];

export default function PlatformsStatsSection() {
  return (
    <section id="platforms" className="scroll-mt-24 py-12 md:py-16">
      <p className="font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_cat_'] sm:text-base">
        platforms-stats.sh
      </p>

      <div className="mt-6 rounded border border-border bg-card p-4 font-mono text-xs sm:text-sm md:mt-8">
        {platforms.map((platform) => (
          <a
            key={platform.key}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            title={platform.label}
            className="block truncate py-1 transition-colors hover:text-foreground"
          >
            <span className="text-muted-foreground/70">{platform.key}</span>
            <span className="text-muted-foreground">=</span>
            <span className="text-foreground">&quot;{platform.label}&quot;</span>
          </a>
        ))}
      </div>
    </section>
  );
}
