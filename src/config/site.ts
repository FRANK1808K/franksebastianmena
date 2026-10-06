// Dominio público en Hostinger. NEXT_PUBLIC_SITE_URL lo reemplaza si está definida.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://iuriscode.quilab.co").replace(/\/$/, "");

const email = "frankse1808@gmail.com";
const whatsappNumber = "573013597813";

export const siteConfig = {
  name: "Frank Sebastián Mena",
  title: "Frank Sebastián Mena | Derecho, derechos humanos y tecnología",
  description:
    "Estudiante de Derecho en Quibdó, Chocó (Colombia). Derechos humanos, derechos étnico-ambientales, investigación jurídica, Python e inteligencia artificial.",
  url: siteUrl,
  locale: "es_CO",
  ogImage: "/images/og-image.png",
  author: {
    name: "Frank Sebastián Mena",
    headline: "Estudiante de Derecho | Derechos humanos y tecnología | Python e IA",
    location: "Quibdó, Chocó, Colombia",
    email,
    phoneDisplay: "+57 301 359 7813",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/franksebasti%C3%A1nmena/",
    github: "https://github.com/FRANK1808K",
    whatsapp: `https://wa.me/${whatsappNumber}`,
    email: `mailto:${email}`,
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
    "derechos humanos",
    "derecho ambiental",
    "derechos étnico-ambientales",
    "Sistema Interamericano",
    "LegalTech",
    "inteligencia artificial",
    "IA",
    "Python",
    "Quibdó",
    "Chocó",
  ],
};

export type SiteConfig = typeof siteConfig;
