import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
      <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8 animate-enter">
          <p className="eyebrow mb-8">{eyebrow}</p>
          <h1 className="display text-6xl sm:text-7xl md:text-[9rem]">{title}</h1>
        </div>
        {children && <div className="md:col-span-3 md:col-start-10 text-muted-foreground animate-enter" style={{ animationDelay: "200ms" }}>{children}</div>}
      </div>
    </section>
  );
}
