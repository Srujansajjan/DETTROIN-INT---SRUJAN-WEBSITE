import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Users } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const criteria = [
  {
    icon: <MapPin size={28} className="text-blue-500" />,
    title: 'Neighbourhood Distance',
    points: 'Up to 40 Points',
    bg: 'bg-blue-50',
    description: 'Points are allocated based on the aerial distance from the school. Closer proximities receive higher point allocations to encourage community schooling.',
  },
  {
    icon: <Users size={28} className="text-emerald-500" />,
    title: 'Sibling Status',
    points: '30 Points',
    bg: 'bg-emerald-50',
    description: 'Applicants who currently have a real brother or sister studying at Vasant Valley School receive additional points to support family cohesion.',
  },
  {
    icon: <GraduationCap size={28} className="text-purple-500" />,
    title: 'Alumni Status',
    points: '20 Points',
    bg: 'bg-purple-50',
    description: 'Children of Vasant Valley School alumni are awarded points, recognizing our commitment to our extended school family and legacy.',
  },
];

function AdmissionsCriteria() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            label="Evaluation"
            title="Point-Based Criteria"
            subtitle="Admission to open seats is determined by a transparent, point-based system approved by the Directorate of Education."
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
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm border border-surface-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="bg-surface-100 text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {item.points}
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-surface-600 leading-relaxed flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default AdmissionsCriteria;
