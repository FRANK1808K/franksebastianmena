import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
        {
          default: 'bg-surface text-body',
          accent: 'bg-accent-soft text-accent',
          outline: 'border border-line text-body',
        }[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Badge;
