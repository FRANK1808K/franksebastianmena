import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { chapterJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { BookOpenIcon as BookOpen, DownloadSimpleIcon as Download } from "@phosphor-icons/react/dist/ssr";
import { otherPublicationsData, profileData, publicationData } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, buttonStyles } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CopyButton } from "@/components/ui/CopyButton";
import type { PublicationEntry } from "@/types";

const pub = publicationData;

export const metadata: Metadata = pageMetadata({
  title: "Investigación",
  description:
    `«${pub.title}», capítulo de ${pub.authors.join(", ")} en ${pub.book.title} (${pub.book.publisher}, ${pub.book.year}). También: Cuadernos de Derecho Ambiental con WWF Colombia y artículos en evaluación.`,
  path: "/investigacion/",
});

const publicationGroups: { status: PublicationEntry["status"]; title: string }[] = [
  { status: "Publicado", title: "Publicados" },
  { status: "En evaluación", title: "En evaluación" },
];

/** El PDF se enlaza solo si el archivo existe en /public al generar el sitio. */
const hasPdf = existsSync(path.join(process.cwd(), "public", pub.pdfUrl));

/** Lista "A, B y C". */
const joinNames = (names: string[]) =>
  names.length > 1 ? `${names.slice(0, -1).join(", ")} y ${names[names.length - 1]}` : names[0];

/** Portada tipográfica del capítulo (sin imagen). */
function DocumentCover() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-[3/4] w-full max-w-52 flex-col justify-between overflow-hidden rounded-2xl bg-surface p-6 md:max-w-64"
    >
      <p className="text-xs font-semibold text-mute">{pub.kind}</p>
      <p className="text-xl font-semibold tracking-tight text-ink">{pub.title}</p>
      <div className="flex flex-col gap-2">
        <span className="h-px w-10 bg-line-strong" />
        <p className="text-xs text-body">Hinestroza, Moreno y Mena</p>
        <p className="text-xs text-mute">
          {pub.book.publisher} · {pub.book.year}
        </p>
      </div>
    </div>
  );
}

