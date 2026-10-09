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
  focusAreas: FocusArea[];
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: SkillGroup[];
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
}

// --- Blog ---
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
}
