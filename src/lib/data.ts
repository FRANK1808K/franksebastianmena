import type {
  Profile,
  Credential,
  Publication,
  Project,
  BlogPost,
} from "@/types";

// ============================================================
// Fuente única: BRIEF-REDISENO.md (perfil de LinkedIn).
// No agregues aquí nada que no esté verificado.
// ============================================================

export const profileData: Profile = {
  fullName: "Frank Sebastián Mena",
  headline: "Estudiante de Derecho | Derechos humanos y tecnología | Python e IA",
  valueStatement: "Traduzco entre el derecho, las comunidades y la tecnología.",
  tagline:
    "Estudio los derechos de los pueblos étnicos y de la naturaleza, y uso la tecnología para que lleguen a quienes los necesitan.",
  location: "Quibdó, Chocó, Colombia",
  avatarUrl: "/images/profile.webp",
  bio: `Soy estudiante de Derecho en la **Universidad Tecnológica del Chocó**, en Quibdó. Me interesa el punto donde se cruzan los derechos humanos, los derechos de los pueblos étnicos y el ambiente, y la tecnología.

Desde enero de 2025 soy **asistente de investigación** en la Universidad Tecnológica del Chocó y, desde febrero de 2026, **aprendiz en la Fundación A+**, donde apoyo la gestión de proyectos y la labor directiva.

Me he formado en el Sistema Interamericano de Derechos Humanos con la OEA, en estudios afrolatinoamericanos con la Universidad de Harvard y en inteligencia artificial y Python con la Universidad de Antioquia. También estudié la Ley 70 de 1993 y el Acuerdo de Escazú.

Con Lisneider Hinestroza Cuesta y Nelsy Moreno Ibargüen soy coautor del capítulo *¿Quién decide los derechos de la naturaleza?*, publicado en 2026 por Pireo Editorial en el libro *Derechos de la Naturaleza desde el Mediterráneo*.

Este sitio, construido con Next.js y TypeScript, es mi proyecto personal en desarrollo.`,
  focusAreas: [
    {
      title: "Derechos humanos, étnicos y ambientales",
      description:
        "Sistema Interamericano, Ley 70 de 1993, Acuerdo de Escazú y la pregunta por los derechos de la naturaleza.",
    },
    {
      title: "IA y Python",
      description:
        "Bootcamp de Inteligencia Artificial en la Universidad de Antioquia: Python y aprendizaje automático, aplicados a problemas jurídicos y cívicos.",
    },
    {
      title: "Investigación",
      description:
        "Asistente de investigación en la Universidad Tecnológica del Chocó desde 2025 y coautor de un capítulo sobre los derechos de la naturaleza y el río Atrato (Pireo Editorial, 2026).",
    },
  ],
  experience: [
    {
      title: "Aprendiz",
      organization: "Fundación A+",
      period: "Feb. 2026 – actualidad",
      location: "Quibdó · Presencial · Jornada completa",
      description:
        "Formación práctica y profesional, gestión de proyectos y apoyo directivo.",
    },
    {
      title: "Asistente de investigación",
      organization: "Universidad Tecnológica del Chocó",
      period: "Ene. 2025 – actualidad",
      description: "Investigación científica.",
    },
  ],
  education: [
    {
      title: "Derecho",
      organization: "Universidad Tecnológica del Chocó",
      period: "Ene. 2021 – jul. 2027 (previsto)",
    },
    {
      title: "Programa de Capacitación en Democracia y Tecnología, «Programadores para la Paz»",
      organization: "Universidad de Cartagena",
      period: "Abr. – jul. 2026",
    },
    {
      title: "Certificate on Afro-Latin American Studies",
      organization: "Harvard University",
      period: "Sept. 2025 – feb. 2026",
    },
    {
      title: "Bootcamp de Inteligencia Artificial",
      organization: "Universidad de Antioquia",
      period: "Oct. – dic. 2025",
      description: "Python y aprendizaje automático.",
    },
    {
      title: "Programa MaB y Red Mundial de Reservas de Biosfera",
      organization: "Universidad para la Cooperación Internacional / UNESCO",
      period: "Ago. – nov. 2024",
    },
  ],
  skills: [
    {
      category: "Derecho",
      items: [
        "Derechos humanos",
        "Sistema Interamericano",
        "Derecho ambiental",
        "Derechos de los pueblos étnicos (Ley 70, Escazú)",
        "Derecho público y constitucional",
        "Investigación jurídica",
        "Redacción académica",
      ],
    },
    {
      category: "Tecnología",
      items: [
        "Python",
        "IA / aprendizaje automático",
        "Desarrollo web (Next.js, TypeScript, Supabase)",
        "Tecnología cívica",
      ],
    },
    {
      category: "Gestión",
      items: ["Gestión de proyectos"],
    },
  ],
};

