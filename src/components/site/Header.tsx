import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { studioInfo } from "@/data/studio";
import { CtaLink } from "./Cta";

export const nav = [
  { to: "/", label: "Inicio" },
  { to: "/galeria", label: "Galería" },
  { to: "/artistas", label: "Artistas" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="display text-2xl tracking-tight" aria-label={`${studioInfo.name} — inicio`}>
          {studioInfo.name}
        </Link>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground link-underline"
              activeProps={{ className: "!text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CtaLink to="/contacto" variant="ghost" className="py-3">Pedí tu turno</CtaLink>
        </div>
        <button
          className="lg:hidden -mr-2 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden h-[calc(100dvh-73px)] bg-background px-6 pb-10 pt-8 flex flex-col">
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {nav.map((n, i) => (
              <Link key={n.to} to={n.to} className="display text-5xl py-2 animate-enter" style={{ animationDelay: `${i * 60}ms` }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <CtaLink to="/contacto" className="w-full justify-between">Pedí tu turno</CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
