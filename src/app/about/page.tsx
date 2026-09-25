import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import Button from '@/components/shared/Button';
import { clinicInfo } from '@/data/clinic';
import { doctors } from '@/data/doctors';
import { rehabilitationServices, dentalServices } from '@/data/services';
import { generateWhatsAppUrl } from '@/lib/utils';
import {
  CheckCircle2,
  Heart,
  BookOpen,
  Cpu,
  UserCheck,
  Stethoscope,
  Brain,
  Activity,
  Smile,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic in Thanjavur. Comprehensive rehabilitation, pain management, and dental care led by experienced specialists.',
  alternates: { canonical: '/about' },
};

const approachCards = [
  {
    title: 'Patient-Centred Care',
    description: 'Every treatment plan is personalised to the patient\'s unique condition and goals.',
    icon: UserCheck,
  },
  {
    title: 'Evidence-Based Treatment',
    description: 'Our doctors follow established medical protocols and rehabilitation guidelines.',
    icon: BookOpen,
  },
  {
    title: 'Advanced Technology',
    description: 'We utilise robotic gait training and modern rehabilitation equipment.',
    icon: Cpu,
  },
  {
    title: 'Holistic Recovery',
    description: 'We address physical, psychological, and vocational aspects of rehabilitation.',
    icon: Heart,
  },
];

const facilities = [
  { name: 'Artificial Limb Centre (On-site Fabrication)', icon: Activity },
  { name: 'Prosthetics & Orthotics Workshop', icon: ShieldCheck },
  { name: 'Robotic Gait Training Equipment (Lokomat/Exoskeleton)', icon: Cpu },
  { name: 'Physiotherapy Unit', icon: Brain },
  { name: 'Pain Management Clinic', icon: Stethoscope },
  { name: 'Dental Care Unit', icon: Smile },
];

