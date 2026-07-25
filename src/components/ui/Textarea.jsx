import { forwardRef } from 'react';
import { cn } from '@utils/helpers';

/**
 * Textarea Component
 *
 * Multi-line text input with label, error state, and helper text.
 *
 * @param {string} label - Textarea label
 * @param {string} error - Error message (triggers error styling)
 * @param {string} helperText - Helper text below textarea
 * @param {string} id - Textarea id (auto-links label)
 * @param {number} rows - Number of visible text rows
 * @param {boolean} fullWidth - Full width textarea
 * @param {string} className - Additional CSS classes
 */
const Textarea = forwardRef(function Textarea(
  {
    label,
    error,
    helperText,
    id,
    rows = 4,
    fullWidth = true,
    className,
    ...props
  },
  ref
) {
  return (
    <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-surface-700 dark:text-surface-300"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        className={cn(
          'w-full px-4 py-2.5 rounded-input text-base font-body resize-y min-h-[100px]',
          'bg-white dark:bg-surface-900',
          'border transition-all duration-[200ms] ease-smooth',
          'placeholder:text-surface-400 dark:placeholder:text-surface-600',
          error
            ? 'border-error-500 focus:ring-2 focus:ring-error-500/20 focus:border-error-500'
            : 'border-surface-300 dark:border-surface-700 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 dark:focus:border-primary-400',
          'focus:outline-none',
          'text-surface-900 dark:text-surface-100',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-error-600 mt-0.5">{error}</p>
      )}
      {!error && helperText && (
        <p className="text-xs text-surface-500 mt-0.5">{helperText}</p>
      )}
    </div>
  );
});

export default Textarea;
