import React from "react";
import { Helmet } from "react-helmet";

const CustomWebDevelopmentPage = () => {
    const tiers = [
        {
            name: "Starter",
            price: "$800-$1200",
            bestFor: "Small businesses needing unique design and functionality",
            features: [
                "5 custom-designed pages",
                "2 design revisions",
                "10 business day delivery",
                "Mobile-responsive design",
                "Basic SEO setup",
                "Custom contact form",
                "1-month technical support"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Business",
            price: "$1500-$2500",
            bestFor: "Businesses requiring complex functionality and design",
            features: [
                "8-10 custom pages",
                "4 design revisions",
                "15 business day delivery",
                "Custom JavaScript functionality",
                "API integrations",
                "Performance optimization (90+ PageSpeed)",
                "3-month support"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise",
            price: "Contact Now",
            bestFor: "Complex applications, web apps, or large-scale projects",
            features: [
                "Unlimited custom pages",
                "Unlimited design revisions",
                "Flexible timeline",
                "Custom backend development",
                "Database integration",
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
                <title>Custom Web Development | Tailored Solutions for Your Business</title>
                <meta
                    name="description"
                    content="Professional custom web development services with tailored solutions. From basic sites ($800) to complex web applications ($3000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Custom Web <span className="text-secondary-700">Development</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Tailored solutions built from scratch to match your exact requirements
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Custom Development <span className="text-secondary-700">Packages</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${tier.popular ? 'transform hover: border-2 border-primary-500' : 'hover: border border-secondary-200'}`}
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
                                            href={`#contact?package=custom-${tier.name.toLowerCase().replace(' ', '-')}`}
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

                {/* Technology Stack */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our <span className="text-secondary-700">Tech Stack</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* React */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/react.svg" alt="React" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">React</span>
                        </div>

                        {/* Next.js */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/nextjs.svg" alt="Next.js" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Next.js</span>
                        </div>

                        {/* Node.js */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/nodejs.svg" alt="Node.js" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Node.js</span>
                        </div>

                        {/* Express */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/express.svg" alt="Express" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Express</span>
                        </div>

                        {/* Django */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/django.svg" alt="Next.js" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Django</span>
                        </div>

                        {/* MongoDB */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/mongodb.svg" alt="MongoDB" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">MongoDB</span>
                        </div>

                        {/* Firebase */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/firebase.svg" alt="Firebase" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Firebase</span>
                        </div>

                        {/* MySQL */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/mysql.svg" alt="MySQL" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">MySQL</span>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let's discuss your unique requirements and build something exceptional.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg"
                    >
                        Get a Free Consultation
                    </a>
                </section>
            </main>

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Custom Web Development Packages",
                    "description": "Tailored web development solutions built from scratch",
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

export default CustomWebDevelopmentPage;