import { Link } from "react-router-dom";
import caseStudies from "../../data/caseStudies";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CaseStudies() {
  return (
    <section className="py-24 sm:py-10 bg-secondary-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-800 sm:text-4xl">
              Our <span className="text-primary-500">Work</span> in Action
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Real projects delivering real results
            </p>
          </div>
          <div className="mt-16 space-y-24">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/2">
                  <div className="relative w-full max-w-md aspect-[5/4] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.client}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <span className="text-xs font-semibold tracking-widest text-primary-300 uppercase">
                        Case Study
                      </span>
                      <h3 className="text-2xl font-bold mt-1">
                        {caseStudy.client}
                      </h3>
                    </div>
                  </div>

                </div>
                <div className="lg:w-1/2 lg:px-8">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <div className="flex flex-wrap gap-3 mb-6">
                      {caseStudy.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg leading-8 text-secondary-600 mb-6">
                      {caseStudy.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {caseStudy.stats.map((stat) => (
                        <div
                          key={stat.id}
                          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                        >
                          <p className="text-3xl font-bold text-primary-500">
                            {stat.value}
                          </p>
                          <p className="text-sm text-secondary-500 mt-1">
                            {stat.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors group"
                    >
                      View full case study
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}