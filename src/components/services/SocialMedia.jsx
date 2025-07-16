import React, { useState } from "react";
import { Helmet } from "react-helmet";
import allServices from "../../data/servicesData";

const SocialMediaManagementPage = () => {
    const tiers = [
        {
            name: "Starter Social Package",
            price: "$99/month",
            bestFor: "Small businesses starting with social media",
            features: [
                "10 Posts / month",
                "2 Reels / month (15-60 seconds)",
                "1-2 social media platforms",
                "Basic caption writing",
                "Hashtag research",
                "Branded content calendar",
                "Monthly performance report"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Growth Social Suite",
            price: "$149/month",
            bestFor: "Businesses scaling their social presence",
            features: [
                "20 Posts / month",
                "4 Reels / month (15-60 seconds)",
                "Up to 3 social media platforms",
                "Custom caption writing",
                "Hashtag & trend research",
                "Bi-weekly performance reports",
                "Content scheduling"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise Social Solution",
            price: "$199/month",
            bestFor: "Businesses with comprehensive social needs",
            features: [
                "30 Posts / month",
                "6 Reels / month (15-60 seconds)",
                "Up to 4 social media platforms",
                "Advanced caption writing",
                "High-quality visuals (posts + reels)",
                "Branded content calendar",
                "Weekly performance reports"
            ],
            popular: true,
            highlightColor: "primary-500"
        }
    ];

    const pricedServices = allServices.filter(service => service.hasOwnProperty('pricing'));
    const [selectedService, setSelectedService] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleGetStarted = (service) => {
        setSelectedService(service);
        setSelectedOption("");
        setShowModal(true);
    };

    return (
        <>
            <Helmet>
                <title>Social Media Management | Professional Social Media Services</title>
                <meta
                    name="description"
                    content="Professional social media management services. From starter packages ($500) to enterprise solutions ($4,000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Social Media <span className="text-secondary-700">Management</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Strategic social media solutions that build your brand and engage your audience
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Social Media <span className="text-secondary-700">Packages</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${tier.popular ? 'transform hover:scale-102 border-2 border-primary-500' : 'hover:border border-secondary-200'}`}
                            >
                                {tier.popular && (
                                    <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className={`bg-${tier.highlightColor} h-2`}></div>
                                <div className="p-8 bg-white">
                                    <h3 className={`text-2xl font-bold text-${tier.highlightColor} mb-2`}>{tier.name}</h3>
                                    <p className="text-3xl font-bold text-secondary-800 mb-4">{tier.price}</p>
                                    <p className="text-secondary-600 italic mb-6">{tier.bestFor}</p>

                                    <div className="border-t border-secondary-100 pt-6">
                                        <h4 className="text-lg font-semibold text-secondary-800 mb-4">Key Features</h4>
                                        <ul className="space-y-3">
                                            {tier.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className={`h-5 w-5 text-${tier.highlightColor} mr-2 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-secondary-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-8">
                                        <a
                                            href={`#contact?package=social-${tier.name.toLowerCase().replace(' ', '-')}`}
                                            className={`block w-full text-center px-6 py-3 rounded-lg font-bold transition-colors ${tier.popular
                                                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                                                : 'bg-secondary-100 hover:bg-secondary-200 text-primary-700'}`}
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Priced Services Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Don't need a <span className="text-secondary-700">Package</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {pricedServices.slice(0, 2).map((service) => (
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

                {/* Management Features */}
                {/* <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our Social Media <span className="text-secondary-700">Approach</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Community Building</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We foster meaningful engagement to build loyal communities around your brand.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Content Strategy</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Data-driven content planning that aligns with your business objectives.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Performance Analytics</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We track and optimize based on metrics that matter for your business growth.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Brand Storytelling</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Compelling narratives that connect with your audience on an emotional level.</p>
                        </div>
                    </div>
                </section> */}

                {/* Platforms Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Social Media <span className="text-secondary-700">Platforms</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Facebook */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/facebook.svg" alt="Facebook" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Facebook</span>
                        </div>

                        {/* Instagram */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/instagram.svg" alt="Instagram" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Instagram</span>
                        </div>

                        {/* Twitter */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/twitter.svg" alt="Twitter" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Twitter</span>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/linkedin-ads.svg" alt="LinkedIn" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">LinkedIn</span>
                        </div>

                        {/* TikTok */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/tiktok-ads.svg" alt="TikTok" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">TikTok</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Elevate Your Social Presence?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create a social media strategy that grows your brand and engages your audience.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="/#cta"
                                className="inline-block bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg"
                            >
                                Get a Free Consultation
                            </a>
                        </div>
                    </div>
                </section>
            </main>

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

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Social Media Management Packages",
                    "description": "Professional social media management services for all major platforms",
                    "offers": tiers.map(tier => ({
                        "@type": "Offer",
                        "name": tier.name,
                        "price": tier.price,
                        "description": tier.bestFor
                    }))
                })}
            </script>
        </>
    );
};

export default SocialMediaManagementPage;