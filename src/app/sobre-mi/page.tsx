import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRightIcon as ArrowRight,
  DownloadSimpleIcon as Download,
  MapPinIcon as MapPin,
  MedalIcon as Medal,
} from "@phosphor-icons/react/dist/ssr";
import { participationsData, profileData, recognitionsData } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Markdown } from "@/components/ui/Markdown";
import { Portrait } from "@/components/ui/Portrait";
import { Headline } from "@/components/ui/Headline";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Timeline } from "@/components/sections/about/Timeline";

export const metadata: Metadata = pageMetadata({
  title: "Sobre mí",
  description:
    "Biografía, experiencia, educación, reconocimientos y eventos de Frank Sebastián Mena, estudiante de Derecho en Quibdó, Chocó.",
  path: "/sobre-mi/",
});

/** Los eventos usan la misma línea de tiempo que la experiencia. */
const events = participationsData.map((event) => ({
  title: event.title,
  organization: `${event.role} · ${event.organization}`,
  period: event.period,
  location: event.location,
}));

export default function AboutPage() {
  const photo = profileData.candidPhoto;

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
            <a href={profileData.cvUrl} download className={cn(buttonStyles({ variant: "secondary", size: "lg" }), "mt-6")}>
              <Download
                aria-hidden="true"
                className="size-4 transition-transform duration-500 ease-fluid group-hover:translate-y-0.5"
              />
              Descargar hoja de vida (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Biografía */}
      <section aria-labelledby="bio-title" className="border-t border-line">
        <div className="container-page grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="animate-rise flex flex-col gap-6" style={{ "--delay": "100ms" } as CSSProperties}>
            <h2 id="bio-title" className="eyebrow">Biografía</h2>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 336px, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full max-w-sm rounded-3xl bg-surface lg:sticky lg:top-28"
            />
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

      {/* Reconocimientos y eventos */}
      <section id="reconocimientos" aria-labelledby="awards-title" className="scroll-mt-28 border-t border-line">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              id="awards-title"
              eyebrow="Trayectoria pública"
              title="Reconocimientos y eventos"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-8 text-sm font-semibold text-mute">Reconocimientos</h3>
              <Stagger as="ul" className="flex flex-col gap-4">
                {recognitionsData.map((award) => (
                  <StaggerItem as="li" key={award.contest} className="card flex flex-col gap-2 p-6">
                    <span className="flex items-center gap-2 text-sm font-medium text-accent">
                      <Medal aria-hidden="true" className="size-4" />
                      {award.year}
                    </span>
                    <h4 className="text-xl font-semibold tracking-tight">{award.title}</h4>
                    <p className="text-body">
                      {award.contest} · {award.organization}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <h3 className="mb-8 text-sm font-semibold text-mute">Eventos</h3>
              <Timeline items={events} />
              <Link
                href="/#en-escena"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent"
              >
                <span className="link-underline">Ver mi intervención en ICON·S</span>
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
            <SectionHeading id="skills-title" eyebrow="Habilidades" title="Derecho, competencias y tecnología" className="mb-12" />
          </Reveal>
          <Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            <StaggerItem>
              <h3 className="mb-4 text-lg font-medium">Idiomas</h3>
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
                {profileData.languages.map((lang) => (
                  <div key={lang.code} className="contents">
                    <dt className="font-medium text-ink">{lang.name}</dt>
                    <dd className="text-body">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  );
}
