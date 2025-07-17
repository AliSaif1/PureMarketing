import React from "react";
import { Helmet } from "react-helmet";

const SEOServicesPage = () => {
    const tiers = [
        {
            name: "SEO Audit & Strategy",
            price: "$499/month",
            bestFor: "Businesses needing a comprehensive SEO roadmap",
            features: [
                "Full technical SEO audit",
                "Competitor analysis (3 competitors)",
                "Keyword research (50+ keywords)",
                "Content gap analysis",
                "On-page optimization recommendations",
                "Technical SEO recommendations",
                "Local SEO audit (if applicable)",
                "Custom SEO strategy report",
                "Priority fixes checklist"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "SEO Growth Package",
            price: "$1,499/month",
            bestFor: "Businesses wanting consistent organic growth",
            features: [
                "Ongoing technical SEO optimizations",
                "Monthly keyword research updates",
                "On-page optimizations (10 pages/month)",
                "Content strategy development",
                "Monthly performance reporting",
                "Backlink analysis & strategy",
                "Local SEO optimizations",
                "Schema markup implementation",
                "Monthly strategy calls"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise SEO Solution",
            price: "Contact Now",
            bestFor: "Large businesses with complex SEO needs",
            features: [
                "Comprehensive technical SEO management",
                "Unlimited on-page optimizations",
                "Advanced content strategy",
                "Competitor monitoring & analysis",
                "Weekly performance reporting",
                "Premium backlink building",
                "International SEO strategy",
                "E-commerce SEO (if applicable)",
                "Advanced schema implementations",
                "24/7 monitoring & alerts",
                "Dedicated SEO specialist"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Professional SEO Services | Search Engine Optimization Packages</title>
                <meta
                    name="description"
                    content="Comprehensive SEO services from technical audits ($1,200) to ongoing optimization packages ($1,800+). Improve rankings and organic traffic."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        SEO <span className="text-secondary-700">Services</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Data-driven search engine optimization to increase visibility and drive qualified traffic
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        SEO <span className="text-secondary-700">Packages</span>
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
                                            href={`#contact?package=seo-${tier.name.toLowerCase().replace(' ', '-')}`}
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

                {/* SEO Features */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our SEO <span className="text-secondary-700">Methodology</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Technical Optimization</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We fix technical issues that prevent search engines from properly crawling and indexing your site.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Content Strategy</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Data-driven content planning that targets the right keywords and satisfies search intent.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Performance Analytics</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We track rankings, traffic, and conversions to continuously optimize your SEO strategy.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Local SEO</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Optimizing for local search results to drive more foot traffic and local customers.</p>
                        </div>
                    </div>
                </section>

                {/* Focus Areas Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        SEO <span className="text-secondary-700">Focus Areas</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* On-Page SEO */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">On-Page SEO</span>
                        </div>

                        {/* Technical SEO */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Technical SEO</span>
                        </div>

                        {/* Content Strategy */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Content Strategy</span>
                        </div>

                        {/* Local SEO */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Local SEO</span>
                        </div>

                        {/* E-commerce SEO */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <svg className="h-14 w-14 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">E-commerce SEO</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Dominate Search Rankings?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create an SEO strategy that drives qualified traffic and grows your business.
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

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "SEO Services Packages",
                    "description": "Professional SEO services including technical audits, ongoing optimization, and content strategy",
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

export default SEOServicesPage;