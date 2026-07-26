import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { Section, Container, Button } from '@components/ui';

function AdmissionsCTA() {
  return (
    <Section bg="primary" spacing="lg" className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <Container className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Take the First Step Towards <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
              a Brilliant Future
            </span>
          </h2>
          <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Our admissions portal is currently open for the upcoming academic session. We invite you to begin the application process or schedule a campus visit to experience our environment firsthand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button variant="accent" size="lg" className="w-full sm:w-auto group">
              Apply Now
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-primary-300 hover:bg-primary-800 hover:text-white group">
              <Calendar size={18} className="mr-2 group-hover:-translate-y-0.5 transition-transform" />
              Schedule a Visit
            </Button>

            <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-primary-300 hover:bg-primary-800 hover:text-white group">
              <Phone size={18} className="mr-2 group-hover:-rotate-12 transition-transform" />
              Contact Admissions
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default AdmissionsCTA;
