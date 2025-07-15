import { Link, useParams } from "react-router-dom";
import serviceGroups from "../data/servicesData";

export default function ServiceCategory() {
    const { categoryId } = useParams();
    const category = serviceGroups.find(group => group.id === categoryId);

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <section className="py-24 sm:py-20 bg-secondary-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center mb-20">
                        <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            {category.category} <span className="text-primary-500">Services</span>
                        </h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                            {category.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {category.services.map((service) => (
                            <Link
                                key={service.name}
                                to={service.href}
                                className="group relative flex flex-col items-center rounded-2xl bg-white p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-orange-500/30 overflow-hidden shadow-sm h-full"
                            >
                                {/* Keep your existing service card UI */}
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="flex flex-col items-center h-full w-full">
                                    <div className="relative z-10 mb-6 flex items-center justify-center h-40 w-full">
                                        <img
                                            src={service.icon}
                                            alt={service.name}
                                            className="h-full w-full object-contain p-4"
                                        />
                                    </div>
                                    <div className="mt-auto w-full">
                                        <h3 className="text-2xl font-bold text-gray-900 text-center">
                                            {service.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}