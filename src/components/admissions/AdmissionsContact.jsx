import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Laptop } from 'lucide-react';
import { Section, Container, Button } from '@components/ui';

function AdmissionsContact() {
  return (
    <Section bg="primary" spacing="lg" className="relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Have Questions? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                We're Here to Help.
              </span>
            </h2>
            <p className="text-primary-200 text-lg mb-10 max-w-md">
              Our admissions team is dedicated to assisting you through every step of the enrollment process. Reach out to us via email or phone.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-300 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-primary-300 text-sm mb-1">Email Us</p>
                  <a href="mailto:admissions@vasantvalley.edu.in" className="text-white font-medium hover:text-accent-300 transition-colors">
                    admissions@vasantvalley.edu.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-300 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-primary-300 text-sm mb-1">Call Us</p>
                  <a href="tel:+911141767940" className="text-white font-medium hover:text-accent-300 transition-colors">
                    +91 11 41767940
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent-300 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-primary-300 text-sm mb-1">Visit Us</p>
                  <p className="text-white font-medium">
                    Sector C, Vasant Kunj, New Delhi 110070
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Apply CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border-t-8 border-accent-500">
              <div className="w-20 h-20 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent-600">
                <Laptop size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-900 mb-4">
                Ready to Apply?
              </h3>
              <p className="text-surface-600 mb-8 leading-relaxed max-w-sm mx-auto">
                Access our online portal to submit your application securely. Ensure you have all necessary documents ready for upload.
              </p>
              
              <Button variant="accent" size="lg" fullWidth className="group text-lg py-4">
                Access Registration Portal
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-surface-400 mt-6 uppercase tracking-wider font-semibold">
                Portal Opens: August 2026
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default AdmissionsContact;
