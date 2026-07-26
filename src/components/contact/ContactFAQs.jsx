import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const faqs = [
  {
    question: 'How quickly can I expect a response?',
    answer: 'Our administration team aims to respond to all general and admission-related email queries within 24-48 working hours.',
  },
  {
    question: 'Can I meet the Principal or Head of School?',
    answer: 'Meetings with the Principal or Head of School are strictly by prior appointment. Please contact the administration office via phone or email to request a meeting slot.',
  },
  {
    question: 'Is the school office open during summer vacations?',
    answer: 'Yes, the administration and accounts offices remain open during the summer break with reduced working hours, typically from 9:00 AM to 1:00 PM on weekdays.',
  },
  {
    question: 'Who do I contact regarding school transport issues?',
    answer: 'For all queries, changes, or issues related to the school bus routes, please email the transport department directly via the General Enquiry contact or speak to the transport desk during office hours.',
  },
];

function ContactFAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section bg="default" spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="Help Desk"
              title="Common Queries"
              subtitle="Find quick answers to some of the most frequently asked questions regarding contacting the school."
              align="center"
            />
          </motion.div>

          <motion.div
            className="mt-12 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden transition-shadow duration-300 ${
                    isOpen ? 'shadow-lg border-transparent' : 'shadow-sm border border-surface-200 hover:border-accent-200'
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

export default ContactFAQs;
