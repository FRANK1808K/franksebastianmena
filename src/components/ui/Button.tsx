import Link from 'next/link';
import { ArrowRightIcon as ArrowRight } from '@phosphor-icons/react/dist/ssr';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface StyleProps {
  variant?: Variant;
  size?: Size;
  /** Flecha que se desplaza al pasar el cursor. */
  arrow?: boolean;
}

export function buttonStyles({ variant = 'primary', size = 'md' }: StyleProps = {}) {
  return cn(
    'group inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 font-semibold',
    'transition-[background-color,border-color,color,transform] duration-500 ease-fluid active:scale-[0.98]',
    'disabled:pointer-events-none disabled:opacity-50',
    {
      primary: 'bg-accent text-on-accent hover:bg-accent-hover',
      secondary: 'border border-line-strong bg-canvas text-ink hover:border-ink hover:bg-surface',
      ghost: 'text-ink hover:bg-surface',
    }[variant],
    {
      /** Botones pequeños (cabecera, acciones secundarias). */
      md: 'text-sm',
      /** Botón principal. */
      lg: 'text-base',
    }[size],
  );
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-500 ease-fluid group-hover:translate-x-1"
    />
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {}

export function Button({ variant, size, arrow, className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, StyleProps {
  href: string;
  children: ReactNode;
}

/** Enlace con aspecto de botón. Usa next/link para rutas internas. */
export function ButtonLink({ href, variant, size, arrow, className, children, ...props }: ButtonLinkProps) {
  const classes = cn(buttonStyles({ variant, size }), className);
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    const newTab = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export default Button;
