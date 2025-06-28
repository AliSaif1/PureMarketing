import { forwardRef, useEffect } from "react";

const CalendlySection = forwardRef((props, ref) => {
  useEffect(() => {
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const initWidget = () => {
      if (window.Calendly) {
        const container = document.getElementById('calendly-container');
        if (container) {
          container.innerHTML = '';

          const widgetDiv = document.createElement('div');
          widgetDiv.className = 'calendly-inline-widget';
          widgetDiv.setAttribute('data-url', 'https://calendly.com/alisaif2617/30min');
          widgetDiv.style.minWidth = '320px';
          widgetDiv.style.width = '100%';
          widgetDiv.style.height = '100%';
          widgetDiv.style.border = 'none';
          widgetDiv.style.overflow = 'hidden';

          container.appendChild(widgetDiv);

          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/alisaif2617/30min',
            parentElement: widgetDiv,
            prefill: {},
            utm: {}
          });
        }
      }
    };

    const checkInterval = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkInterval);
        initWidget();
      }
    }, 100);

    return () => clearInterval(checkInterval);
  }, []);

  return (
    <section ref={ref} className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl lg:max-w-none">
          <div
            id="calendly-container"
            className="flex justify-center sm:h-[900px]"
            style={{
              height: '950px',
              position: 'relative',
              overflow: 'hidden',
            }}
          />
        </div>
      </div>
    </section>
  );
});

CalendlySection.displayName = 'CalendlySection';

export default CalendlySection;