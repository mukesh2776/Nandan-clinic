'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import ServiceCard from '@/components/services/ServiceCard';
import Button from '@/components/shared/Button';
import { Activity, Brain, Accessibility, ActivitySquare, HeartPulse, Bone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const CONDITIONS = [
  { name: 'Amputees & Limb Loss', icon: Bone },
  { name: 'Stroke (Hemiplegia)', icon: Brain },
  { name: 'Spinal Cord Injury', icon: Activity },
  { name: 'Traumatic Brain Injury', icon: ActivitySquare },
  { name: 'Cerebral Palsy (CP)', icon: Accessibility },
  { name: 'Chronic Pain & CTEV', icon: HeartPulse },
];

const rehabServices = [
  { 
    id: '1', 
    title: 'Artificial Limb Centre (Prosthetics & Orthotics)', 
    shortDescription: 'Our core speciality and main work. Customised artificial limbs fabricated on-site with custom sockets, biomechanical alignment, and complete walking rehabilitation.', 
    department: 'rehab' as const 
  },
  { 
    id: '2', 
    title: 'Robotic Gait Training', 
    shortDescription: 'Advanced robotic Lokomat assistance for walking recovery, neuro-rehabilitation, and functional gait correction.', 
    department: 'rehab' as const 
  },
  { 
    id: '3', 
    title: 'Pain Management', 
    shortDescription: 'Comprehensive pain relief strategies, interventional pain management, and specialized therapies led by Dr. Balamurali (FIPM).', 
    department: 'rehab' as const 
  },
  { 
    id: '4', 
    title: 'Physiotherapy & OT', 
    shortDescription: 'Targeted physical and occupational therapy tailored to restore mobility, strength, and activities of daily living.', 
    department: 'rehab' as const 
  },
  { 
    id: '5', 
    title: 'Post Stroke Rehabilitation', 
    shortDescription: 'Multidisciplinary recovery programmes for stroke survivors to regain functional independence.', 
    department: 'rehab' as const 
  },
  { 
    id: '6', 
    title: 'Spinal Cord Injury Rehab', 
    shortDescription: 'Dedicated rehabilitation for paraplegia and quadriplegia patients to optimize mobility and self-reliance.', 
    department: 'rehab' as const 
  },
  { 
    id: '7', 
    title: 'Paediatric & CP Rehabilitation', 
    shortDescription: 'Specialized therapy for children with Cerebral Palsy (CP), CTEV, and developmental gait abnormalities.', 
    department: 'rehab' as const 
  },
];

const dentalServices = [
  { id: 'd1', title: 'Orthodontics (Braces)', shortDescription: 'Braces and clear aligners for teeth straightening, crowding correction, and bite alignment.', department: 'dental' as const },
  { id: 'd2', title: 'Dental Implants', shortDescription: 'Permanent titanium solutions for missing teeth restoring full chewing function and aesthetics.', department: 'dental' as const },
  { id: 'd3', title: 'Teeth Whitening', shortDescription: 'Professional in-office whitening procedures for a noticeably brighter, cleaner smile.', department: 'dental' as const },
  { id: 'd4', title: 'General Dental Care', shortDescription: 'Routine check-ups, root canals, cleanings, tooth restorations, and preventive oral health.', department: 'dental' as const },
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<'rehab' | 'dental'>('rehab');

  const scrollToSection = (id: string) => {
    setActiveTab(id as 'rehab' | 'dental');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button
          onClick={() => scrollToSection('rehab')}
          className={`px-6 py-4 rounded-full text-lg font-semibold transition-all ${
            activeTab === 'rehab'
              ? 'bg-teal-primary text-white shadow-md'
              : 'bg-white text-text-primary border border-border hover:border-teal-primary/50'
          }`}
        >
          Physical Medicine &amp; Rehabilitation
        </button>
        <button
          onClick={() => scrollToSection('dental')}
          className={`px-6 py-4 rounded-full text-lg font-semibold transition-all ${
            activeTab === 'dental'
              ? 'bg-teal-primary text-white shadow-md'
              : 'bg-white text-text-primary border border-border hover:border-teal-primary/50'
          }`}
        >
          Dental Care
        </button>
      </div>

      {/* Rehabilitation Section */}
      <div id="rehab" className="scroll-mt-32 mb-24">
        <AnimateOnScroll>
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-primary mb-2 block">
              Physical Medicine &amp; Rehabilitation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Comprehensive Rehabilitation Services
            </h2>
            <p className="text-text-secondary text-lg">
              Led by Dr. D. Balamurali, MBBS, D.PMR, FIPM &bull; First Physiatrist in &amp; from Thanjavur
            </p>
          </div>
        </AnimateOnScroll>

        {/* Feature Spotlight: Artificial Limb Centre & Customised Fabrication */}
        <AnimateOnScroll animation="fade-up" className="mb-12">
          <div className="bg-gradient-to-br from-mint-light via-white to-mint-soft rounded-3xl p-6 md:p-10 border-2 border-teal-primary/20 shadow-md">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-3/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-primary text-white text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Main Work &bull; Core Speciality</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 font-[family-name:var(--font-playfair)]">
                  In-House Artificial Limb Centre
                </h3>
                <p className="text-teal-primary font-semibold text-base mb-4">
                  Customised Artificial Limbs Fabricated On-Site
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  At NandaN Clinic, we operate a fully equipped in-house Artificial Limb Centre where customised artificial limbs are designed, fabricated, and fitted on-site. <strong>Prosthetics &amp; Orthotics is our main work</strong>. Under Dr. Balamurali&apos;s expert direction, every patient receives personalized measurements, custom socket fabrication, dynamic component selection, and comprehensive gait training.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>Trans-Tibial (Below-Knee) Prosthetics</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>Trans-Femoral (Above-Knee) Prosthetics</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>Hip Disarticulation Prosthetics</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>Upper Limb &amp; Orthotic Braces</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>On-Site Custom Fabrication &amp; Alignment</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-text-primary">
                    <CheckCircle2 className="w-4 h-4 text-teal-primary shrink-0 mt-0.5" />
                    <span>Robotic Gait &amp; Walking Re-education</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-teal-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-secondary transition-colors text-sm"
                  >
                    Consult for Artificial Limbs <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="tel:7395811646" 
                    className="inline-flex items-center gap-2 bg-white text-teal-primary border border-teal-primary/30 px-6 py-3 rounded-xl font-semibold hover:bg-mint-light transition-colors text-sm"
                  >
                    Call 7395811646
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col items-center">
                <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden bg-white p-4 shadow-md border border-border/60">
                  <Image
                    src="/images/clinic/artificial-limb.jpeg"
                    alt="Customised Artificial Limbs fabricated at NandaN Artificial Limb Centre"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded text-center">
                    Fabricated On-Site: Lower Limb Prosthetic Solutions
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-3 text-center">
                  Precision-crafted prosthetics for below-knee, above-knee, and high-level limb loss.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard service={rehabServices[0]} variant="large" />
          <ServiceCard service={rehabServices[1]} variant="large" />
          
          <ServiceCard service={rehabServices[2]} variant="medium" />
          <ServiceCard service={rehabServices[3]} variant="medium" />
          <ServiceCard service={rehabServices[4]} variant="medium" />
          
          <ServiceCard service={rehabServices[5]} variant="small" />
          <ServiceCard service={rehabServices[6]} variant="small" />
        </div>
      </div>

      {/* Conditions Carousel */}
      <AnimateOnScroll className="mb-24">
        <div className="bg-mint-soft rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">Conditions We Support</h3>
          <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-4 snap-x">
            {CONDITIONS.map((Condition, idx) => (
              <div key={idx} className="flex-shrink-0 snap-center bg-white px-6 py-4 rounded-full flex items-center gap-3 shadow-sm border border-mint-light">
                <Condition.icon className="w-5 h-5 text-teal-primary" />
                <span className="font-medium text-text-primary whitespace-nowrap">{Condition.name}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Dental Section */}
      <div id="dental" className="scroll-mt-32 mb-24">
        <AnimateOnScroll>
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
              Dr. Bala Dental Clinic
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Comprehensive Dental Care
            </h2>
            <p className="text-text-secondary text-lg">
              Led by Dr. G. Yasothai, BDS, MBA &bull; Expert Dental Surgeon
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard service={dentalServices[0]} variant="large" />
          <ServiceCard service={dentalServices[1]} variant="large" />
          <ServiceCard service={dentalServices[2]} variant="medium" />
          <ServiceCard service={dentalServices[3]} variant="medium" />
        </div>
      </div>

      {/* Appointment / Contact CTA */}
      <AnimateOnScroll className="mb-12">
        <div className="bg-offwhite rounded-3xl p-10 text-center border border-border">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to start your treatment?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Book a consultation with our specialists to discuss your needs and create a personalized treatment plan for rehabilitation, artificial limbs, or dental care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact &amp; Book Appointment
            </Button>
            <Button href="tel:7395811646" variant="outline" size="lg">
              Call Clinic Now
            </Button>
          </div>
        </div>
      </AnimateOnScroll>
    </>
  );
}
