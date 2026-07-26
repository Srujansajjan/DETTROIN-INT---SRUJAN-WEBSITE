import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { Section, Container } from '@components/ui';

const items = [
  {
    icon: <Eye size={28} className="text-white" />,
    title: 'Our Vision',
    color: 'from-primary-700 to-primary-900',
    text: 'To be a leading centre of learning that inspires students to be compassionate, innovative, and responsible global citizens who contribute meaningfully to society.',
  },
  {
    icon: <Target size={28} className="text-white" />,
    title: 'Our Mission',
    color: 'from-accent-500 to-accent-700',
    text: 'To provide a holistic, student-centred education that nurtures intellectual rigour, creative thinking, ethical values, and physical well-being in a safe and inclusive environment.',
  },
];

function VisionMission() {
  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} p-10 md:p-12 text-white shadow-elevated hover:shadow-xl transition-shadow duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-white/85 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default VisionMission;
