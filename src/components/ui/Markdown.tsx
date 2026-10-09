import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Renderizador de Markdown mínimo y seguro (sin dangerouslySetInnerHTML).
 * Soporta: párrafos, ## / ### títulos, listas (- y 1.), citas (>),
 * **negrita**, *cursiva*, `código` y [enlaces](url).
 */

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key} className="font-semibold text-ink">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={key} className="rounded bg-surface px-1 py-0.5 text-sm">{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:\/\//.test(href);
      return (
        <a
          key={key}
          href={href}
          className="link-underline text-accent"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={key} className="not-italic font-medium text-ink">{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export function Markdown({ content, className }: { content: string; className?: string }) {
  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className={cn('flex flex-col gap-4 text-body', className)}>
      {blocks.map((block, b) => {
        const key = `b${b}`;
        const lines = block.split('\n');

        if (block.startsWith('### ')) {
          return <h3 key={key} className="text-xl text-ink">{renderInline(block.slice(4), key)}</h3>;
        }
        if (block.startsWith('## ')) {
          return <h2 key={key} className="text-2xl text-ink">{renderInline(block.slice(3), key)}</h2>;
        }
        if (lines.every((l) => l.startsWith('> '))) {
          return (
            <blockquote key={key} className="rounded-lg bg-surface p-4 text-ink">
              {renderInline(lines.map((l) => l.slice(2)).join(' '), key)}
            </blockquote>
          );
        }
        if (lines.every((l) => /^[-*] /.test(l))) {
          return (
            <ul key={key} className="list-disc space-y-1 pl-6 marker:text-mute">
              {lines.map((l, i) => <li key={i}>{renderInline(l.slice(2), `${key}-${i}`)}</li>)}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\. /.test(l))) {
          return (
            <ol key={key} className="list-decimal space-y-1 pl-6 marker:text-mute">
              {lines.map((l, i) => <li key={i}>{renderInline(l.replace(/^\d+\. /, ''), `${key}-${i}`)}</li>)}
            </ol>
          );
        }
        return <p key={key}>{renderInline(lines.join(' '), key)}</p>;
      })}
    </div>
  );
}

export default Markdown;
