import type { CSSProperties } from 'react';
import { profileData } from '@/lib/data';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Portrait } from '@/components/ui/Portrait';
import { Headline } from '@/components/ui/Headline';

/** Retraso escalonado para .animate-rise (CSS, sin JavaScript). */
const delay = (step: number) => ({ '--delay': `${step * 120}ms` }) as CSSProperties;

/** Corta el titular donde se corta la idea: tras la primera coma. */
function splitStatement(text: string) {
  const comma = text.indexOf(',');
  return comma === -1 ? [text] : [text.slice(0, comma + 1), text.slice(comma + 2)];
}

export default function HeroSection() {
  const [lead, rest] = splitStatement(profileData.valueStatement);

  return (
    <section aria-labelledby="hero-title" className="container-page pb-20 pt-12 sm:pb-24 sm:pt-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="animate-rise lg:order-last" style={delay(0)}>
          <Portrait eager className="size-24 sm:size-32 lg:size-72" />
        </div>

        <div className="flex min-w-0 flex-col items-start">
          <p className="eyebrow animate-rise mb-4" style={delay(1)}>
            {profileData.fullName} · {profileData.location}
          </p>

          <h1
            id="hero-title"
            className="text-gradient-hero animate-rise max-w-170 pb-2 text-4xl font-semibold tracking-tight sm:text-5xl"
            style={delay(2)}
          >
            <span className="block">{lead}</span>
            {rest && <span className="block">{rest}</span>}
          </h1>

          <div className="animate-rise max-w-170" style={delay(3)}>
            <Headline text={profileData.headline} className="mt-6 text-lg text-body sm:text-xl" />
          </div>

          <div
            className="animate-rise mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            style={delay(4)}
          >
            <ButtonLink href="/sobre-mi" size="lg" arrow>
              Ver mi trayectoria
            </ButtonLink>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-semibold text-ink"
            >
              LinkedIn
            </a>
          </div>

          {/* Prueba junto a la promesa: solo hechos verificados del perfil */}
          <p className="animate-rise mt-10 max-w-170 text-sm text-mute" style={delay(5)}>
            Coautor de un capítulo publicado por Pireo Editorial (2026) · Formación con la OEA, la Universidad de
            Harvard y la Universidad de Antioquia
          </p>
        </div>
      </div>
    </section>
  );
}
