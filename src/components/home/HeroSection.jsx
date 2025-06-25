import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 px-6 py-24 sm:py-32 lg:px-8 rounded-3xl">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:64px_64px] opacity-10" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-800 sm:text-6xl">
            <span className="block">We Craft Digital Experiences</span>
            <span className="block text-primary-500">That Drive Growth</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            PureMarketing is a full-service digital agency specializing in strategic web development, 
            performance marketing, and brand elevation for forward-thinking businesses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-1 text-sm font-semibold leading-6 text-secondary-600 hover:text-primary-500 transition-colors"
            >
              Learn about us <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}