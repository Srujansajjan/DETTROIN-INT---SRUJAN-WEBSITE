import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const faqs = [
  {
    question: 'When do the admissions for Foundation (Pre-School) begin?',
    answer: 'Admissions for Foundation typically begin in the month of August/September as per the guidelines issued by the Directorate of Education, Delhi. Please keep an eye on our website announcements for exact dates.',
  },
  {
    question: 'Is the admission process completely online?',
    answer: 'Yes, the initial registration and document submission are completely online. However, shortlisted candidates will be required to visit the school for document verification and an interactive session.',
  },
  {
    question: 'What is the point system for open seats?',
    answer: 'The point system allocates points based on factors like Neighbourhood Distance (up to 40 pts), Sibling studying in the school (30 pts), and Alumni status (20 pts). This ensures a fair and transparent allocation process.',
  },
  {
    question: 'Are there any provisions for EWS/DG category students?',
    answer: 'Yes, 25% of the seats at the entry-level are reserved for students belonging to the Economically Weaker Section (EWS) and Disadvantaged Group (DG) as mandated by the RTE Act.',
  },
  {
    question: 'Can we schedule a campus tour before applying?',
    answer: 'Yes, we encourage prospective parents to visit our campus. You can schedule a visit through our Admissions Office on designated working days.',
  },
];

function AdmissionsFAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Support"
              title="Frequently Asked Questions"
              subtitle="Find answers to common queries regarding the admissions process, timelines, and criteria."
              align="left"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-7 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-shadow duration-300 ${
                    isOpen ? 'shadow-lg border-transparent' : 'shadow-sm border border-surface-200'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className={`font-heading font-bold text-lg pr-4 ${isOpen ? 'text-accent-600' : 'text-primary-900'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-accent-50 text-accent-600' : 'bg-surface-100 text-surface-500'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 text-surface-600 leading-relaxed border-t border-surface-100 mx-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default AdmissionsFAQs;
