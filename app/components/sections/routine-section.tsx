import { Fragment } from "react";

const cronJobs = [
  { schedule: "@daily", task: "digital-forensics" },
  { schedule: "@nightly", task: "pwn" },
  { schedule: "@weekly", task: "capture-the-flag" },
  { schedule: "@monthly", task: "blogs" },
  { schedule: "@yearly", task: "cybersecurity-awareness" },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="scroll-mt-24 py-12 md:py-16">
      <p className="font-mono text-sm text-foreground before:text-muted-foreground/50 before:content-['$_'] sm:text-base">
        crontab -l
      </p>

      <div className="mt-6 w-fit rounded border border-border bg-card px-4 py-3 md:mt-8">
        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono text-xs sm:text-sm">
          {cronJobs.map((job) => (
            <Fragment key={job.schedule}>
              <span className="text-muted-foreground">{job.schedule}</span>
              <span className="text-foreground">{job.task}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
