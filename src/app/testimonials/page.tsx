import { Metadata } from 'next';
import { Star } from 'lucide-react';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import TestimonialCard from '@/components/testimonials/TestimonialCard';

export const metadata: Metadata = {
  title: 'Patient Testimonials',
  description: 'Read patient testimonials and reviews for NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic, Thanjavur.',
  alternates: { canonical: '/testimonials' },
};

const testimonials = [
  {
    name: 'Ramesh K.',
    rating: 5,
    review: 'Dr. Balamurali is an outstanding physiatrist. After my stroke, I could barely move my right side. With robotic gait training and regular physiotherapy at NandaN, I am now walking independently. The entire team is dedicated and caring. Truly grateful for my recovery.',
    department: 'rehab' as const,
    date: 'August 2025',
  },
  {
    name: 'Priya S.',
    rating: 5,
    review: 'I got my braces done at Dr. Bala Dental Clinic with Dr. Yasothai. She explained the entire treatment plan clearly and was very gentle throughout. My teeth look perfect now after 16 months. Highly recommend for anyone needing orthodontic treatment in Thanjavur.',
    department: 'dental' as const,
    date: 'July 2025',
  },
  {
    name: 'Murugan V.',
    rating: 5,
    review: 'My father had a spinal cord injury and we were told he may never walk again. Dr. Balamurali gave us hope and started robotic rehabilitation immediately. After 4 months, my father is now taking steps with a walker. We cannot thank the NandaN team enough.',
    department: 'rehab' as const,
    date: 'June 2025',
  },
  {
    name: 'Lakshmi R.',
    rating: 5,
    review: 'I had been suffering from chronic back pain for over 5 years. Dr. Balamurali diagnosed the root cause and created a structured pain management plan. Within 6 weeks, my pain reduced dramatically. He is the best pain management specialist in Thanjavur.',
    department: 'rehab' as const,
    date: 'May 2025',
  },
  {
    name: 'Karthik M.',
    rating: 5,
    review: 'Got a dental implant done here for my missing tooth. Dr. Yasothai was very professional and the procedure was smooth. The implant looks and feels completely natural. The clinic is clean, modern, and the staff is friendly. Very satisfied with the treatment.',
    department: 'dental' as const,
    date: 'April 2025',
  },
  {
    name: 'Saroja D.',
    rating: 5,
    review: 'My son has cerebral palsy and we have been visiting NandaN for robotic gait training. Dr. Balamurali is very patient with children and explains everything clearly. We have seen noticeable improvement in our son\'s walking ability. A blessing for families like ours.',
    department: 'rehab' as const,
    date: 'March 2025',
  },
  {
    name: 'Anand P.',
    rating: 4,
    review: 'After my below-knee amputation due to diabetes, I was fitted with a prosthetic limb at NandaN. The rehabilitation programme helped me walk confidently again within two months. Dr. Balamurali and the prosthetic team are highly skilled and supportive.',
    department: 'rehab' as const,
    date: 'February 2025',
  },
  {
    name: 'Meena J.',
    rating: 5,
    review: 'I got teeth whitening done at Dr. Bala Dental Clinic and the results were amazing — my teeth became several shades brighter in just one session! Dr. Yasothai also gave me great advice on maintaining the results. Very happy with the service.',
    department: 'dental' as const,
    date: 'January 2025',
  },
  {
    name: 'Senthil Kumar',
    rating: 5,
    review: 'I had a traumatic brain injury from an accident. Other hospitals said recovery would be very limited. But Dr. Balamurali\u0027s comprehensive rehabilitation approach — including physiotherapy, occupational therapy, and speech therapy — helped me recover beyond expectations. He is truly the first and best physiatrist in Thanjavur.',
    department: 'rehab' as const,
    date: 'December 2024',
  },
];

const overallRating = 4.9;
const totalReviews = testimonials.length;

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <section className="bg-mint-light pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Patient Testimonials
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Hear from patients who have experienced our care
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="px-4 md:px-8 -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="scale">
            <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-text-primary">{overallRating}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < Math.round(overallRating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-text-secondary">Based on {totalReviews} patient reviews</p>
              </div>
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-teal-primary">{testimonials.filter(t => t.department === 'rehab').length}</div>
                  <div className="text-xs text-text-secondary mt-1">Rehabilitation</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold text-accent">{testimonials.filter(t => t.department === 'dental').length}</div>
                  <div className="text-xs text-text-secondary mt-1">Dental Care</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={(i % 3) * 100}>
                <TestimonialCard {...testimonial} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review Prompt */}
      <section className="px-4 md:px-8 py-16 bg-offwhite">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl border border-border p-10 md:p-14 shadow-sm">
              <div className="w-16 h-16 bg-mint-soft rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-bold text-teal-primary text-2xl">G</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Share Your Experience
              </h2>
              <p className="text-text-secondary mb-8 max-w-lg mx-auto">
                Your feedback helps us improve and helps other patients make informed decisions. If you&apos;ve been treated at our clinic, we&apos;d love to hear from you.
              </p>
              <a
                href="https://maps.app.goo.gl/cBXrAcy7vLk93ms97?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-secondary transition"
              >
                Leave a Google Review
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-teal-primary rounded-3xl p-10 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Care</h2>
              <p className="text-mint-soft mb-8 max-w-2xl mx-auto text-lg opacity-90">
                Schedule a consultation today and take the first step towards better health and a brighter smile.
              </p>
              <Button href="/appointment" variant="secondary" size="lg" className="bg-white text-teal-primary hover:bg-mint-soft">
                Book an Appointment
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
