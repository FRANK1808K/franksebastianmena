import Link from 'next/link';
import { ArrowRightIcon as ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { profileData } from '@/lib/data';

/** Cargos actuales, tomados de la experiencia real del perfil. */
export default function CurrentSection() {
  return (
    <section aria-labelledby="current-title" className="border-t border-line">
      <div className="container-page grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <SectionHeading id="current-title" eyebrow="Hoy" title="Actualmente" />
          <Link
            href="/sobre-mi"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            <span className="link-underline">Ver mi trayectoria</span>
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-fluid group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Stagger as="ul" className="divide-y divide-line border-y border-line">
          {profileData.experience.map((job) => (
            <StaggerItem as="li" key={job.organization} className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-xl font-medium">{job.title}</h3>
                <p className="text-body">{job.organization}</p>
              </div>
              <p className="shrink-0 text-sm text-mute">{job.period}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
