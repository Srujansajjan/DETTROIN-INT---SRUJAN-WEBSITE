import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

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
 * Placeholder navigation bar. Will be enhanced with
 * responsive hamburger menu, dropdowns, and branding.
 */
function Navbar() {
  return (
    <header className="navbar" id="main-navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo-text">Vasant Valley School</span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__list">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path} className="navbar__item">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                  end={path === '/'}
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
