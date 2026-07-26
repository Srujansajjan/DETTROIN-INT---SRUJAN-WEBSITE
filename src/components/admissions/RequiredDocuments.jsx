import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const documents = [
  "Self-attested copy of Birth Certificate with child's name.",
  "Proof of Residence (Passport, Aadhaar Card, Voter ID, or Utility Bill in the name of the parent).",
  "Proof of Sibling (Fee bill of the sibling currently studying at Vasant Valley School), if applicable.",
  "Proof of Alumni (Class 12 passing certificate/mark sheet), if applicable.",
  "Passport size photographs of the child and both parents.",
  "Medical fitness certificate from a registered medical practitioner.",
];

function RequiredDocuments() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
            label="Checklist"
            title="Required Documents"
            subtitle="Please ensure you have self-attested copies of the following documents ready before starting the online application."
            align="left"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 bg-surface-50 border border-surface-200 rounded-2xl hover:bg-white hover:border-accent-300 hover:shadow-md transition-all duration-300 group"
            >
              <CheckCircle2 size={24} className="text-accent-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-surface-600 leading-relaxed group-hover:text-primary-900 transition-colors">
                {doc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default RequiredDocuments;
