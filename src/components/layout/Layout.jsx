import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 *
 * Global shell that wraps every page with a consistent
 * Navbar and Footer. The `children` prop receives the
 * active route's page component.
 */
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-[var(--height-header)]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
