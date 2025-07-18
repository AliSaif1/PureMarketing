import React, { useState } from "react";
import { Helmet } from "react-helmet";

const DigitalMarketingPage = () => {
    const tiers = [
        {
            name: "Essential Marketing",
            price: "$1,000-$2,500/month",
            bestFor: "Small businesses starting with digital marketing",
            features: [
                "1-2 marketing channels (your choice)",
                "Basic strategy development",
                "Monthly content calendar",
                "Social media management (2 platforms)",
                "Basic SEO optimization",
                "Monthly performance report",
                "Email marketing setup",
                "Weekly optimizations"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Growth Marketing",
            price: "$3,000-$6,000/month",
            bestFor: "Businesses scaling their digital presence",
            features: [
                "3-5 marketing channels",
                "Comprehensive strategy",
                "Bi-weekly content calendar",
                "Social media management (all platforms)",
                "Advanced SEO strategy",
                "Bi-weekly performance reports",
                "Email marketing campaigns",
                "Conversion rate optimization",
                "Paid advertising management (1 platform)",
                "Daily optimizations"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise Marketing",
            price: "Contact Now",
            bestFor: "Large businesses needing full-funnel marketing",
            features: [
                "Omnichannel marketing strategy",
                "Customized marketing automation",
                "Weekly content planning",
                "Dedicated social media team",
                "Technical SEO implementation",
                "Weekly performance deep dives",
                "Advanced email marketing",
                "CRO & A/B testing",
                "Multi-platform paid advertising",
                "Influencer marketing",
                "24/7 monitoring & optimization",
                "Dedicated account manager"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

    const [selectedService, setSelectedService] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleGetStarted = (service) => {
        setSelectedService(service);
        setSelectedOption("");
        setShowModal(true);
    };

    function onClose() {
        setShowModal(false);
    }

    return (
        <>
            <Helmet>
                <title>Digital Marketing Strategy | Comprehensive Online Marketing Services</title>
                <meta
                    name="description"
                    content="Professional digital marketing services. From essential packages ($1,000) to enterprise solutions ($8,000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Digital <span className="text-secondary-700">Marketing</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Data-driven marketing strategies that deliver measurable business growth
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Marketing <span className="text-secondary-700">Packages</span>
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
                                            onClick={() => handleGetStarted(tier)}
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

                {/* Marketing Features */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our Marketing <span className="text-secondary-700">Approach</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Data-Driven Strategies</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We base all marketing decisions on analytics and performance data to maximize your ROI.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Omnichannel Integration</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Seamless coordination across all digital channels for consistent messaging and maximum impact.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Conversion Optimization</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Focused on turning traffic into customers with strategic funnels and continuous testing.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">ROI-Focused</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Every dollar spent is tracked and optimized to deliver measurable business results.</p>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                {/* <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Marketing <span className="text-secondary-700">Services</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/seo.svg" alt="SEO" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">SEO</span>
                        </div>

                        
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/social-media.svg" alt="Social Media" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Social Media</span>
                        </div>

                        
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/ppc.svg" alt="PPC Advertising" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">PPC Advertising</span>
                        </div>

                        
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/email-marketing.svg" alt="Email Marketing" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Email Marketing</span>
                        </div>

                        
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/content-marketing.svg" alt="Content Marketing" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Content Marketing</span>
                        </div>
                    </div>
                </section> */}

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow Your Business Online?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create a high-performing digital marketing strategy tailored to your business goals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#contact"
                                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {showModal && (
                <ModalComponent
                    selectedService={selectedService}
                    selectedOption={selectedOption}
                    onClose={onClose}
                />
            )}

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Digital Marketing Packages",
                    "description": "Professional digital marketing services including SEO, social media, PPC, and content marketing",
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

export default DigitalMarketingPage;