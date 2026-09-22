import React from 'react';

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = '' }: GoogleMapProps) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-mint-soft ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.674069818816!2d79.1171!3d10.7597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzM0LjkiTiA3OcKwMDcnMDEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NandaN Clinic Location"
        className="w-full h-[400px] md:h-[500px]"
      ></iframe>
    </div>
  );
}
