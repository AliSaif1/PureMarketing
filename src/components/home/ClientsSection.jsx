import clients from "../../data/clients";

export default function ClientsSection() {
  return (
    <section className="py-24 sm:py-32 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-800 sm:text-4xl">
              Trusted by <span className="text-primary-500">Leading Brands</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              We partner with ambitious companies across industries
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="flex justify-center rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
                >
                  <img
                    className="h-12 object-contain"
                    src={client.logo}
                    alt={client.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}