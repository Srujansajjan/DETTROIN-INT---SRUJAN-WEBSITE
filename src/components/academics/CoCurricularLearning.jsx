import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '@components/ui';

const coCurriculars = [
  {
    title: 'Visual & Performing Arts',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
  },
  {
    title: 'Sports & Athletics',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'STEM & Robotics',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'Community Service',
    image: 'https://images.unsplash.com/photo-1593113512399-563b71eb8a6a?q=80&w=1470&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
  },
];

function CoCurricularLearning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <Section bg="primary" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Beyond The Classroom"
            title="Co-Curricular Integration"
            subtitle="We believe that a significant part of learning happens outside the traditional classroom setting. Co-curricular activities are interwoven into our academic fabric."
            align="center"
            className="text-white"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {coCurriculars.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden group min-h-[250px] ${item.span}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white font-heading text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-accent-500 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform origin-left scale-x-0 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default CoCurricularLearning;
