import { Link } from "react-router-dom";
import { ArrowRightIcon, MapPinIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28 sm:py-32 lg:px-8 mt-2">
      {/* Professional video background with graceful fallback */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/oxDZFqhhemw?autoplay=1&mute=1&loop=1&playlist=oxDZFqhhemw&controls=0&modestbranding=1&rel=0"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 scale-150"
          />
        </div>
      </div>

      {/* Subtle overlay for better text contrast */}
      <div className="absolute" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl relative">
        <div className="text-center">
          {/* Professional location badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-1.5">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm font-medium text-gray-700">
                Serving North America from Hamilton
              </span>
              <CheckBadgeIcon className="h-4 w-4 text-primary-600 ml-1" />
            </div>
          </div>

          {/* Strong, clean typography */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block text-white">Data-Driven Digital Solutions</span>
            <span className="block mt-3 text-primary-500">
              For Scaling Businesses
            </span>
          </h1>

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
              <span>Call Now</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}