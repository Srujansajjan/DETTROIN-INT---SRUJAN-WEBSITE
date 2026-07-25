import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

/**
 * Layout Component
 * 
 * Global shell that wraps every page with a consistent
 * Navbar and Footer. The `children` prop receives the
 * active route's page component.
 */
function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
