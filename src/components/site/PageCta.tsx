import { Reveal } from "./Reveal";
import { WhatsAppCta, CtaLink } from "./Cta";

export function PageCta({ title = "¿Tenés una idea en mente? Hagámosla realidad.", text = "Contanos qué te imaginás y lo diseñamos juntos." }: { title?: string; text?: string }) {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <Reveal className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-12 md:items-end">
        <h2 className="display text-5xl md:col-span-8 md:col-start-2 md:text-8xl">{title}</h2>
        <div className="md:col-span-3 flex flex-col gap-6">
          <p className="text-muted-foreground">{text}</p>
          <div className="flex flex-wrap gap-3">
            <WhatsAppCta>Consultá</WhatsAppCta>
            <CtaLink to="/contacto" variant="text">Formulario</CtaLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
