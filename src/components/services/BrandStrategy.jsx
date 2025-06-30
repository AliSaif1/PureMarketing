import React from "react";
import { Helmet } from "react-helmet";

const BrandStrategyIdentityPage = () => {
    const tiers = [
        {
            name: "Essential Branding",
            price: "$1,500-$3,000",
            bestFor: "Startups and small businesses needing foundational branding",
            features: [
                "Brand Discovery Workshop",
                "Core Brand Strategy",
                "Brand Messaging Framework",
                "Logo Design (2 concepts)",
                "Basic Brand Guidelines",
                "Color Palette & Typography",
                "1 Round of Revisions"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Comprehensive Branding",
            price: "$5,000-$10,000",
            bestFor: "Growing businesses ready to establish a strong brand presence",
            features: [
                "In-Depth Brand Audit",
                "Competitive Analysis",
                "Complete Brand Strategy",
                "Visual Identity System",
                "Logo Design (3 concepts)",
                "Full Brand Guidelines",
                "Brand Voice & Tone Guide",
                "Brand Application Examples",
                "3 Rounds of Revisions"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise Branding",
            price: "Contact Now",
            bestFor: "Established companies needing full brand transformation",
            features: [
                "360° Brand Assessment",
                "Market Research & Positioning",
                "Complete Brand Architecture",
                "Premium Visual Identity",
                "Custom Illustrations/Photography",
                "Motion Design System",
                "Comprehensive Brand Guidelines",
                "Brand Training Sessions",
                "Brand Rollout Strategy",
                "Unlimited Revisions"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Brand Strategy & Identity | Professional Brand Development Services</title>
                <meta
                    name="description"
                    content="Comprehensive brand strategy and identity design services. From essential packages ($1,500) to enterprise solutions ($15,000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Brand Strategy <span className="text-secondary-700">& Identity</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Crafting distinctive brands that resonate with your audience and drive business growth
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Branding <span className="text-secondary-700">Packages</span>
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
                                            href={`#contact?package=branding-${tier.name.toLowerCase().replace(' ', '-')}`}
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

                {/* Branding Process */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our Branding <span className="text-secondary-700">Process</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Discovery & Research</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We dive deep into your business, market, and audience to uncover insights that shape your brand strategy.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Strategy Development</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We craft a unique brand positioning, voice, and messaging framework that differentiates you in the market.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Visual Identity Design</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Our designers create a distinctive visual language including logo, color palette, typography, and imagery.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Implementation</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We provide all assets and guidelines needed to consistently apply your new brand across all touchpoints.</p>
                        </div>
                    </div>
                </section>

                {/* Branding Deliverables */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Branding <span className="text-secondary-700">Deliverables</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Logo Design */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Logo Design</span>
                        </div>

                        {/* Brand Guidelines */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Brand Guidelines</span>
                        </div>

                        {/* Color Palette */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Color Palette</span>
                        </div>

                        {/* Typography */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Typography</span>
                        </div>

                        {/* Brand Voice */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Brand Voice</span>
                        </div>

                        {/* Visual Assets */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Visual Assets</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Build a Powerful Brand?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create a brand identity that captivates your audience and grows your business.
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

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Brand Strategy & Identity Packages",
                    "description": "Professional brand strategy and identity design services",
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

export default BrandStrategyIdentityPage;