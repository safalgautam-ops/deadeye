import { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-3xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-12">
        {children}
      </main>
    </div>
  );
}
