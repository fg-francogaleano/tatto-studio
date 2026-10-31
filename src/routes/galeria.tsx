import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { works, styles, studioInfo } from "@/data/studio";
import { PageHeader } from "@/components/site/PageHeader";
import { PageCta } from "@/components/site/PageCta";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "@/lib/utils";

type Search = { estilo?: string };

export const Route = createFileRoute("/galeria")({
  validateSearch: (s: Record<string, unknown>): Search => (typeof s.estilo === "string" ? { estilo: s.estilo } : {}),
  head: () => ({
    meta: [
      { title: `Galería — ${studioInfo.name}` },
      { name: "description", content: "Portafolio de tatuajes: blackwork, fine line, realismo, tradicional, geométrico y lettering." },
      { property: "og:title", content: `Galería — ${studioInfo.name}` },
      { property: "og:description", content: "La piel como lienzo. Explorá nuestros trabajos." },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const { estilo } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [open, setOpen] = useState<number | null>(null);
  const list = estilo ? works.filter((w) => w.style === estilo) : works;
  const setFilter = (id?: string) => navigate({ search: id ? { estilo: id } : {}, replace: true, resetScroll: false });

  return (
    <>
      <PageHeader eyebrow="Galería" title={<>La piel como <em className="italic text-accent">lienzo</em>.</>}>
        Una selección de piezas del estudio. Tocá cualquier imagen para verla en detalle.
      </PageHeader>
      <div className="sticky top-[73px] z-30 border-y border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] gap-6 overflow-x-auto px-6 py-4 md:px-10" role="group" aria-label="Filtrar por estilo">
          {[{ id: undefined, name: "Todos" }, ...styles].map((s) => (
            <button
              key={s.name}
              onClick={() => setFilter(s.id)}
              aria-pressed={estilo === s.id}
              className={cn("shrink-0 py-2 text-xs uppercase tracking-[0.22em] transition-colors", estilo === s.id ? "text-foreground border-b border-accent" : "text-muted-foreground hover:text-foreground")}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
      <section className="px-4 py-16 md:px-10">
        <div className="mx-auto max-w-[1600px] columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {list.map((w, i) => (
            <button key={w.id} onClick={() => setOpen(i)} className={cn("block w-full img-zoom break-inside-avoid", i % 3 === 1 && "lg:mt-16")} aria-label={`Ampliar: ${w.alt}`}>
              <img src={w.src} alt={w.alt} width={w.w} height={w.h} loading="lazy" className="w-full h-auto" />
            </button>
          ))}
        </div>
        {list.length === 0 && <p className="text-center text-muted-foreground">Todavía no hay trabajos en este estilo.</p>}
      </section>
      <PageCta />
      {open !== null && <Lightbox items={list} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />}
    </>
  );
}
