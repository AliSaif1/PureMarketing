import React from "react";
import { Helmet } from "react-helmet";

const SocialMediaManagementPage = () => {
    const tiers = [
        {
            name: "Starter Social Package",
            price: "$500-$1,200/month",
            bestFor: "Small businesses starting with social media",
            features: [
                "2 social media platforms",
                "8 posts per month per platform",
                "Basic content creation",
                "Community engagement (5x/week)",
                "Monthly performance report",
                "Hashtag research",
                "Branded content calendar",
                "Weekly monitoring"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Growth Social Suite",
            price: "$1,500-$3,000/month",
            bestFor: "Businesses scaling their social presence",
            features: [
                "4 social media platforms",
                "12 posts per month per platform",
                "Premium content creation",
                "Daily community engagement",
                "Bi-weekly performance reports",
                "Competitor analysis",
                "Content strategy development",
                "Basic paid social ads management",
                "Influencer outreach (2/month)"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise Social Solution",
            price: "$4,000+/month",
            bestFor: "Large businesses with comprehensive social needs",
            features: [
                "All relevant social platforms",
                "Unlimited posts (strategic frequency)",
                "Premium custom content creation",
                "24/7 community engagement",
                "Weekly performance deep dives",
                "Advanced competitor analysis",
                "Full-funnel social strategy",
                "Comprehensive paid social management",
                "Influencer marketing program",
                "Crisis management",
                "Dedicated account manager"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

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

                {/* Management Features */}
                <section className="mb-20">
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
                </section>

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