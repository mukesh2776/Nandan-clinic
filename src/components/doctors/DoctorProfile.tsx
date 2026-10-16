import Image from 'next/image';
import { Doctor } from '@/types';
import Button from '@/components/shared/Button';
import { generateWhatsAppUrl } from '@/lib/utils';
import { clinicInfo } from '@/data/clinic';
import { CheckCircle2, Clock, GraduationCap, Award } from 'lucide-react';

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
        <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-lg border border-border-light bg-white">
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
      <div className={`w-full lg:w-3/5 space-y-6 ${isRight ? 'lg:order-1' : 'lg:order-2'}`}>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2 font-[family-name:var(--font-playfair)]">{doctor.name}</h2>
          <p className="text-xl font-medium text-teal-primary mb-1">{doctor.qualifications}</p>
          <p className="text-lg text-text-secondary">{doctor.designation}</p>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              {doctor.department}
            </span>
            {doctor.experience && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-primary bg-mint-soft px-3 py-1 rounded-full border border-mint-light">
                <Award className="w-3.5 h-3.5" />
                {doctor.experience}
              </span>
            )}
          </div>
        </div>

        {doctor.timings && (
          <div className="bg-mint-light/60 border border-teal-primary/20 rounded-2xl p-4 flex items-start gap-3">
            <Clock className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-teal-primary uppercase tracking-wider">Consultation Timings</p>
              <p className="text-sm font-semibold text-text-primary mt-0.5">{doctor.timings}</p>
            </div>
          </div>
        )}

        <div className="prose prose-lg text-text-secondary max-w-none">
          <p className="leading-relaxed whitespace-pre-line">{doctor.bio}</p>
        </div>

        {doctor.education && doctor.education.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-primary" />
              Education &amp; Qualifications
            </h3>
            <ul className="space-y-2">
              {doctor.education.map((edu: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-teal-primary shrink-0 mt-0.5" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

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

        {doctor.titles && doctor.titles.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Professional Titles</h3>
            <ul className="space-y-2">
              {doctor.titles.map((title: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
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
