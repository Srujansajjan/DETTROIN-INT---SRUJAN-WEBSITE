import { motion } from 'framer-motion';
import { Baby, Palette, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const programs = [
  {
    icon: <Baby size={32} />,
    title: 'Early Years',
    grade: 'Foundation – Class 2',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    hover: 'group-hover:bg-rose-500',
    description: 'A play-based approach that sparks curiosity, builds social skills, and establishes a strong foundation in literacy and numeracy.',
  },
  {
    icon: <Palette size={32} />,
    title: 'Primary School',
    grade: 'Class 3 – Class 5',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    hover: 'group-hover:bg-amber-500',
    description: 'Fostering independent thinking through project-based learning, inquiry, and a broad exploration of multiple disciplines.',
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Middle School',
    grade: 'Class 6 – Class 8',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hover: 'group-hover:bg-blue-500',
    description: 'Strengthening academic rigor while encouraging critical thinking, emotional intelligence, and collaborative problem-solving.',
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Senior School',
    grade: 'Class 9 – Class 12',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    hover: 'group-hover:bg-purple-500',
    description: 'Preparation for university and beyond. Offering the rigorous Cambridge International AS & A Level curriculum tailored to student passions.',
  },
];

function AcademicPrograms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
            label="Stages of Learning"
            title="Academic Programs"
            subtitle="A continuous journey of intellectual discovery tailored to the developmental needs of every age group."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full ${program.border}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${program.bg} ${program.color} flex items-center justify-center mb-6 transition-colors duration-300 ${program.hover} group-hover:text-white`}>
                {program.icon}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-1">
                {program.title}
              </h3>
              <p className="text-sm font-semibold text-accent-500 mb-4 uppercase tracking-wider">
                {program.grade}
              </p>
              
              <p className="text-surface-600 leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>
              
              {/* CTA */}
              <button className="flex items-center gap-2 text-primary-700 font-semibold group/btn mt-auto self-start hover:text-accent-600 transition-colors">
                Learn More
                <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default AcademicPrograms;
