// Dirección pública del sitio (sitemap, canonical, Open Graph). Orden de prioridad:
// 1) NEXT_PUBLIC_SITE_URL, si se define a mano;
// 2) el dominio de producción del proyecto en Vercel (VERCEL_PROJECT_PRODUCTION_URL:
//    dominio propio si está conectado, o el .vercel.app);
// 3) un valor local para desarrollo.
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || vercelProductionUrl || "http://localhost:3000").replace(/\/$/, "");

const email = "frankse1808@gmail.com";
const institutionalEmail = "frank.mena356@utch.edu.co";
const whatsappNumber = "573203372564";

export const siteConfig = {
  name: "Frank Sebastián Mena",
  title: "Frank Sebastián Mena | Derecho constitucional, derechos humanos y tecnología",
  description:
    "Estudiante de Derecho en Quibdó, Chocó (Colombia). Derecho constitucional, derechos humanos, derechos étnicos y ambientales, investigación jurídica, Python e inteligencia artificial.",
  url: siteUrl,
  locale: "es_CO",
  ogImage: "/images/og-image.png",
  author: {
    name: "Frank Sebastián Mena",
    headline: "Estudiante de Derecho | Derecho constitucional y derechos humanos | Python e IA",
    location: "Quibdó, Chocó, Colombia",
    email,
    institutionalEmail,
    phoneDisplay: "+57 320 337 2564",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/franksebasti%C3%A1nmena/",
    github: "https://github.com/FRANK1808K",
    whatsapp: `https://wa.me/${whatsappNumber}`,
    email: `mailto:${email}`,
    institutionalEmail: `mailto:${institutionalEmail}`,
  },
  /**
   * Formulario de contacto vía Web3Forms (sitio estático, sin servidor).
   * La clave es pública por diseño: solo permite enviar mensajes a tu correo.
   * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY la reemplaza si está definida.
   */
  contactForm: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "0f577e06-a561-4853-902c-48d0c6ab37cc",
  },
  keywords: [
    "Frank Sebastián Mena",
    "Frank Sebastián Mena García",
    "derecho constitucional",
    "derechos humanos",
    "derecho ambiental",
    "derechos étnico-ambientales",
    "derechos de la naturaleza",
    "río Atrato",
    "Ley 70 de 1993",
    "Acuerdo de Escazú",
    "Sistema Interamericano",
    "ICON·S",
    "LegalTech",
    "inteligencia artificial",
    "IA",
    "Python",
    "Quibdó",
    "Chocó",
  ],
};

export type SiteConfig = typeof siteConfig;
