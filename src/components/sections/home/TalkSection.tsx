import Link from 'next/link';
import { ArrowRightIcon as ArrowRight, MedalIcon as Medal } from '@phosphor-icons/react/dist/ssr';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { TalkVideo } from '@/components/ui/TalkVideo';
import { featuredVideo, participationsData, recognitionsData } from '@/lib/data';

/** Voz pública: el video de ICON·S junto a los eventos y reconocimientos que lo respaldan. */
export default function TalkSection() {
  return (
    <section id="en-escena" aria-labelledby="talk-title" className="scroll-mt-28 border-t border-line">
      <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
        {/* La columna se estira a la altura de la lista: así el video puede quedarse fijo al hacer scroll */}
        <div className="mx-auto w-full max-w-72">
          <Reveal className="lg:sticky lg:top-28">
            <figure>
              <TalkVideo video={featuredVideo} />
              <figcaption className="mt-4 text-sm text-mute">{featuredVideo.description}</figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="flex min-w-0 flex-col">
          <Reveal>
            <SectionHeading
              id="talk-title"
              eyebrow="En escena"
              title="En el debate público"
              subtitle="Llevo la investigación que hago en el Chocó a escenarios nacionales e internacionales sobre justicia, ambiente y juventud."
            />
          </Reveal>

          <h3 className="mb-2 mt-12 text-sm font-semibold text-mute">Eventos</h3>
          <Stagger as="ul" className="divide-y divide-line border-y border-line">
            {participationsData.map((event) => (
              <StaggerItem
                as="li"
                key={event.title}
                className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <h4 className="text-lg font-medium tracking-tight">{event.title}</h4>
                  <p className="text-body">
                    {event.role} · {event.organization}
                    {event.location && ` · ${event.location}`}
                  </p>
                </div>
                <p className="shrink-0 text-sm tabular-nums text-mute">{event.period}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <h3 className="mb-4 mt-12 text-sm font-semibold text-mute">Reconocimientos</h3>
          <Stagger as="ul" className="grid gap-4 sm:grid-cols-2">
            {recognitionsData.map((award) => (
              <StaggerItem as="li" key={award.contest} className="card flex flex-col gap-3 p-6">
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

          <Link
            href="/sobre-mi#reconocimientos"
            className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
          >
            <span className="link-underline">Ver mi trayectoria completa</span>
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-fluid group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
