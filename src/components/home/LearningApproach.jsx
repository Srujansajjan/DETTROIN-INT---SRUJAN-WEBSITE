import { motion } from 'framer-motion';
import { Search, Cpu, Palette, Trophy } from 'lucide-react';
import { Section, Container } from '@components/ui';

const approaches = [
  {
    title: 'Inquiry Based Learning',
    description: 'Encouraging students to ask questions, investigate, and construct their own understanding of the world.',
    icon: <Search size={24} className="text-white" />,
    color: 'bg-blue-500',
  },
  {
    title: 'STEM Education',
    description: 'Integrating science, technology, engineering, and mathematics to develop critical problem-solving skills.',
    icon: <Cpu size={24} className="text-white" />,
    color: 'bg-emerald-500',
  },
  {
    title: 'Arts & Creativity',
    description: 'Fostering self-expression and creative thinking through visual arts, music, and performing arts programs.',
    icon: <Palette size={24} className="text-white" />,
    color: 'bg-purple-500',
  },
  {
    title: 'Sports Excellence',
    description: 'Promoting physical fitness, teamwork, and resilience through comprehensive athletic programs and facilities.',
    icon: <Trophy size={24} className="text-white" />,
    color: 'bg-accent-500',
  },
];

function LearningApproach() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Section bg="muted" className="border-t border-surface-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-3 block">
              Our Methodology
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
              A Modern Approach to <span className="text-accent-500">Learning</span>
            </h2>
            <p className="text-surface-600 text-lg leading-relaxed mb-8">
              We believe that education should be dynamic, engaging, and relevant to the real world. Our multifaceted approach ensures that every student can discover their passions and reach their full potential.
            </p>
          </motion.div>

          {/* Right Side: Grid of Approaches */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-sm border border-surface-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${approach.color} flex items-center justify-center mb-4 shadow-sm`}>
                  {approach.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-2">
                  {approach.title}
                </h3>
                <p className="text-surface-600 text-sm leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default LearningApproach;
