import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive services: robotic gait training, artificial limb centre, pain management, physiotherapy, dental implants, orthodontics, and more at NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic, Thanjavur.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pb-20">
      <section className="bg-mint-light pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive rehabilitation and dental care under one roof
          </p>
        </div>
      </section>

      <section className="px-4 md:px-8 -mt-8">
        <div className="max-w-6xl mx-auto">
          <ServicesClient />
        </div>
      </section>
    </main>
  );
}
