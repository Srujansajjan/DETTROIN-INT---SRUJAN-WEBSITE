import { motion } from 'framer-motion';
import { Monitor, Trophy, Palette, Lightbulb, BookOpen } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const highlights = [
  {
    title: 'Smart Classrooms',
    description: 'Interactive displays, collaborative workspaces, and digital learning tools in every classroom.',
    icon: <Monitor size={28} />,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop',
  },
  {
    title: 'Sports Facilities',
    description: 'Olympic-standard swimming pool, multi-sport courts, athletics track, and a fully equipped gymnasium.',
    icon: <Trophy size={28} />,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Arts & Performance',
    description: 'Dedicated art studios, a 500-seat auditorium, music rooms, and a state-of-the-art recording studio.',
    icon: <Palette size={28} />,
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop',
  },
  {
    title: 'Innovation Labs',
    description: 'Robotics, AI, 3D printing, and maker spaces designed to inspire the next generation of innovators.',
    icon: <Lightbulb size={28} />,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Library & Media Centre',
    description: 'Over 25,000 volumes, digital archives, research databases, and collaborative study zones.',
    icon: <BookOpen size={28} />,
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1430&auto=format&fit=crop',
  },
];

function CampusHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Our Facilities"
            title="Campus Highlights"
            subtitle="World-class infrastructure designed to support every dimension of a student's growth and learning."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-surface-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default CampusHighlights;