export default function ResearchPage() {
  const research = profileData.experience.find((job) => job.title === "Asistente de investigación");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(chapterJsonLd)} />
      <section className="container-page pb-12 pt-12 sm:pb-16 sm:pt-20">
        <div className="animate-rise">
          <SectionHeading
            as="h1"
            eyebrow="Investigación"
            title="Investigación"
            subtitle="Derechos humanos, derechos étnicos y ambientales y derecho público, desde Quibdó."
          />
        </div>
      </section>

      {/* Capítulo */}
      <section aria-labelledby="doc-title" className="border-t border-line">
        <div className="container-page grid items-start gap-12 py-16 sm:py-20 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-16">
          <div className="animate-rise md:sticky md:top-24" style={{ "--delay": "100ms" } as CSSProperties}>
            <DocumentCover />
          </div>

          <div className="animate-rise flex min-w-0 flex-col items-start" style={{ "--delay": "200ms" } as CSSProperties}>
            <p className="flex items-center gap-2 text-sm text-mute">
              <BookOpen aria-hidden="true" className="size-4" />
              {pub.kind} · {pub.book.publisher}, {pub.book.year} · pp. {pub.book.pages}
            </p>
            <h2 id="doc-title" className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              {pub.title}
            </h2>
            <p className="mt-3 text-lg text-body">{pub.subtitle}</p>
            <p className="mt-4 text-sm text-mute">
              <span className="sr-only">Autores: </span>
              {joinNames(pub.authors)} · Universidad Tecnológica del Chocó
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              {hasPdf ? (
                <a
                  href={pub.pdfUrl}
                  download
                  className={buttonStyles({ size: 'lg' })}
                >
                  Descargar PDF
                  <span className="text-sm font-normal opacity-80">({pub.pdfPages} págs.)</span>
                  <Download aria-hidden="true" className="size-4 transition-transform duration-500 ease-fluid group-hover:translate-y-0.5" />
                </a>
              ) : (
                <p className="inline-flex items-center justify-center rounded-lg border border-dashed border-line-strong px-3 py-2 text-base text-mute">
                  PDF disponible próximamente
                </p>
              )}
              <ButtonLink href={pub.externalUrl ?? siteConfig.links.linkedin} variant="secondary" size="lg">
                {pub.externalUrl ? "Ver en LinkedIn" : "Ver mi LinkedIn"}
              </ButtonLink>
            </div>

            <h3 className="eyebrow mb-4 mt-12">Resumen</h3>
            <p className="max-w-prose text-lg text-body">{pub.summary}</p>

            <h3 className="eyebrow mb-4 mt-12">Preguntas que responde</h3>
            <ol className="flex max-w-prose list-[lower-roman] flex-col gap-2 pl-6 text-lg text-body marker:text-mute">
              {pub.questions.map((q) => (
                <li key={q} className="pl-1">
                  {q}
                </li>
              ))}
            </ol>

            <h3 className="eyebrow mb-4 mt-12">Publicado en</h3>
            <dl className="grid max-w-prose grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="text-mute">Libro</dt>
              <dd className="text-body">
                <cite className="not-italic">{pub.book.title}</cite>
              </dd>
              <dt className="text-mute">Editores</dt>
              <dd className="text-body">{joinNames(pub.book.editors)}</dd>
              <dt className="text-mute">Editorial</dt>
              <dd className="text-body">
                {pub.book.publisher} ({pub.book.place}), {pub.book.year} · Colección {pub.book.collection}
              </dd>
              <dt className="text-mute">ISBN</dt>
              <dd className="font-mono text-sm text-body">{pub.book.isbn}</dd>
            </dl>

            <h3 className="eyebrow mb-4 mt-12">Cómo citar (APA)</h3>
            <blockquote className="max-w-prose rounded-lg bg-surface p-4 text-sm text-body">
              {pub.citation}
            </blockquote>
            <div className="mt-4">
              <CopyButton text={pub.citation} label="Copiar cita" />
            </div>

            <p className="mt-6 text-sm text-mute">
              Obra publicada bajo licencia{" "}
              <a
                href={pub.license.url}
                target="_blank"
                rel="noopener noreferrer license"
                className="link-underline text-body"
              >
                {pub.license.name}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Otras publicaciones */}
      <section aria-labelledby="more-title" className="border-t border-line">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <SectionHeading
              id="more-title"
              eyebrow="Más publicaciones"
              title="Cuadernos y artículos"
              subtitle="Cuadernos de Derecho Ambiental con WWF Colombia y artículos en proceso de evaluación."
              className="mb-12"
            />
          </Reveal>

          {publicationGroups.map(({ status, title }) => {
            const items = otherPublicationsData.filter((entry) => entry.status === status);
            if (items.length === 0) return null;
            return (
              <div key={status} className="mt-12 first:mt-0">
                <h3 className="mb-2 text-sm font-semibold text-mute">{title}</h3>
                <Stagger as="ul" className="divide-y divide-line border-y border-line">
                  {items.map((entry) => (
                    <StaggerItem
                      as="li"
                      key={entry.title}
                      className="grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12"
                    >
                      <div className="min-w-0">
                        <p className="text-sm text-mute">{entry.kind}</p>
                        <h4 className="mt-1 max-w-3xl text-lg font-medium tracking-tight">{entry.title}</h4>
                        {entry.authors && (
                          <p className="mt-2 text-sm text-body">
                            <span className="sr-only">Autores: </span>
                            {joinNames(entry.authors)}
                          </p>
                        )}
                        {entry.publisher && <p className="mt-2 text-sm text-body">{entry.publisher}</p>}
                      </div>
                      <div className="md:text-right">
                        {entry.year ? (
                          <p className="text-sm tabular-nums text-mute">{entry.year}</p>
                        ) : (
                          <Badge variant="accent">{entry.status}</Badge>
                        )}
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contexto */}
      {research && (
        <section aria-labelledby="context-title" className="border-t border-line bg-surface">
          <Reveal className="container-page grid gap-6 py-16 sm:py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <h2 id="context-title" className="eyebrow">Dónde investigo</h2>
            <div>
              <p className="text-sm text-mute">{research.period}</p>
              <h3 className="mt-1 text-2xl font-medium">{research.title}</h3>
              <p className="text-lg text-body">{research.organization}</p>
              {research.description && <p className="mt-4 max-w-prose text-body">{research.description}</p>}
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
