import { ArrowUpRight } from "lucide-react";
import { getWriteups } from "../../lib/medium";
import Section from "../section";
import { socials } from "../site-config";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kathmandu",
  day: "numeric",
  month: "short",
  year: "numeric",
});

const mediumProfile = socials.find((social) => social.label === "Medium")!.href;

export default async function WriteupsSection() {
  const writeups = await getWriteups(3);
  if (writeups.length === 0) return null;

  return (
    <Section id="writeups">
      <ul className="divide-y divide-border">
        {writeups.map((writeup) => (
          <li key={writeup.url}>
            <a
              href={writeup.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 flex items-start gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-card/60"
            >
              <div className="min-w-0 flex-1">
                <p className="font-medium leading-snug text-foreground">{writeup.title}</p>

                <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span
                    className={`rounded-full border px-2 py-0.5 ${
                      writeup.publication === "Medium"
                        ? "border-border text-muted-foreground"
                        : "border-live/40 bg-live/10 text-live"
                    }`}
                  >
                    {writeup.publication}
                  </span>
                  {writeup.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex shrink-0 flex-col items-end gap-1 pt-0.5">
                <time
                  dateTime={writeup.publishedAt.toISOString()}
                  className="font-mono text-xs text-muted-foreground tabular-nums"
                >
                  {dateFormatter.format(writeup.publishedAt)}
                </time>
                <span className="flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-live">
                  Read
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={mediumProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        All writeups on Medium
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </Section>
  );
}
