import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button, Input, Container } from '@components/ui';
import navigationData from '@data/navigation';

function Footer() {
  const currentYear = new Date().getFullYear();

  const admissionsLinks = [
    { to: '/admissions', label: 'Admissions Process' },
    { to: '/admissions', label: 'Fee Structure' },
    { to: '/admissions', label: 'Scholarships' },
    { to: '/admissions', label: 'FAQs' },
  ];

  return (
    <footer className="bg-primary-950 text-surface-300 mt-auto" id="main-footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 lg:py-20">
          
          {/* Brand & Info Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <Link to="/" className="inline-block">
                <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                  Vasant Valley School
                </h3>
              </Link>
              <p className="mt-2 text-sm text-accent-400 font-medium tracking-wide uppercase">
                Nurturing Minds, Shaping Futures
              </p>
            </div>
            
            <p className="text-surface-400 text-sm leading-relaxed max-w-sm">
              A premier international school dedicated to academic excellence, character building, and holistic student development in a diverse community.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-colors duration-[250ms]" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-colors duration-[250ms]" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-colors duration-[250ms]" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-colors duration-[250ms]" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-white mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navigationData.slice(0, 5).map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-surface-400 hover:text-accent-400 transition-colors duration-[150ms] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-700 group-hover:bg-accent-500 transition-colors"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-white mb-6">
              Admissions
            </h4>
            <ul className="flex flex-col gap-3">
              {admissionsLinks.map(({ to, label }, index) => (
                <li key={index}>
                  <Link
                    to={to}
                    className="text-sm text-surface-400 hover:text-accent-400 transition-colors duration-[150ms] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-700 group-hover:bg-accent-500 transition-colors"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-white mb-6">
                Contact Us
              </h4>
              <address className="not-italic flex flex-col gap-4 text-sm text-surface-400">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent-500 shrink-0 mt-0.5" />
                  <p>Sector C, Vasant Kunj<br/>New Delhi, India — 110070</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-accent-500 shrink-0" />
                  <p>+91 11 2689 1612</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-accent-500 shrink-0" />
                  <p>info@vasantvalley.org</p>
                </div>
              </address>
            </div>

            <div className="bg-primary-900/50 p-5 rounded-xl border border-white/5">
              <h5 className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</h5>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1">
                  <Input 
                    id="newsletter-email"
                    type="email"
                    placeholder="Email address"
                    className="bg-primary-950/50 border-primary-800 focus:border-accent-500 h-10 py-1 !text-sm"
                    fullWidth
                    aria-label="Email address for newsletter"
                  />
                </div>
                <Button variant="accent" size="sm" className="h-10 px-4 shrink-0">Subscribe</Button>
              </form>
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-500">
            <p>&copy; {currentYear} Vasant Valley School. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="hover:text-surface-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-surface-300 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-surface-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
