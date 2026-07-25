import { Link } from 'react-router-dom';
import { Button, Container } from '@components/ui';

/**
 * 404 Not Found Page
 *
 * Displayed when a user navigates to a route
 * that does not exist in the application.
 */
function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] text-center py-section px-4">
      <Container maxWidth="narrow" className="max-w-md">
        <span className="font-heading text-7xl font-bold text-accent-400 leading-none">
          404
        </span>
        <h1 className="text-3xl font-bold text-primary-800 mt-4">
          Page Not Found
        </h1>
        <p className="text-surface-500 mt-3 text-lg">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="mt-8 inline-block">
          <Button variant="primary">← Back to Home</Button>
        </Link>
      </Container>
    </section>
  );
}

export default NotFound;
