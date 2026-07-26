import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, Container, SectionHeading, Button } from '@components/ui';

const newsItems = [
  {
    title: 'Annual Science Fair 2026',
    description: 'Students showcased groundbreaking projects ranging from renewable energy models to AI-powered assistants at this year\'s science fair.',
    date: 'Aug 15, 2026',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=1374&auto=format&fit=crop',
  },
  {
    title: 'VVS Wins National Debate Championship',
    description: 'Our senior debate team secured first place at the National Inter-School Debate Championship held in Mumbai.',
    date: 'Jul 28, 2026',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'New STEM Innovation Lab Inaugurated',
    description: 'A state-of-the-art STEM lab equipped with robotics kits, 3D printers, and collaborative workspaces was inaugurated on campus.',
    date: 'Jul 10, 2026',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'International Exchange Programme Launch',
    description: 'Vasant Valley partners with schools in London and Singapore for a new student exchange initiative starting this academic year.',
    date: 'Jun 22, 2026',
    category: 'Global',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop',
  },
];

const categoryColors = {
  Events: 'bg-accent-500 text-white',
  Achievement: 'bg-emerald-500 text-white',
  Campus: 'bg-blue-500 text-white',
  Global: 'bg-purple-500 text-white',
};

function NewsEvents() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <Section bg="default" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Stay Updated"
            title="Latest News & Events"
            subtitle="Stay connected with the latest happenings, achievements, and upcoming events at Vasant Valley School."
            align="center"
          />
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-surface-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Category Badge */}
                <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-surface-400 text-sm mb-3">
                  <CalendarDays size={14} />
                  <time>{item.date}</time>
                </div>

                <h3 className="font-heading text-lg font-bold text-primary-900 mb-2 leading-snug group-hover:text-accent-600 transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-surface-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {item.description}
                </p>

                <button className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-accent-500 transition-colors group/btn">
                  Read More
                  <ArrowRight size={14} className="ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/news">
            <Button variant="outline" size="lg" className="group text-base px-8">
              View All News & Events
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}

export default NewsEvents;
