import Link from "next/link";

const navItems = [
  { label: "achievements.txt", href: "/#achievements" },
  { label: "events.txt", href: "/#events" },
  { label: "projects.txt", href: "/#projects" },
  { label: "certifications.txt", href: "/#certifications" },
  { label: "platforms-stats.sh", href: "/#platforms" },
  { label: "contact.txt", href: "/#contacts" },
];

export default function Navigation() {
  return (
    <div className="border-b border-border pb-8">
      <p className="font-mono text-xs text-foreground before:text-muted-foreground/50 before:content-['$_'] sm:text-sm">
        ls
      </p>
      <div className="mt-2 flex flex-col">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="w-fit font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
