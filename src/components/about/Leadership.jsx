import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section, Container } from '@components/ui';

function Leadership() {
  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop"
                  alt="School Principal"
                  className="w-full h-[400px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent-100 rounded-2xl -z-10 hidden lg:block" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <Quote size={48} className="text-accent-200 mb-6" fill="currentColor" />

              <blockquote className="text-xl md:text-2xl text-surface-700 leading-relaxed italic font-light mb-8">
                &ldquo;At Vasant Valley, we believe that every child has the potential to do extraordinary things. Our role is to provide the environment, the encouragement, and the opportunities that allow each student to discover their unique strengths and pursue their passions with confidence and purpose.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-accent-500 rounded-full" />
                <div>
                  <p className="font-heading font-bold text-primary-900 text-lg">Dr. Rekha Sharma</p>
                  <p className="text-surface-500">Principal, Vasant Valley School</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default Leadership;
