import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@components/ui';

function AdmissionsCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] rounded-full bg-secondary-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-accent-300 text-xs font-semibold uppercase tracking-[0.15em] mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              Admissions Open 2026–27
            </span>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Begin Your Child&rsquo;s <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                Journey of Excellence
              </span>
            </h2>

            <p className="text-primary-200 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Join a vibrant community of learners where every student is empowered to discover their potential, pursue their passions, and make a difference in the world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/admissions">
                <Button variant="accent" size="lg" className="group text-base px-10">
                  Apply Now
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-10 transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default AdmissionsCTA;
