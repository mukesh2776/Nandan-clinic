import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function LocationPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          number="07" 
          label="FIND US" 
          title="Visit Our Clinic" 
        />

        <div className="mt-12 flex flex-col lg:flex-row gap-10 lg:gap-16 bg-offwhite p-6 lg:p-8 rounded-3xl">
          
          {/* Map */}
          <div className="w-full lg:w-3/5">
            <AnimateOnScroll animation="fade-right">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-border-light bg-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.570994191392!2d79.1245842554199!3d10.7811776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cb8013f99%3A0x8e8334812f84bdf7!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location on Google Maps"
                ></iframe>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Info */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <AnimateOnScroll animation="fade-left">
              <h3 className="text-2xl font-bold text-text-primary mb-6 font-[family-name:var(--font-playfair)]">
                NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-mint-light text-teal-primary flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Address</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      27, Vallalar Nagar 3rd Street Corner,<br />
                      Manojipatti Road,<br />
                      Thanjavur - 613004
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-mint-light text-teal-primary flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Contact</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:7395811646" className="text-text-secondary text-sm hover:text-teal-primary transition-colors">
                        7395811646
                      </a>
                      <a href="https://wa.me/917395811646" target="_blank" rel="noopener noreferrer" className="text-teal-primary text-sm font-medium hover:underline">
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-mint-light text-teal-primary flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Clinic Timings</h4>
                    <p className="text-text-secondary text-sm">
                      3:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/cBXrAcy7vLk93ms97?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-secondary transition-colors w-full sm:w-auto"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
