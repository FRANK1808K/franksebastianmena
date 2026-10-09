import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = pageMetadata({
  title: "Privacidad",
  description: "Cómo trata este sitio los datos que envías por el formulario de contacto.",
  path: "/privacidad/",
});

const UPDATED = "octubre de 2026";

const sections = [
  {
    title: "Quién es el responsable",
    body: (
      <p>
        {siteConfig.author.name}, en {siteConfig.author.location}. Para cualquier asunto sobre tus datos escribe a{" "}
        <a href={siteConfig.links.email} className="link-underline font-semibold text-ink">
          {siteConfig.author.email}
        </a>
        .
      </p>
    ),
  },
  {
    title: "Qué datos recibo",
    body: (
      <p>
        Solo los que escribes en el{" "}
        <Link href="/contacto" className="link-underline font-semibold text-ink">
          formulario de contacto
        </Link>
        : nombre, correo, asunto y mensaje. El formulario los envía a mi correo a través del servicio Web3Forms. Este
        sitio no los guarda en ninguna base de datos. Si eliges WhatsApp, el mensaje sale desde tu propia aplicación.
      </p>
    ),
  },
  {
    title: "Para qué los uso",
    body: <p>Únicamente para leer tu mensaje y responderte. No los vendo, no los comparto y no envío publicidad.</p>,
  },
  {
    title: "Cookies y analítica",
    body: (
      <p>
        Este sitio no usa cookies de seguimiento ni herramientas de analítica. El proveedor de alojamiento puede
        registrar datos técnicos de las visitas, como la dirección IP o el navegador, en sus registros de servidor.
      </p>
    ),
  },
  {
    title: "Tus derechos",
    body: (
      <p>
        Conforme a la Ley 1581 de 2012 de Colombia, puedes pedirme conocer, actualizar, rectificar o eliminar los
        datos que me hayas enviado. Basta con escribir al correo de arriba.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="container-page pb-24 pt-12 sm:pt-20">
      <div className="animate-rise">
        <SectionHeading as="h1" eyebrow="Legal" title="Privacidad" subtitle={`Última actualización: ${UPDATED}.`} />
      </div>

      <div className="mt-12 flex max-w-prose flex-col gap-10">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3 text-body">
            <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
            {section.body}
          </div>
        ))}
      </div>
    </section>
  );
}
