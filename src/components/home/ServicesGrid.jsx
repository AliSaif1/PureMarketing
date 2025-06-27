import { Link } from "react-router-dom";
import services from "../../data/servicesData";

export default function ServicesGrid() {
  return (
    <section className="py-24 sm:py-20 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-orange-500 uppercase rounded-full bg-gray-100">
              What we offer
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Premium <span className="text-primary-500">Digital Services</span>
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions engineered to elevate your business performance
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group relative flex flex-col items-center rounded-2xl bg-white p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-orange-500/30 overflow-hidden shadow-sm h-full"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Container for image and title with fixed positioning */}
                <div className="flex flex-col items-center h-full w-full">
                  {/* Image container with fixed height */}
                  <div className="relative z-10 mb-6 flex items-center justify-center h-40 w-full">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>

                  {/* Title fixed at bottom */}
                  <div className="mt-auto w-full">
                    <h3 className="text-2xl font-bold text-gray-900 text-center">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-orange-500 opacity-0 
                  group-hover:w-32 group-hover:h-32 group-hover:opacity-[0.08] 
                  transition-all duration-400 delay-75 transform translate-x-1/3 -translate-y-1/3" />
                  <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-orange-500 opacity-0 
                  group-hover:w-24 group-hover:h-24 group-hover:opacity-[0.12] 
                  transition-all duration-500 transform translate-x-1/4 -translate-y-1/4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              View Full Service Portfolio
              <svg className="ml-3 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}