import { motion } from 'framer-motion';
import { Leaf, Building2, Cpu, Trophy } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const highlights = [
  {
    icon: <Leaf size={32} />,
    title: 'Green Campus',
    description: 'A lush, eco-friendly 10-acre campus providing a serene and healthy environment conducive to focused learning.',
  },
  {
    icon: <Building2 size={32} />,
    title: 'Modern Infrastructure',
    description: 'Architecturally designed academic blocks with climate-controlled, ergonomically furnished smart classrooms.',
  },
  {
    icon: <Cpu size={32} />,
    title: 'Innovation Labs',
    description: 'Dedicated spaces for Robotics, AI, and Science, equipped with industry-standard tools to foster experimentation.',
  },
  {
    icon: <Trophy size={32} />,
    title: 'Sports Facilities',
    description: 'Comprehensive sporting infrastructure including synthetic tracks, basketball courts, and an all-weather swimming pool.',
  },
];

function CampusHighlights() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <Section bg="primary" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Infrastructure"
            title="Campus Highlights"
            subtitle="Explore the facilities that make Vasant Valley School a premier institution for holistic development."
            align="center"
            className="text-white"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-900/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-800 hover:bg-primary-800 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-accent-400 flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                {highlight.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-primary-200 leading-relaxed text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default CampusHighlights;
