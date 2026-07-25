import { motion } from 'framer-motion';
import { ShieldCheck, Search, Crown, Palette, HeartHandshake, CheckSquare } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const values = [
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Integrity', color: 'text-blue-500' },
  { icon: <Search size={32} strokeWidth={1.5} />, title: 'Curiosity', color: 'text-amber-500' },
  { icon: <Crown size={32} strokeWidth={1.5} />, title: 'Leadership', color: 'text-purple-500' },
  { icon: <Palette size={32} strokeWidth={1.5} />, title: 'Creativity', color: 'text-pink-500' },
  { icon: <HeartHandshake size={32} strokeWidth={1.5} />, title: 'Respect', color: 'text-emerald-500' },
  { icon: <CheckSquare size={32} strokeWidth={1.5} />, title: 'Responsibility', color: 'text-rose-500' },
];

function CoreValues() {
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
            label="Our Philosophy"
            title="Core Values"
            subtitle="The foundational principles that guide our students, faculty, and community every single day."
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-sm border border-surface-200 hover:shadow-md hover:border-accent-200 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`mb-4 transition-transform duration-300 group-hover:-translate-y-1 ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary-900">
                {value.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CoreValues;
