'use client';

import Image from 'next/image';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex items-center bg-offwhite overflow-hidden py-12 lg:py-0">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-[60%] flex flex-col items-start z-10">
          <AnimateOnScroll animation="fade-right">
            <span className="inline-block text-teal-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              NandaN Robotic Rehabilitation Centre
            </span>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-right" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 font-[family-name:var(--font-playfair)]">
              Specialist Care for Pain, Rehabilitation & Dental Health
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-right" delay={200}>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl leading-relaxed">
              Comprehensive rehabilitation, pain management, and dental care under one roof in Thanjavur. Led by experienced specialists committed to restoring mobility and healthy smiles.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-right" delay={300}>
            <div className="flex flex-wrap gap-4">
              <Button href="/appointment" variant="primary" size="lg">
                Book an Appointment
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[40%] relative mt-8 lg:mt-0">
          <AnimateOnScroll animation="fade-left" delay={200}>
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mint-soft rounded-full -z-10"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/doctors/dr-balamurali.jpeg"
                  alt="Dr. Balamurali"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute top-4 -right-6 lg:-right-12 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="font-semibold text-teal-primary text-sm whitespace-nowrap">Pain Management</span>
              </div>
              
              <div className="absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="font-semibold text-teal-primary text-sm whitespace-nowrap">Physical Rehabilitation</span>
              </div>
              
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white shadow-lg rounded-2xl px-4 py-3 z-20 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="font-semibold text-accent text-sm whitespace-nowrap">Dental Care</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        
      </div>
    </section>
  );
}