// ============================================================
// Formación y certificaciones
// [PENDIENTE: enlaces públicos a cada credencial (credentialUrl)]
// ============================================================

export const credentialsData: Credential[] = [
  {
    title: "Programa de Capacitación en Democracia y Tecnología, «Programadores para la Paz»",
    issuer: "Universidad de Cartagena",
    date: "Abr. – jul. 2026",
    kind: "Programa",
  },
  {
    title: "Certificate on Afro-Latin American Studies",
    issuer: "Harvard University",
    date: "Sept. 2025 – feb. 2026",
    kind: "Programa",
  },
  {
    title: "Bootcamp de Inteligencia Artificial",
    issuer: "Universidad de Antioquia",
    date: "Oct. – dic. 2025",
    kind: "Programa",
    description: "Python y aprendizaje automático.",
    credentialId: "WZLU5QCEHN",
  },
  {
    title: "Solicitud de Medidas Cautelares ante la CIDH",
    issuer: "Organización de los Estados Americanos (OEA)",
    date: "Ago. 2025",
    kind: "Certificación",
  },
  {
    title: "Aplicación de Estándares para el Poder Judicial, Ed. 7",
    issuer: "Organización de los Estados Americanos (OEA)",
    date: "Jul. 2025",
    kind: "Certificación",
  },
  {
    title: "Ley 70 de 1993 y Acuerdo de Escazú",
    issuer: "Universidad Tecnológica del Chocó",
    date: "Jun. 2025",
    kind: "Curso",
    description: "Curso de formación e investigación.",
  },
  {
    title: "Programa MaB y Red Mundial de Reservas de Biosfera",
    issuer: "Universidad para la Cooperación Internacional / UNESCO",
    date: "Ago. – nov. 2024",
    kind: "Programa",
  },
  {
    title: "Jóvenes de las Reservas de Biosfera de Iberoamérica en Acción",
    issuer: "UNESCO",
    date: "Nov. 2024",
    kind: "Certificación",
  },
  {
    title: "Fortalecimiento de la gestión humana y habilidades blandas",
    issuer: "SENA",
    date: "Nov. 2024",
    kind: "Curso",
  },
  {
    title: "Conciencia 4.0 Tecnoacademia Itinerante Chocó",
    issuer: "SENA",
    date: "Nov. 2024",
    kind: "Curso",
  },
  {
    title: "Emprendimiento innovador",
    issuer: "SENA",
    date: "Nov. 2024",
    kind: "Curso",
  },
  {
    title: "VI Seminario Nacional",
    issuer: "ICON·S, Sociedad Internacional de Derecho Público, capítulo Colombia",
    date: "Oct. 2024",
    kind: "Certificación",
  },
];

// ============================================================
// Investigación
// ============================================================

