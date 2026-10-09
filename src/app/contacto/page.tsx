import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import { EnvelopeSimpleIcon as Mail, MapPinIcon as MapPin } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import ContactForm from "@/components/sections/contacto/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    `Escríbele a ${siteConfig.author.name} por correo o WhatsApp. ${siteConfig.author.location}.`,
  path: "/contacto/",
});

interface ChannelProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

function Channel({ icon, label, value, href }: ChannelProps) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-sm text-mute">{label}</span>
        <span className={href ? "link-underline w-fit text-ink" : "text-ink"}>{value}</span>
      </span>
    </>
  );

  if (!href) return <div className="flex items-center gap-4">{content}</div>;
  const newTab = href.startsWith("http");
  return (
    <a
      href={href}
      className="flex items-center gap-4"
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="container-page pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="animate-rise">
          <SectionHeading
            as="h1"
            eyebrow="Contacto"
            title="Hablemos"
            subtitle="Escríbeme sobre derechos humanos, investigación jurídica o tecnología."
          />
        </div>
      </section>

      <section aria-label="Formulario y datos de contacto" className="border-t border-line">
        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="animate-rise" style={{ "--delay": "100ms" } as CSSProperties}>
            <h2 className="eyebrow mb-8">Directo</h2>
            <ul className="flex flex-col gap-6">
              <li>
                <Channel
                  icon={<Mail aria-hidden="true" className="size-4" />}
                  label="Correo"
                  value={siteConfig.author.email}
                  href={siteConfig.links.email}
                />
              </li>
              <li>
                <Channel
                  icon={<WhatsAppIcon size={16} />}
                  label="WhatsApp"
                  value={siteConfig.author.phoneDisplay}
                  href={siteConfig.links.whatsapp}
                />
              </li>
              <li>
                <Channel
                  icon={<MapPin aria-hidden="true" className="size-4" />}
                  label="Ubicación"
                  value={siteConfig.author.location}
                />
              </li>
            </ul>

            <h2 className="eyebrow mb-4 mt-12">Redes</h2>
            <ul className="flex gap-3">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (se abre en otra pestaña)"
                  className="flex size-11 items-center justify-center rounded-full border border-line text-body transition-colors duration-500 ease-fluid hover:border-ink hover:text-ink"
                >
                  <LinkedInIcon size={18} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (se abre en otra pestaña)"
                  className="flex size-11 items-center justify-center rounded-full border border-line text-body transition-colors duration-500 ease-fluid hover:border-ink hover:text-ink"
                >
                  <GitHubIcon size={18} />
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-rise" style={{ "--delay": "200ms" } as CSSProperties}>
            <h2 className="eyebrow mb-8">Escríbeme</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
