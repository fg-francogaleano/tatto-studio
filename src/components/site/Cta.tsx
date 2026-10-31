import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/data/studio";

const base =
  "group inline-flex items-center gap-3 px-6 py-4 text-xs font-medium uppercase tracking-[0.22em] transition-all duration-500 focus-visible:outline-1 active:scale-[0.98]";
export const ctaVariants = {
  solid: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
  ghost: "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5",
  text: "px-0 py-2 text-foreground link-underline",
};

type V = keyof typeof ctaVariants;

export function CtaLink({ to, children, variant = "solid", className }: { to: "/" | "/galeria" | "/artistas" | "/servicios" | "/contacto"; children: ReactNode; variant?: V; className?: string | undefined }) {
  return (
    <Link to={to} className={cn(base, ctaVariants[variant], className)}>
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

/** Abre WhatsApp si el número está configurado; si no, lleva a /contacto. */
export function WhatsAppCta({ children = "Escribinos por WhatsApp", message, variant = "solid", className }: { children?: ReactNode; message?: string; variant?: V; className?: string | undefined }) {
  const href = whatsappLink(message);
  if (!href) return <CtaLink to="/contacto" variant={variant} className={className}>{children}</CtaLink>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(base, ctaVariants[variant], className)}>
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}
