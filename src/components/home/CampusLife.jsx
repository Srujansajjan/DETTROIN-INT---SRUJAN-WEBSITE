import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '@components/ui';

const facilities = [
  {
    title: 'Sports & Athletics',
    category: 'Physical Education',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
  },
  {
    title: 'Music Studios',
    category: 'Performing Arts',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'Science Labs',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'Library & Media',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1430&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 lg:col-span-1 row-span-2',
  },
  {
    title: 'Art Studios',
    category: 'Visual Arts',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'Student Clubs',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
];

function CampusLife() {
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
            label="Campus Life"
            title="Beyond the Classroom"
            subtitle="Our world-class facilities provide the perfect environment for students to explore their interests, develop new talents, and build lasting friendships."
            align="center"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4 lg:gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${facility.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <img
                src={facility.image}
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/40 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                <span className="text-accent-300 text-xs font-semibold uppercase tracking-wider mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {facility.category}
                </span>
                <h3 className="text-white font-heading text-xl md:text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {facility.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CampusLife;
