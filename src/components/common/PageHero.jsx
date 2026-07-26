import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from '@components/ui';

/**
 * PageHero — Reusable hero banner for inner pages.
 *
 * @param {string} title - Page title
 * @param {string} subtitle - Supporting text
 * @param {string} image - Background image URL
 * @param {Array<{label: string, path?: string}>} breadcrumbs
 */
function PageHero({ title, subtitle, image, breadcrumbs = [] }) {
  return (
    <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-end overflow-hidden bg-primary-950">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/70 to-primary-900/30" />
      </div>

      <Container className="relative z-10 pb-12 md:pb-16 pt-32">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ol className="flex items-center gap-1.5 text-sm text-primary-200">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  {index > 0 && <ChevronRight size={14} className="text-primary-400" />}
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-accent-300 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-accent-300 font-medium">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-primary-200 text-lg md:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}

export default PageHero;
