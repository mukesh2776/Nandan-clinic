'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';

export default function MobileBottomBar() {
  const whatsappUrl = generateWhatsAppUrl('7395811646', 'Hello NandaN Clinic, I would like to book an appointment.');

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-between items-center h-16">
        <a
          href="tel:7395811646"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-text-secondary hover:text-teal-primary transition-colors h-full"
        >
          <Phone className="w-5 h-5 text-teal-primary" />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        
        <div className="w-px h-8 bg-border" />
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-text-secondary hover:text-teal-primary transition-colors h-full"
        >
          <MessageCircle className="w-5 h-5 text-teal-primary" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        
        <div className="w-px h-8 bg-border" />
        
        <Link
          href="/appointment"
          className="flex-1 flex flex-col items-center justify-center gap-1 text-text-secondary hover:text-teal-primary transition-colors h-full"
        >
          <Calendar className="w-5 h-5 text-teal-primary" />
          <span className="text-[10px] font-medium">Book</span>
        </Link>
      </div>
    </div>
  );
}
