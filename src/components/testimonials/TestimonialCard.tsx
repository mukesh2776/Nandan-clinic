import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  department: 'rehab' | 'dental' | 'both';
  date?: string;
}

export default function TestimonialCard({
  name,
  rating,
  review,
  department,
  date
}: TestimonialCardProps) {
  const initial = name.charAt(0).toUpperCase();
  
  const getDepartmentLabel = () => {
    switch (department) {
      case 'rehab': return 'Rehabilitation Patient';
      case 'dental': return 'Dental Patient';
      case 'both': return 'Clinic Patient';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col h-full">
      <Quote className="absolute top-4 right-4 w-16 h-16 text-mint-soft opacity-50 rotate-180" />
      
      <div className="flex gap-1 mb-6 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} 
          />
        ))}
      </div>
      
      <p className="text-text-primary text-base md:text-lg mb-8 relative z-10 italic flex-grow">
        &ldquo;{review}&rdquo;
      </p>
      
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${department === 'rehab' ? 'bg-mint-soft text-teal-primary' : 'bg-accent/10 text-accent'}`}>
          {initial}
        </div>
        <div>
          <h4 className="font-bold text-text-primary">{name}</h4>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span>{getDepartmentLabel()}</span>
            {date && (
              <>
                <span>•</span>
                <span>{date}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
