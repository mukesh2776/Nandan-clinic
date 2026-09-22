import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { Building2, Bot, UserCheck, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Building2 size={24} />,
      title: "Two Specialities, One Location",
      description: "Physical rehabilitation and dental care conveniently available at the same clinic in Thanjavur."
    },
    {
      icon: <Bot size={24} />,
      title: "Advanced Robotic Rehabilitation",
      description: "Lokomat and exoskeleton-based gait training with cutting-edge robotic technology for faster recovery."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Experienced Specialists",
      description: "Led by Dr. D. Balamurali (Physiatrist) and Dr. G. Yasothai (Dental Surgeon), ensuring expert care."
    },
    {
      icon: <Heart size={24} />,
      title: "Patient-Centred Care",
      description: "Comprehensive, personalised treatment plans focused on restoring independence and healthy smiles."
    }
  ];

  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          number="04" 
          title="Why Patients Choose Us" 
          centered 
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-mint-soft text-teal-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