export default function AboutPage() {
  const drBala = doctors.find(d => d.id === 'dr-balamurali');
  const drYaso = doctors.find(d => d.id === 'dr-yasothai');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Page Header / Hero */}
      <section className="bg-mint-light pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-block text-sm font-bold text-accent tracking-widest uppercase mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Your Mobility, Our Mission
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Comprehensive rehabilitation and dental care under one roof in Thanjavur
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Clinic Introduction */}
      <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                  Where Healing Meets Innovation
                </h2>
                <div className="w-20 h-1.5 bg-accent mt-6 rounded-full" />
                <p className="text-lg text-text-secondary leading-relaxed mt-8">
                  NandaN Robotic Rehabilitation Centre and Dr. Bala Dental Clinic is a multi-specialty healthcare facility in Thanjavur that brings together advanced physical rehabilitation and comprehensive dental care. We are home to an in-house Artificial Limb Centre where customised artificial limbs are fabricated on-site.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Our main work is Prosthetics &amp; Orthotics — providing custom-designed, fabricated, and fitted prosthetic limbs and orthotic devices. The clinic is also equipped with modern robotic rehabilitation technology and is led by experienced specialists dedicated to restoring mobility and healthy smiles.
                </p>
                <div className="flex flex-col gap-4 mt-8 border-l-4 border-teal-primary pl-6 py-2 bg-mint-light/50 rounded-r-2xl">
                  <p className="text-xl font-medium text-teal-primary italic">
                    &ldquo;Restoring Mobility. Rebuilding Lives.&rdquo;
                  </p>
                  <p className="text-xl font-medium text-teal-primary italic">
                    &ldquo;Healthy Smile, Happy Life.&rdquo;
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-1/2">
              <AnimateOnScroll animation="fade-left">
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/clinic/nandan-poster.jpeg"
                    alt="NandaN Clinic Overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-4 md:px-8 bg-offwhite border-y border-border-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Our Approach"
            subtitle="How we deliver exceptional care to every patient"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {approachCards.map((card, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border-light h-full hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-mint-soft rounded-2xl flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-teal-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">{card.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{card.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Two Specialities */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Two Specialities Under One Roof"
            subtitle="Expert care for your body and your smile."
            align="center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Rehab Card */}
            <AnimateOnScroll>
              <div className="bg-mint-soft rounded-3xl p-8 md:p-12 h-full border border-mint-light">
                <h3 className="text-2xl font-bold text-teal-primary mb-2">Physical Medicine & Rehabilitation</h3>
                <p className="text-text-secondary font-medium mb-8">Led by {drBala?.name}</p>
                <ul className="space-y-4 mb-10">
                  {rehabilitationServices.slice(0, 6).map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-primary">
                      <CheckCircle2 className="w-5 h-5 text-teal-secondary shrink-0 mt-0.5" />
                      <span>{service.name}</span>
                    </li>
                  ))}
                  <li className="text-teal-primary font-medium pl-8 italic">And many more...</li>
                </ul>
                <Link href="/services" className="inline-flex items-center font-bold text-teal-primary hover:text-teal-secondary transition-colors group">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Dental Card */}
            <AnimateOnScroll delay={100}>
              <div className="bg-offwhite rounded-3xl p-8 md:p-12 h-full border border-border">
                <h3 className="text-2xl font-bold text-text-primary mb-2">Comprehensive Dental Care</h3>
                <p className="text-text-secondary font-medium mb-8">Led by {drYaso?.name}</p>
                <ul className="space-y-4 mb-10">
                  {dentalServices.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-primary">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{service.name}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="inline-flex items-center font-bold text-text-primary hover:text-accent transition-colors group">
                  View Dental Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Doctors Preview */}
      <section className="py-24 px-4 md:px-8 bg-mint-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Meet Our Specialists"
            subtitle="Dedicated experts leading with compassion and clinical excellence."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 mb-16">
            {/* Dr Bala Preview */}
            {drBala && (
              <AnimateOnScroll>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
                  <div className="relative h-80 w-full overflow-hidden bg-mint-soft">
                    <Image
                      src={drBala.image}
                      alt={drBala.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-text-primary mb-1">{drBala.name}</h3>
                    <p className="text-teal-primary font-medium mb-1">{drBala.qualifications}</p>
                    <p className="text-text-secondary mb-6">{drBala.designation}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {drBala.specializations.slice(0, 3).map((spec, idx) => (
                        <span key={idx} className="text-xs bg-mint-light text-teal-primary px-3 py-1 rounded-full border border-mint-soft">
                          {spec}
                        </span>
                      ))}
                      {drBala.specializations.length > 3 && (
                        <span className="text-xs bg-offwhite text-text-secondary px-3 py-1 rounded-full border border-border-light">
                          +{drBala.specializations.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )}

            {/* Dr Yaso Preview */}
            {drYaso && (
              <AnimateOnScroll delay={100}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg group h-full">
                  <div className="relative h-80 w-full overflow-hidden bg-mint-soft">
                    <Image
                      src={drYaso.image}
                      alt={drYaso.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between h-[calc(100%-20rem)]">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-1">{drYaso.name}</h3>
                      <p className="text-teal-primary font-medium mb-1">{drYaso.qualifications}</p>
                      <p className="text-text-secondary mb-6">{drYaso.designation}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {drYaso.specializations.map((spec, idx) => (
                          <span key={idx} className="text-xs bg-mint-light text-teal-primary px-3 py-1 rounded-full border border-mint-soft">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )}
          </div>
          
          <div className="text-center">
            <Button href="/doctors" variant="primary" size="lg">
              View Full Profiles
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities & Equipment + Gallery */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="State-of-the-Art Facilities"
            subtitle="Equipped with modern technology to provide the best possible care."
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 mb-20">
            {facilities.map((facility, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 50}>
                <div className="flex flex-col items-center text-center p-6 bg-offwhite rounded-2xl h-full border border-border-light hover:border-teal-primary/30 transition-colors">
                  <facility.icon className="w-10 h-10 text-teal-primary mb-4" />
                  <span className="text-sm font-bold text-text-primary">{facility.name}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/clinic/artificial-limb.jpeg', title: 'Customised Artificial Limbs (Fabricated On-Site)' },
              { src: '/images/clinic/prosthetics-poster.jpeg', title: 'Artificial Limb & Rehabilitation Centre' },
              { src: '/images/clinic/nandan-poster.jpeg', title: 'Robotic Rehabilitation Services' },
              { src: '/images/clinic/combined-poster.jpeg', title: 'Rehabilitation & Dental Facilities' }
            ].map((item, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 80}>
                <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-border/60 flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-offwhite">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-3 bg-white border-t border-border/40 text-center">
                    <span className="text-xs font-semibold text-text-primary block">{item.title}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-8 bg-teal-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-secondary/30 rounded-l-[100px] -mr-20 hidden lg:block" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NandaN Clinic?</h2>
                <p className="text-lg text-mint-light opacity-90 mb-10 leading-relaxed">
                  We stand apart as a premier destination for complex rehabilitation and dental health, offering a unique blend of modern technology and compassionate expertise.
                </p>
                <ul className="space-y-6">
                  {[
                    "Two specialities under one roof",
                    "In-house Artificial Limb Centre — custom prosthetics fabricated on-site",
                    "Prosthetics & Orthotics as our core speciality",
                    "Advanced robotic rehabilitation technology",
                    "First Physiatrist in and from Thanjavur",
                    "Experienced dental surgeon",
                    "Patient-centred, evidence-based approach",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-mint-light/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-lg font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <AnimateOnScroll animation="fade-left">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-text-primary max-w-md w-full">
                  <ShieldCheck className="w-16 h-16 text-teal-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Committed to Excellence</h3>
                  <p className="text-text-secondary mb-8">
                    Your health journey is our priority. Experience healthcare that focuses not just on treatment, but on true healing and long-term well-being.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-text-primary font-medium">
                      <MapPin className="w-5 h-5 text-teal-secondary" />
                      <span>{clinicInfo.address.city}, {clinicInfo.address.state}</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-primary font-medium">
                      <Clock className="w-5 h-5 text-teal-secondary" />
                      <span>{clinicInfo.timing}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-mint-light text-center">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Ready to Book Your Visit?</h2>
            <p className="text-lg text-text-secondary mb-10">
              Get in touch with us today to schedule your consultation for rehabilitation or dental care.
            </p>
            <Button
              href={generateWhatsAppUrl(clinicInfo.whatsapp, "Hello, I would like to book an appointment.")}
              variant="primary"
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
