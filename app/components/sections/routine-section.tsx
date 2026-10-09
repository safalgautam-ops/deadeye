import Section from "../section";

const cronJobs = [
  { schedule: "@daily", task: "Digital forensics" },
  { schedule: "@nightly", task: "Pwn" },
  { schedule: "@weekly", task: "Capture the flag" },
  { schedule: "@monthly", task: "Blogs" },
  { schedule: "@yearly", task: "Cybersecurity awareness" },
];

export default function RoutineSection() {
  return (
    <Section id="routine">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-5">
        {cronJobs.map((job) => (
          <div key={job.schedule} className="flex flex-col-reverse gap-1 bg-background p-4 last:col-span-2 sm:last:col-span-1">
            <dt className="font-mono text-xs text-live">{job.schedule}</dt>
            <dd className="text-sm font-medium text-foreground">{job.task}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
