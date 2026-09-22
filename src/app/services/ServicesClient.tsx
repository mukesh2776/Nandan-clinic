'use client';

import React, { useState } from 'react';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import ServiceCard from '@/components/services/ServiceCard';
import Button from '@/components/shared/Button';
import { Activity, Brain, Accessibility, ActivitySquare, HeartPulse, Bone } from 'lucide-react';

const CONDITIONS = [
  { name: 'Stroke', icon: Brain },
  { name: 'Spinal Cord Injury', icon: Activity },
  { name: 'Traumatic Brain Injury', icon: ActivitySquare },
  { name: 'Cerebral Palsy', icon: Accessibility },
  { name: 'Amputees', icon: Bone },
  { name: 'Orthopaedic Conditions', icon: HeartPulse },
];

const rehabServices = [
  { id: '1', title: 'Robotic Gait Training', shortDescription: 'Advanced robotic assistance for walking recovery and gait correction.', department: 'rehab' as const },
  { id: '2', title: 'Artificial Limb Centre', shortDescription: 'Custom prosthetics designed for comfort and mobility.', department: 'rehab' as const },
  { id: '3', title: 'Pain Management', shortDescription: 'Comprehensive pain relief strategies and treatments.', department: 'rehab' as const },
  { id: '4', title: 'Physiotherapy & OT', shortDescription: 'Targeted physical and occupational therapy.', department: 'rehab' as const },
  { id: '5', title: 'Post Stroke Rehabilitation', shortDescription: 'Specialized care for stroke survivors to regain independence.', department: 'rehab' as const },
  { id: '6', title: 'Sports Injury Clinic', shortDescription: 'Recovery from sports-related injuries.', department: 'rehab' as const },
  { id: '7', title: 'Spinal Cord Injury Rehab', shortDescription: 'Dedicated rehabilitation for spinal cord injuries.', department: 'rehab' as const },
];

const dentalServices = [
  { id: 'd1', title: 'Orthodontics', shortDescription: 'Braces and aligners for teeth straightening and bite correction.', department: 'dental' as const },
  { id: 'd2', title: 'Dental Implants', shortDescription: 'Permanent solutions for missing teeth restoring function and aesthetics.', department: 'dental' as const },
  { id: 'd3', title: 'Teeth Whitening', shortDescription: 'Professional whitening services for a brighter smile.', department: 'dental' as const },
  { id: 'd4', title: 'General Dental Care', shortDescription: 'Routine check-ups, cleanings, and preventive dentistry.', department: 'dental' as const },
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
          Physical Medicine & Rehabilitation
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

      <div id="rehab" className="scroll-mt-32 mb-24">
        <AnimateOnScroll>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Physical Medicine & Rehabilitation
            </h2>
            <p className="text-text-secondary text-lg">
              Led by Dr. D. Balamurali, MBBS, D.PMR, FIPM
            </p>
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

      <div id="dental" className="scroll-mt-32 mb-24">
        <AnimateOnScroll>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Dental Care
            </h2>
            <p className="text-text-secondary text-lg">
              Led by Dr. G. Yasothai, BDS, MBA
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

      <AnimateOnScroll className="mb-12">
        <div className="bg-offwhite rounded-3xl p-10 text-center border border-border">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to start your treatment?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Book a consultation with our specialists to discuss your needs and create a personalized treatment plan.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Book an Appointment
          </Button>
        </div>
      </AnimateOnScroll>
    </>
  );
}
