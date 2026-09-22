import { Metadata } from 'next';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import DoctorProfile from '@/components/doctors/DoctorProfile';
import { doctors } from '@/data/doctors';
import { clinicInfo } from '@/data/clinic';
import { generateWhatsAppUrl } from '@/lib/utils';
import Button from '@/components/shared/Button';
import { Activity, Brain, Bone, ArrowRight, HeartPulse, Accessibility, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Meet Dr. D. Balamurali (Physiatrist, MBBS, D.PMR, FIPM) and Dr. G. Yasothai (Dental Surgeon, BDS, MBA) at NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic, Thanjavur.',
  alternates: { canonical: '/doctors' },
};

const conditions = [
  {
    title: 'Stroke (Hemiplegia)',
    description: 'Comprehensive rehabilitation to regain mobility, speech, and independence after a stroke.',
    icon: Brain,
  },
  {
    title: 'Spinal Cord Injury',
    description: 'Specialized care for paraplegia and quadriplegia to maximize functional recovery.',
    icon: Activity,
  },
  {
    title: 'Traumatic Brain Injury',
    description: 'Tailored cognitive and physical therapies for traumatic brain injury patients.',
    icon: HeartPulse,
  },
  {
    title: 'Cerebral Palsy',
    description: 'Early intervention and sustained rehabilitation for children with CP.',
    icon: Stethoscope,
  },
  {
    title: 'Amputee Rehabilitation',
    description: 'Pre and post-prosthetic training, artificial limb fitting and gait training.',
    icon: Accessibility,
  },
  {
    title: 'Orthopaedic Conditions',
    description: 'Post-surgical rehab, arthritis management, and comprehensive pain management.',
    icon: Bone,
  },
];

export default function DoctorsPage() {
  const drBala = doctors.find(d => d.id === 'dr-balamurali');
  const drYaso = doctors.find(d => d.id === 'dr-yasothai');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-mint-light pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Meet Our Specialists
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Experienced doctors committed to your health and recovery in Thanjavur.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 px-4 md:px-8 bg-offwhite">
        <div className="max-w-7xl mx-auto space-y-24">
          <AnimateOnScroll>
            {drBala && <DoctorProfile doctor={drBala} imagePosition="left" />}
          </AnimateOnScroll>

          <AnimateOnScroll>
            {drYaso && <DoctorProfile doctor={drYaso} imagePosition="right" />}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 px-4 md:px-8 bg-white border-y border-border-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Conditions We Treat"
            subtitle="Specialised care for complex physical and neurological conditions."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {conditions.map((condition, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-mint-light rounded-2xl p-8 h-full border border-border-light hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                    <condition.icon className="w-7 h-7 text-teal-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{condition.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{condition.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-teal-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg md:text-xl text-mint-light opacity-90 mb-10">
              Book a consultation with our specialists to discuss your personalized treatment plan.
            </p>
            <Button
              href={generateWhatsAppUrl(clinicInfo.whatsapp, "Hello, I would like to book an appointment.")}
              variant="accent"
              size="lg"
              className="group"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
