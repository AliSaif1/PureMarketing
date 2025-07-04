import { forwardRef, useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlySection = forwardRef((props, ref) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Virtual Coffee with Ali
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Book a 30-minute virtual meeting at your convenience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto w-full sm:h-[950px]">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-yellow-400"></div>
            </div>
          )}
          <InlineWidget
            url="https://calendly.com/alisaif2617/30min?background_color=f7f7f7&primary_color=f68a49"
            styles={{ height: '950px' }}
            pageSettings={{
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
            }}
          />
        </div>
      </div>
    </section>
  );
});

CalendlySection.displayName = 'CalendlySection';

export default CalendlySection;