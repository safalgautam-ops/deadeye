import { ArrowUpRight } from "lucide-react";
import { CTFTIME_TEAM_URL, getCtftimeStanding } from "../../lib/ctftime";
import Section from "../section";

type Platform = {
  name: string;
  handle: string;
  href: string;
  note?: string;
  stats?: { label: string; value: string }[];
};

export default async function PlatformsSection() {
  const standing = await getCtftimeStanding();

  const platforms: Platform[] = [
    standing
      ? {
          name: "CTFtime",
          handle: `Team ${standing.team}`,
          href: CTFTIME_TEAM_URL,
          note: `${standing.year} season`,
          stats: [
            { label: "World", value: `#${standing.worldRank}` },
            ...(standing.countryRank ? [{ label: "Nepal", value: `#${standing.countryRank}` }] : []),
            { label: "Rating", value: standing.points.toFixed(1) },
          ],
        }
      : { name: "CTFtime", handle: "team/437642", href: CTFTIME_TEAM_URL },
    { name: "TryHackMe", handle: "d3adeye", href: "https://tryhackme.com/p/d3adeye" },
    {
      name: "Hack The Box",
      handle: "profile/019c66bf",
      href: "https://profile.hackthebox.com/profile/019c66bf-0b41-71de-b179-c23cc802c5e5",
    },
  ];

  return (
    <Section id="platforms">
      <div className="grid gap-3 sm:grid-cols-3">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-white/20 hover:bg-card"
          >
            <span className="flex items-start justify-between gap-3">
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">{platform.name}</span>
                <span className="block truncate font-mono text-xs text-muted-foreground">{platform.handle}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-live" />
            </span>

            <span className="mt-auto pt-4">
              {platform.stats ? (
                <>
                  <span className="grid grid-cols-3 gap-2">
                    {platform.stats.map((stat) => (
                      <span key={stat.label} className="flex flex-col-reverse">
                        <span className="text-[11px] text-muted-foreground">{stat.label}</span>
                        <span className="text-base font-semibold tracking-tight text-foreground tabular-nums">
                          {stat.value}
                        </span>
                      </span>
                    ))}
                  </span>
                  {platform.note && (
                    <span className="mt-2 block font-mono text-[10px] text-muted-foreground/60">{platform.note}</span>
                  )}
                </>
              ) : (
                <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  View profile
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
