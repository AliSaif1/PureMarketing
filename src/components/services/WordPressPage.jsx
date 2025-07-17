import React from "react";
import { Helmet } from "react-helmet";

const WordPressDevelopmentPage = () => {
    const tiers = [
        {
            name: "Starter Site",
            price: "$349",
            bestFor: "Small businesses or bloggers needing a simple WordPress site",
            features: [
                "4-5 standard pages",
                "Premium theme installation",
                "1 design revision",
                "10 business day delivery",
                "Mobile-responsive design",
                "Basic SEO setup",
                "1-month technical support"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Business Site",
            price: "$649",
            bestFor: "Growing businesses needing professional WordPress solutions",
            features: [
                "7-10 custom pages",
                "Custom theme development",
                "3 design revisions",
                "15 business day delivery",
                "Advanced SEO optimization",
                "Essential plugins (security, caching)",
                "3-month support"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "WordPress E-Commerce",
            price: "$1,199",
            bestFor: "Online stores and businesses needing WooCommerce solutions",
            features: [
                "10-15 custom pages",
                "WooCommerce integration",
                "5+ design revisions",
                "Custom payment gateway setup",
                "Product catalog setup",
                "Ongoing SEO strategy",
                "6-month premium support"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

    return (
        <>
            <Helmet>
                <title>WordPress Development | Professional WordPress Websites</title>
                <meta
                    name="description"
                    content="Professional WordPress development services. From basic sites ($500) to e-commerce solutions ($2000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        WordPress <span className="text-secondary-700">Development</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Powerful, flexible WordPress websites that grow with your business
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        WordPress <span className="text-secondary-700">Packages</span>
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
                                            href={`#contact?package=wordpress-${tier.name.toLowerCase().replace(' ', '-')}`}
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

                {/* WordPress Features - Improved UI */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Why Choose Our <span className="text-secondary-700">WordPress Services</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Custom Themes</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We build custom WordPress themes tailored to your brand, ensuring your site stands out while maintaining all the benefits of WordPress.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Maintenance and Support</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Need continuous support? We provide maintenance support after the delivery of site for your requirements.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">WooCommerce</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Full e-commerce solutions with WooCommerce, including payment gateway integration, product management, and more.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Performance Optimization</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">We optimize your WordPress site for speed, ensuring fast load times and excellent user experience.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section - Improved UI */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready for Your WordPress Site?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's build a powerful WordPress website that's easy to manage and grows with your business.
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
                    "name": "WordPress Development Packages",
                    "description": "Professional WordPress development and customization services",
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

export default WordPressDevelopmentPage;