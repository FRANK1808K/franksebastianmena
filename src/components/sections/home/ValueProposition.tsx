import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { profileData } from '@/lib/data';
import { cn } from '@/lib/utils';

/** Rejilla asimétrica: la primera área ocupa la columna izquierda completa. */
export default function ValueProposition() {
  return (
    <section aria-labelledby="areas-title">
      <div className="container-page py-20 sm:py-24">
        <Reveal>
          <SectionHeading id="areas-title" eyebrow="Enfoque" title="Áreas de trabajo" className="mb-12 sm:mb-16" />
        </Reveal>

        <Stagger as="ol" className="grid gap-4 lg:grid-cols-2">
          {profileData.focusAreas.map((area, index) => {
            const lead = index === 0;
            return (
              <StaggerItem
                as="li"
                key={area.title}
                className={cn(
                  'card card-hover flex flex-col gap-4 p-6 sm:p-8',
                  lead && 'lg:row-span-2 lg:justify-end lg:p-12',
                )}
              >
                <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={cn('font-semibold tracking-tight', lead ? 'text-2xl sm:text-3xl' : 'text-xl')}>
                  {area.title}
                </h3>
                <p className={cn('max-w-prose text-body', lead ? 'text-lg' : 'text-base')}>{area.description}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
