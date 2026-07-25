import Hero from '@components/home/Hero';
import Features from '@components/home/Features';
import Statistics from '@components/home/Statistics';
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
      <Statistics />
      <CoreValues />
    </div>
  );
}

export default Home;
