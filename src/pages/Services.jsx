import { useState } from "react";
import { Link } from "react-router-dom";
import allServices from "../data/servicesData";

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [showModal, setShowModal] = useState(false);

    // Separate services into two categories
    const packageServices = allServices.filter(service => !service.hasOwnProperty('pricing'));
    const pricedServices = allServices.filter(service => service.hasOwnProperty('pricing'));

    const handleGetStarted = (service) => {
        setSelectedService(service);
        setSelectedOption("");
        setShowModal(true);
    };

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

                    {/* Packages Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Our Service Packages
                        </h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {packageServices.map((service) => (
                                <div
                                    key={service.href}
                                    className="group relative flex flex-col rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-orange-500/30 overflow-hidden shadow-sm h-full"
                                >
                                    <Link to={service.href} className="flex flex-col items-center p-8 h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="flex flex-col items-center h-full w-full">
                                            <div className="relative z-10 mb-6 flex items-center justify-center h-24 w-full">
                                                <img
                                                    src={service.icon}
                                                    alt={service.name}
                                                    className="h-full w-full object-contain p-2"
                                                />
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 text-center">
                                                {service.name}
                                            </h3>
                                        </div>

                                        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-0 h-0 rounded-full bg-orange-500 opacity-0 
                            group-hover:w-32 group-hover:h-32 group-hover:opacity-[0.08] 
                            transition-all duration-400 delay-75 transform translate-x-1/3 -translate-y-1/3" />
                                        </div>
                                    </Link>

                                    {/* Added separator and Learn More button */}
                                    <div className="border-t border-gray-200 mt-auto">
                                        <Link
                                            to={service.href}
                                            className="block w-full py-4 text-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <span className="font-medium text-gray-700 hover:text-orange-500">
                                                Learn More →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Priced Services Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            Content Creation Services
                        </h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {pricedServices.map((service) => (
                                <div
                                    key={service.name}
                                    className="flex flex-col rounded-xl bg-white border border-gray-200 overflow-hidden shadow-sm h-full"
                                >
                                    <div className="flex flex-col items-center p-8 h-full">
                                        <div className="flex flex-col items-center h-full w-full">
                                            <div className="mb-6 flex items-center justify-center h-24 w-full">
                                                <img
                                                    src={service.icon}
                                                    alt={service.name}
                                                    className="h-full w-full object-contain p-2"
                                                />
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 text-center">
                                                {service.name}
                                            </h3>

                                            <div className="mt-4 w-full">
                                                <div className="relative flex py-3 items-center">
                                                    <div className="flex-grow border-t border-gray-300"></div>
                                                    <span className="flex-shrink mx-4 text-gray-400 text-sm">Pricing</span>
                                                    <div className="flex-grow border-t border-gray-300"></div>
                                                </div>
                                            </div>

                                            <div className="w-full mt-2">
                                                <select
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-sm"
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                >
                                                    <option value="">Select an option</option>
                                                    {service.pricing && service.pricing.map((option, index) => (
                                                        <option key={index} value={`${option.price} - ${option.description}`}>
                                                            {option.price} - {option.description}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-6 pb-6 w-full">
                                        <button
                                            onClick={() => handleGetStarted(service)}
                                            className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Get Started with {selectedService?.name}
                        </h3>
                        {selectedOption && (
                            <p className="mb-4 text-gray-600">
                                Selected option: <span className="font-semibold">{selectedOption}</span>
                            </p>
                        )}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    // Handle form submission here
                                    setShowModal(false);
                                }}
                                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-md shadow-sm hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}