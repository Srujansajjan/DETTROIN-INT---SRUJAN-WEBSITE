import PageHero from '@components/common/PageHero';
import WhyChooseVasantValley from '@components/admissions/WhyChooseVasantValley';
import AdmissionsProcess from '@components/admissions/AdmissionsProcess';
import Eligibility from '@components/admissions/Eligibility';
import RequiredDocuments from '@components/admissions/RequiredDocuments';
import AdmissionsFAQs from '@components/admissions/AdmissionsFAQs';
import AdmissionsCTA from '@components/admissions/AdmissionsCTA';

/**
 * Admissions Page (Refactored)
 *
 * Provides prospective parents with information on why to choose the school,
 * the 4-step application process, eligibility criteria, required documents,
 * and FAQs.
 */
function Admissions() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="Join Our Community"
        subtitle="Discover how to become a part of Vasant Valley School. We look forward to welcoming you and your family."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Admissions' },
        ]}
      />
      <WhyChooseVasantValley />
      <AdmissionsProcess />
      <Eligibility />
      <RequiredDocuments />
      <AdmissionsFAQs />
      <AdmissionsCTA />
    </main>
  );
}

export default Admissions;
