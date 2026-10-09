import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRightIcon as ArrowRight, MapPinIcon as MapPin } from "@phosphor-icons/react/dist/ssr";
import { profileData } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Markdown } from "@/components/ui/Markdown";
import { Portrait } from "@/components/ui/Portrait";
import { Headline } from "@/components/ui/Headline";
import { Badge } from "@/components/ui/Badge";
import { Timeline } from "@/components/sections/about/Timeline";

export const metadata: Metadata = pageMetadata({
  title: "Sobre mí",
  description:
    "Biografía, experiencia y educación de Frank Sebastián Mena, estudiante de Derecho en Quibdó, Chocó.",
  path: "/sobre-mi/",
});

export default function AboutPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="container-page pb-16 pt-12 sm:pb-20 sm:pt-20">
        <div className="animate-rise flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
          <Portrait eager className="size-28 sm:size-40" />
          <div>
            <p className="eyebrow mb-4">Sobre mí</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profileData.fullName}
            </h1>
            <Headline text={profileData.headline} className="mt-3 text-lg text-body" />
            <p className="mt-2 flex items-center gap-2 text-sm text-mute">
              <MapPin aria-hidden="true" className="size-4" />
              {profileData.location}
            </p>
          </div>
        </div>
      </section>

      {/* Biografía */}
      <section aria-labelledby="bio-title" className="border-t border-line">
        <div className="container-page grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="animate-rise" style={{ "--delay": "100ms" } as CSSProperties}>
            <h2 id="bio-title" className="eyebrow">Biografía</h2>
          </div>
          <div className="animate-rise" style={{ "--delay": "200ms" } as CSSProperties}>
            <Markdown content={profileData.bio} className="max-w-prose text-lg" />
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section aria-labelledby="trayectoria-title" className="border-t border-line">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <SectionHeading id="trayectoria-title" eyebrow="Trayectoria" title="Experiencia y educación" className="mb-12" />
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-8 text-sm font-semibold text-mute">
                Experiencia
              </h3>
              <Timeline items={profileData.experience} />
            </div>
            <div>
              <h3 className="mb-8 text-sm font-semibold text-mute">Educación</h3>
              <Timeline items={profileData.education} />
              <Link
                href="/formacion"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                <span className="link-underline">Ver formación y certificaciones</span>
                <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-fluid group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section aria-labelledby="skills-title" className="border-t border-line">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <SectionHeading id="skills-title" eyebrow="Habilidades" title="Derecho, tecnología y gestión" className="mb-12" />
          </Reveal>
          <Stagger className="grid gap-10 md:grid-cols-3">
            {profileData.skills.map((group) => (
              <StaggerItem key={group.category}>
                <h3 className="mb-4 text-lg font-medium">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <Badge variant="outline">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
