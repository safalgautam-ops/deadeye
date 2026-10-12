export type Issuer = {
  name: string;
  logo: string;
  // Tile padding tuned per logo shape: square marks need more room than wordmarks.
  padding: string;
};

export type Certification = {
  code: string | null;
  title: string;
  issuer: Issuer;
  date: string;
  href: string;
};

const cyberwarfareLabs: Issuer = { name: "CyberWarfare Labs", logo: "/logos/cyberwarfare-labs.png", padding: "p-2" };
const ciscoNetworkingAcademy: Issuer = { name: "Cisco Networking Academy", logo: "/logos/cisco.svg", padding: "p-1" };

export const certifications: Certification[] = [
  {
    code: "BTF",
    title: "Blue Team Fundamentals",
    issuer: cyberwarfareLabs,
    date: "Aug 2026",
    href: "https://labs.cyberwarfare.live/credential/achievement/6a70debd8aed14e94c97581f",
  },
  {
    code: "CRTA",
    title: "Certified Red Team Analyst",
    issuer: cyberwarfareLabs,
    date: "Mar 2026",
    href: "https://labs.cyberwarfare.live/credential/achievement/69b237a2f598fb51b71b56cc",
  },
  {
    code: null,
    title: "Introduction to Cybersecurity",
    issuer: ciscoNetworkingAcademy,
    date: "Jan 2025",
    href: "https://www.credly.com/badges/edcdc0f0-1433-4d90-8b45-9e6425de74d3/public_url",
  },
];
