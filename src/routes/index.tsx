import { createFileRoute, Link } from "@tanstack/react-router";
import { studioInfo, works, styles, artists, testimonials, PENDING, whatsappLink } from "@/data/studio";
import { CtaLink, WhatsAppCta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${studioInfo.name} — Estudio de tatuajes` },
      { name: "description", content: "Estudio de tatuajes: diseños a medida en blackwork, fine line, realismo y más. Reservá tu turno." },
      { property: "og:title", content: `${studioInfo.name} — Estudio de tatuajes` },
      { property: "og:description", content: "Diseños a medida y atención personalizada. Reservá tu turno." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = [0, 1, 2, 5, 4].map((i) => works[i]!);
  const lead = artists[0]!;
  const rest = artists.slice(1);
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={studioInfo.hero.video}
          poster={studioInfo.hero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
          <div className="md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow mb-6 animate-enter">Estudio de tatuajes</p>
              <h1 className="display text-[3.6rem] sm:text-8xl lg:text-[10rem] animate-enter" style={{ animationDelay: "120ms" }}>
                Tinta con <em className="italic text-accent">intención</em>.
              </h1>
            </div>
            <div className="md:col-span-4 lg:col-span-3 lg:col-start-10 animate-enter" style={{ animationDelay: "320ms" }}>
              <p className="text-base text-foreground/80">
                Diseñamos cada pieza con vos, desde la primera idea hasta la última línea. 

                <br/>Arte personal, oficio y atención de principio a fin.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
                <CtaLink to="/contacto">Reservá tu turno</CtaLink>
                <CtaLink to="/galeria" variant="ghost">Explorá nuestros trabajos</CtaLink>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 hidden h-16 w-px overflow-hidden md:block" aria-hidden>
          <div className="h-full w-full bg-foreground/70 animate-scroll-cue" />
        </div>
      </section>

      {/* ESTUDIO */}
      <section className="px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5 md:pt-24">
            <p className="eyebrow mb-8">01 — El estudio</p>
            <h2 className="display text-5xl md:text-7xl">Cada piel cuenta una historia distinta.</h2>
            <p className="mt-10 max-w-md text-muted-foreground leading-relaxed">
              Trabajamos sin apuro y sin diseños de catálogo. Escuchamos tu idea, la llevamos al papel y la ajustamos hasta que sea tuya. Un espacio cuidado, materiales descartables y un equipo que se compromete con cada sesión.
            </p>
            <CtaLink to="/artistas" variant="text" className="mt-10">Conocé al equipo</CtaLink>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 img-zoom" delay={150}>
            <img src={studioInfo.studioImage} alt="Interior del estudio de tatuajes (imagen provisional)" width={1280} height={1600} loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </Reveal>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="px-6 pb-28 md:px-10 md:pb-44">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-6">02 — Trabajos</p>
              <h2 className="display text-5xl md:text-7xl">Selección</h2>
            </div>
            <CtaLink to="/galeria" variant="ghost">Ver galería completa</CtaLink>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
            <Feat w={featured[0]} className="col-span-2 md:col-span-5 md:row-span-2 aspect-[3/4]" />
            <Feat w={featured[1]} className="col-span-2 md:col-span-7 aspect-[4/3] md:mt-24" />
            <Feat w={featured[2]} className="col-span-1 md:col-span-3 md:col-start-7 aspect-square" />
            <Feat w={featured[3]} className="col-span-1 md:col-span-3 aspect-[2/3] md:-mt-24" />
            <Feat w={featured[4]} className="col-span-2 md:col-span-6 md:col-start-2 aspect-[16/10]" />
          </div>
        </div>
      </section>

      {/* ESTILOS */}
      <section className="border-t border-border px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="grid gap-8 md:grid-cols-12 mb-20">
            <div className="md:col-span-6">
              <p className="eyebrow mb-6">03 — Estilos</p>
              <h2 className="display text-5xl md:text-7xl">Lo que hacemos</h2>
            </div>
            <p className="md:col-span-4 md:col-start-9 self-end text-muted-foreground">
              Cada artista tiene su lenguaje. Consultas sin cargo, diseños personalizados y sesiones planificadas según el tamaño y el detalle de la pieza.
            </p>
          </Reveal>
          <ul className="divide-y divide-border border-y border-border">
            {styles.map((s, i) => (
              <li key={s.id}>
                <Link to="/galeria" search={{ estilo: s.id }} className="group grid grid-cols-12 items-center gap-4 py-6 md:py-8">
                  <span className="eyebrow col-span-2 md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display col-span-10 md:col-span-5 text-4xl md:text-6xl transition-all duration-500 group-hover:translate-x-3 group-hover:italic">{s.name}</span>
                  <span className="hidden md:block md:col-span-4 text-sm text-muted-foreground">{s.text}</span>
                  <span className="hidden md:block md:col-span-2 justify-self-end h-20 w-28 overflow-hidden">
                    <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10"><CtaLink to="/servicios" variant="text">Servicios y proceso</CtaLink></div>
        </div>
      </section>

      {/* ARTISTAS */}
      <section className="px-6 py-28 md:px-10 md:py-44 bg-card">
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-7 img-zoom">
            <img src={lead.image} alt={`Retrato de ${lead.name} (imagen provisional)`} loading="lazy" width={1024} height={1360} className="w-full aspect-[4/5] object-cover" />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 flex flex-col justify-between gap-12" delay={150}>
            <div>
              <p className="eyebrow mb-6">04 — Artistas</p>
              <h2 className="display text-5xl md:text-7xl">{lead.name}</h2>
              <p className="eyebrow mt-4 !text-accent">{lead.specialties.join(" · ")}</p>
              <p className="mt-8 text-muted-foreground">{lead.text}</p>
            </div>
            {rest.map((a) => (
              <Link to="/artistas" key={a.id} className="group flex items-end gap-6">
                <span className="w-32 shrink-0 overflow-hidden img-zoom"><img src={a.image} alt={`Retrato de ${a.name}`} loading="lazy" className="aspect-[3/4] w-full object-cover" /></span>
                <span>
                  <span className="display block text-3xl group-hover:italic">{a.name}</span>
                  <span className="eyebrow">{a.specialties.join(" · ")}</span>
                </span>
              </Link>
            ))}
            <CtaLink to="/artistas" variant="ghost" className="w-fit">Ver artistas</CtaLink>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="mb-20 max-w-3xl">
            <p className="eyebrow mb-6">05 — Cómo reservar</p>
            <h2 className="display text-5xl md:text-7xl">Tres pasos y empezamos.</h2>
          </Reveal>
          <ol className="grid gap-12 md:grid-cols-3 md:gap-6">
            {[
              ["Elegí el estilo o compartí tu idea", "Una referencia, un boceto o simplemente una palabra alcanza para empezar."],
              ["Contactá al estudio", "Conversamos sobre el diseño, el tamaño y la zona del cuerpo."],
              ["Coordiná tu sesión", "Definimos fecha y detalles para que llegues tranquilo/a."],
            ].map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 120} className={i === 1 ? "md:mt-20" : i === 2 ? "md:mt-40" : ""}>
                <span className="display text-8xl text-accent">{i + 1}</span>
                <h3 className="mt-4 text-xl font-medium">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-20"><WhatsAppCta>Iniciá tu consulta por WhatsApp</WhatsAppCta></div>
        </div>
      </section>

      {/* TESTIMONIOS — se muestran solo si hay testimonios reales cargados */}
      {testimonials.length > 0 && (
        <section className="border-t border-border px-6 py-28 md:px-10">
          <div className="mx-auto max-w-[1600px] grid gap-16 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="display text-3xl md:text-5xl">
                “{t.quote}”<footer className="eyebrow mt-6">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* CONTACTO */}
      <section className="border-t border-border px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow mb-6">06 — Visitanos</p>
            <h2 className="display text-5xl md:text-8xl">Consultá disponibilidad.</h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 grid gap-8 text-sm self-end" delay={150}>
            <Info label="Dirección" value={studioInfo.address ? `${studioInfo.address}, ${studioInfo.city}` : PENDING} />
            <Info label="Horarios" value={studioInfo.hours.length ? studioInfo.hours.map((h) => `${h.days}: ${h.time}`).join(" · ") : PENDING} />
            <Info label="WhatsApp" value={whatsappLink() ? `+${studioInfo.whatsapp}` : PENDING} />
            <Info label="Instagram" value={studioInfo.instagram ? `@${studioInfo.instagram}` : PENDING} />
            {studioInfo.mapsUrl && <a href={studioInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline w-fit">Cómo llegar</a>}
            <CtaLink to="/contacto" className="w-fit">Pedí tu turno</CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-border pb-4">
      <span className="eyebrow">{label}</span>
      <span className="col-span-2">{value}</span>
    </div>
  );
}

function Feat({ w, className }: { w: (typeof works)[number]; className: string }) {
  const style = styles.find((s) => s.id === w.style)?.name;
  return (
    <Reveal className={className}>
      <Link to="/galeria" className="group relative block h-full w-full img-zoom">
        <img src={w.src} alt={w.alt} loading="lazy" className="h-full w-full object-cover" />
        <span className="eyebrow absolute bottom-3 left-3 !text-bone opacity-0 transition-opacity duration-500 group-hover:opacity-100">{style}</span>
      </Link>
    </Reveal>
  );
}
