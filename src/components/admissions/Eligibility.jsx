import { motion } from 'framer-motion';
import { Calendar, Baby, GraduationCap } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const eligibilityData = [
  {
    icon: <Baby size={32} className="text-rose-500" />,
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    title: 'Pre-School (Foundation)',
    criteria: 'Child must be 3 to 4 years of age as of 31st March of the year of admission.',
  },
  {
    icon: <Calendar size={32} className="text-blue-500" />,
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    title: 'Pre-Primary',
    criteria: 'Child must be 4 to 5 years of age as of 31st March of the year of admission.',
  },
  {
    icon: <GraduationCap size={32} className="text-purple-500" />,
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    title: 'Class 1 & Above',
    criteria: 'Subject to vacancy. Admission is based on previous academic records and an interactive assessment.',
  },
];

function Eligibility() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
            label="Criteria"
            title="Eligibility Guidelines"
            subtitle="Please ensure your child meets the age criteria set by the Directorate of Education before applying."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {eligibilityData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white p-8 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${item.border}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-surface-600 leading-relaxed flex-grow">
                {item.criteria}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default Eligibility;
