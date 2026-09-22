import React from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface BeforeAfterCardProps {
  title: string;
  category: string;
  department: 'rehab' | 'dental';
  description: string;
  duration?: string;
  beforeImage?: string;
  afterImage?: string;
}

export default function BeforeAfterCard({
  title,
  category,
  department,
  description,
  duration,
  beforeImage,
  afterImage
}: BeforeAfterCardProps) {
  const hasImages = beforeImage && afterImage;

  return (
    <div className="rounded-2xl bg-white border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="relative aspect-video bg-offwhite flex items-center justify-center p-4">
        {hasImages ? (
          <div className="flex w-full h-full gap-2">
            <div className="relative w-1/2 h-full rounded-lg overflow-hidden">
              <Image src={beforeImage} alt={`Before ${title}`} fill className="object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</div>
            </div>
            <div className="relative w-1/2 h-full rounded-lg overflow-hidden">
              <Image src={afterImage} alt={`After ${title}`} fill className="object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">After</div>
            </div>
          </div>
        ) : (
          <div className="text-center text-text-secondary/50 flex flex-col items-center justify-center">
            <Camera className="w-12 h-12 mb-3 opacity-50" />
            <p className="text-sm">Image documentation coming soon</p>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${department === 'rehab' ? 'bg-mint-soft text-teal-primary' : 'bg-accent/10 text-accent'}`}>
            {category}
          </span>
          {duration && (
            <span className="text-xs text-text-secondary bg-gray-100 px-2 py-1 rounded-full">
              {duration}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm flex-grow">{description}</p>
      </div>
    </div>
  );
}
