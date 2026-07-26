import { motion } from 'framer-motion';
import { Star, Target, Users, BookOpen, Heart, Award } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const features = [
  {
    icon: <Star size={24} />,
    title: 'Academic Excellence',
    description: 'Consistently ranked among the top schools, providing a rigorous and internationally recognized curriculum.',
  },
  {
    icon: <Target size={24} />,
    title: 'Holistic Development',
    description: 'We focus on the overall growth of a child, balancing academics, sports, arts, and emotional well-being.',
  },
  {
    icon: <Users size={24} />,
    title: 'Expert Faculty',
    description: 'Learn from highly qualified educators dedicated to innovative, child-centric teaching methodologies.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including smart classrooms, advanced labs, and expansive sports complexes.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Inclusive Environment',
    description: 'A welcoming community that celebrates diversity and provides dedicated support for special education needs.',
  },
  {
    icon: <Award size={24} />,
    title: 'Global Opportunities',
    description: 'Equipping students with the skills and global perspective required for success in higher education and beyond.',
  },
];

function WhyChooseVasantValley() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
            label="Our Strengths"
            title="Why Choose Vasant Valley"
            subtitle="Discover what makes our educational approach unique and why parents trust us with their child's future."
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-surface-200 hover:border-accent-200"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-surface-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default WhyChooseVasantValley;
