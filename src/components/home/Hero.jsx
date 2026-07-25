import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Globe } from 'lucide-react';
import { Button, Container } from '@components/ui';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
            alt="Vasant Valley School Campus"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/80 to-primary-900/30 z-10" />
      </div>

      <Container className="relative z-20 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-accent-300 text-xs font-semibold uppercase tracking-[0.15em] shadow-lg">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                Excellence in Education
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Nurturing Minds, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500 drop-shadow-sm">
                  Shaping Futures.
                </span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-lg md:text-xl text-primary-100 max-w-xl leading-relaxed mb-10 font-light">
                Discover a vibrant learning community where academic rigour meets creative expression. 
                Preparing students to become compassionate global citizens.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Button variant="accent" size="lg" className="group text-base px-8">
                Explore Campus
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 transition-colors">
                Admissions
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div 
            className="lg:col-span-5 hidden lg:block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative h-[550px] w-full">
              {/* Card 1 */}
              <motion.div 
                variants={cardVariants}
                className="absolute top-10 right-10 z-30 bg-primary-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-[280px] shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mb-5 text-accent-400">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-heading text-xl font-bold mb-2">Academic Excellence</h3>
                <p className="text-primary-100/80 text-sm leading-relaxed">
                  A rigorous, future-ready curriculum designed to challenge and inspire every student.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={cardVariants}
                className="absolute top-1/2 -translate-y-1/2 left-0 z-20 bg-primary-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-[280px] shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-500/20 flex items-center justify-center mb-5 text-secondary-300">
                  <Users size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-heading text-xl font-bold mb-2">Campus Life</h3>
                <p className="text-primary-100/80 text-sm leading-relaxed">
                  A vibrant community fostering leadership, arts, and outstanding athletic prowess.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={cardVariants}
                className="absolute bottom-10 right-0 z-10 bg-primary-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-[280px] shadow-2xl hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-5 text-blue-300">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-heading text-xl font-bold mb-2">Global Learning</h3>
                <p className="text-primary-100/80 text-sm leading-relaxed">
                  International exposure and diversity preparing students for a highly connected world.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2.5 bg-accent-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
