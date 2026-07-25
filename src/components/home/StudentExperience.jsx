import { motion } from 'framer-motion';
import { Flag, HeartHandshake, Globe2 } from 'lucide-react';
import { Section, Container } from '@components/ui';

const experiences = [
  {
    title: 'Leadership Opportunities',
    description: 'Empowering students to take charge through student councils, house captaincies, and organizing major school events to build confidence.',
    icon: <Flag size={32} className="text-accent-500" />,
  },
  {
    title: 'Community Service',
    description: 'Instilling a strong sense of social responsibility through regular outreach programs and partnerships with local NGOs.',
    icon: <HeartHandshake size={32} className="text-secondary-500" />,
  },
  {
    title: 'International Exposure',
    description: 'Fostering a global mindset via student exchange programs, international MUNs, and diverse cultural integration activities.',
    icon: <Globe2 size={32} className="text-blue-500" />,
  },
];

function StudentExperience() {
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
    <Section bg="primary" spacing="lg" className="relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Shaping the <span className="text-accent-400">Complete</span> Student Experience
            </h2>
            <p className="text-primary-200 text-lg leading-relaxed">
              We go beyond academics to ensure our students develop the emotional intelligence, leadership skills, and global awareness needed to succeed anywhere in the world.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary-800/50 backdrop-blur-md border border-primary-700/50 p-8 rounded-2xl hover:bg-primary-800 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary-900 flex items-center justify-center mb-6 shadow-inner">
                  {exp.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{exp.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </Container>
    </Section>
  );
}

export default StudentExperience;
