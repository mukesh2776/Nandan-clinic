import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimateOnScroll from '@/components/shared/AnimateOnScroll';

export default function DoctorsPreview() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          number="02" 
          label="OUR DOCTORS" 
          title="Meet Our Specialists" 
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Dr. Balamurali */}
          <div className="lg:col-span-7">
            <AnimateOnScroll animation="fade-up">
              <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <Image 
                    src="/images/doctors/dr-balamurali.jpeg" 
                    alt="Dr. D. Balamurali" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1">Dr. D. Balamurali</h3>
                  <p className="text-teal-primary font-medium mb-3">MBBS, D.PMR, FIPM</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-secondary text-sm mb-6">
                    <span className="bg-mint-soft px-3 py-1 rounded-full">Consultant Physiatrist</span>
                    <span className="bg-mint-soft px-3 py-1 rounded-full">Pain & Rehab Specialist</span>
                  </div>
                  <Link href="/doctors" className="inline-flex items-center text-teal-primary font-semibold hover:text-teal-secondary transition-colors">
                    View Profile
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Dr. Yasothai */}
          <div className="lg:col-span-5 lg:mt-24">
            <AnimateOnScroll animation="fade-up" delay={150}>
              <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <Image 
                    src="/images/doctors/dr-yasothai.jpeg" 
                    alt="Dr. G. Yasothai" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-1">Dr. G. Yasothai</h3>
                  <p className="text-accent font-medium mb-3">BDS, MBA (Hospital Management)</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-secondary text-sm mb-6">
                    <span className="bg-orange-50 text-accent px-3 py-1 rounded-full">Dental Surgeon</span>
                  </div>
                  <Link href="/doctors" className="inline-flex items-center text-accent font-semibold hover:opacity-80 transition-opacity">
                    View Profile
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
