export const sections = [
  { id: "identity", label: "Home", hotkey: "1", command: "whoami", nav: false },
  { id: "operations", label: "Operations", hotkey: "2", command: "cat operations.txt", nav: true },
  { id: "projects", label: "Projects", hotkey: "3", command: "ls projects/", nav: true },
  { id: "certifications", label: "Certifications", hotkey: "4", command: "cat certifications.txt", nav: true },
  { id: "platforms", label: "Platforms", hotkey: "5", command: "./platforms.sh", nav: false },
  { id: "routine", label: "Routine", hotkey: "6", command: "crontab -l", nav: false },
  { id: "community", label: "Community", hotkey: "7", command: "cat events.txt", nav: true },
  { id: "contact", label: "Contact", hotkey: "8", command: "mail -s hello", nav: true },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const socials = [
  { key: "g", label: "GitHub", href: "https://github.com/safalgautam-ops" },
  { key: "l", label: "LinkedIn", href: "https://www.linkedin.com/in/safalgautam09/" },
  { key: "m", label: "Medium", href: "https://medium.com/@safalgautam" },
] as const;

export const EMAIL = "gtmsafal09@gmail.com";
