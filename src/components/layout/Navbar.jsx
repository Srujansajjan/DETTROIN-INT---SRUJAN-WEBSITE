import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@utils/helpers';
import navigationData from '@data/navigation';
import { Container, Button } from '@components/ui';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-[300ms] ease-smooth',
          isScrolled
            ? 'bg-primary-900 shadow-md py-3'
            : 'bg-primary-900/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none py-5'
        )}
        id="main-navbar"
      >
        <Container maxWidth="wide">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2 group z-50">
              <span className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-accent-300 transition-colors duration-[250ms]">
                Vasant Valley School
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden lg:block">
              <ul className="flex items-center gap-1 xl:gap-2">
                {navigationData.map(({ path, label }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      end={path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'inline-block px-3 xl:px-4 py-2 text-sm font-medium rounded-button transition-all duration-[200ms] ease-smooth',
                          isActive
                            ? 'text-accent-400 bg-white/5'
                            : 'text-primary-100 hover:text-white hover:bg-white/10'
                        )
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white p-2 z-50 rounded-button hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-accent-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-primary-950/95 backdrop-blur-lg transition-transform duration-[300ms] ease-smooth lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full justify-center px-8 pt-20 pb-10 overflow-y-auto">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4 text-center">
              {navigationData.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block text-2xl font-heading font-medium transition-colors duration-[200ms]',
                        isActive ? 'text-accent-400' : 'text-white hover:text-accent-300'
                      )
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-12 flex flex-col gap-4">
            <Button variant="accent" fullWidth>Apply Now</Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white" fullWidth>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
