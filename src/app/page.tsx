import Hero from '@/components/home/Hero';
import SpecialtySection from '@/components/home/SpecialtySection';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import FeaturedServices from '@/components/home/FeaturedServices';
import ClinicStory from '@/components/home/ClinicStory';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import LocationPreview from '@/components/home/LocationPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecialtySection />
      <DoctorsPreview />
      <FeaturedServices />
      <ClinicStory />
      <WhyChooseUs />
      <TestimonialsPreview />
      <AppointmentCTA />
      <LocationPreview />
    </>
  );
}
