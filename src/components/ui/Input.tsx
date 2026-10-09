'use client';

import { forwardRef, useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const fieldStyles = cn(
  'w-full rounded-md border border-line-strong bg-canvas px-3 text-ink placeholder:text-mute',
  'transition-colors duration-500 ease-fluid hover:border-mute focus-visible:border-accent',
  'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent',
  'disabled:cursor-not-allowed disabled:opacity-50',
);

function Label({ htmlFor, children, required }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
      {children}
      {required && <span aria-hidden="true" className="text-mute"> *</span>}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="text-sm text-danger">{message}</p>;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, type = 'text', ...props }, ref) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    const errorId = `${fieldId}-error`;
    return (
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor={fieldId} required={props.required}>{label}</Label>
        <input
          ref={ref}
          id={fieldId}
          type={type}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldStyles, 'h-11', error && 'border-danger', className)}
          {...props}
        />
        <FieldError id={errorId} message={error} />
      </div>
    );
  },
);
Input.displayName = 'Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    const errorId = `${fieldId}-error`;
    return (
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor={fieldId} required={props.required}>{label}</Label>
        <textarea
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldStyles, 'min-h-32 resize-y py-2', error && 'border-danger', className)}
          {...props}
        />
        <FieldError id={errorId} message={error} />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export default Input;
