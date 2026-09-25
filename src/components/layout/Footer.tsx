import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-teal-primary text-white pt-16 pb-8 md:pb-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Logo & Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full">
                <Image
                  src="/images/logo.jpg"
                  alt="NandaN Clinic Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
              </div>
              <h3 className="font-bold text-xl leading-tight">
                NandaN Robotic Rehabilitation Centre<br />
                <span className="text-sm font-medium opacity-90">& Dr. Bala Dental Clinic</span>
              </h3>
            </div>
            <div className="space-y-1 opacity-90 text-sm">
              <p>Restoring Mobility. Rebuilding Lives.</p>
              <p>Healthy Smile, Happy Life.</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 opacity-90">
              <li><Link href="/" className="hover:opacity-100 hover:underline transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-100 hover:underline transition-all">About</Link></li>
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Services</Link></li>
              <li><Link href="/doctors" className="hover:opacity-100 hover:underline transition-all">Doctors</Link></li>
              <li><Link href="/testimonials" className="hover:opacity-100 hover:underline transition-all">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 hover:underline transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Key Services</h4>
            <ul className="space-y-3 opacity-90">
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Robotic Gait Training</Link></li>
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Pain Management</Link></li>
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Physiotherapy</Link></li>
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Dental Implants</Link></li>
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Orthodontics</Link></li>
              <li><Link href="/services" className="hover:opacity-100 hover:underline transition-all">Teeth Whitening</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/cBXrAcy7vLk93ms97?g_st=aw" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  27, Vallalar Nagar 3rd Street Corner,<br />Manojipatti Road,<br />Thanjavur - 613004
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <a href="tel:7395811646" className="hover:underline">7395811646</a>
                  {' • '}
                  <a href="https://wa.me/917395811646" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>3:00 PM - 9:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
                <a href="https://www.facebook.com/share/19CBxXCYto/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-80 text-sm">
          <p>© {new Date().getFullYear()} NandaN Clinic. All rights reserved.</p>
          <p>Designed with care</p>
        </div>
      </div>
    </footer>
  );
}
