import PageHero from '@components/common/PageHero';
import LearningPhilosophy from '@components/academics/LearningPhilosophy';
import AcademicPrograms from '@components/academics/AcademicPrograms';
import TeachingMethodology from '@components/academics/TeachingMethodology';
import CoCurricularLearning from '@components/academics/CoCurricularLearning';
import AcademicFacilities from '@components/academics/AcademicFacilities';
import AdmissionsCTA from '@components/home/AdmissionsCTA';

/**
 * Academics Page
 *
 * Showcases the educational approach, curriculum stages, teaching
 * methodologies, and academic facilities at Vasant Valley School.
 */
function Academics() {
  return (
    <main className="flex flex-col">
      <PageHero
        title="Academic Excellence"
        subtitle="A progressive, multi-disciplinary curriculum designed to nurture intellectual curiosity, creative thinking, and a lifelong love for learning."
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Academics' },
        ]}
      />
      <LearningPhilosophy />
      <AcademicPrograms />
      <TeachingMethodology />
      <CoCurricularLearning />
      <AcademicFacilities />
      <AdmissionsCTA />
    </main>
  );
}

export default Academics;
