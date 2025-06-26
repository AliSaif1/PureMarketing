export default function StatsSection() {
  const stats = [
    { id: 1, name: 'Projects completed', value: '350+' },
    { id: 2, name: 'Client retention rate', value: '92%' },
    { id: 3, name: 'Average ROI increase', value: '4.2x' },
    { id: 4, name: 'Years of experience', value: '8+' },
  ];

  return (
    <section className="bg-secondary-50 py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by innovative businesses
            </h2>
            <p className="mt-4 text-lg leading-8 text-primary-100">
              We measure our success by the success of our clients
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center">
                <p className="text-5xl font-bold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-base leading-7 text-primary-100">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}