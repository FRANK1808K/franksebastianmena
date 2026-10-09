import { BookOpenIcon, DownloadSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { publicationData as pub } from '@/lib/data';

/** Prueba principal del perfil: el capítulo publicado, con acceso al resumen y al PDF. */
export default function PublicationFeature() {
  return (
    <section aria-labelledby="publication-title" className="border-t border-line">
      <div className="container-page py-20 sm:py-24">
        <Reveal className="grid gap-8 rounded-3xl bg-accent p-6 text-on-accent sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-on-accent/80">
              <BookOpenIcon aria-hidden="true" className="size-4" />
              Publicación · {pub.kind} · {pub.book.publisher}, {pub.book.year}
            </p>
            <h2
              id="publication-title"
              className="max-w-170 text-3xl font-semibold tracking-tight text-on-accent sm:text-4xl"
            >
              {pub.title}
            </h2>
            <p className="max-w-prose text-lg text-on-accent/80">{pub.subtitle}</p>
            <p className="text-sm text-on-accent/70">
              Con {pub.authors.slice(0, -1).join(' y ')} · En <span className="text-on-accent">{pub.book.title.split('.')[0]}</span>,
              pp. {pub.book.pages}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <ButtonLink
              href="/investigacion"
              variant="secondary"
              size="lg"
              arrow
              className="border-transparent bg-canvas hover:border-transparent hover:bg-accent-soft"
            >
              Leer resumen y cita
            </ButtonLink>
            <a
              href={pub.pdfUrl}
              download
              className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-on-accent"
            >
              <DownloadSimpleIcon aria-hidden="true" className="size-4" />
              Descargar PDF ({pub.pdfPages} págs.)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
