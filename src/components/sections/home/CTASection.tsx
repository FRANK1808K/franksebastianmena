import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';

/** Cierre: la misma acción principal que el hero, con el contacto como alternativa. */
export default function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="bg-surface">
      <Reveal className="container-page flex flex-col items-start gap-6 py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Mi trayectoria, de principio a fin
          </h2>
          <p className="mt-4 text-lg text-body">
            Investigación, formación y proyectos en un solo lugar. Si quieres hablar de derechos humanos, investigación
            jurídica o tecnología, también puedes{' '}
            <Link href="/contacto" className="link-underline font-semibold text-ink">
              escribirme
            </Link>
            .
          </p>
        </div>
        <ButtonLink href="/sobre-mi" size="lg" arrow>
          Ver mi trayectoria
        </ButtonLink>
      </Reveal>
    </section>
  );
}
