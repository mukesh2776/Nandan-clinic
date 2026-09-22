import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import TestimonialCard from '@/components/testimonials/TestimonialCard';

const featuredTestimonials = [
  {
    name: 'Ramesh K.',
    rating: 5,
    review: 'Dr. Balamurali is an outstanding physiatrist. After my stroke, I could barely move my right side. With robotic gait training and regular physiotherapy at NandaN, I am now walking independently. Truly grateful for my recovery.',
    department: 'rehab' as const,
    date: 'August 2025',
  },
  {
    name: 'Priya S.',
    rating: 5,
    review: 'I got my braces done at Dr. Bala Dental Clinic with Dr. Yasothai. She explained the entire treatment plan clearly and was very gentle throughout. My teeth look perfect now. Highly recommend for orthodontic treatment in Thanjavur.',
    department: 'dental' as const,
    date: 'July 2025',
  },
  {
    name: 'Lakshmi R.',
    rating: 5,
    review: 'I had been suffering from chronic back pain for over 5 years. Dr. Balamurali diagnosed the root cause and created a structured pain management plan. Within 6 weeks, my pain reduced dramatically. He is the best pain management specialist in Thanjavur.',
    department: 'rehab' as const,
    date: 'May 2025',
  },
];

export default function TestimonialsPreview() {
  return (
    <section className="py-20 bg-mint-light relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-10 left-10 text-[200px] leading-none text-white font-serif opacity-50 select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-[200px] leading-none text-white font-serif opacity-50 select-none pointer-events-none rotate-180">
        &ldquo;
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          number="06"
          label="TESTIMONIALS"
          title="What Our Patients Say"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {featuredTestimonials.map((testimonial, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
              <TestimonialCard {...testimonial} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={300} className="text-center mt-12">
          <Button href="/testimonials" variant="outline" className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white">
            View All Testimonials
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
