import { Link } from "react-router-dom";
import services from "../../data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-800 sm:text-4xl">
              Our <span className="text-primary-500">Specialized</span> Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/10 hover:shadow-md transition-all"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <service.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-secondary-800">
                  {service.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-secondary-600">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="mt-6 flex items-center gap-x-1 text-sm font-semibold leading-6 text-primary-500 hover:text-primary-600 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full bg-primary-100 px-6 py-2 text-sm font-medium text-primary-600 hover:bg-primary-200 transition-colors"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}