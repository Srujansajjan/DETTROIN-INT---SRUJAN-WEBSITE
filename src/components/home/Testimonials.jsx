import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Section, Container, SectionHeading } from '@components/ui';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Alumni — Class of 2024',
    image: null,
    initials: 'AS',
    rating: 5,
    text: 'Vasant Valley gave me the confidence to pursue my dreams. The teachers were always supportive, and the diverse extracurricular opportunities helped me grow as a well-rounded individual. I truly cherish every moment spent on this beautiful campus.',
  },
  {
    name: 'Rajesh & Priya Mehta',
    role: 'Parents',
    image: null,
    initials: 'RM',
    rating: 5,
    text: 'As parents, we couldn\'t be happier with the holistic education our daughter receives at Vasant Valley. The school strikes the perfect balance between academic rigour and creative freedom. The faculty genuinely cares about every child\'s well-being.',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Student — Grade 11',
    image: null,
    initials: 'AK',
    rating: 5,
    text: 'Being part of the debate club and the student council has been transformative. The school encourages you to take risks, lead initiatives, and step outside your comfort zone. I\'ve grown more in the last two years than I thought possible.',
  },
  {
    name: 'Dr. Sunita Reddy',
    role: 'Parent & School Board Member',
    image: null,
    initials: 'SR',
    rating: 5,
    text: 'What sets Vasant Valley apart is its commitment to ethical values alongside academic excellence. The international exchange programmes and STEM labs are world-class. Our children are truly being prepared for a global future.',
  },
  {
    name: 'Isha Verma',
    role: 'Alumni — Class of 2022',
    image: null,
    initials: 'IV',
    rating: 5,
    text: 'The friendships I made and the values I learned at Vasant Valley have stayed with me through university and beyond. The community service programmes instilled a sense of responsibility that continues to shape my life choices.',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 1) return prev === testimonials.length - 1 ? 0 : prev + 1;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const handlePaginate = (dir) => {
    setDirection(dir);
    paginate(dir);
  };

  const current = testimonials[currentIndex];

  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Testimonials"
            title="What Our Community Says"
            subtitle="Hear from students, parents, and alumni about their experience at Vasant Valley School."
            align="center"
          />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-accent-500 flex items-center justify-center shadow-lg">
              <Quote size={24} className="text-white" fill="white" />
            </div>
          </div>

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-elevated px-8 md:px-16 pt-16 pb-10 overflow-hidden min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-accent-500 fill-accent-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-lg md:text-xl text-surface-700 leading-relaxed mb-8 italic font-light max-w-2xl">
                    &ldquo;{current.text}&rdquo;
                  </blockquote>

                  {/* Avatar + Name */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-heading font-bold text-lg border-2 border-primary-200">
                      {current.initials}
                    </div>
                    <div>
                      <p className="font-heading font-bold text-primary-900 text-base">{current.name}</p>
                      <p className="text-surface-500 text-sm">{current.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handlePaginate(-1)}
              className="w-12 h-12 rounded-full border-2 border-surface-200 bg-white hover:border-accent-400 hover:bg-accent-50 flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-primary-700" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-2.5 bg-accent-500'
                      : 'w-2.5 h-2.5 bg-surface-300 hover:bg-surface-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handlePaginate(1)}
              className="w-12 h-12 rounded-full border-2 border-surface-200 bg-white hover:border-accent-400 hover:bg-accent-50 flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-400"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-primary-700" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;
