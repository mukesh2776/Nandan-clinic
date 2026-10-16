'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { galleryItems } from '@/data/gallery';
import { GalleryItem } from '@/types';
import { Eye, ChevronLeft, ChevronRight, X, MapPin, Calendar } from 'lucide-react';

type FilterCategory = 'all' | 'dental' | 'rehabilitation' | 'facility';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(i => i.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <main className="min-h-screen bg-offwhite pt-28 pb-20">
      {/* Header */}
      <section className="bg-mint-light py-16 mb-12 border-b border-border/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <AnimateOnScroll>
            <span className="inline-block text-teal-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Explore Our Clinic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 font-[family-name:var(--font-playfair)]">
              Clinic Photo Gallery
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Take a tour through our modern facilities — from our advanced robotic rehabilitation unit and in-house artificial limb workshop to Dr. Bala Dental Clinic&apos;s state-of-the-art operatory suites.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: 'all', label: `All Photos (${galleryItems.length})` },
              { id: 'dental', label: `Dental Clinic (${galleryItems.filter(i => i.category === 'dental').length})` },
              { id: 'rehabilitation', label: `Robotic Rehab & Limb Centre (${galleryItems.filter(i => i.category === 'rehabilitation').length})` },
              { id: 'facility', label: `Facilities & Premises (${galleryItems.filter(i => i.category === 'facility').length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterCategory)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-teal-primary text-white shadow-md'
                    : 'bg-white text-text-secondary hover:text-teal-primary border border-border hover:border-teal-primary/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <AnimateOnScroll key={item.id} animation="fade-up" delay={(index % 3) * 80}>
                <div
                  onClick={() => openLightbox(item)}
                  className="group bg-white rounded-3xl overflow-hidden border border-border/70 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-semibold inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                        <Eye className="w-4 h-4" /> Expand Photo
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
                        item.category === 'dental' 
                          ? 'bg-amber-500 text-white' 
                          : item.category === 'rehabilitation'
                          ? 'bg-teal-primary text-white'
                          : 'bg-slate-800 text-white'
                      }`}>
                        {item.category === 'dental' ? 'Dental Care' : item.category === 'rehabilitation' ? 'Rehab & Limb' : 'Clinic Facility'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-text-primary text-lg mb-2 group-hover:text-teal-primary transition-colors">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-text-secondary">
                      <span className="font-medium text-teal-secondary">Click to view full size</span>
                      <span className="text-text-secondary/60">Photo #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Clinic Hours & Booking Highlight */}
          <section className="mt-20 bg-gradient-to-br from-mint-light via-white to-mint-soft rounded-3xl p-8 md:p-12 border border-teal-primary/20 shadow-sm">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-xs font-bold text-teal-primary uppercase tracking-wider mb-2 block">
                  Visit Our Clinic
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 font-[family-name:var(--font-playfair)]">
                  Experience Our Modern Facility In Person
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xl">
                  Located at Vallalar Nagar 3rd Street Corner, Manojipatti Road, Thanjavur. Prior appointments recommended.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-text-primary">
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-border">Dr. Yasothai: 9:00 AM – 1:30 PM &amp; 5:00 PM – 8:30 PM</span>
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-border">Dr. Balamurali: 3:00 PM – 9:00 PM (By Appt)</span>
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-border">Artificial Limb: 10:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center gap-2 bg-teal-primary text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-teal-secondary transition shadow-sm text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-primary border border-teal-primary/30 px-6 py-3.5 rounded-xl font-semibold hover:bg-mint-light transition text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Contact &amp; Map
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentItem && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-50"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Image & Caption Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[82vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-[65vh] max-h-[700px]">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="text-xl font-bold">{currentItem.title}</h3>
              {currentItem.description && (
                <p className="text-sm text-gray-300 mt-1">{currentItem.description}</p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                Photo {(lightboxIndex ?? 0) + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
