import { Link } from 'react-router-dom';
import './NotFound.css';

/**
 * 404 Not Found Page
 * 
 * Displayed when a user navigates to a route
 * that does not exist in the application.
 */
function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__message">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="not-found__link">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
