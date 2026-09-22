import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

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
      title: "Physiotherapy",
      description: "Evidence-based physical therapy customized to restore movement and functional ability.",
      dept: "Rehabilitation",
      size: "medium"
    },
    {
      title: "Orthodontics",
      description: "Braces and clear aligners to correct misaligned teeth and jaws for a healthier smile.",
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isLarge = service.size === 'large';
            const isRehab = service.dept === 'Rehabilitation';
            
            return (
              <AnimateOnScroll 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
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
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
          
          {/* CTA Card */}
          <AnimateOnScroll animation="fade-up" delay={500} className="md:col-span-2 lg:col-span-1">
            <Link href="/services" className="block h-full bg-teal-primary text-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-teal-secondary flex flex-col justify-center items-center text-center group min-h-[200px]">
              <h4 className="text-xl font-semibold mb-4">Explore All Services</h4>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
