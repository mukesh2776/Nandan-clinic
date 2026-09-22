import Image from 'next/image';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { Bot, UserCheck, Heart, ShieldCheck } from 'lucide-react';

export default function ClinicStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Image */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <AnimateOnScroll animation="fade-left">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg p-2 bg-mint-soft">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/clinic/nandan-poster.jpeg"
                    alt="Nandan Clinic Overview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <AnimateOnScroll animation="fade-right">
              <span className="inline-block text-teal-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-[family-name:var(--font-playfair)]">
                Your Mobility, Our Mission
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                NandaN Robotic Rehabilitation Centre and Dr. Bala Dental Clinic bring together advanced rehabilitation and comprehensive dental care at a single location in Thanjavur. Our team is led by experienced specialists who are committed to patient-centred, evidence-based treatment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint-soft text-teal-primary flex items-center justify-center shrink-0">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Advanced Technology</h4>
                    <p className="text-sm text-text-secondary">Robotic gait training & modern equipment</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint-soft text-teal-primary flex items-center justify-center shrink-0">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Experienced Specialists</h4>
                    <p className="text-sm text-text-secondary">Qualified domain experts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint-soft text-teal-primary flex items-center justify-center shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Comprehensive Rehab</h4>
                    <p className="text-sm text-text-secondary">Full-spectrum rehabilitation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint-soft text-teal-primary flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Patient-Centred</h4>
                    <p className="text-sm text-text-secondary">Individualized treatment plans</p>
                  </div>
                </div>
              </div>

              <Button href="/about" variant="secondary" size="lg">
                Learn More About Us
              </Button>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
