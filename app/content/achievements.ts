export type Achievement = {
  rank: number;
  event: string;
  scope: string;
  date: string;
};

export const achievements: Achievement[] = [
  { rank: 3, event: "Pentester Nepal 13th Anniversary", scope: "Local CTF · CVEPlayground", date: "Aug 2026" },
  { rank: 2, event: "Kavach", scope: "Inter-college CTF · NCIT College & YetiSec", date: "Jul 2026" },
  { rank: 4, event: "Hackastra", scope: "National CTF · EthicalHCK & Hacksec", date: "May–Jun 2026" },
  { rank: 1, event: "Netanix", scope: "Softwarica 24-hour CTF", date: "May 2026" },
  { rank: 2, event: "TriKode", scope: "Intra-college hackathon · Softwarica", date: "Jan 2026" },
];

export function ordinal(n: number) {
  return `${n}${n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"}`;
}
