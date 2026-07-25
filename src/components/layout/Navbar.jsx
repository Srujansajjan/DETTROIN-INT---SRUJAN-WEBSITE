import { Link, NavLink } from 'react-router-dom';
import { cn } from '@utils/helpers';

/**
 * Navigation links configuration.
 * Add or remove links here — the Navbar renders them automatically.
 */
const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

/**
 * Navbar Component
 *
 * Fixed navigation bar with school branding and links.
 * Uses Tailwind classes from the design system.
 */
function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[var(--height-header)] bg-primary-800 shadow-md"
      id="main-navbar"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-white tracking-tight">
            Vasant Valley School
          </span>
        </Link>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'inline-block px-4 py-2 text-sm font-medium rounded-button transition-all duration-[200ms] ease-smooth',
                      isActive
                        ? 'text-accent-400'
                        : 'text-primary-200 hover:text-white hover:bg-white/10'
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
