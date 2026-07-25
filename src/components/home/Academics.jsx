import { motion } from 'framer-motion';
import { Baby, BookOpen, Microscope, GraduationCap, ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeading, Card, Button } from '@components/ui';

const academicLevels = [
  {
    title: 'Early Years',
    description: 'A nurturing environment where our youngest learners begin their journey of discovery through play and structured activities.',
    icon: <Baby size={32} className="text-accent-500" />,
    color: 'bg-accent-500/10',
  },
  {
    title: 'Primary School',
    description: 'Building a strong foundation in core subjects while encouraging curiosity, creativity, and critical thinking skills.',
    icon: <BookOpen size={32} className="text-blue-500" />,
    color: 'bg-blue-500/10',
  },
  {
    title: 'Middle School',
    description: 'Fostering independence and deeper understanding as students transition into more specialized subject areas.',
    icon: <Microscope size={32} className="text-emerald-500" />,
    color: 'bg-emerald-500/10',
  },
  {
    title: 'Senior School',
    description: 'Preparing students for higher education and beyond with rigorous academics and advanced leadership opportunities.',
    icon: <GraduationCap size={32} className="text-purple-500" />,
    color: 'bg-purple-500/10',
  },
];

function Academics() {
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
    <Section bg="default" spacing="lg" className="relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary-50/50 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Educational Journey"
            title="Academic Excellence"
            subtitle="Our comprehensive curriculum is designed to challenge students at every stage of their development, from their first days of school to graduation."
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
          {academicLevels.map((level, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                variant="elevated"
                className="h-full flex flex-col hover:-translate-y-2 transition-all duration-300 group border-t-4 border-transparent hover:border-accent-400"
              >
                <div className={`w-16 h-16 rounded-2xl ${level.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {level.icon}
                </div>
                <Card.Title className="text-xl mb-3">{level.title}</Card.Title>
                <Card.Description className="text-surface-600 flex-grow mb-6 leading-relaxed">
                  {level.description}
                </Card.Description>
                <div className="mt-auto pt-4 border-t border-surface-100">
                  <Button variant="ghost" className="p-0 h-auto text-primary-600 hover:text-accent-500 hover:bg-transparent group/btn">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default Academics;
