import PageHero from '@components/common/PageHero';
import ContactInformation from '@components/contact/ContactInformation';
import ContactForm from '@components/contact/ContactForm';
import MapSection from '@components/contact/MapSection';
import QuickContactCards from '@components/contact/QuickContactCards';
import ContactFAQs from '@components/contact/ContactFAQs';

/**
 * Contact Page
 *
 * Provides users with multiple ways to reach Vasant Valley School,
 * including a contact form, direct department cards, and a Google Map.
 */
function Contact() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="Get In Touch"
        subtitle="We are here to answer your questions and provide the support you need. Reach out to us today."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />
      <ContactInformation />
      <QuickContactCards />
      <ContactForm />
      <MapSection />
      <ContactFAQs />
    </main>
  );
}

export default Contact;
