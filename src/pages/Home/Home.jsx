import Hero from '@components/home/Hero';
import Features from '@components/home/Features';
import Statistics from '@components/home/Statistics';
import Academics from '@components/home/Academics';
import LearningApproach from '@components/home/LearningApproach';
import CampusLife from '@components/home/CampusLife';
import StudentExperience from '@components/home/StudentExperience';
import GalleryPreview from '@components/home/GalleryPreview';
import NewsEvents from '@components/home/NewsEvents';
import Testimonials from '@components/home/Testimonials';
import CoreValues from '@components/home/CoreValues';
import AdmissionsCTA from '@components/home/AdmissionsCTA';

/**
 * Home Page
 *
 * The main landing page for the Vasant Valley School website.
 * Sections are ordered to create a natural narrative flow:
 * Hero → Why Us → Academics → Campus → Gallery → News → Testimonials → CTA
 */
function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Statistics />
      <Academics />
      <LearningApproach />
      <CampusLife />
      <StudentExperience />
      <GalleryPreview />
      <NewsEvents />
      <Testimonials />
      <CoreValues />
      <AdmissionsCTA />
    </main>
  );
}

export default Home;
