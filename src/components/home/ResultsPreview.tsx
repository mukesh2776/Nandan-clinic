import SectionHeader from '@/components/shared/SectionHeader';
import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';
import { TrendingUp, Activity, Smile } from 'lucide-react';

const resultHighlights = [
  {
    icon: Activity,
    title: 'Post-Stroke Gait Recovery',
    category: 'Rehabilitation',
    description: 'Patient regained independent walking after 12 weeks of robotic gait training. Walking speed improved from 0.2 m/s to 0.8 m/s.',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    title: 'Chronic Back Pain Relief',
    category: 'Pain Management',
    description: 'Patient with 5 years of chronic back pain achieved significant relief. VAS pain score reduced from 8/10 to 2/10 in 6 weeks.',
    color: 'teal',
  },
  {
    icon: Smile,
    title: 'Full Orthodontic Correction',
    category: 'Dental Care',
    description: 'Patient with severe crowding achieved well-aligned teeth and proper bite with fixed braces over 18 months of treatment.',
    color: 'accent',
  },
];

export default function ResultsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            number="05"
            label="RESULTS"
            title="Real Treatment Outcomes"
            centered={false}
          />
          <div className="mt-6 md:mt-0 pb-4">
            <Button href="/results" variant="outline">
              View All Results
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {resultHighlights.map((item, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-mint-light rounded-2xl p-8 flex flex-col h-full border border-border-light hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${item.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-teal-primary/10 text-teal-primary'}`}>
                  <item.icon size={28} />
                </div>
                <span className={`text-xs font-bold tracking-widest uppercase mb-2 ${item.color === 'accent' ? 'text-accent' : 'text-teal-secondary'}`}>
                  {item.category}
                </span>
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  {item.title}
                </h4>
                <p className="text-text-secondary text-sm flex-grow">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
