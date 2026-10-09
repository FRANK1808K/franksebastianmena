import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import type { TimelineItem } from '@/types';

/** Línea de tiempo vertical: el punto marca cada etapa. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <Stagger as="ol" className="relative border-l border-line">
      {items.map((item) => (
        <StaggerItem as="li" key={`${item.title}-${item.organization}`} className="relative pb-10 pl-8 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-2 size-[9px] rounded-full border-2 border-canvas bg-accent ring-1 ring-accent"
          />
          <p className="text-sm text-mute">{item.period}</p>
          <h4 className="mt-1 text-lg font-medium text-ink">{item.title}</h4>
          <p className="text-body">{item.organization}</p>
          {item.location && <p className="mt-1 text-sm text-mute">{item.location}</p>}
          {item.description && <p className="mt-2 text-sm text-body">{item.description}</p>}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default Timeline;
