import type {
  Profile,
  Credential,
  Publication,
  PublicationEntry,
  Project,
  BlogPost,
  Recognition,
  Participation,
  FeaturedVideo,
} from "@/types";

// ============================================================
// Fuentes: perfil de LinkedIn y hoja de vida (ES, v3, oct. 2026).
// No agregues aquí nada que no esté verificado.
// ============================================================

export const profileData: Profile = {
  fullName: "Frank Sebastián Mena",
  headline: "Estudiante de Derecho | Derecho constitucional y derechos humanos | Python e IA",
  valueStatement: "Traduzco entre el derecho, las comunidades y la tecnología.",
  tagline:
    "Estudio los derechos de los pueblos étnicos y de la naturaleza, y uso la tecnología para que lleguen a quienes los necesitan.",
  location: "Quibdó, Chocó, Colombia",
  avatarUrl: "/images/retrato.webp",
  candidPhoto: {
    src: "/images/frank-taller.webp",
    alt: "Frank Sebastián Mena sonríe durante una sesión de trabajo en grupo, con una tableta en las manos",
    width: 1000,
    height: 1244,
  },
  cvUrl: "/docs/hoja-de-vida-frank-sebastian-mena.pdf",
  bio: `Estudio décimo semestre de Derecho en la **Universidad Tecnológica del Chocó «Diego Luis Córdoba»**, en Quibdó, y espero graduarme en julio de 2027. Mi trabajo se concentra en el derecho constitucional, los derechos humanos y los derechos étnicos, territoriales y ambientales.

Desde 2024 soy **asistente de investigación** del Grupo de Investigación Derecho, Sociedad y Medio Ambiente. Allí investigo con la Dra. Lisneider Hinestroza Cuesta los derechos de la naturaleza, los derechos étnicos y territoriales y el cambio climático en el Pacífico colombiano. Desde febrero de 2026 soy **aprendiz en la Fundación A+**, donde me formo en computación en la nube, programación, desarrollo web y ciencia de datos.

Tengo experiencia en investigación jurídica, litigio estratégico y acompañamiento a comunidades víctimas del conflicto armado y a población con necesidad de protección internacional; en 2025 hice ese acompañamiento como voluntario de la Corporación Opción Legal.

Me he formado en el Sistema Interamericano de Derechos Humanos con la OEA, en estudios afrolatinoamericanos con la Universidad de Harvard y en inteligencia artificial con Python en la Universidad de Antioquia y la Universidad de Cartagena. Redacto memoriales, conceptos jurídicos, capítulos de libro y artículos científicos, e investigo en español, inglés y portugués.

He representado a Colombia y a mi universidad en escenarios nacionales e internacionales sobre justicia, ambiente y juventud. En 2025 fui delegado nacional del Ministerio de Ambiente en el 3.er Foro de Jóvenes IberoMAB de la UNESCO, en Bahía (Brasil).

Este sitio, construido con Next.js y TypeScript, es mi proyecto personal en desarrollo.`,
  focusAreas: [
    {
      title: "Derecho constitucional y derechos humanos",
      description:
        "Derecho público, Sistema Interamericano (medidas cautelares ante la CIDH y estándares interamericanos con la OEA), justicia transicional y litigio estratégico.",
    },
    {
      title: "Derechos étnicos, territoriales y ambientales",
      description:
        "Ley 70 de 1993, Acuerdo de Escazú, derechos de la naturaleza y cambio climático en el Pacífico colombiano.",
    },
    {
      title: "Investigación jurídica",
      description:
        "Asistente de investigación en la Universidad Tecnológica del Chocó desde 2024. Coautor de un capítulo en Pireo Editorial y de Cuadernos de Derecho Ambiental de WWF Colombia.",
    },
    {
      title: "Tecnología cívica: Python e IA",
      description:
        "Python, aprendizaje automático y ciencia de datos (Universidad de Antioquia, Universidad de Cartagena y Fundación A+), aplicados a problemas jurídicos y cívicos.",
    },
  ],
  experience: [
    {
      title: "Aprendiz",
      organization: "Fundación A+",
      period: "Feb. 2026 – actualidad",
      location: "Quibdó · Presencial · Jornada completa",
      description:
        "Formación en tecnología: computación en la nube, programación, desarrollo y despliegue web, y análisis y ciencia de datos.",
    },
    {
      title: "Asistente de investigación",
      organization: "Grupo de Investigación Derecho, Sociedad y Medio Ambiente · Universidad Tecnológica del Chocó",
      period: "2024 – actualidad",
      description:
        "Investigación jurídica con la Dra. Lisneider Hinestroza Cuesta sobre derechos de la naturaleza, derechos étnicos y territoriales y cambio climático en el Pacífico colombiano. Revisión de jurisprudencia y literatura, y coautoría de publicaciones académicas.",
    },
    {
      title: "Voluntariado",
      organization: "Corporación Opción Legal",
      period: "2025",
      description: "Orientación y acompañamiento jurídico a población con necesidad de protección internacional.",
    },
  ],
  education: [
    {
      title: "Derecho",
      organization: "Universidad Tecnológica del Chocó «Diego Luis Córdoba»",
      period: "Ene. 2021 – jul. 2027 (previsto)",
      description:
        "Décimo semestre. Énfasis en investigación jurídica, derechos humanos, derecho ambiental e inteligencia artificial.",
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
      organization: "Universidad para la Cooperación Internacional (Costa Rica) / UNESCO",
      period: "Ago. – nov. 2024",
    },
  ],
  skills: [
    {
      category: "Derecho",
      items: [
        "Derecho público y constitucional",
        "Derechos humanos y Sistema Interamericano",
        "Derecho ambiental",
        "Derechos de los pueblos étnicos (Ley 70, Escazú)",
        "Justicia transicional",
        "Investigación jurídica",
      ],
    },
    {
      category: "Competencias",
      items: [
        "Redacción de memoriales y conceptos jurídicos",
        "Investigación y análisis jurisprudencial",
        "Trabajo con comunidades étnicas y territoriales",
        "Gestión de proyectos",
        "Herramientas ofimáticas",
      ],
    },
    {
      category: "Tecnología",
      items: [
        "Python",
        "IA y aprendizaje automático",
        "Análisis y ciencia de datos",
        "Desarrollo web (Next.js, React, TypeScript)",
        "Tecnología cívica y LegalTech",
      ],
    },
    {
      category: "Manuales de citación",
      items: ["Bluebook", "APA", "ICONTEC", "Oñati", "Chicago", "Harvard"],
    },
  ],
  languages: [
    { name: "Español", code: "es", level: "Nativo" },
    { name: "Inglés", code: "en", level: "Lectura e investigación" },
    { name: "Portugués", code: "pt", level: "Lectura e investigación" },
  ],
};

