import { motion } from 'framer-motion';
import { Briefcase, Heart, Repeat, BrainCircuit } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const methods = [
  {
    icon: <Heart size={32} className="text-rose-500" />,
    title: 'Inclusive Education',
    description: 'We celebrate neurodiversity. Our Special Education Needs (SEN) department ensures every child succeeds through Individual Education Plans (IEPs) and integrated therapies.',
  },
  {
    icon: <Briefcase size={32} className="text-blue-500" />,
    title: 'Portfolio Boxes',
    description: 'From Foundation to Class 12, each student maintains a Portfolio Box tracking their assignments, artwork, and developmental progress to showcase their unique journey.',
  },
  {
    icon: <Repeat size={32} className="text-emerald-500" />,
    title: 'Learning Cycles',
    description: 'Our academic year is uniquely structured into focused learning cycles, allowing for deep dives into subjects, continuous assessment, and meaningful feedback.',
  },
  {
    icon: <BrainCircuit size={32} className="text-amber-500" />,
    title: 'Centre for Excellence (CEE)',
    description: 'Our dedicated teacher-training wing ensures that our faculty is continually updated with the latest in child-centered pedagogy and educational research.',
  },
];

function TeachingMethodology() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
            label="How We Teach"
            title="Pedagogy & Methodology"
            subtitle="Innovative, child-centric approaches designed to maximize potential and foster genuine understanding."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {methods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 p-8 bg-surface-50 rounded-2xl border border-surface-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-surface-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-accent-200 transition-transform duration-300">
                {method.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-surface-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default TeachingMethodology;
