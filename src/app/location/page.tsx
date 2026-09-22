import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Navigation, Calendar, ExternalLink } from 'lucide-react';
import GoogleMap from '@/components/location/GoogleMap';
import ContactSection from '@/components/location/ContactSection';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import Button from '@/components/shared/Button';

export const metadata: Metadata = {
  title: 'Location & Contact',
  description: 'Visit NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic at 27, Vallalar Nagar 3rd Street Corner, Manojipatti Road, Thanjavur - 613004. Call 7395811646 for appointments.',
  alternates: { canonical: '/location' },
};

export default function LocationPage() {
  const mapUrl = "https://maps.app.goo.gl/cBXrAcy7vLk93ms97";
  const whatsappUrl = "https://wa.me/917395811646";
  const facebookUrl = "https://www.facebook.com/share/19CBxXCYto/";

  return (
    <main className="min-h-screen bg-offwhite py-12 md:py-20">
      {/* Page Header */}
      <section className="bg-mint-light py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-teal-primary mb-4">
              Visit Our Clinic
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Find us in Thanjavur. We are easily accessible and ready to provide you with the best rehabilitation and dental care.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          {/* Map Section */}
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl p-2 shadow-sm mb-6 border border-border/50">
              <GoogleMap />
            </div>
            <div className="text-center mb-12">
              <Button 
                href={mapUrl}
                variant="accent"
                className="px-8 py-3 font-semibold text-lg inline-flex items-center gap-2"
                external
              >
                <Navigation className="w-5 h-5" />
                Get Directions to Clinic
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Contact Details Grid */}
          <AnimateOnScroll delay={100}>
            <ContactSection className="mb-16" />
          </AnimateOnScroll>

          {/* How to reach us & CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimateOnScroll delay={200}>
              <div className="bg-mint-light rounded-2xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-teal-primary mb-6">
                  How to Reach Us
                </h2>
                <p className="text-text-primary text-lg leading-relaxed mb-6">
                  Our clinic is located at 27, Vallalar Nagar 3rd Street Corner, Manojipatti Road, Thanjavur. The clinic is easily accessible and located near the Medical College area.
                </p>
                <p className="text-text-secondary mb-8">
                  Whether you&apos;re visiting for robotic rehabilitation, pain management, or specialized dental care, our facility is designed for your comfort and convenience.
                </p>
                <Link 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-secondary font-semibold hover:text-teal-primary flex items-center gap-2 transition"
                >
                  <Navigation className="w-5 h-5" />
                  View on Google Maps
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Action Cards */}
                <a href="tel:7395811646" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-border/50 flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition">
                    <Phone className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1">Call Us</h3>
                  <p className="text-sm text-text-secondary">+91 73958 11646</p>
                </a>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-border/50 flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1">WhatsApp</h3>
                  <p className="text-sm text-text-secondary">Message us anytime</p>
                </a>

                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-border/50 flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition">
                    <Navigation className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1">Get Directions</h3>
                  <p className="text-sm text-text-secondary">Navigate via Map</p>
                </a>

                <Link href="/appointment" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-border/50 flex flex-col items-center text-center group">
                  <div className="w-14 h-14 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary group-hover:bg-teal-primary group-hover:text-white transition">
                    <Calendar className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1">Book Appointment</h3>
                  <p className="text-sm text-text-secondary">Schedule a visit</p>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Social Media Section */}
          <AnimateOnScroll delay={400}>
            <div className="bg-teal-primary rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-mint-soft mb-8 max-w-lg mx-auto">
                Follow us on Facebook for updates, health tips, and clinic news.
              </p>
              <a 
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-teal-primary px-8 py-3 rounded-full font-semibold hover:bg-mint-light transition shadow-sm"
              >
                <ExternalLink className="w-5 h-5" />
                Follow on Facebook
              </a>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </main>
  );
}
