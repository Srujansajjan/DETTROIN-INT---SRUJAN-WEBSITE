import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const guidelines = [
  {
    title: 'Document Verification',
    content: 'All admissions are strictly subject to the verification of the submitted documents. Parents must produce original documents when called for the interactive session.',
  },
  {
    title: 'False Information',
    content: 'The school reserves the absolute right to cancel the admission of any candidate if any information provided in the application form is found to be false, misleading, or incorrect at any stage.',
  },
  {
    title: 'Application Record',
    content: 'All applications submitted online are kept on record for a period of three months. If you do not hear from us within this timeframe, please consider the application unsuccessful for the current cycle.',
  },
  {
    title: 'Age Criteria',
    content: 'Age criteria for Foundation and other classes are strictly adhered to as per the guidelines laid down by the Directorate of Education, Delhi.',
  },
];

function AdmissionsGuidelines() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section bg="default" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Header Content */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Important Policies"
              title="Admission Guidelines"
              subtitle="Please read through our strict policies and guidelines carefully before proceeding with your application."
              align="left"
            />
            
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle size={24} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm leading-relaxed">
                Submission of an application does not guarantee admission. Seats are limited and subject to availability and our point-based criteria.
              </p>
            </div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              {guidelines.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? 'border-accent-400 bg-white shadow-md' : 'border-surface-200 bg-surface-50 hover:bg-white'
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-inset rounded-2xl"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className={`font-heading font-bold text-lg ${isOpen ? 'text-accent-600' : 'text-primary-900'}`}>
                        {item.title}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-surface-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-500' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 text-surface-600 leading-relaxed">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default AdmissionsGuidelines;
