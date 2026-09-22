import { Metadata } from 'next';
import { TrendingUp, Clock, Award, Activity } from 'lucide-react';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import BeforeAfterCard from '@/components/results/BeforeAfterCard';

export const metadata: Metadata = {
  title: 'Treatment Results',
  description: 'View treatment outcomes from NandaN Robotic Rehabilitation Centre & Dr. Bala Dental Clinic, Thanjavur. Rehabilitation, pain management, and dental care results.',
  alternates: { canonical: '/results' },
};

const rehabilitationResults = [
  {
    title: 'Post-Stroke Gait Recovery',
    category: 'Stroke Rehabilitation',
    department: 'rehab' as const,
    description: 'A 58-year-old patient with right-sided hemiplegia following ischemic stroke regained independent walking ability after 12 weeks of robotic gait training combined with conventional physiotherapy. Walking speed improved from 0.2 m/s to 0.8 m/s.',
    duration: '12 Weeks',
  },
  {
    title: 'Spinal Cord Injury — Incomplete Paraplegia',
    category: 'Spinal Cord Injury',
    department: 'rehab' as const,
    description: 'A 34-year-old male with T10 incomplete spinal cord injury regained functional ambulation with a walker after intensive exoskeleton-assisted gait training and physiotherapy over 16 weeks. ASIA score improved from C to D.',
    duration: '16 Weeks',
  },
  {
    title: 'Below-Knee Amputee — Prosthetic Rehabilitation',
    category: 'Amputee Rehabilitation',
    department: 'rehab' as const,
    description: 'A 45-year-old diabetic patient with below-knee amputation was fitted with a custom prosthetic limb and completed gait training. Patient achieved community-level ambulation within 8 weeks of prosthetic fitting.',
    duration: '8 Weeks',
  },
  {
    title: 'Cerebral Palsy — Paediatric Gait Improvement',
    category: 'Paediatric Rehabilitation',
    department: 'rehab' as const,
    description: 'A 7-year-old child with spastic diplegic cerebral palsy showed marked improvement in walking pattern and endurance after robotic-assisted gait training sessions. GMFCS level improved from III to II over 6 months.',
    duration: '6 Months',
  },
];

const painResults = [
  {
    title: 'Chronic Low Back Pain — Multimodal Management',
    category: 'Pain Management',
    department: 'rehab' as const,
    description: 'A 52-year-old office worker with chronic low back pain for 3 years achieved significant pain reduction (VAS score reduced from 8/10 to 2/10) through a combination of pain management techniques and targeted physiotherapy exercises.',
    duration: '6 Weeks',
  },
  {
    title: 'Frozen Shoulder — Full Range Recovery',
    category: 'Pain Management',
    department: 'rehab' as const,
    description: 'A 48-year-old female with adhesive capsulitis (frozen shoulder) regained full shoulder range of motion after a structured rehabilitation programme including manual therapy, progressive stretching, and strengthening exercises.',
    duration: '10 Weeks',
  },
];

const dentalResults = [
  {
    title: 'Full Mouth Orthodontic Correction',
    category: 'Orthodontics',
    department: 'dental' as const,
    description: 'A 22-year-old patient with severe crowding and Class II malocclusion achieved well-aligned teeth and proper bite with fixed orthodontic braces treatment over 18 months, resulting in improved aesthetics and function.',
    duration: '18 Months',
  },
  {
    title: 'Single Tooth Dental Implant',
    category: 'Dental Implants',
    department: 'dental' as const,
    description: 'A 55-year-old patient with a missing upper premolar received a titanium dental implant with a ceramic crown. Full osseointegration was achieved at 4 months, restoring natural chewing function and appearance.',
    duration: '4 Months',
  },
  {
    title: 'Professional Teeth Whitening',
    category: 'Teeth Whitening',
    department: 'dental' as const,
    description: 'A 30-year-old patient achieved 6 shades brighter smile through in-office professional teeth whitening treatment. Results maintained with at-home care guidance and periodic follow-up over 12 months.',
    duration: '1 Session',
  },
];

const stats = [
  { icon: Activity, value: '500+', label: 'Patients Treated' },
  { icon: TrendingUp, value: '92%', label: 'Improvement Rate' },
  { icon: Clock, value: '8+', label: 'Years Experience' },
  { icon: Award, value: '14+', label: 'Specialised Services' },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <section className="bg-mint-light pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Treatment Results
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Real treatment outcomes from our rehabilitation, pain management, and dental care programmes
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-teal-primary py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
              <div className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Rehabilitation Results */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-primary mb-2 block">Physical Medicine &amp; Rehabilitation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Rehabilitation Outcomes</h2>
              <p className="text-text-secondary mt-3 max-w-2xl">Case studies from our robotic rehabilitation, stroke recovery, spinal cord injury, and amputee rehabilitation programmes.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {rehabilitationResults.map((result, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <BeforeAfterCard {...result} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Management Results */}
      <section className="px-4 md:px-8 py-16 bg-mint-light">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-primary mb-2 block">Pain Management</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Pain Relief Outcomes</h2>
              <p className="text-text-secondary mt-3 max-w-2xl">Results from our specialised pain management and musculoskeletal rehabilitation programmes.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {painResults.map((result, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <BeforeAfterCard {...result} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Results */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">Dr. Bala Dental Clinic</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Dental Care Outcomes</h2>
              <p className="text-text-secondary mt-3 max-w-2xl">Treatment results from our orthodontics, dental implant, and cosmetic dentistry programmes.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {dentalResults.map((result, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <BeforeAfterCard {...result} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-offwhite border border-border rounded-2xl p-6 md:p-8 mb-16 text-center">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Disclaimer:</strong> Treatment outcomes may vary from patient to patient depending on the condition, severity, and individual response to treatment. The results shown above represent typical outcomes observed at our clinic. All patient information is shared with consent and identifying details are anonymised for privacy.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-teal-primary rounded-3xl p-10 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Recovery Journey</h2>
              <p className="text-mint-soft mb-8 max-w-2xl mx-auto text-lg opacity-90">
                Every patient&apos;s journey is unique. Book a consultation to discuss your condition and learn how our specialists can help you achieve the best possible outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/appointment" variant="secondary" size="lg" className="bg-white text-teal-primary hover:bg-mint-soft">
                  Book an Appointment
                </Button>
                <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
