import Image from 'next/image';
import { Doctor } from '@/types';
import Button from '@/components/shared/Button';
import { generateWhatsAppUrl } from '@/lib/utils';
import { clinicInfo } from '@/data/clinic';
import { CheckCircle2 } from 'lucide-react';

interface DoctorProfileProps {
  doctor: Doctor;
  imagePosition?: 'left' | 'right';
}

export default function DoctorProfile({ doctor, imagePosition = 'left' }: DoctorProfileProps) {
  const isRight = imagePosition === 'right';

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Image Side */}
      <div className={`w-full lg:w-2/5 ${isRight ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-lg border border-border-light">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </div>

      {/* Content Side */}
      <div className={`w-full lg:w-3/5 space-y-8 ${isRight ? 'lg:order-1' : 'lg:order-2'}`}>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">{doctor.name}</h2>
          <p className="text-xl font-medium text-teal-primary mb-1">{doctor.qualifications}</p>
          <p className="text-lg text-text-secondary">{doctor.designation}</p>
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-2">{doctor.department}</p>
        </div>

        <div className="prose prose-lg text-text-secondary max-w-none">
          <p className="leading-relaxed">{doctor.bio}</p>
        </div>

        {doctor.specializations && doctor.specializations.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {doctor.specializations.map((spec: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-mint-soft text-teal-primary rounded-full px-4 py-2 text-sm font-medium border border-mint-light"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}

        {doctor.roles && doctor.roles.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Professional Roles</h3>
            <ul className="space-y-3">
              {doctor.roles.map((role: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="pt-4">
          <Button 
            href={generateWhatsAppUrl(clinicInfo.whatsapp, `Hello, I would like to book an appointment with ${doctor.name}.`)} 
            variant="primary" 
            size="lg"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
