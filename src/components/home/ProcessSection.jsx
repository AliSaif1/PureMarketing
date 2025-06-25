import processSteps from "../../data/process";

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-800 sm:text-4xl">
              Our <span className="text-primary-500">Process</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              A proven methodology for delivering exceptional results
            </p>
          </div>
          <div className="mt-16">
            <ol className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {processSteps.map((step, stepIdx) => (
                <li key={step.name}>
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${stepIdx === 0 ? 'bg-primary-600' : 'bg-secondary-100'}`}
                      aria-hidden="true"
                    >
                      <span className={`text-lg font-semibold ${stepIdx === 0 ? 'text-white' : 'text-secondary-800'}`}>
                        {step.id}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-6 text-secondary-800">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-base leading-6 text-secondary-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}