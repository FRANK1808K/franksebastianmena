'use client';

import { useEffect, useRef, useState } from 'react';
import { profileData } from '@/lib/data';
import { cn } from '@/lib/utils';

/**
 * Frase grande que se enciende palabra por palabra al hacer scroll.
 * Cada palabra se activa al cruzar una línea al 60 % del viewport
 * (un IntersectionObserver, sin listeners de scroll).
 */
export default function TaglineReveal() {
  const words = profileData.tagline.split(' ');
  const [active, setActive] = useState<boolean[]>(() => words.map(() => false));
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActive((prev) => {
          const next = [...prev];
          for (const entry of entries) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            // Encendida si está bajo la línea o si ya pasó por encima del viewport
            next[index] = entry.isIntersecting || entry.boundingClientRect.top < 0;
          }
          return next;
        });
      },
      { rootMargin: '0px 0px -40% 0px', threshold: 0 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Propósito" className="border-t border-line">
      <div className="container-page py-24">
        <p className="max-w-170 text-4xl font-semibold tracking-tight sm:text-5xl">
          {words.map((word, index) => (
            <span key={index}>
              <span
                ref={(el) => {
                  refs.current[index] = el;
                }}
                data-index={index}
                className={cn(
                  'transition-colors duration-700 ease-fluid',
                  // Apagada al 50 %: contraste 3,5:1, mínimo AA para texto grande. Con movimiento reducido, completa desde el inicio
                  active[index] ? 'text-ink' : 'text-ink/50 motion-reduce:text-ink',
                )}
              >
                {word}
              </span>
              {index < words.length - 1 && ' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
