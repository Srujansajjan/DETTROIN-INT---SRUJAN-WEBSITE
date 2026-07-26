import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '@components/ui';

function MapSection() {
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
            label="Location"
            title="Find Us on the Map"
            subtitle="Our campus is located in the heart of South Delhi, easily accessible via major routes."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-surface-200 h-[400px] md:h-[500px] relative bg-surface-100"
        >
          {/* We use a standard iframe embed for Google Maps targeting Vasant Valley School */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2891392652156!2d77.15091761508027!3d28.53099958245842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dfa83d72111%3A0xc32c25603c73efb8!2sVasant%20Valley%20School!5e0!3m2!1sen!2sin!4v1689254012345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vasant Valley School Location"
            className="absolute inset-0"
          ></iframe>
        </motion.div>
      </Container>
    </Section>
  );
}

export default MapSection;
