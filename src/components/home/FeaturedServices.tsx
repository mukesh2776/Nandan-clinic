import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedServices() {
  const services = [
    {
      title: "Robotic Gait Training",
      description: "Advanced Lokomat technology for intensive functional locomotion therapy, helping patients relearn walking patterns.",
      dept: "Rehabilitation",
      size: "large"
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking replacement for missing teeth, restoring both function and aesthetics to your smile.",
      dept: "Dental",
      size: "large"
    },
    {
      title: "Pain Management",
      description: "Comprehensive solutions for acute and chronic pain using advanced interventions and therapies.",
      dept: "Rehabilitation",
      size: "medium"
    },
    {
      title: "Physiotherapy & OT",
      description: "Evidence-based physical and occupational therapy customized to restore functional independence.",
      dept: "Rehabilitation",
      size: "medium"
    },
    {
      title: "Orthodontics (Braces)",
      description: "Modern braces and clear aligners to correct misaligned teeth and jaws for a healthier smile.",
      dept: "Dental",
      size: "medium"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <SectionHeader 
              number="03" 
              label="OUR SERVICES" 
              title="Comprehensive Care, Two Specialities" 
            />
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              href="/services" 
              className="inline-flex items-center text-teal-primary font-semibold hover:text-teal-secondary transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>

        {/* Core Speciality Spotlight: Artificial Limb Centre */}
        <AnimateOnScroll animation="fade-up" className="mb-10">
          <div className="bg-gradient-to-br from-mint-light via-white to-mint-soft rounded-3xl p-6 lg:p-10 border border-teal-primary/20 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-primary text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Work &bull; Core Speciality</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4 font-[family-name:var(--font-playfair)]">
                  In-House Artificial Limb Centre
                </h3>
                <p className="text-teal-secondary font-medium text-base mb-3">
                  Customised Artificial Limbs Fabricated On-Site &bull; Prosthetics &amp; Orthotics
                </p>
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  We are having an in-house Artificial Limb Centre where customised artificial limbs are fabricated on-site. Our main work encompasses complete Prosthetics &amp; Orthotics — from custom socket design and fabrication to precision alignment, patient fitting, and robotic gait rehabilitation for both upper and lower limb amputees.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center gap-2 bg-teal-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-secondary transition-colors text-sm shadow-sm"
                  >
                    Learn About Limb Fabrication <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-white text-teal-primary border border-teal-primary/30 px-6 py-3 rounded-xl font-semibold hover:bg-mint-light transition-colors text-sm"
                  >
                    Consult for Prosthetics
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-white p-4 shadow-md border border-border/60">
                  <Image
                    src="/images/clinic/artificial-limb.jpeg"
                    alt="Customised Artificial Limbs fabricated at NandaN Clinic"
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg text-center font-medium">
                    Custom Lower Limb Prosthetics (Trans-Tibial, Trans-Femoral &amp; Hip Disarticulation)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isLarge = service.size === 'large';
            const isRehab = service.dept === 'Rehabilitation';
            
            return (
              <AnimateOnScroll 
                key={index} 
                animation="fade-up" 
                delay={index * 80}
                className={isLarge ? "md:col-span-2" : "md:col-span-1"}
              >
                <div className={`h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-border-light flex flex-col ${isRehab ? 'bg-mint-light' : 'bg-white'}`}>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      isRehab 
                        ? 'bg-mint-soft text-teal-primary' 
                        : 'bg-orange-50 text-accent'
                    }`}>
                      {service.dept}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link href="/services" className={`text-sm font-semibold inline-flex items-center ${isRehab ? 'text-teal-primary' : 'text-accent'}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
          
          {/* CTA Card */}
          <AnimateOnScroll animation="fade-up" delay={450} className="md:col-span-2 lg:col-span-1">
            <Link href="/services" className="block h-full bg-teal-primary text-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-teal-secondary flex flex-col justify-center items-center text-center group min-h-[200px]">
              <h4 className="text-xl font-semibold mb-4">Explore All Services</h4>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
