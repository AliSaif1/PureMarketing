import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ModalComponent from '../modal';

const MobileAppDevelopmentPage = () => {
    const tiers = [
        {
            name: "Starter App Solution",
            price: "$1,499",
            bestFor: "Small businesses or startups needing a basic app",
            features: [
                "Single platform (iOS OR Android)",
                "Basic UI/UX design",
                "Up to 5 core features",
                "Standard performance optimization",
                "Basic testing & QA",
                "1 round of revisions",
                "App store submission assistance",
                "1 month support for bugs"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Premium App Solution",
            price: "$2,499",
            bestFor: "Growing businesses needing a professional app",
            features: [
                "Cross-platform (iOS AND Android)",
                "Custom UI/UX design",
                "Up to 10 core features",
                "API integration",
                "Advanced performance optimization",
                "Comprehensive testing & QA",
                "3 rounds of revisions",
                "3 months ongoing support"
                // "App store optimization"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise App Solution",
            price: "Contact Only",
            bestFor: "Large businesses with complex app requirements",
            features: [
                "Cross-platform development",
                "Premium custom UI/UX design",
                "Unlimited features",
                "Backend development",
                "Advanced security features",
                // "AI/ML integration",
                "Enterprise-grade testing",
                "Unlimited revisions",
                "6 months Ongoing support",
                // "Dedicated project manager"
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
                <title>Mobile App Development | Custom iOS & Android Applications</title>
                <meta
                    name="description"
                    content="Professional mobile app development services. From starter packages ($3,000) to enterprise solutions ($25,000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Mobile <span className="text-secondary-700">App Development</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Custom mobile applications that drive engagement and business growth
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Development <span className="text-secondary-700">Packages</span>
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

                {/* Development Features */}
                {/* <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our Development <span className="text-secondary-700">Process</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Custom UI/UX Design</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We create intuitive, user-friendly interfaces tailored to your brand and audience needs.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">High Performance</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Optimized code and architecture ensure your app runs smoothly across all devices.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Security Focused</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Enterprise-grade security measures to protect user data and prevent vulnerabilities.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Future-Ready</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Scalable architecture that grows with your business and adapts to new technologies.</p>
                        </div>
                    </div>
                </section> */}

                {/* Technologies Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Development <span className="text-secondary-700">Technologies</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* React Native */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/react.svg" alt="React Native" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">React Native</span>
                        </div>

                        {/* Flutter */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/flutter.svg" alt="Flutter" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Flutter</span>
                        </div>

                        {/* Swift */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/swift.svg" alt="Swift" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Swift</span>
                        </div>

                        {/* Kotlin */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/kotlin.svg" alt="Kotlin" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Kotlin</span>
                        </div>

                        {/* Firebase */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/firebase.svg" alt="Firebase" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Firebase</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Build Your Mobile App?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create a high-quality mobile application that delivers real business value.
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
                    "name": "Mobile App Development Packages",
                    "description": "Professional mobile application development services for iOS and Android",
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

export default MobileAppDevelopmentPage;