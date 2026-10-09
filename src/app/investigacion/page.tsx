import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { chapterJsonLd, jsonLdScript, pageMetadata } from "@/lib/seo";
import { BookOpenIcon as BookOpen, DownloadSimpleIcon as Download } from "@phosphor-icons/react/dist/ssr";
import { profileData, publicationData } from "@/lib/data";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, buttonStyles } from "@/components/ui/Button";

const pub = publicationData;

export const metadata: Metadata = pageMetadata({
  title: "Investigación",
  description:
    `«${pub.title}», capítulo de ${pub.authors.join(", ")} en ${pub.book.title} (${pub.book.publisher}, ${pub.book.year}).`,
  path: "/investigacion/",
});

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
      className="relative mx-auto flex aspect-[3/4] w-full max-w-52 flex-col justify-between overflow-hidden rounded-md border border-line bg-canvas p-6 shadow-[0_18px_40px_-24px_rgb(18_22_28/0.35)] md:max-w-64"
    >
      <span className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
      <p className="text-xs font-semibold text-mute">{pub.kind}</p>
      <p className="text-xl font-medium text-ink">{pub.title}</p>
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
            subtitle="Derechos humanos, derechos étnico-ambientales y derecho público, desde Quibdó."
          />
        </div>
      </section>

      {/* Capítulo */}
      <section aria-labelledby="doc-title" className="border-t border-line">
        <div className="container-page grid items-start gap-12 py-16 sm:py-20 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-16">
          <Reveal className="md:sticky md:top-24">
            <DocumentCover />
          </Reveal>

          <Reveal delay={0.08} className="flex min-w-0 flex-col items-start">
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
          </Reveal>
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
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
