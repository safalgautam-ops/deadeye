import { ArrowUpRight } from "lucide-react";

export default function ContactsSection() {
  return (
    <section id="contacts" className="scroll-mt-24 py-12 md:py-16">
      <p className="mb-6 font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_cat_'] sm:mb-8 sm:text-base">
        contact.txt
      </p>

      <article className="rounded border border-border bg-card p-5 sm:p-7 lg:p-8">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
          Open to internships, freelance opportunities, and cybersecurity collaborations.
          If you are building something meaningful, lets connect.
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
          <a
            href="mailto:gtmsafal09@gmail.com"
            className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            email me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </article>
    </section>
  );
}
