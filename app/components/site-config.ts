export const sections = [
  { id: "identity", label: "Home", hotkey: "1", command: "whoami" },
  { id: "operations", label: "Operations", hotkey: "2", command: "cat operations.txt" },
  { id: "projects", label: "Projects", hotkey: "3", command: "ls projects/" },
  { id: "writeups", label: "Writeups", hotkey: "4", command: "ls ~/writeups" },
  { id: "certifications", label: "Certifications", hotkey: "5", command: "cat certifications.txt" },
  { id: "platforms", label: "Platforms", hotkey: "6", command: "./platforms.sh" },
  { id: "routine", label: "Routine", hotkey: "7", command: "crontab -l" },
  { id: "community", label: "Community", hotkey: "8", command: "cat events.txt" },
  { id: "contact", label: "Contact", hotkey: "9", command: "mail -s hello" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const socials = [
  { key: "g", label: "GitHub", href: "https://github.com/safalgautam-ops" },
  { key: "l", label: "LinkedIn", href: "https://www.linkedin.com/in/safalgautam09/" },
  { key: "m", label: "Medium", href: "https://medium.com/@safalgautam" },
] as const;

export const EMAIL = "gtmsafal09@gmail.com";
