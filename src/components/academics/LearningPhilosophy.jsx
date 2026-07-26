import { motion } from 'framer-motion';
import { Section, Container } from '@components/ui';

function LearningPhilosophy() {
  return (
    <Section bg="default" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-3 block">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
              Bridging <span className="text-accent-500">Rationality</span> and Imagination
            </h2>
            <div className="space-y-4 text-surface-600 text-lg leading-relaxed">
              <p>
                At Vasant Valley School, we believe that education is not merely about the acquisition of facts, but the awakening of curiosity. Our curriculum is thoughtfully designed to foster a seamless connection between logical reasoning and creative expression.
              </p>
              <p>
                We recognize that true learning is multi-disciplinary. By integrating the Arts and Sports into our core academic framework, we ensure that every student receives a balanced education that nurtures the mind, body, and spirit.
              </p>
              <p>
                Our inclusive classrooms celebrate neurodiversity. Through individualized education plans (IEPs) and dedicated support staff, we ensure that every child is provided with the precise environment and resources they need to thrive.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop"
                alt="Students engaged in creative learning"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            {/* Accent Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-100 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary-100 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default LearningPhilosophy;
