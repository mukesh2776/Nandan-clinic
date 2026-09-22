import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Smile } from 'lucide-react';

export type ServiceCardVariant = 'large' | 'medium' | 'small';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    shortDescription?: string;
    description?: string;
    department: 'rehab' | 'dental';
    icon?: string;
  };
  variant: ServiceCardVariant;
  className?: string;
}

export default function ServiceCard({ service, variant, className = '' }: ServiceCardProps) {
  const isRehab = service.department === 'rehab';
  
  if (variant === 'large') {
    return (
      <div 
        className={`col-span-1 md:col-span-2 rounded-2xl p-8 transition-all hover:shadow-md border ${isRehab ? "bg-mint-soft border-teal-primary/20" : "bg-offwhite border-l-4 border-l-accent border-y-border border-r-border"} ${className}`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${isRehab ? "bg-teal-primary text-white" : "bg-accent/10 text-accent"}`}>
                {isRehab ? <Activity className="w-6 h-6" /> : <Smile className="w-6 h-6" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                {isRehab ? 'Rehabilitation' : 'Dental Care'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-3">{service.title}</h3>
            <p className="text-text-secondary text-base lg:text-lg mb-6 max-w-2xl">
              {service.description || service.shortDescription}
            </p>
          </div>
          <div>
            <Link 
              href={`/contact`}
              className="inline-flex items-center gap-2 font-medium text-teal-primary hover:text-teal-secondary transition-colors"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'medium') {
    return (
      <div 
        className={`rounded-2xl p-6 transition-all hover:shadow-md border border-border bg-white flex flex-col justify-between h-full ${!isRehab ? "border-l-4 border-l-accent" : ""} ${className}`}
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
             <span className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary px-2 py-1 rounded-full bg-gray-100">
              {isRehab ? 'Rehabilitation' : 'Dental Care'}
            </span>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">{service.title}</h3>
          <p className="text-text-secondary text-sm mb-6 line-clamp-3">
            {service.description || service.shortDescription}
          </p>
        </div>
        <div>
          <Link 
            href={`/contact`}
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-primary hover:text-teal-secondary transition-colors"
          >
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // small variant
  return (
    <div 
      className={`rounded-2xl p-5 transition-all hover:shadow-sm border border-border bg-white flex flex-col justify-between h-full ${className}`}
    >
      <div>
        <h3 className="text-base font-semibold text-text-primary mb-1">{service.title}</h3>
        <p className="text-text-secondary text-xs line-clamp-2">
          {service.shortDescription}
        </p>
      </div>
    </div>
  );
}
