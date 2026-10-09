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
    title: 'Robotic Rehabilitation & Gait Training', 
    shortDescription: 'Advanced robotic Lokomat assistance for walking recovery, neuro-rehabilitation, and functional gait correction.', 
    department: 'rehab' as const 
  },
  { 
    id: '3', 
    title: 'Stroke & Neurological Rehabilitation', 
    shortDescription: 'Multidisciplinary recovery programmes for stroke survivors to regain functional independence and neurological recovery.', 
    department: 'rehab' as const 
  },
  { 
    id: '4', 
    title: 'Spinal Cord Injury Rehabilitation', 
    shortDescription: 'Dedicated rehabilitation for paraplegia and quadriplegia patients to optimize mobility and self-reliance.', 
    department: 'rehab' as const 
  },
  { 
    id: '5', 
    title: 'Amputee Rehabilitation & Artificial Limbs', 
    shortDescription: 'Complete amputee care from pre-prosthetic training through prosthetic fitting, gait training, and long-term follow-up.', 
    department: 'rehab' as const 
  },
  { 
    id: '6', 
    title: 'Prosthetic & Orthotic Services', 
    shortDescription: 'Custom prosthetic limbs and orthotic braces designed, fabricated on-site, fitted, and maintained for optimal comfort and function.', 
    department: 'rehab' as const 
  },
  { 
    id: '7', 
    title: 'Paediatric Rehabilitation & Deformity Correction', 
    shortDescription: 'Specialised therapy and deformity correction for children with Cerebral Palsy (CP), CTEV, and developmental conditions.', 
    department: 'rehab' as const 
  },
  { 
    id: '8', 
    title: 'Pain Management & Rehabilitation', 
    shortDescription: 'Comprehensive pain relief strategies, interventional pain management, and specialised therapies led by Dr. Balamurali (FIPM).', 
    department: 'rehab' as const 
  },
  { 
    id: '9', 
    title: 'Sports & Orthopaedic Rehabilitation', 
    shortDescription: 'Comprehensive rehabilitation for sports injuries and orthopaedic conditions to help patients return to activity safely.', 
    department: 'rehab' as const 
  },
  { 
    id: '10', 
    title: 'Post-Surgical Rehabilitation', 
    shortDescription: 'Customised recovery programmes focused on regaining strength, mobility, and function after surgical procedures.', 
    department: 'rehab' as const 
  },
  { 
    id: '11', 
    title: 'Balance, Mobility & Fall Prevention', 
    shortDescription: 'Targeted balance training and mobility improvement to reduce fall risk and enhance confidence in movement.', 
    department: 'rehab' as const 
  },
  { 
    id: '12', 
    title: 'Occupational & Functional Rehabilitation', 
    shortDescription: 'Therapeutic training to restore functional independence in daily activities and improve quality of life.', 
    department: 'rehab' as const 
  },
  { 
    id: '13', 
    title: 'Assistive Devices & Mobility Aids', 
    shortDescription: 'Expert assessment and provision of wheelchairs, walkers, crutches, and assistive technology to maximise independence.', 
    department: 'rehab' as const 
  },
  { 
    id: '14', 
    title: 'Physiotherapy & Occupational Therapy', 
    shortDescription: 'Evidence-based physical and occupational therapy customised to restore movement, strength, and functional independence.', 
    department: 'rehab' as const 
  },
];

const dentalServices = [
  { id: 'd1', title: 'Complete Dental Check-Up', shortDescription: 'Thorough examination, X-rays, and comprehensive oral assessment to maintain dental health.', department: 'dental' as const },
  { id: 'd2', title: 'Teeth Cleaning & Scaling', shortDescription: 'Professional cleaning and tartar removal to ensure long-term gum health and prevent disease.', department: 'dental' as const },
  { id: 'd3', title: 'Tooth-Coloured Fillings', shortDescription: 'Aesthetic composite fillings that perfectly match your natural tooth colour for seamless restoration.', department: 'dental' as const },
  { id: 'd4', title: 'Root Canal Treatment (RCT)', shortDescription: 'Saving infected or severely damaged teeth through precise, pain-relieving endodontic therapy.', department: 'dental' as const },
  { id: 'd5', title: 'Dental Crowns & Bridges', shortDescription: 'Restoring damaged teeth with custom crowns and replacing missing teeth with durable bridges.', department: 'dental' as const },
  { id: 'd6', title: 'Dental Implants', shortDescription: 'Permanent titanium solutions for missing teeth restoring full chewing function and aesthetics.', department: 'dental' as const },
  { id: 'd7', title: 'Orthodontic Treatment & Braces', shortDescription: 'Braces and aligners for teeth straightening, crowding correction, and bite alignment for all ages.', department: 'dental' as const },
  { id: 'd8', title: 'Clear Aligners', shortDescription: 'Invisible teeth straightening solutions offering a modern, comfortable alternative to traditional braces.', department: 'dental' as const },
  { id: 'd9', title: 'Teeth Whitening & Smile Designing', shortDescription: 'Professional whitening and complete smile makeover for a noticeably brighter, confident smile.', department: 'dental' as const },
  { id: 'd10', title: 'Wisdom Tooth Removal', shortDescription: 'Safe, professional extraction of impacted and problematic wisdom teeth.', department: 'dental' as const },
  { id: 'd11', title: 'Complete & Partial Dentures', shortDescription: 'Custom-made removable dentures designed for comfort in cases of complete or partial tooth loss.', department: 'dental' as const },
  { id: 'd12', title: 'Children\'s & Emergency Dental Care', shortDescription: 'Gentle paediatric dental care and prompt treatment for urgent dental emergencies.', department: 'dental' as const },
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
          {rehabServices.map((service, idx) => {
            let variant: 'large' | 'medium' | 'small' = 'small';
            if (idx < 2) variant = 'large';
            else if (idx < 5) variant = 'medium';
            return <ServiceCard key={service.id} service={service} variant={variant} />;
          })}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentalServices.map((service, idx) => {
            let variant: 'large' | 'medium' | 'small' = 'small';
            if (idx < 2) variant = 'large';
            else if (idx < 6) variant = 'medium';
            return <ServiceCard key={service.id} service={service} variant={variant} />;
          })}
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
