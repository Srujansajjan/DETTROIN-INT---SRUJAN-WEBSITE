import { cn } from '@utils/helpers';

/**
 * Badge Component
 *
 * Small label for status indicators, tags, and categories.
 *
 * @param {'default'|'primary'|'secondary'|'accent'|'success'|'warning'|'error'} variant
 * @param {'sm'|'md'} size - Badge size
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children
 */
function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}) {
  const variantClasses = {
    default: 'bg-surface-100 text-surface-700 dark:bg-surface-800 dark:text-surface-300',
    primary: 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300',
    secondary: 'bg-secondary-50 text-secondary-700 dark:bg-secondary-900/50 dark:text-secondary-300',
    accent: 'bg-accent-50 text-accent-700 dark:bg-accent-900/50 dark:text-accent-300',
    success: 'bg-success-50 text-success-700',
    warning: 'bg-warning-50 text-warning-700',
    error: 'bg-error-50 text-error-700',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-badge whitespace-nowrap',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
