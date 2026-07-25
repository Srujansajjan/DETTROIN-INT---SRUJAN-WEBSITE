import { Link } from 'react-router-dom';

/**
 * Footer Component
 *
 * Site-wide footer with school branding, quick links,
 * contact info, and copyright.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-surface-300 mt-auto" id="main-footer">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold text-white">
            Vasant Valley School
          </h3>
          <p className="mt-2 text-sm text-surface-400">
            Nurturing Minds, Shaping Futures
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-400 mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {[
              { to: '/about', label: 'About' },
              { to: '/academics', label: 'Academics' },
              { to: '/admissions', label: 'Admissions' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-surface-300 hover:text-white transition-colors duration-[150ms]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-400 mb-4">
            Contact
          </h4>
          <address className="not-italic text-sm leading-7 text-surface-300">
            <p>Vasant Kunj, New Delhi</p>
            <p>India — 110070</p>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-surface-500 text-center">
            &copy; {currentYear} Vasant Valley School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
