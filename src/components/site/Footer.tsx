import { Link } from "@tanstack/react-router";
import { studioInfo, whatsappLink, PENDING } from "@/data/studio";
import { nav } from "./Header";

export function Footer() {
  const wa = whatsappLink();
  return (
    <footer className="border-t border-border px-6 pb-10 pt-20 md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="display text-6xl md:text-8xl">{studioInfo.name}</p>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">Estudio de tatuajes. Diseños a medida, trabajo artesanal.</p>
        </div>
        <nav className="md:col-span-2 flex flex-col gap-3 text-sm" aria-label="Pie">
          <span className="eyebrow mb-2">Sitio</span>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="link-underline w-fit">{n.label}</Link>
          ))}
        </nav>
        <div className="md:col-span-4 flex flex-col gap-3 text-sm">
          <span className="eyebrow mb-2">Contacto</span>
          <span className="text-muted-foreground">{studioInfo.address || `Dirección: ${PENDING}`}</span>
          {wa ? <a href={wa} target="_blank" rel="noopener noreferrer" className="link-underline w-fit">WhatsApp</a> : <span className="text-muted-foreground">WhatsApp: {PENDING}</span>}
          {studioInfo.instagram ? (
            <a href={`https://instagram.com/${studioInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="link-underline w-fit">Instagram</a>
          ) : (
            <span className="text-muted-foreground">Instagram: {PENDING}</span>
          )}
          {studioInfo.email && <a href={`mailto:${studioInfo.email}`} className="link-underline w-fit">{studioInfo.email}</a>}
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-[1600px] flex-col justify-between gap-2 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} {studioInfo.name}. Todos los derechos reservados.</span>
        <span>Imágenes provisionales — reemplazar por trabajos reales.</span>
      </div>
    </footer>
  );
}
