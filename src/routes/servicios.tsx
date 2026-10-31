import { createFileRoute } from "@tanstack/react-router";
import { services, budgetFactors, studioInfo } from "@/data/studio";
import { PageHeader } from "@/components/site/PageHeader";
import { PageCta } from "@/components/site/PageCta";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: `Servicios — ${studioInfo.name}` },
      { name: "description", content: "Tatuajes personalizados, basados en referencias, consulta de diseño y sesiones." },
      { property: "og:title", content: `Servicios — ${studioInfo.name}` },
      { property: "og:description", content: "Cómo trabajamos y qué influye en cada presupuesto." },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHeader eyebrow="Servicios" title="Del boceto a la piel.">Cada proyecto empieza con una conversación.</PageHeader>
      <section className="px-6 md:px-10">
        <div className="mx-auto max-w-[1600px] grid gap-20">
          {services.map((s, i) => (
            <article key={s.title} className={cn("grid gap-8 md:grid-cols-12 md:items-center")}>
              <img src={s.image} alt="" loading="lazy" className={cn("w-full aspect-[4/3] object-cover md:col-span-6", i % 2 && "md:order-2 md:col-start-7")} />
              <div className={cn("md:col-span-4", i % 2 ? "md:col-start-2 md:order-1" : "md:col-start-8")}>
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display mt-4 text-5xl">{s.title}</h2>
                <p className="mt-6 text-muted-foreground">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-32 border-t border-border px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-12">
          <h2 className="display text-5xl md:col-span-5">¿Qué influye en el presupuesto?</h2>
          <ul className="md:col-span-6 md:col-start-7 divide-y divide-border border-y border-border">
            {budgetFactors.map((f) => <li key={f} className="py-5 text-lg">{f}</li>)}
          </ul>
        </div>
      </section>
      <PageCta title="Pedí información sin compromiso." />
    </>
  );
}
