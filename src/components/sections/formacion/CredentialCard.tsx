import { ArrowUpRightIcon as ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import type { Credential } from '@/types';

/** Tarjeta de credencial. El enlace solo aparece si existe una URL real. */
export function CredentialCard({ credential }: { credential: Credential }) {
  const { title, issuer, date, description, credentialId, credentialUrl } = credential;

  return (
    <article className="card card-hover flex h-full flex-col gap-3 p-6">
      <p className="text-sm font-medium text-accent">{issuer}</p>
      <h3 className="text-lg font-medium">{title}</h3>
      {description && <p className="text-sm text-body">{description}</p>}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line pt-4 text-sm">
        <p className="text-mute">
          <span className="sr-only">Fecha: </span>
          {date}
        </p>
        {credentialId && (
          <p className="text-mute">
            ID <span className="font-mono text-xs text-body">{credentialId}</span>
          </p>
        )}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-medium text-accent"
          >
            <span className="link-underline">Ver credencial</span>
            <span className="sr-only"> de {title} (se abre en otra pestaña)</span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-500 ease-fluid group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
      </div>
    </article>
  );
}

export default CredentialCard;
