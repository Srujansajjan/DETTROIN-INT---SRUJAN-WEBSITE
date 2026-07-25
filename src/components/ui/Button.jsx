import { cn } from '@utils/helpers';

/**
 * Button Component
 *
 * Reusable button with multiple variants, sizes, and states.
 *
 * @param {'primary'|'secondary'|'outline'|'ghost'|'accent'} variant - Visual style
 * @param {'sm'|'md'|'lg'} size - Button size
 * @param {boolean} fullWidth - Whether the button spans full width
 * @param {boolean} disabled - Disabled state
 * @param {boolean} loading - Loading state with spinner
 * @param {React.ReactNode} leftIcon - Icon before the label
 * @param {React.ReactNode} rightIcon - Icon after the label
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Button content
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-[250ms] ease-smooth rounded-button focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variantClasses = {
    primary:
      'bg-primary-700 text-white hover:bg-primary-600 active:bg-primary-800 shadow-card hover:shadow-card-hover',
    secondary:
      'bg-secondary-600 text-white hover:bg-secondary-500 active:bg-secondary-700 shadow-card hover:shadow-card-hover',
    outline:
      'border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white active:bg-primary-800',
    ghost:
      'text-primary-700 hover:bg-primary-50 active:bg-primary-100',
    accent:
      'bg-accent-500 text-white hover:bg-accent-400 active:bg-accent-600 shadow-card hover:shadow-card-hover',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-base gap-2',
    lg: 'px-8 py-3.5 text-lg gap-2.5',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}

export default Button;
