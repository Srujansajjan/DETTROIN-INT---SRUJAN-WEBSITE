import { cn } from '@utils/helpers';

/**
 * SectionHeading Component
 *
 * Consistent heading block for page sections.
 * Includes an optional label, title, subtitle, and decorative accent.
 *
 * @param {string} label - Small uppercase label above the title
 * @param {string} title - Main heading text
 * @param {string} subtitle - Supporting description text
 * @param {'left'|'center'} align - Text alignment
 * @param {boolean} dark - Use light text for dark backgrounds
 * @param {string} className - Additional CSS classes
 */
function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={cn('flex flex-col gap-4 mb-12', alignClasses, className)}>
      {label && (
        <span
          className={cn(
            'inline-block text-xs font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-badge w-fit',
            dark
              ? 'text-accent-300 bg-accent-500/10'
              : 'text-accent-600 bg-accent-50'
          )}
        >
          {label}
        </span>
      )}

      {title && (
        <h2
          className={cn(
            'font-heading font-bold leading-tight',
            'text-3xl md:text-4xl lg:text-5xl',
            dark ? 'text-white' : 'text-primary-800'
          )}
        >
          {title}
        </h2>
      )}

      <div
        className={cn(
          'gold-line',
          align === 'center' && 'mx-auto'
        )}
        aria-hidden="true"
      />

      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-lg leading-relaxed',
            dark ? 'text-surface-300' : 'text-surface-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
