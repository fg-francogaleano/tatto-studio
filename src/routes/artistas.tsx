import { createFileRoute } from "@tanstack/react-router";
import { artists, works, studioInfo } from "@/data/studio";
import { PageHeader } from "@/components/site/PageHeader";
import { PageCta } from "@/components/site/PageCta";
import { WhatsAppCta } from "@/components/site/Cta";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/artistas")({
  head: () => ({
    meta: [
      { title: `Artistas — ${studioInfo.name}` },
      { name: "description", content: "Conocé al equipo de tatuadores del estudio, sus estilos y su forma de trabajar." },
      { property: "og:title", content: `Artistas — ${studioInfo.name}` },
      { property: "og:description", content: "El equipo creativo detrás de cada pieza." },
    ],
  }),
  component: Artistas,
});

function Artistas() {
  return (
    <>
      <PageHeader eyebrow="Equipo" title="Manos que dibujan.">Cada artista aporta su propio lenguaje. Perfiles provisionales: falta cargar datos reales.</PageHeader>
      {artists.map((a, i) => (
        <section key={a.id} className="border-t border-border px-6 py-20 md:px-10 md:py-32">
          <div className={cn("mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12", i % 2 && "md:[direction:rtl]")}>
            <img src={a.image} alt={`Retrato de ${a.name}`} loading="lazy" className="md:col-span-6 w-full aspect-[4/5] object-cover" />
            <div className="md:col-span-5 md:col-start-8 [direction:ltr] flex flex-col justify-center gap-6">
              <h2 className="display text-6xl md:text-8xl">{a.name}</h2>
              <p className="eyebrow !text-accent">{a.specialties.join(" · ")}</p>
              <p className="text-muted-foreground">{a.text}</p>
              <div className="grid grid-cols-3 gap-3">
                {works.filter((w) => w.artist === a.id).slice(0, 3).map((w) => (
                  <img key={w.id} src={w.src} alt={w.alt} loading="lazy" className="aspect-square w-full object-cover" />
                ))}
              </div>
              <WhatsAppCta message={`Hola, quiero consultar disponibilidad con ${a.name}.`} className="w-fit">Consultar disponibilidad</WhatsAppCta>
            </div>
          </div>
        </section>
      ))}
      <PageCta />
    </>
  );
}
