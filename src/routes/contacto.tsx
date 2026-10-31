import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { studioInfo, whatsappLink, PENDING } from "@/data/studio";
import { PageHeader } from "@/components/site/PageHeader";
import { WhatsAppCta } from "@/components/site/Cta";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: `Contacto — ${studioInfo.name}` },
      { name: "description", content: "Contanos tu idea y pedí tu turno en el estudio." },
      { property: "og:title", content: `Contacto — ${studioInfo.name}` },
      { property: "og:description", content: "Reservá tu turno o consultá por tu próximo tatuaje." },
    ],
  }),
  component: Contacto,
});

const field = "w-full border-b border-input bg-transparent py-3 outline-none focus:border-accent transition-colors";

function Contacto() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const configured = !!whatsappLink();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const err: Record<string, string> = {};
    if (!d.nombre?.trim()) err.nombre = "Contanos tu nombre.";
    if (!d.medio?.trim()) err.medio = "Dejanos un teléfono, mail o usuario.";
    if (!d.tipo) err.tipo = "Elegí un tipo de consulta.";
    if ((d.idea?.trim().length ?? 0) < 10) err.idea = "Describí tu idea en al menos 10 caracteres.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const link = whatsappLink(`Hola, soy ${d.nombre}. Consulta: ${d.tipo}.\nContacto: ${d.medio}\nIdea: ${d.idea}`);
    if (link) window.open(link, "_blank", "noopener");
  }

  return (
    <>
      <PageHeader eyebrow="Contacto" title="Hablemos de tu idea.">Escribinos y coordinamos una consulta.</PageHeader>
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
          <form onSubmit={submit} noValidate className="md:col-span-6 grid gap-8">
            {!configured && (
              <p role="status" className="border border-accent/50 p-4 text-sm">
                Integración pendiente: falta configurar el número de WhatsApp del estudio para poder enviar consultas.
              </p>
            )}
            <F label="Nombre" error={errors.nombre}><input name="nombre" className={field} autoComplete="name" /></F>
            <F label="Teléfono, mail o Instagram" error={errors.medio}><input name="medio" className={field} /></F>
            <F label="Tipo de consulta" error={errors.tipo}>
              <select name="tipo" defaultValue="" className={field + " [&>option]:bg-background"}>
                <option value="" disabled>Elegí una opción</option>
                <option>Diseño personalizado</option>
                <option>Tatuaje basado en referencia</option>
                <option>Disponibilidad de turnos</option>
                <option>Otra consulta</option>
              </select>
            </F>
            <F label="Tu idea" error={errors.idea}><textarea name="idea" rows={5} className={field + " resize-none"} placeholder="Estilo, tamaño, zona del cuerpo…" /></F>
            <button type="submit" disabled={!configured} className="w-fit bg-primary px-8 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed">
              Enviar por WhatsApp
            </button>
          </form>
          <aside className="md:col-span-4 md:col-start-9 grid gap-6 text-sm self-start">
            <WhatsAppCta className="w-fit">WhatsApp directo</WhatsAppCta>
            <p><span className="eyebrow block mb-1">Dirección</span>{studioInfo.address || PENDING}</p>
            <p><span className="eyebrow block mb-1">Horarios</span>{studioInfo.hours.length ? studioInfo.hours.map((h) => `${h.days}: ${h.time}`).join(" · ") : PENDING}</p>
            <p><span className="eyebrow block mb-1">Instagram</span>{studioInfo.instagram ? `@${studioInfo.instagram}` : PENDING}</p>
          </aside>
        </div>
      </section>
    </>
  );
}

function F({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <label className="grid gap-1">
      <span className="eyebrow">{label}</span>
      {children}
      {error && <span className="text-sm text-destructive" role="alert">{error}</span>}
    </label>
  );
}
