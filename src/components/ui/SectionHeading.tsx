import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  title: string;
  /** id del título, para aria-labelledby de la sección. */
  id?: string;
  subtitle?: string;
  eyebrow?: string;
  /** h1 en la cabecera de cada página; h2 en las secciones. */
  as?: 'h1' | 'h2';
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  id,
  subtitle,
  eyebrow,
  as: Heading = 'h2',
  alignment = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        alignment === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading
        id={id}
        className={cn(
          'font-medium tracking-tight text-ink',
          Heading === 'h1' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl',
        )}
      >
        {title}
      </Heading>
      {subtitle && <p className="max-w-2xl text-lg text-body">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
