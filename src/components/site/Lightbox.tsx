import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { artists, styles, type Work } from "@/data/studio";

export function Lightbox({ items, index, onClose, onIndex }: { items: Work[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const item = items[index];
  const touchX = useRef<number | null>(null);
  const prev = () => onIndex((index - 1 + items.length) % items.length);
  const next = () => onIndex((index + 1) % items.length);

  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  });

  if (!item) return null;
  const style = styles.find((s) => s.id === item.style)?.name;
  const artist = artists.find((a) => a.id === item.artist)?.name;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de trabajos"
      className="fixed inset-0 z-[60] flex flex-col bg-overlay/97 animate-in fade-in duration-300"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const d = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        if (Math.abs(d) > 50) (d > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-6 py-5 md:px-10" onClick={(e) => e.stopPropagation()}>
        <span className="eyebrow">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button onClick={onClose} className="p-2 -mr-2 hover:text-accent transition-colors" aria-label="Cerrar visor" autoFocus>
          <X className="size-7" />
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 md:px-24 min-h-0">
        <img key={item.id} src={item.src} alt={item.alt} className="max-h-full max-w-full object-contain animate-in fade-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()} />
        <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-2 md:left-8 p-3 hover:text-accent transition-colors" aria-label="Trabajo anterior">
          <ChevronLeft className="size-8" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-2 md:right-8 p-3 hover:text-accent transition-colors" aria-label="Trabajo siguiente">
          <ChevronRight className="size-8" />
        </button>
      </div>
      <div className="flex gap-6 px-6 py-6 md:px-10 text-sm" onClick={(e) => e.stopPropagation()}>
        {style && <span className="display text-2xl">{style}</span>}
        {artist && <span className="eyebrow self-center">{artist}</span>}
      </div>
    </div>
  );
}
