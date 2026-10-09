import { Mail } from "lucide-react";
import Section from "../section";
import { EMAIL } from "../site-config";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="rounded-xl border border-border bg-card/40 px-6 py-10 text-center sm:px-10">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">Let&apos;s work together</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Open to internships, freelance opportunities, and cybersecurity collaborations. If you are
          building something meaningful, let&apos;s connect.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-live px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          {EMAIL}
        </a>
      </div>
    </Section>
  );
}
