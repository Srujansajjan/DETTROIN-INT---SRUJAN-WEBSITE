import PageHero from '@components/common/PageHero';
import SchoolStory from '@components/about/SchoolStory';
import VisionMission from '@components/about/VisionMission';
import AboutCoreValues from '@components/about/AboutCoreValues';
import Leadership from '@components/about/Leadership';
import Timeline from '@components/about/Timeline';
import CampusHighlights from '@components/about/CampusHighlights';

/**
 * About Page
 *
 * Covers the school's history, mission, vision, values,
 * leadership, and campus overview.
 */
function About() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="About Vasant Valley"
        subtitle="Discover the story, values, and vision that have guided our school for over three decades of educational excellence."
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' },
        ]}
      />
      <SchoolStory />
      <VisionMission />
      <AboutCoreValues />
      <Leadership />
      <Timeline />
      <CampusHighlights />
    </main>
  );
}

export default About;
