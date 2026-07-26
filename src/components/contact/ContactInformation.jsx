import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Section, Container } from '@components/ui';

const contactDetails = [
  {
    icon: <MapPin size={28} />,
    title: 'Visit Us',
    details: ['Sector C, Vasant Kunj', 'New Delhi - 110070, India'],
    delay: 0,
  },
  {
    icon: <Phone size={28} />,
    title: 'Call Us',
    details: ['+91 11 4176 7940', '011-26892787, 011-26896547'],
    delay: 0.1,
  },
  {
    icon: <Mail size={28} />,
    title: 'Email Us',
    details: ['info@vasantvalley.edu.in', 'admissions@vasantvalley.edu.in'],
    delay: 0.2,
  },
  {
    icon: <Clock size={28} />,
    title: 'Office Hours',
    details: ['Monday - Friday: 8:00 AM - 3:00 PM', 'Saturday & Sunday: Closed'],
    delay: 0.3,
  },
];

function ContactInformation() {
  return (
    <Section bg="default" spacing="lg" className="-mt-12 lg:-mt-24 relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="bg-white rounded-2xl shadow-xl shadow-primary-900/5 p-8 border border-surface-200 hover:-translate-y-2 transition-transform duration-300 group text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-4">
                {item.title}
              </h3>
              <div className="space-y-1 text-surface-600 flex-grow">
                {item.details.map((detail, idx) => (
                  <p key={idx} className={idx === 0 ? 'font-medium text-primary-800' : 'text-sm'}>
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ContactInformation;
