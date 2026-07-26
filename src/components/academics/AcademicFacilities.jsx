import { motion } from 'framer-motion';
import { Microscope, Library, MonitorPlay, Code, Trophy } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const facilities = [
  {
    icon: <Microscope size={28} />,
    title: 'Advanced Science Labs',
    description: 'Specialized laboratories for Physics, Chemistry, and Biology equipped with university-grade safety standards and apparatus.',
  },
  {
    icon: <Library size={28} />,
    title: 'Extensive Library',
    description: 'A quiet haven for research and reading with over 30,000 physical volumes and access to global digital academic databases.',
  },
  {
    icon: <MonitorPlay size={28} />,
    title: 'Smart Classrooms',
    description: 'Interactive flat panels, high-speed Wi-Fi, and flexible seating arrangements designed to facilitate collaborative learning.',
  },
  {
    icon: <Code size={28} />,
    title: 'Tech & AI Hub',
    description: 'Dedicated spaces for coding, robotics, and artificial intelligence featuring the latest hardware and software ecosystems.',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Sports Complex',
    description: 'World-class sporting infrastructure integrating physical well-being seamlessly into the academic timetable.',
  },
];

function AcademicFacilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
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
            label="Infrastructure"
            title="Facilities Supporting Learning"
            subtitle="Spaces purposefully designed to encourage exploration, research, and collaborative problem solving."
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
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-surface-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group ${
                index >= 3 ? 'lg:col-span-1.5' : '' // A bit of varied sizing if needed, though grid is uniform here
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                {facility.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                {facility.title}
              </h3>
              <p className="text-surface-600 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default AcademicFacilities;
