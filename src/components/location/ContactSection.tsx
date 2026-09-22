'use client';

import React from 'react';
import { MapPin, Phone, Clock, Check, Copy } from 'lucide-react';

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = '' }: ContactSectionProps) {
  const [copied, setCopied] = React.useState(false);

  const address = "27, Vallalar Nagar 3rd Street Corner, Manojipatti Road, Thanjavur - 613004";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {/* Address Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition">
        <div className="w-12 h-12 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary">
          <MapPin className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-teal-primary mb-2">Address</h3>
        <p className="text-text-primary text-sm md:text-base leading-relaxed mb-4">
          27, Vallalar Nagar 3rd Street Corner,<br />
          Manojipatti Road,<br />
          Thanjavur - 613004
        </p>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-teal-secondary hover:text-teal-primary font-medium transition"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy Address'}
        </button>
      </div>

      {/* Phone Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition">
        <div className="w-12 h-12 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary">
          <Phone className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-teal-primary mb-2">Phone</h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-text-secondary mb-1">Main / Rehabilitation</p>
            <a href="tel:7395811646" className="text-text-primary text-sm md:text-base hover:text-teal-primary transition font-medium block">
              +91 73958 11646
            </a>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Dental Care</p>
            <a href="tel:9787818833" className="text-text-primary text-sm md:text-base hover:text-teal-primary transition font-medium block">
              +91 97878 18833
            </a>
          </div>
        </div>
      </div>

      {/* Hours Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition">
        <div className="w-12 h-12 bg-mint-soft rounded-full flex items-center justify-center mb-4 text-teal-primary">
          <Clock className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-teal-primary mb-2">Hours</h3>
        <p className="text-text-primary text-sm md:text-base leading-relaxed font-medium">
          3:00 PM – 9:00 PM
        </p>
        <p className="text-sm text-text-secondary mt-2">
          Open all days. Appointments are subject to prior confirmation.
        </p>
      </div>
    </div>
  );
}
