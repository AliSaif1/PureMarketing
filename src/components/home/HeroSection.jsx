import { Link } from "react-router-dom";
import { ArrowRightIcon, MapPinIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28 sm:py-32 lg:px-8 rounded-lg">
      {/* Clean, professional background */}
      <div className="absolute">
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />
      </div>

      {/* Structured accent elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gray-50/50" />
      <div className="absolute left-0 bottom-0 h-1/2 w-full bg-gray-50/30" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl relative">
        <div className="text-center">
          {/* Professional location badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-1.5">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">
                Serving North America & Europe with remote teams worldwide
              </span>
              <CheckBadgeIcon className="h-4 w-4 text-primary-600 ml-1" />
            </div>
          </div>

          {/* Strong, clean typography */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block leading-tight">Data-Driven Digital Solutions</span>
            <span className="block mt-3 text-primary-500">
              For Scaling Businesses
            </span>
          </h1>

          {/* Professional subtext */}
          <p className="mt-8 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            We architect robust digital platforms that drive measurable business outcomes.
            Combining technical excellence with strategic insight to deliver reliable, high-performance solutions.
          </p>

          {/* Sophisticated CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-48 text-center relative rounded-md bg-primary-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-900"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Let's Talk
              </span>
            </Link>
            <Link
              to="/services"
              className="w-48 text-center flex items-center justify-center gap-2 text-sm font-semibold leading-6 text-gray-600 hover:text-gray-900 transition-colors duration-200 group px-4 py-4 rounded-md border border-gray-300 hover:border-gray-400 bg-white"
            >
              <span>Check Portfolio</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}