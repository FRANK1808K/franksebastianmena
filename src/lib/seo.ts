import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { credentialsData, featuredVideo, profileData, publicationData, recognitionsData } from "@/lib/data";

const ogImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: ${profileData.valueStatement}`,
};

interface PageMetaInput {
  /** Sin título usa el título por defecto del sitio. */
  title?: string;
  description: string;
  /** Ruta con barra final (trailingSlash: true), p. ej. "/sobre-mi/". */
  path: string;
  noIndex?: boolean;
}

/**
 * Metadatos por página. En Next 16 el objeto openGraph de una página
 * reemplaza al del layout, así que se arma completo aquí.
 */
export function pageMetadata({ title, description, path, noIndex }: PageMetaInput): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: path === "/" ? "profile" : "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Escapa "<" para que el JSON-LD no pueda cerrar el <script> (recomendación de Next). */
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

const utch = {
  "@type": "CollegeOrUniversity",
  name: "Universidad Tecnológica del Chocó",
};

/** Persona: solo datos verificados del perfil. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: profileData.fullName,
  alternateName: "Frank Sebastián Mena García",
  url: `${siteConfig.url}/`,
  image: `${siteConfig.url}/images/retrato.jpg`,
  description: profileData.headline,
  email: siteConfig.author.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quibdó",
    addressRegion: "Chocó",
    addressCountry: "CO",
  },
  alumniOf: utch,
  affiliation: [utch, { "@type": "Organization", name: "Fundación A+" }],
  // Solo los cargos vigentes
  hasOccupation: profileData.experience
    .filter((job) => job.period.includes("actualidad"))
    .map((job) => ({
      "@type": "Occupation",
      name: job.title,
      occupationLocation: { "@type": "City", name: "Quibdó" },
    })),
  knowsAbout: profileData.skills.flatMap((group) => group.items),
  knowsLanguage: profileData.languages.map((lang) => ({
    "@type": "Language",
    name: lang.name,
    alternateName: lang.code,
  })),
  award: recognitionsData.map((r) => `${r.title}, ${r.contest} (${r.organization}, ${r.year})`),
  hasCredential: credentialsData.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    recognizedBy: { "@type": "Organization", name: c.issuer },
    ...(c.credentialUrl ? { url: c.credentialUrl } : {}),
  })),
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
};

/** Video de la portada (intervención en ICON·S). */
export const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: featuredVideo.title,
  description: featuredVideo.description,
  thumbnailUrl: `${siteConfig.url}${featuredVideo.poster}`,
  contentUrl: `${siteConfig.url}${featuredVideo.src}`,
  uploadDate: featuredVideo.recordedAt,
  duration: featuredVideo.duration,
  inLanguage: "es",
  actor: { "@type": "Person", "@id": `${siteConfig.url}/#person`, name: profileData.fullName },
};

/** Capítulo de libro de la sección Investigación. */
export const chapterJsonLd = {
  "@context": "https://schema.org",
  "@type": "Chapter",
  name: `${publicationData.title} ${publicationData.subtitle}`,
  author: publicationData.authors.map((name) =>
    name.startsWith("Frank")
      ? { "@type": "Person", "@id": `${siteConfig.url}/#person`, name }
      : { "@type": "Person", name, affiliation: utch },
  ),
  pagination: publicationData.book.pages,
  datePublished: String(publicationData.book.year),
  inLanguage: "es",
  abstract: publicationData.summary,
  license: publicationData.license.url,
  isPartOf: {
    "@type": "Book",
    name: publicationData.book.title,
    isbn: publicationData.book.isbn,
    editor: publicationData.book.editors.map((name) => ({ "@type": "Person", name })),
    publisher: { "@type": "Organization", name: publicationData.book.publisher },
  },
};
