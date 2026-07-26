import { motion } from 'framer-motion';
import { Section, Container } from '@components/ui';

function SchoolStory() {
  return (
    <Section bg="default" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop"
                alt="Students collaborating in a sunlit classroom"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent-600 font-semibold uppercase tracking-wider text-sm mb-3 block">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-6 leading-tight">
              A Legacy of <span className="text-accent-500">Learning</span> Since 1990
            </h2>
            <div className="space-y-4 text-surface-600 text-lg leading-relaxed">
              <p>
                Founded in 1990, Vasant Valley School has been at the forefront of progressive education in New Delhi. What began as a vision to create a school that nurtures the complete child has grown into one of India&rsquo;s most respected educational institutions.
              </p>
              <p>
                Over three decades, we have stayed true to our founding principles — fostering intellectual curiosity, creative expression, and ethical responsibility — while continually evolving to meet the challenges of a rapidly changing world.
              </p>
              <p>
                Today, our vibrant community of over 1,200 students, 150 dedicated educators, and a network of thousands of alumni across the globe stands as a testament to the enduring power of a values-driven education.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default SchoolStory;
