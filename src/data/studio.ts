/**
 * Datos centralizados del estudio.
 * Todo lo marcado con PENDIENTE debe reemplazarse con información real.
 * Las imágenes son provisionales (generadas) y deben reemplazarse por trabajos reales.
 */
import heroVideo from "@/assets/hero.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import studio from "@/assets/studio.jpg";
import blackwork from "@/assets/work-blackwork.jpg";
import blackwork2 from "@/assets/work-blackwork-2.jpg";
import fineline from "@/assets/work-fineline.jpg";
import fineline2 from "@/assets/work-fineline-2.jpg";
import realismo from "@/assets/work-realismo.jpg";
import tradicional from "@/assets/work-tradicional.jpg";
import geometrico from "@/assets/work-geometrico.jpg";
import lettering from "@/assets/work-lettering.jpg";
import artist1 from "@/assets/artist-1.jpeg";
import artist2 from "@/assets/artist-2.png";

export const PENDING = "A confirmar";

export const studioInfo = {
  /** PENDIENTE: nombre real del estudio */
  name: "Grava Tattoo",
  shortName: "Tattoo",
  /** PENDIENTE: número en formato internacional sin "+" ni espacios, ej. 5491112345678 */
  whatsapp: "",
  /** PENDIENTE */
  instagram: "",
  email: "",
  address: "",
  city: "",
  hours: [] as { days: string; time: string }[],
  /** Enlace de Google Maps, PENDIENTE */
  mapsUrl: "",
  hero: { video: heroVideo, poster: heroPoster },
  studioImage: studio,
};

export function whatsappLink(message = "Hola, quiero consultar por un tatuaje.") {
  if (!studioInfo.whatsapp) return null;
  return `https://wa.me/${studioInfo.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const styles = [
  { id: "blackwork", name: "Blackwork", text: "Negro sólido, contraste y formas contundentes que se leen a distancia.", image: blackwork },
  { id: "fine-line", name: "Fine line", text: "Líneas finas y precisas para piezas delicadas y llenas de detalle.", image: fineline },
  { id: "realismo", name: "Realismo", text: "Volumen, luz y textura en negro y grises.", image: realismo },
  { id: "tradicional", name: "Tradicional", text: "Línea gruesa, paleta acotada y la iconografía clásica del oficio.", image: tradicional },
  { id: "geometrico", name: "Geométrico", text: "Simetría, dotwork y estructuras que acompañan el cuerpo.", image: geometrico },
  { id: "lettering", name: "Lettering", text: "Caligrafía y tipografía diseñadas a medida para cada palabra.", image: lettering },
] as const;

export type StyleId = (typeof styles)[number]["id"];

export type Work = {
  id: string;
  src: string;
  style: StyleId;
  alt: string;
  w: number;
  h: number;
  /** id del artista, si se conoce */
  artist?: string;
};

/** Imágenes provisionales — reemplazar por trabajos reales del estudio. */
export const works: Work[] = [
  { id: "w1", src: blackwork, style: "blackwork", alt: "Tatuaje blackwork botánico en antebrazo", w: 1024, h: 1360, artist: "artista-1" },
  { id: "w2", src: realismo, style: "realismo", alt: "Tatuaje realista de escultura clásica en brazo", w: 1360, h: 1024, artist: "artista-1" },
  { id: "w3", src: fineline, style: "fine-line", alt: "Tatuaje fine line de flor en la clavícula", w: 1024, h: 1024, artist: "artista-2" },
  { id: "w4", src: tradicional, style: "tradicional", alt: "Tatuaje tradicional de golondrina y rosa en pantorrilla", w: 1024, h: 1280 },
  { id: "w5", src: geometrico, style: "geometrico", alt: "Tatuaje geométrico tipo mandala en la espalda", w: 1360, h: 1024, artist: "artista-2" },
  { id: "w6", src: blackwork2, style: "blackwork", alt: "Tatuaje blackwork de serpiente en pierna", w: 1024, h: 1536, artist: "artista-1" },
  { id: "w7", src: fineline2, style: "fine-line", alt: "Proceso de tatuado de una polilla en fine line", w: 1360, h: 1024, artist: "artista-2" },
  { id: "w8", src: lettering, style: "lettering", alt: "Tatuaje de lettering caligráfico en antebrazo", w: 1024, h: 1360 },
];

/** PENDIENTE: nombres, especialidades y descripciones reales. */
export const artists = [
  {
    id: "artista-1",
    name: "Artista 01",
    placeholder: true,
    specialties: ["Blackwork", "Realismo"],
    text: "Espacio para describir el enfoque de este artista: cómo trabaja, qué lo inspira y qué tipo de piezas disfruta hacer.",
    image: artist1,
  },
  {
    id: "artista-2",
    name: "Artista 02",
    placeholder: true,
    specialties: ["Fine line", "Geométrico"],
    text: "Espacio para describir el enfoque de esta artista: su recorrido, su forma de diseñar y su relación con cada cliente.",
    image: artist2,
  },
];

export const services = [
  { title: "Tatuajes personalizados", text: "Diseñamos una pieza única a partir de tu idea, tu historia y la zona del cuerpo elegida.", image: fineline2 },
  { title: "Tatuajes basados en referencias", text: "Partimos de imágenes que te inspiran y las adaptamos al estilo del artista y a tu piel.", image: lettering },
  { title: "Consulta y planificación", text: "Conversamos sobre tamaño, ubicación, estilo y cantidad de sesiones antes de empezar.", image: studio },
  { title: "Sesiones de tatuaje", text: "Trabajamos con tiempo, en un espacio cuidado y con materiales descartables.", image: realismo },
];

export const budgetFactors = [
  "Tamaño de la pieza",
  "Nivel de detalle y complejidad",
  "Zona del cuerpo",
  "Cantidad de sesiones necesarias",
  "Si el diseño es original o adaptado",
];

/** PENDIENTE: testimonios reales de clientes. Dejar vacío para ocultar la sección. */
export const testimonials: { quote: string; author: string }[] = [];
