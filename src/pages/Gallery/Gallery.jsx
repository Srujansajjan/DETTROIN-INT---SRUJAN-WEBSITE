import PageHero from '@components/common/PageHero';
import GalleryGrid from '@components/gallery/GalleryGrid';
import CampusHighlights from '@components/gallery/CampusHighlights';

/**
 * Gallery Page
 *
 * Showcases the vibrant school life through an interactive, filterable
 * image gallery with a lightbox, followed by campus highlights.
 */
function Gallery() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="Campus Life in Pictures"
        subtitle="Explore the vibrant daily life, world-class facilities, and unforgettable events at Vasant Valley School."
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Gallery' },
        ]}
      />
      <GalleryGrid />
      <CampusHighlights />
    </main>
  );
}

export default Gallery;
