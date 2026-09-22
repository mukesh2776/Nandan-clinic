import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import AppointmentForm from '@/components/appointment/AppointmentForm';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Book an appointment at NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic, Thanjavur. Schedule your visit for rehabilitation, pain management, or dental care.',
  alternates: { canonical: '/appointment' },
};

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-offwhite py-12 md:py-20">
      {/* Page Header */}
      <section className="bg-mint-light py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-primary mb-4">
              Book an Appointment
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Schedule your visit with our specialists for comprehensive rehabilitation, pain management, and advanced dental care.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Form */}
          <div className="w-full lg:w-[60%]">
            <AnimateOnScroll delay={100}>
              <AppointmentForm />
            </AnimateOnScroll>
          </div>

          {/* Right Column: Info Panel */}
          <div className="w-full lg:w-[40%]">
            <AnimateOnScroll delay={200}>
              <div className="bg-mint-light rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-teal-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-5 text-text-primary">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-teal-primary shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base leading-relaxed">
                      27, Vallalar Nagar 3rd Street Corner,<br />
                      Manojipatti Road,<br />
                      Thanjavur - 613004
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-teal-primary shrink-0" />
                    <div>
                      <a href="tel:7395811646" className="text-sm md:text-base hover:text-teal-primary transition font-medium block">
                        +91 73958 11646 (Main)
                      </a>
                      <a href="tel:9787818833" className="text-sm md:text-base hover:text-teal-primary transition font-medium block mt-1">
                        +91 97878 18833 (Dental)
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-6 h-6 text-teal-primary shrink-0" />
                    <a 
                      href="https://wa.me/917395811646" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base hover:text-teal-primary transition font-medium"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-teal-primary shrink-0" />
                    <p className="text-sm md:text-base">
                      3:00 PM – 9:00 PM (Mon-Sun)
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Navigation className="w-6 h-6 text-teal-primary shrink-0" />
                    <a 
                      href="https://maps.app.goo.gl/cBXrAcy7vLk93ms97" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-teal-secondary hover:text-teal-primary transition font-medium underline"
                    >
                      Get Directions on Map
                    </a>
                  </div>
                </div>

                <hr className="my-8 border-teal-primary/20" />

                <h4 className="text-lg font-semibold text-teal-primary mb-4">
                  Our Doctors
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-teal-primary/20 shrink-0">
                      <Image 
                        src="/images/doctors/dr-balamurali.jpeg" 
                        alt="Dr. D. Balamurali" 
                        width={48} 
                        height={48} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">Dr. D. Balamurali</p>
                      <p className="text-xs text-text-secondary">Physical Medicine & Rehabilitation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-teal-primary/20 shrink-0">
                      <Image 
                        src="/images/doctors/dr-yasothai.jpeg" 
                        alt="Dr. G. Yasothai" 
                        width={48} 
                        height={48} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-sm">Dr. G. Yasothai</p>
                      <p className="text-xs text-text-secondary">Dental Care Specialist</p>
                    </div>
                  </div>
                </div>

              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
