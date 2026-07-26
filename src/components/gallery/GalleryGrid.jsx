import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Section, Container } from '@components/ui';

// Mock data for the gallery
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', category: 'Campus', title: 'Main Academic Block' },
  { id: 2, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop', category: 'Academics', title: 'Interactive Learning' },
  { id: 3, src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop', category: 'Sports', title: 'Annual Athletics Meet' },
  { id: 4, src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop', category: 'Arts', title: 'Student Art Exhibition' },
  { id: 5, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop', category: 'Events', title: 'Founders Day Celebration' },
  { id: 6, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop', category: 'Facilities', title: 'Advanced Robotics Lab' },
  { id: 7, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop', category: 'Campus', title: 'Student Quad' },
  { id: 8, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop', category: 'Academics', title: 'Library Study Session' },
  { id: 9, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop', category: 'Sports', title: 'Inter-School Basketball' },
  { id: 10, src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop', category: 'Events', title: 'Cultural Fest' },
  { id: 11, src: 'https://images.unsplash.com/photo-1510531704581-5b287090d8a5?q=80&w=1470&auto=format&fit=crop', category: 'Arts', title: 'Music Room' },
  { id: 12, src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1486&auto=format&fit=crop', category: 'Facilities', title: 'Chemistry Lab' },
];

const categories = ['All', 'Campus', 'Academics', 'Sports', 'Arts', 'Events', 'Facilities'];

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter logic
  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Lightbox Handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const goToPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, goToNext, goToPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxIndex]);

  return (
    <Section bg="default" spacing="lg">
      <Container>
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent-500 text-white shadow-md'
                  : 'bg-surface-50 text-surface-600 hover:bg-surface-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-heading text-xl font-bold flex items-center justify-between">
                      {image.title}
                      <ZoomIn size={20} className="text-white/70" />
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50 bg-black/50 rounded-full"
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>

              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-50 bg-black/50 rounded-full hover:bg-black/80"
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              >
                <img
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h4 className="text-white text-xl font-bold font-heading">
                    {filteredImages[lightboxIndex].title}
                  </h4>
                  <p className="text-white/70 text-sm mt-1 uppercase tracking-wider">
                    {filteredImages[lightboxIndex].category}
                  </p>
                </div>
              </motion.div>

              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 z-50 bg-black/50 rounded-full hover:bg-black/80"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </Section>
  );
}

export default GalleryGrid;
