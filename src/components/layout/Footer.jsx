import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer Component
 * 
 * Placeholder footer with school info and quick links.
 * Will be expanded with address, social links, newsletter, etc.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <h3 className="footer__title">Vasant Valley School</h3>
          <p className="footer__tagline">Nurturing Minds, Shaping Futures</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__nav-heading">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/about" className="footer__link">About</Link></li>
            <li><Link to="/academics" className="footer__link">Academics</Link></li>
            <li><Link to="/admissions" className="footer__link">Admissions</Link></li>
            <li><Link to="/contact" className="footer__link">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h4 className="footer__nav-heading">Contact</h4>
          <address className="footer__address">
            <p>Vasant Kunj, New Delhi</p>
            <p>India — 110070</p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            &copy; {currentYear} Vasant Valley School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
