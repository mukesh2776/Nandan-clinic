'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { galleryItems } from '@/data/gallery';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function GalleryPreview() {
  // Showcase top 6 highlights on the home page
  const previewItems = galleryItems.slice(0, 6);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-mint-light/40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <SectionHeader
              number="06"
              label="CLINIC GALLERY"
              title="Inside NandaN Clinic &amp; Facilities"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/gallery"
              className="inline-flex items-center text-teal-primary font-semibold hover:text-teal-secondary transition-colors group"
            >
              Explore Full Gallery <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, i) => (
            <AnimateOnScroll key={item.id} animation="fade-up" delay={i * 80}>
              <div 
                onClick={() => setSelectedImage(item.image)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-border/60 cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                      <Eye className="w-3.5 h-3.5" /> View Photo
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md ${
                      item.category === 'dental' 
                        ? 'bg-amber-500/90 text-white' 
                        : item.category === 'rehabilitation'
                        ? 'bg-teal-primary/90 text-white'
                        : 'bg-slate-800/80 text-white'
                    }`}>
                      {item.category === 'dental' ? 'Dental' : item.category === 'rehabilitation' ? 'Rehab & Limb' : 'Facility'}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="font-bold text-text-primary text-base group-hover:text-teal-primary transition-colors line-clamp-1 mb-1">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateOnScroll animation="fade-up" delay={ previewItems.length * 50 } className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-teal-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-teal-secondary transition-all shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            View All Clinic Photos ({galleryItems.length})
          </Link>
        </AnimateOnScroll>
      </div>

      {/* Quick Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-black rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
