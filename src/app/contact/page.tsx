import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Navigation, Calendar, ExternalLink, Clock } from 'lucide-react';
import GoogleMap from '@/components/location/GoogleMap';
import ContactSection from '@/components/location/ContactSection';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import Button from '@/components/shared/Button';
import { clinicInfo } from '@/data/clinic';

export const metadata: Metadata = {
  title: 'Contact Us & Clinic Location',
  description: 'Get in touch with NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic in Thanjavur. Call 7395811646 or 9787818833, or message us on WhatsApp for appointments.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  const mapUrl = clinicInfo.googleMapsUrl || "https://maps.app.goo.gl/cBXrAcy7vLk93ms97";
  const whatsappUrl = `https://wa.me/91${clinicInfo.whatsapp}`;
  const facebookUrl = clinicInfo.facebook || "https://www.facebook.com/share/19CBxXCYto/";

  return (
    <main className="min-h-screen bg-offwhite pt-28 pb-20">
      {/* Page Header */}
      <section className="bg-mint-light py-16 mb-12 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <AnimateOnScroll>
            <span className="inline-block text-teal-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 font-[family-name:var(--font-playfair)]">
              Contact &amp; Clinic Location
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We are here to help you regain mobility and maintain optimal dental health. Reach out via phone, WhatsApp, or visit our clinic in Thanjavur.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          {/* Quick Action Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <a 
                href="tel:7395811646" 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-border/60 flex flex-col items-center text-center group h-full"
              >
                <div className="w-14 h-14 bg-mint-soft rounded-2xl flex items-center justify-center mb-4 text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-1">Rehabilitation Care</h3>
                <p className="text-sm text-text-secondary mb-2">Physiatry &amp; Pain Management</p>
                <span className="text-teal-primary font-semibold text-base mt-auto group-hover:underline">
                  +91 73958 11646
                </span>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <a 
                href="tel:9787818833" 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-border/60 flex flex-col items-center text-center group h-full"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-1">Dental Clinic</h3>
                <p className="text-sm text-text-secondary mb-2">Dr. Bala Dental Care</p>
                <span className="text-accent font-semibold text-base mt-auto group-hover:underline">
                  +91 97878 18833
                </span>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-border/60 flex flex-col items-center text-center group h-full"
              >
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-4 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-text-primary text-lg mb-1">WhatsApp Chat</h3>
                <p className="text-sm text-text-secondary mb-2">Quick inquiries &amp; consults</p>
                <span className="text-[#25D366] font-semibold text-base mt-auto group-hover:underline">
                  Message on WhatsApp
                </span>
              </a>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <Link 
                href="/appointment" 
                className="bg-teal-primary text-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-teal-secondary transition-all flex flex-col items-center text-center group h-full"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-1">Book Appointment</h3>
                <p className="text-sm text-mint-soft mb-2">Instant online request</p>
                <span className="text-white font-semibold text-base mt-auto underline">
                  Schedule Your Visit &rarr;
                </span>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Contact Details Grid (Address, Phones, Timings) */}
          <AnimateOnScroll delay={100}>
            <div className="mb-12">
              <ContactSection />
            </div>
          </AnimateOnScroll>

          {/* Map Section */}
          <AnimateOnScroll delay={200}>
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm mb-8 border border-border/60">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 px-2">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">Find Us on Google Maps</h2>
                  <p className="text-text-secondary text-sm">27, Vallalar Nagar 3rd Street Corner, Manojipatti Road, Thanjavur</p>
                </div>
                <Button 
                  href={mapUrl}
                  variant="primary"
                  className="px-6 py-2.5 font-semibold text-sm inline-flex items-center gap-2"
                  external
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </Button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border/40">
                <GoogleMap />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Social Media & Working Hours Callout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll delay={250}>
              <div className="bg-mint-light rounded-3xl p-8 h-full border border-teal-primary/20 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-mint-soft rounded-2xl flex items-center justify-center mb-4 text-teal-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-primary mb-3">Clinic Timings &amp; Visits</h3>
                  <p className="text-text-primary text-base font-semibold mb-2">
                    Daily Consultation Hours: 3:00 PM – 9:00 PM
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Our clinic is open every day during evening hours. Prior appointment or confirmation via phone or WhatsApp is recommended to avoid waiting times.
                  </p>
                </div>
                <div className="pt-4 border-t border-teal-primary/20 flex flex-wrap gap-4">
                  <a href="tel:7395811646" className="text-teal-primary font-semibold text-sm hover:underline flex items-center gap-1.5">
                    <Phone className="w-4 h-4" /> Call 7395811646
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold text-sm hover:underline flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-teal-primary text-white rounded-3xl p-8 h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 text-white">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Connect on Social Media</h3>
                  <p className="text-mint-soft text-sm leading-relaxed mb-6">
                    Follow NandaN Robotic Rehabilitation Centre &amp; Dr. Bala Dental Clinic on Facebook for regular health updates, rehabilitation tips, patient stories, and clinic announcements.
                  </p>
                </div>
                <div>
                  <a 
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-teal-primary px-6 py-3 rounded-xl font-semibold hover:bg-mint-soft transition shadow-sm text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Official Facebook Page
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </section>
    </main>
  );
}
