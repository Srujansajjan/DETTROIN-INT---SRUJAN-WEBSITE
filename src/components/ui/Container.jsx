import { cn } from '@utils/helpers';

/**
 * Container Component
 *
 * Constrains content to a maximum width with consistent padding.
 * Used to wrap page sections.
 *
 * @param {'default'|'narrow'|'wide'|'full'} maxWidth - Container width
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML element to render as
 * @param {React.ReactNode} children
 */
function Container({
  maxWidth = 'default',
  className,
  as: Component = 'div',
  children,
  ...props
}) {
  const widthClasses = {
    narrow: 'max-w-[960px]',
    default: 'max-w-[1280px]',
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        widthClasses[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
