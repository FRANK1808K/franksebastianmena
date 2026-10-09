'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CheckCircleIcon as CheckCircle2, CircleNotchIcon as Loader2, EnvelopeSimpleIcon as Mail, PaperPlaneTiltIcon as Send } from '@phosphor-icons/react/dist/ssr';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';

type Field = 'name' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;
type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'error'; message: string }
  | { kind: 'opened'; channel: 'email' | 'whatsapp' };

const FIELDS: Field[] = ['name', 'email', 'subject', 'message'];
const MAX_MESSAGE = 1500;
const TIMEOUT_MS = 15000;
const { endpoint, accessKey } = siteConfig.contactForm;
/** Con clave de Web3Forms el formulario envía directamente; sin ella abre correo o WhatsApp. */
const canSend = accessKey.length > 0;

function validate(data: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!data.name) errors.name = 'Escribe tu nombre.';
  if (!data.email) errors.email = 'Escribe tu correo.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Revisa el formato del correo.';
  if (!data.subject) errors.subject = 'Escribe un asunto.';
  if (!data.message) errors.message = 'Escribe tu mensaje.';
  return errors;
}

async function sendWithWeb3Forms(data: Record<Field, string>, botcheck: boolean) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nuevo mensaje desde tu sitio: ${data.subject}`,
        from_name: `${data.name} (sitio web)`,
        name: data.name,
        email: data.email, // Web3Forms lo usa como dirección de respuesta
        asunto: data.subject,
        message: data.message,
        botcheck,
      }),
      signal: controller.signal,
    });
    const json = await response.json().catch(() => ({}));
    if (!response.ok || !json.success) {
      throw new Error(response.status === 429 ? 'rate' : 'server');
    }
  } finally {
    clearTimeout(timer);
  }
}

/** Formulario de contacto para sitio estático (Web3Forms, con alternativa por correo o WhatsApp). */
export default function ContactForm() {
  const sentRef = useRef<HTMLHeadingElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  // Tras enviar, el formulario se sustituye por la confirmación: el foco va a ella
  useEffect(() => {
    if (status.kind === 'sent') sentRef.current?.focus();
  }, [status.kind]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.kind === 'sending') return;

    const formEl = event.currentTarget;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value ?? 'send';

    const form = new FormData(formEl);
    const data = Object.fromEntries(FIELDS.map((f) => [f, String(form.get(f) ?? '').trim()])) as Record<Field, string>;

    const found = validate(data);
    setErrors(found);
    const firstInvalid = FIELDS.find((f) => found[f]);
    if (firstInvalid) {
      formEl.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setStatus({ kind: 'idle' });
      return;
    }

    const body = `${data.message}\n\n—\n${data.name}\n${data.email}`;

    if (channel === 'whatsapp') {
      const text = encodeURIComponent(`*${data.subject}*\n\n${body}`);
      window.open(`${siteConfig.links.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
      setStatus({ kind: 'opened', channel: 'whatsapp' });
      return;
    }

    if (!canSend) {
      const mailto = `${siteConfig.links.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination -- mailto: no es una ruta interna
      window.location.assign(mailto);
      setStatus({ kind: 'opened', channel: 'email' });
      return;
    }

    setStatus({ kind: 'sending' });
    try {
      await sendWithWeb3Forms(data, form.get('botcheck') === 'on');
      formEl.reset();
      setStatus({ kind: 'sent' });
    } catch (error) {
      const reason = error instanceof Error ? error.message : '';
      setStatus({
        kind: 'error',
        message:
          reason === 'rate'
            ? 'Se enviaron demasiados mensajes en poco tiempo. Inténtalo de nuevo en unos minutos'
            : 'No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo',
      });
    }
  };

  if (status.kind === 'sent') {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-xl bg-surface p-8">
        <CheckCircle2 aria-hidden="true" className="size-8 text-success" />
        <h3 ref={sentRef} tabIndex={-1} className="text-2xl font-medium focus:outline-none">
          ¡Mensaje enviado!
        </h3>
        <p className="text-body">Gracias por escribirme. Te responderé al correo que indicaste.</p>
        <Button variant="secondary" onClick={() => setStatus({ kind: 'idle' })}>
          Escribir otro mensaje
        </Button>
      </div>
    );
  }

  const sending = status.kind === 'sending';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
      aria-describedby="form-note"
      aria-busy={sending}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Nombre" name="name" autoComplete="name" required error={errors.name} disabled={sending} />
        <Input
          label="Correo"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          error={errors.email}
          disabled={sending}
        />
      </div>
      <Input label="Asunto" name="subject" required error={errors.subject} disabled={sending} />
      <Textarea
        label="Mensaje"
        name="message"
        rows={6}
        maxLength={MAX_MESSAGE}
        required
        error={errors.message}
        disabled={sending}
      />

      {/* Campo trampa para bots: invisible para personas y lectores de pantalla */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <p id="form-note" className="text-sm text-mute">
        {canSend
          ? 'Tu mensaje me llega por correo a través de Web3Forms. Este sitio no guarda tus datos.'
          : 'El formulario abre tu aplicación de correo o WhatsApp con el mensaje listo para enviar.'}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" name="channel" value="send" size="lg" disabled={sending}>
          {sending ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Enviando…
            </>
          ) : canSend ? (
            <>
              <Send aria-hidden="true" className="size-4" />
              Enviar mensaje
            </>
          ) : (
            <>
              <Mail aria-hidden="true" className="size-4" />
              Enviar por correo
            </>
          )}
        </Button>
        <Button type="submit" name="channel" value="whatsapp" variant="secondary" size="lg" disabled={sending}>
          <WhatsAppIcon size={16} />
          Enviar por WhatsApp
        </Button>
      </div>

      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status.kind === 'error' && (
          <span className="text-danger">
            {status.message} o escríbeme a{' '}
            <a href={siteConfig.links.email} className="font-medium underline underline-offset-2">
              {siteConfig.author.email}
            </a>
            .
          </span>
        )}
        {status.kind === 'opened' && (
          <span className="text-success">
            {status.channel === 'whatsapp' ? (
              'Se abrió WhatsApp en otra pestaña con tu mensaje.'
            ) : (
              <>
                Se abrió tu aplicación de correo. Si no se abrió, escríbeme a{' '}
                <a href={siteConfig.links.email} className="font-medium underline underline-offset-2">
                  {siteConfig.author.email}
                </a>
                .
              </>
            )}
          </span>
        )}
      </p>
    </form>
  );
}