// ============================================================
// Reconocimientos y participación en eventos (hoja de vida)
// ============================================================

export const recognitionsData: Recognition[] = [
  {
    title: "Mención de honor",
    contest: "Concurso Bienal de Ensayos Juan Jaramillo",
    organization: "Dejusticia",
    year: 2026,
  },
  {
    title: "Mejor ensayo",
    contest: "Concurso «Reescribiendo el Derecho»",
    organization: "Ilex Acción Jurídica",
    year: 2025,
  },
];

export const participationsData: Participation[] = [
  {
    title: "Seminario Nacional ICON·S, ediciones V, VI, VII y VIII",
    role: "Participante",
    organization: "Sociedad Internacional de Derecho Público, capítulo Colombia",
    period: "2023 – 2026",
  },
  {
    title: "3.er Foro de Jóvenes IberoMAB",
    role: "Delegado nacional del Ministerio de Ambiente",
    organization: "Programa MaB de la UNESCO",
    period: "2025",
    location: "Bahía, Brasil",
  },
  {
    title: "Justicia constitucional en contextos de conflicto: aprendizajes de la Sentencia T-025 de 2004",
    role: "Participante",
    organization: "Corte Constitucional de Colombia",
    period: "2024",
  },
];

/** Video propio: intervención en el panel del VIII Seminario Nacional ICON·S. */
export const featuredVideo: FeaturedVideo = {
  title: "Intervención en el VIII Seminario Nacional ICON·S",
  description:
    "Fragmento de mi intervención como panelista en el VIII Seminario Nacional de la Sociedad Internacional de Derecho Público (ICON·S), capítulo Colombia, en octubre de 2026.",
  src: "/videos/icons-2026.mp4",
  poster: "/videos/icons-2026-poster.jpg",
  width: 576,
  height: 1024,
  duration: "PT16S",
  recordedAt: "2026-10-23",
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
    title: "Aplicación de Estándares Interamericanos para el Poder Judicial, Ed. 7",
    issuer: "Organización de los Estados Americanos (OEA)",
    date: "Jul. 2025",
    kind: "Certificación",
  },
  {
    title: "Ley 70 de 1993 y Acuerdo de Escazú",
    issuer: "Universidad Tecnológica del Chocó",
    date: "Jun. 2025",
    kind: "Curso",
    description:
      "Formación e investigación sobre derechos étnicos y territoriales, acceso a la información y participación ambiental.",
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
    title: "Manejo básico de herramientas ofimáticas",
    issuer: "SENA",
    date: "2024",
    kind: "Curso",
  },
  {
    title: "VI Seminario Nacional",
    issuer: "ICON·S, Sociedad Internacional de Derecho Público, capítulo Colombia",
    date: "Oct. 2024",
    kind: "Certificación",
  },
  {
    title: "Redacción de artículos científicos",
    issuer: "Universidad Tecnológica del Chocó",
    date: "2023",
    kind: "Curso",
  },
  {
    title: "Justicia transicional, Estado social de derecho y medio ambiente",
    issuer: "Universidad Tecnológica del Chocó",
    date: "2023",
    kind: "Curso",
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

/** Resto de publicaciones de la hoja de vida, con los datos tal como aparecen allí. */
export const otherPublicationsData: PublicationEntry[] = [
  {
    title:
      "Cuaderno de Derecho Ambiental n.º 4: Acuerdo de Escazú, Ley 70 de 1993 y Decreto 1396 de 2023. Puntos de encuentro para la garantía de derechos étnico-territoriales",
    kind: "Cuaderno de Derecho Ambiental",
    status: "Publicado",
    publisher: "Fondo Mundial para la Naturaleza (WWF Colombia)",
    year: 2026,
  },
  {
    title:
      "Cuadernos de Derecho Ambiental: reglamentación de los temas ambientales de la Ley 70. Contenido y alcance del Decreto 1384 de 2023",
    kind: "Cuaderno de Derecho Ambiental",
    status: "Publicado",
    publisher: "Fondo Mundial para la Naturaleza (WWF Colombia)",
    year: 2024,
  },
  {
    title:
      "La reconfiguración de «lo urbano» en la región del Pacífico colombiano: un camino para enfrentar el cambio climático",
    kind: "Artículo",
    status: "En evaluación",
    authors: ["Lisneider Hinestroza Cuesta", "Frank Sebastián Mena García", "D. D. Palacios Robledo"],
  },
  {
    title: "¿Educar para la justicia racial o para el privilegio? Un nuevo horizonte para la enseñanza jurídica",
    kind: "Artículo",
    status: "En evaluación",
    authors: ["Frank Sebastián Mena García", "Nelsy Moreno Ibargüen"],
  },
];

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
    repositoryUrl: "https://github.com/FRANK1808K/franksebastianmena",
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
