import React from "react";
import { Helmet } from "react-helmet";

const ContentCreationPage = () => {
    const tiers = [
        {
            name: "Starter Content Package",
            price: "$800-$1,500/month",
            bestFor: "Businesses needing basic content creation",
            features: [
                "4 blog articles OR 2 long-form pieces",
                "8 social media posts (copy + graphics)",
                "Basic photo editing (up to 10 images)",
                "1 simple video (up to 60 seconds)",
                "Content calendar",
                "1 platform focus (blog or 1 social channel)",
                "Monthly strategy call"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Growth Content Package",
            price: "$2,500-$4,000/month",
            bestFor: "Businesses scaling their content marketing",
            features: [
                "8 blog articles OR 4 long-form pieces",
                "16 social media posts (copy + graphics)",
                "Professional photo editing (up to 25 images)",
                "2-3 professional videos (up to 2 minutes each)",
                "Content strategy development",
                "Multi-platform distribution",
                "Basic SEO optimization",
                "Bi-weekly strategy calls",
                "Performance analytics report"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise Content Suite",
            price: "Contact Now",
            bestFor: "Large businesses with advanced content needs",
            features: [
                "Custom content volume (20+ pieces)",
                "Full social media management",
                "Professional photo shoots (on location)",
                "High-production video content",
                "Advanced SEO strategy",
                "Multi-channel content distribution",
                "Content repurposing system",
                "Weekly strategy calls",
                "Detailed analytics & optimization",
                "Dedicated content team"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

    const contentTypes = [
        {
            name: "Copywriting",
            description: "Compelling written content that engages your audience and drives action",
            examples: ["Blog posts", "Website copy", "Social media captions", "Email campaigns", "Whitepapers"]
        },
        {
            name: "Photography",
            description: "Professional images that showcase your brand and products",
            examples: ["Product photography", "Lifestyle shots", "Behind-the-scenes", "Event coverage", "Stock photo curation"]
        },
        {
            name: "Videography",
            description: "High-quality video content that tells your brand story",
            examples: ["Product demos", "Testimonials", "Explainer videos", "Social media shorts", "Live streaming"]
        },
        {
            name: "Graphic Design",
            description: "Visually appealing designs that reinforce your brand identity",
            examples: ["Social media graphics", "Infographics", "Presentations", "Digital ads", "Print materials"]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Content Creation | Professional Writing, Photography & Videography Services</title>
                <meta
                    name="description"
                    content="Comprehensive content creation services including writing, photography, and videography. Packages from $800 to $6,000+ per month."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Content <span className="text-secondary-700">Creation</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Professional content that engages your audience and grows your brand
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Content <span className="text-secondary-700">Packages</span>
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
                                            href={`#contact?package=content-${tier.name.toLowerCase().replace(' ', '-')}`}
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

                {/* Content Types */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Content <span className="text-secondary-700">Services</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contentTypes.map((type, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                                <div className="flex items-start mb-4">
                                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                                        {index === 0 && (
                                            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary-500">{type.name}</h3>
                                </div>
                                <p className="text-secondary-700 pl-14 mb-4">{type.description}</p>
                                <div className="pl-14">
                                    <h4 className="font-semibold text-secondary-800 mb-2">Examples:</h4>
                                    <ul className="flex flex-wrap gap-2">
                                        {type.examples.map((example, i) => (
                                            <li key={i} className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                                                {example}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Content Process */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our Content <span className="text-secondary-700">Process</span>
                    </h2>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-primary-200 transform -translate-x-1/2"></div>

                        {/* Timeline items */}
                        <div className="space-y-12 md:space-y-0">
                            {[
                                {
                                    title: "Strategy Development",
                                    description: "We analyze your audience, goals, and competitors to create a content strategy that delivers results",
                                    icon: (
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Content Planning",
                                    description: "We develop a content calendar aligned with your marketing goals and audience needs",
                                    icon: (
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Creation & Production",
                                    description: "Our team produces high-quality content tailored to your brand voice and style",
                                    icon: (
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Review & Refinement",
                                    description: "We collaborate with you to refine content before publication",
                                    icon: (
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Publishing & Distribution",
                                    description: "We ensure your content reaches the right audience through optimal channels",
                                    icon: (
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Performance Analysis",
                                    description: "We track results and optimize content based on performance data",
                                    icon: (
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    )
                                }
                            ].map((step, index) => (
                                <div key={index} className="relative md:flex md:items-center md:justify-between">
                                    {/* For even items */}
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="md:w-5/12 mb-4 md:mb-0">
                                                <div className="flex items-center">
                                                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                                                        {step.icon}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-primary-500">{step.title}</h3>
                                                </div>
                                                <p className="text-secondary-700 mt-2 ml-12">{step.description}</p>
                                            </div>
                                            <div className="hidden md:block md:w-2/12">
                                                <div className="mx-auto bg-primary-500 rounded-full h-6 w-6 flex items-center justify-center">
                                                    <div className="bg-white rounded-full h-3 w-3"></div>
                                                </div>
                                            </div>
                                            <div className="md:w-5/12"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="md:w-5/12"></div>
                                            <div className="hidden md:block md:w-2/12">
                                                <div className="mx-auto bg-primary-500 rounded-full h-6 w-6 flex items-center justify-center">
                                                    <div className="bg-white rounded-full h-3 w-3"></div>
                                                </div>
                                            </div>
                                            <div className="md:w-5/12 mt-4 md:mt-0">
                                                <div className="flex items-center">
                                                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                                                        {step.icon}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-primary-500">{step.title}</h3>
                                                </div>
                                                <p className="text-secondary-700 mt-2 ml-12">{step.description}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Elevate Your Content?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create compelling content that engages your audience and grows your business.
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
                    "name": "Content Creation Packages",
                    "description": "Professional content creation services including writing, photography, and videography",
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

export default ContentCreationPage;