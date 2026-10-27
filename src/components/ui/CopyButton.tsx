'use client';

import { useEffect, useState } from 'react';
import { CheckIcon as Check, CopyIcon as Copy } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/Button';

type State = 'idle' | 'copied' | 'error';

/** Copia un texto (p. ej. una cita) al portapapeles y lo confirma en una región viva. */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [state, setState] = useState<State>('idle');

  useEffect(() => {
    if (state === 'idle') return;
    const timer = setTimeout(() => setState('idle'), 2500);
    return () => clearTimeout(timer);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('error');
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="secondary" onClick={copy}>
        {state === 'copied' ? (
          <Check aria-hidden="true" className="size-4 text-success" />
        ) : (
          <Copy aria-hidden="true" className="size-4" />
        )}
        {label}
      </Button>
      <p role="status" aria-live="polite" className="text-sm">
        {state === 'copied' && <span className="text-success">Copiada al portapapeles.</span>}
        {state === 'error' && <span className="text-danger">No se pudo copiar. Selecciona el texto y cópialo a mano.</span>}
      </p>
    </div>
  );
}

export default CopyButton;
