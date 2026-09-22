import Button from '@/components/shared/Button';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

export default function AppointmentCTA() {
  return (
    <section className="py-16 md:py-24 bg-teal-primary relative overflow-hidden">
      {/* CSS-only decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg md:text-xl text-mint-light opacity-90 mb-10 leading-relaxed">
              Book your appointment today and experience specialist care for rehabilitation and dental health under one roof in Thanjavur.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button 
                href="/appointment" 
                variant="primary" 
                size="lg"
                className="bg-white text-teal-primary hover:bg-mint-soft w-full sm:w-auto"
              >
                Book an Appointment
              </Button>
              <Button 
                href="tel:7395811646" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Call Now
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
