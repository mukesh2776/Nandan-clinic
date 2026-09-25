'use client';

import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

export default function SpecialtySection() {
  const rehabServices = [
    "Artificial Limb Centre",
    "Prosthetics & Orthotics (Main Speciality)",
    "Robotic Gait Training (Lokomat)",
    "Stroke Rehabilitation",
    "Spinal Cord Injury Rehab",
    "Cerebral Palsy Care",
    "Pain Management",
    "Physiotherapy"
  ];

  const dentalServices = [
    "Dental Implants",
    "Orthodontics (Braces/Aligners)",
    "Root Canal Treatment",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Oral & Maxillofacial Surgery"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          number="01" 
          label="OUR SPECIALTIES" 
          title="Two Specialities. One Patient-Centred Approach." 
          centered 
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Rehabilitation Panel */}
          <AnimateOnScroll animation="fade-up">
            <div className="group h-full bg-mint-light border-l-4 border-teal-primary rounded-2xl p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-text-primary mb-2 font-[family-name:var(--font-playfair)]">
                  Physical Medicine & Rehabilitation
                </h3>
                <p className="text-teal-primary font-medium text-lg">
                  Dr. D. Balamurali, MBBS, D.PMR, FIPM
                </p>
              </div>
              
              <p className="text-text-secondary italic mb-8 text-lg">
                &ldquo;Restoring Mobility. Rebuilding Lives.&rdquo;
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {rehabServices.map((service, idx) => (
                  <li key={idx} className="flex items-start text-text-primary">
                    <span className="text-teal-secondary mr-3 mt-1">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button href="/services" variant="primary">
                  Learn More
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Dental Panel */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="group h-full bg-white border border-border-light border-l-4 border-l-accent rounded-2xl p-8 md:p-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-text-primary mb-2 font-[family-name:var(--font-playfair)]">
                  Dental Care
                </h3>
                <p className="text-accent font-medium text-lg">
                  Dr. G. Yasothai, BDS, MBA
                </p>
              </div>
              
              <p className="text-text-secondary italic mb-8 text-lg">
                &ldquo;Healthy Smile, Happy Life.&rdquo;
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {dentalServices.map((service, idx) => (
                  <li key={idx} className="flex items-start text-text-primary">
                    <span className="text-accent mr-3 mt-1">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button href="/services" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
