import { cn } from '@utils/helpers';

/**
 * Section Component
 *
 * Consistent vertical spacing wrapper for page sections.
 * Handles section padding, background variants, and dark mode.
 *
 * @param {'default'|'muted'|'primary'|'accent'} bg - Background variant
 * @param {'default'|'lg'} spacing - Vertical padding size
 * @param {string} className - Additional CSS classes
 * @param {string} id - Section id for anchor navigation
 * @param {React.ReactNode} children
 */
function Section({
  bg = 'default',
  spacing = 'default',
  className,
  id,
  children,
  ...props
}) {
  const bgClasses = {
    default: 'bg-transparent',
    muted: 'bg-surface-100 dark:bg-surface-900',
    primary: 'bg-primary-800 text-white',
    accent: 'bg-accent-50 dark:bg-accent-950',
  };

  const spacingClasses = {
    default: 'py-section',
    lg: 'py-section-lg',
  };

  return (
    <section
      id={id}
      className={cn(bgClasses[bg], spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
