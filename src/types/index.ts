// ============================================================
// Tipos globales del sitio
// ============================================================

// --- Perfil ---
export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  location?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Language {
  name: string;
  /** Código ISO 639-1, para el JSON-LD. */
  code: string;
  level: string;
}

export interface Profile {
  fullName: string;
  headline: string;
  valueStatement: string;
  /** Frase larga de la sección de revelado por palabras (home). */
  tagline: string;
  location: string;
  /** Biografía en Markdown, en primera persona. */
  bio: string;
  avatarUrl: string;
  /** Foto espontánea para la biografía (ruta dentro de /public). */
  candidPhoto: { src: string; alt: string; width: number; height: number };
  /** Hoja de vida en PDF (ruta dentro de /public). */
  cvUrl: string;
  focusAreas: FocusArea[];
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: SkillGroup[];
  languages: Language[];
}

// --- Trayectoria pública ---
export interface Recognition {
  title: string;
  contest: string;
  organization: string;
  year: number;
}

export interface Participation {
  title: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
}

export interface FeaturedVideo {
  title: string;
  description: string;
  src: string;
  poster: string;
  width: number;
  height: number;
  /** ISO 8601, p. ej. "PT16S". */
  duration: string;
  recordedAt: string;
}

// --- Formación y certificaciones ---
export type CredentialKind = "Programa" | "Certificación" | "Curso";

export interface Credential {
  title: string;
  issuer: string;
  date: string;
  kind: CredentialKind;
  description?: string;
  credentialId?: string;
  credentialUrl?: string;
}

// --- Investigación ---
export interface Publication {
  title: string;
  subtitle: string;
  kind: string;
  authors: string[];
  book: {
    title: string;
    editors: string[];
    publisher: string;
    place: string;
    year: number;
    pages: string;
    isbn: string;
    collection: string;
  };
  license: { name: string; url: string };
  /** Resumen fiel al texto del capítulo. */
  summary: string;
  questions: string[];
  /** Cita en formato APA. */
  citation: string;
  /** Ruta dentro de /public. El botón solo aparece si el archivo existe. */
  pdfUrl: string;
  pdfPages: number;
  externalUrl?: string;
}

/** Publicaciones y manuscritos que no tienen ficha propia. */
export interface PublicationEntry {
  title: string;
  kind: string;
  status: "Publicado" | "En evaluación";
  /** Sin autores, la entrada no los muestra (no se infieren). */
  authors?: string[];
  publisher?: string;
  year?: number;
}

// --- Proyectos ---
export interface Project {
  title: string;
  status: string;
  summary: string;
  problem: string;
  /** Características verificables en el propio código. */
  highlights: string[];
  stack: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  /** Captura real del proyecto (ruta dentro de /public). */
  image?: { src: string; alt: string; width: number; height: number };
}

// --- Blog ---
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}
