import { motion } from 'framer-motion';
import { GraduationCap, Building, HelpCircle, ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const departments = [
  {
    icon: <GraduationCap size={32} />,
    title: 'Admissions Office',
    description: 'For queries related to the admission process, age criteria, and document requirements.',
    email: 'admissions@vasantvalley.edu.in',
    phone: '+91 11 4176 7940',
    color: 'accent',
  },
  {
    icon: <Building size={32} />,
    title: 'Administration',
    description: 'For official correspondence, vendor inquiries, and general school administration.',
    email: 'admin@vasantvalley.edu.in',
    phone: '011-26892787',
    color: 'blue',
  },
  {
    icon: <HelpCircle size={32} />,
    title: 'General Enquiry',
    description: 'For all other questions regarding school policies, transport, and events.',
    email: 'info@vasantvalley.edu.in',
    phone: '011-26896547',
    color: 'emerald',
  },
];

const colorMap = {
  accent: 'bg-accent-50 text-accent-600 group-hover:bg-accent-500',
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-500',
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500',
};

function QuickContactCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
            label="Departments"
            title="Direct Contacts"
            subtitle="Reach out directly to the specific department to ensure a faster response to your queries."
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
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-surface-200 flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:text-white ${colorMap[dept.color]}`}>
                {dept.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                {dept.title}
              </h3>
              <p className="text-surface-600 leading-relaxed mb-6 flex-grow">
                {dept.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-surface-100">
                <a 
                  href={`mailto:${dept.email}`}
                  className="flex items-center text-primary-900 font-semibold hover:text-accent-600 transition-colors group/link"
                >
                  Email Us
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default QuickContactCards;
