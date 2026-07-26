import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '@components/ui';

const milestones = [
  { year: '1990', title: 'Founded', description: 'Vasant Valley School was established in Vasant Kunj, New Delhi, with a vision to create a progressive, child-centred institution.' },
  { year: '1996', title: 'First Graduating Class', description: 'The first batch of students graduated, setting the tone for decades of academic excellence and holistic development.' },
  { year: '2003', title: 'CBSE Affiliation', description: 'Received full CBSE affiliation and recognition, enabling students to sit for national board examinations.' },
  { year: '2010', title: 'Campus Expansion', description: 'Major expansion of the campus with new science labs, a performing arts centre, and a modern library facility.' },
  { year: '2016', title: 'International Partnerships', description: 'Launched international exchange programmes with partner schools in the UK, Singapore, and the United States.' },
  { year: '2020', title: 'Digital Transformation', description: 'Seamless transition to hybrid learning during global challenges, investing in state-of-the-art EdTech infrastructure.' },
  { year: '2024', title: 'STEM Innovation Lab', description: 'Inaugurated a world-class STEM Innovation Lab with robotics, AI, and 3D printing capabilities.' },
];

function Timeline() {
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
            label="Our Journey"
            title="Milestones That Define Us"
            subtitle="Key moments in the history of Vasant Valley School that have shaped the institution we are today."
            align="center"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface-200 md:-translate-x-px" />

          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-sm -translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <span className="inline-block text-accent-600 font-heading font-bold text-lg mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-surface-500 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default Timeline;