export const publicationData: Publication = {
  title: "¿Quién decide los derechos de la naturaleza?",
  subtitle:
    "Reflexiones sobre la tutela de la naturaleza en tiempos de emergencia climática a partir de las cosmovisiones de comunidades ribereñas del río Atrato (Chocó, Colombia)",
  kind: "Capítulo de libro",
  authors: ["Lisneider Hinestroza Cuesta", "Nelsy Moreno Ibargüen", "Frank Sebastián Mena García"],
  book: {
    title:
      "Derechos de la Naturaleza desde el Mediterráneo. La participación activa de la ciudadanía frente a la crisis climática",
    editors: ["María Jesús García García", "Rubén Martínez Dalmau", "Aurora Pedro Bueno"],
    publisher: "Pireo Editorial",
    place: "València",
    year: 2026,
    pages: "336–357",
    isbn: "978-84-129876-8-3",
    collection: "Pireo Universidad",
  },
  license: {
    name: "CC BY-NC-ND 4.0",
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es",
  },
  // Resumen redactado a partir del texto del capítulo. [PENDIENTE: revisión del autor]
  summary:
    "El capítulo pregunta quién define los derechos que se le reconocen a la naturaleza. A partir de la Sentencia T-622 de 2016, que declaró al río Atrato sujeto de derechos, de la sentencia STC 4360 de 2018 y de la Ley 2415 de 2024, sostiene que ese reconocimiento ha sido «un cambio sin cambio»: jueces y legisladores siguen definiendo esos derechos sin incorporar las cosmovisiones de las comunidades ribereñas. Desde el pluralismo jurídico, la interculturalidad crítica y filosofías como el vivir sabroso, el Ubuntu y el Muntu, propone una justicia dialógica e intercultural, co-construida entre operadores jurídicos y comunidades étnico-territoriales: «quitarse las togas y ponerse las botas».",
  questions: [
    "¿Quién y cómo decide que la naturaleza tiene derechos?",
    "¿Cuáles son los derechos que se le deben reconocer a la naturaleza?",
  ],
  citation:
    "Hinestroza Cuesta, L., Moreno Ibargüen, N. y Mena García, F. S. (2026). ¿Quién decide los derechos de la naturaleza? Reflexiones sobre la tutela de la naturaleza en tiempos de emergencia climática a partir de las cosmovisiones de comunidades ribereñas del río Atrato (Chocó, Colombia). En M. J. García García, R. Martínez Dalmau y A. Pedro Bueno (Eds.), Derechos de la Naturaleza desde el Mediterráneo. La participación activa de la ciudadanía frente a la crisis climática (pp. 336–357). Pireo Editorial.",
  // [PENDIENTE: copiar el PDF a public/docs/ con este nombre exacto]
  pdfUrl: "/docs/hinestroza-moreno-mena-2026-derechos-naturaleza.pdf",
  pdfPages: 26,
  // [PENDIENTE: enlace a la publicación en LinkedIn]
  externalUrl: undefined,
};

// ============================================================
// Proyectos
// ============================================================

export const projectsData: Project[] = [
  {
    title: "Este sitio web",
    status: "Proyecto personal en desarrollo",
    summary:
      "Mi sitio personal: reúne mi perfil, mi formación, mi investigación y un canal de contacto en un solo lugar.",
    problem:
      "Necesitaba un espacio propio, más completo que un perfil en redes, para presentar con datos verificables mi trabajo entre el derecho y la tecnología.",
    highlights: [
      "Sitio estático generado con Next.js y publicado en Hostinger.",
      "Diseño adaptable a móvil, tableta y escritorio.",
      "Accesibilidad: contraste AA, foco visible, navegación por teclado y respeto por la preferencia de movimiento reducido.",
      "Contenido centralizado en un solo archivo de datos, sin información de relleno.",
    ],
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "Exportación estática en Hostinger",
      "Supabase (esquema preparado, aún sin conectar)",
    ],
    repositoryUrl: "https://github.com/FRANK1808K/iuriscode-web",
    image: {
      src: "/images/projects/sitio-web.webp",
      alt: "Página de inicio de este sitio vista en un navegador de escritorio y en un teléfono",
      width: 2400,
      height: 1500,
    },
  },
];

// ============================================================
// Blog: vacío hasta que haya un artículo real.
// ============================================================

export const blogPostsData: BlogPost[] = [];
