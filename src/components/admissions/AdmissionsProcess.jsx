import { motion } from 'framer-motion';
import { Send, FileText, Users, CheckCircle } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const steps = [
  {
    icon: <Send size={32} />,
    title: 'Submit Enquiry',
    description: 'Reach out to us online or visit the campus to express your interest and receive the admissions brochure.',
  },
  {
    icon: <FileText size={32} />,
    title: 'Application Form',
    description: 'Complete the detailed online application form and upload all the necessary supporting documents.',
  },
  {
    icon: <Users size={32} />,
    title: 'Interaction / Assessment',
    description: 'Depending on the grade, the child and parents will be invited for an interaction or a basic assessment.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Admission Confirmation',
    description: 'Upon successful review, an admission offer is made. Secure the seat by completing the fee payment.',
  },
];

function AdmissionsProcess() {
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
            label="The Journey"
            title="Admission Process"
            subtitle="A streamlined, 4-step process to help you join the Vasant Valley School community."
            align="center"
          />
        </motion.div>

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-surface-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-8 -translate-y-2 w-8 h-8 rounded-full bg-accent-500 text-white font-bold flex items-center justify-center border-4 border-white shadow-sm z-20">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-surface-100 flex items-center justify-center text-primary-700 mb-6 relative z-10 group-hover:border-accent-200 group-hover:text-accent-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>

                <h3 className="font-heading text-xl font-bold text-primary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-surface-600 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AdmissionsProcess;
