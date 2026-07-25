import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section, Container } from '@components/ui';

const stats = [
  { value: 1200, suffix: '+', label: 'Students Enrolled' },
  { value: 150, suffix: '+', label: 'Expert Faculty' },
  { value: 40, suffix: '+', label: 'Clubs & Activities' },
  { value: 34, suffix: '', label: 'Years of Excellence' },
];

function AnimatedCounter({ from = 0, to, duration = 2.5 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

function Statistics() {
  return (
    <Section className="relative bg-primary-900 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-400 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter to={stat.value} />
                <span className="text-accent-400">{stat.suffix}</span>
              </div>
              <p className="text-primary-200 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Statistics;
