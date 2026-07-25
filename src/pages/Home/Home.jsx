import Hero from '@components/home/Hero';
import Features from '@components/home/Features';
import Statistics from '@components/home/Statistics';
import Academics from '@components/home/Academics';
import LearningApproach from '@components/home/LearningApproach';
import CampusLife from '@components/home/CampusLife';
import StudentExperience from '@components/home/StudentExperience';
import CoreValues from '@components/home/CoreValues';

/**
 * Home Page
 *
 * The main landing page for the Vasant Valley School website.
 */
function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Academics />
      <LearningApproach />
      <CampusLife />
      <StudentExperience />
      <Statistics />
      <CoreValues />
    </div>
  );
}

export default Home;
