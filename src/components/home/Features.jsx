import { motion } from 'framer-motion';
import { BookOpen, Compass, Lightbulb, Shield, Globe, Users } from 'lucide-react';
import { Section, Container, SectionHeading, Card } from '@components/ui';

const features = [
  {
    icon: <BookOpen size={28} className="text-accent-500" />,
    title: 'Academic Excellence',
    description: 'A rigorous curriculum designed to challenge students and foster a lifelong love for learning.',
  },
  {
    icon: <Users size={28} className="text-secondary-500" />,
    title: 'Holistic Development',
    description: 'Focusing on intellectual, physical, emotional, and social growth through diverse programs.',
  },
  {
    icon: <Compass size={28} className="text-primary-500" />,
    title: 'Experienced Faculty',
    description: 'Passionate educators dedicated to mentoring students and guiding them to success.',
  },
  {
    icon: <Globe size={28} className="text-blue-500" />,
    title: 'Global Learning',
    description: 'International exposure preparing students to thrive in a highly connected, diverse world.',
  },
  {
    icon: <Lightbulb size={28} className="text-yellow-500" />,
    title: 'Innovation',
    description: 'State-of-the-art facilities equipped with modern technology to drive creative problem-solving.',
  },
  {
    icon: <Shield size={28} className="text-emerald-500" />,
    title: 'Safe Campus',
    description: 'A secure, nurturing environment where every student feels valued, respected, and protected.',
  },
];

function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
            label="Why Choose Us"
            title="The Vasant Valley Advantage"
            subtitle="We provide an educational experience that goes beyond textbooks, focusing on building character, nurturing talent, and developing leaders of tomorrow."
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
            <motion.div key={index} variants={itemVariants}>
              <Card
                variant="elevated"
                className="h-full hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-surface-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <Card.Title className="mb-3">{feature.title}</Card.Title>
                <Card.Description className="text-surface-500 leading-relaxed">
                  {feature.description}
                </Card.Description>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default Features;
