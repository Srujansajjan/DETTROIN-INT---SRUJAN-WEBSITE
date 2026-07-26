import { motion } from 'framer-motion';
import { ShieldCheck, Search, Crown, Palette, HeartHandshake, CheckSquare } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const values = [
  { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Integrity', description: 'Acting with honesty and strong moral principles in all we do.', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: <Search size={32} strokeWidth={1.5} />, title: 'Curiosity', description: 'Cultivating a lifelong passion for inquiry and discovery.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: <Crown size={32} strokeWidth={1.5} />, title: 'Leadership', description: 'Empowering students to lead with empathy and confidence.', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: <Palette size={32} strokeWidth={1.5} />, title: 'Creativity', description: 'Encouraging original thinking and artistic expression.', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: <HeartHandshake size={32} strokeWidth={1.5} />, title: 'Respect', description: 'Valuing every individual and embracing diverse perspectives.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: <CheckSquare size={32} strokeWidth={1.5} />, title: 'Responsibility', description: 'Taking ownership of our actions and their impact on the world.', color: 'text-rose-500', bg: 'bg-rose-50' },
];

function AboutCoreValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
            label="What We Stand For"
            title="Our Core Values"
            subtitle="These guiding principles shape every interaction, decision, and experience within our community."
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm border border-surface-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-6 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">
                {value.title}
              </h3>
              <p className="text-surface-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default AboutCoreValues;
