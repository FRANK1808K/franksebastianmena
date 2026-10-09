'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import type { TimelineItem } from '@/types';

/** Línea de trigger: los puntos se encienden al cruzar el 60 % del viewport. */
const TRIGGER = '0px 0px -40% 0px';

/**
 * Línea de tiempo vertical. La línea de acento crece con el scroll
 * y cada punto se enciende al cruzar la línea de trigger.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [reached, setReached] = useState<boolean[]>(() => items.map(() => false));
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 60%', 'end 60%'] });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setReached((prev) => {
          const next = [...prev];
          for (const entry of entries) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            next[index] = entry.isIntersecting || entry.boundingClientRect.top < 0;
          }
          return next;
        });
      },
      { rootMargin: TRIGGER, threshold: 0 },
    );
    dotRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Línea base y línea de progreso, centradas bajo los puntos */}
      <span aria-hidden="true" className="absolute inset-y-0 left-1 w-px -translate-x-1/2 bg-line" />
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 left-1 w-px -translate-x-1/2 origin-top bg-accent"
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
      />

      <Stagger as="ol">
        {items.map((item, index) => (
          <StaggerItem as="li" key={`${item.title}-${item.organization}`} className="relative pb-10 pl-8 last:pb-0">
            <span
              ref={(el) => {
                dotRefs.current[index] = el;
              }}
              data-index={index}
              aria-hidden="true"
              className={cn(
                'absolute left-0 top-2 size-2 rounded-full ring-4 ring-canvas transition-colors duration-700 ease-fluid',
                reached[index] || reduce ? 'bg-accent' : 'bg-line-strong',
              )}
            />
            <p className="text-sm text-mute">{item.period}</p>
            <h4 className="mt-1 text-lg font-semibold tracking-tight text-ink">{item.title}</h4>
            <p className="text-body">{item.organization}</p>
            {item.location && <p className="mt-1 text-sm text-mute">{item.location}</p>}
            {item.description && <p className="mt-2 text-sm text-body">{item.description}</p>}
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default Timeline;
