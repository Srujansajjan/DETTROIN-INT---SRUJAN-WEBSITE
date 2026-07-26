import { cn } from '@utils/helpers';

/**
 * Card Component
 *
 * Versatile content card with hover effects and optional image slot.
 *
 * @param {'default'|'elevated'|'outline'|'glass'} variant - Visual style
 * @param {boolean} hoverable - Enable lift-on-hover effect
 * @param {boolean} padded - Add internal padding
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children
 */
function Card({
  variant = 'default',
  hoverable = true,
  padded = true,
  className,
  children,
  ...props
}) {
  const variantClasses = {
    default:
      'bg-white border border-surface-200 shadow-card',
    elevated:
      'bg-white shadow-elevated',
    outline:
      'bg-transparent border-2 border-surface-200',
    glass:
      'glass',
  };

  const darkVariantClasses = {
    default: 'dark:bg-surface-900 dark:border-surface-800',
    elevated: 'dark:bg-surface-900',
    outline: 'dark:border-surface-700',
    glass: '',
  };

  return (
    <div
      className={cn(
        'rounded-card overflow-hidden transition-all duration-[300ms] ease-smooth',
        variantClasses[variant],
        darkVariantClasses[variant],
        hoverable && 'hover:shadow-card-hover hover:-translate-y-1',
        padded && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * CardImage — Slot for a card header image with zoom effect.
 */
function CardImage({ src, alt, className }) {
  return (
    <div className={cn('img-zoom -mx-6 -mt-6 mb-6', className)}>
      <img
        src={src}
        alt={alt || ''}
        className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}

/**
 * CardTitle — Styled title for cards.
 */
function CardTitle({ children, className }) {
  return (
    <h3 className={cn('font-heading text-xl font-semibold text-primary-800 dark:text-surface-100 mb-2', className)}>
      {children}
    </h3>
  );
}

/**
 * CardDescription — Styled description for cards.
 */
function CardDescription({ children, className }) {
  return (
    <p className={cn('text-surface-600 dark:text-surface-400 leading-relaxed text-sm', className)}>
      {children}
    </p>
  );
}

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;
