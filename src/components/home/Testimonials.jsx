import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-800 sm:text-4xl">
              Client <span className="text-primary-500">Success Stories</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              Don't just take our word for it - hear what our clients say
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/10"
              >
                <div className="flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 text-secondary-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-7 text-secondary-600">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-x-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}