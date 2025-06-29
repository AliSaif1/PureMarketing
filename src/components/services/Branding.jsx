import React from "react";
import { Helmet } from "react-helmet";

const GoogleMetaAdsPage = () => {
    const tiers = [
        {
            name: "Starter Ads Suite",
            price: "$500-$800/month",
            bestFor: "Small businesses starting with digital advertising",
            features: [
                "1 platform (Google OR Meta)",
                "3 ad creatives per month",
                "1 campaign structure",
                "Basic audience targeting",
                "Monthly performance report",
                "Ad copywriting & optimization",
                "Weekly monitoring"
            ],
            popular: false,
            highlightColor: "primary-500"
        },
        {
            name: "Growth Ads Suite",
            price: "$1200-$2000/month",
            bestFor: "Businesses scaling their digital advertising",
            features: [
                "2 platforms (Google AND Meta)",
                "5 ad creatives per month",
                "3 campaign structures",
                "Advanced audience targeting",
                "Bi-weekly performance reports",
                "A/B testing of creatives",
                "Conversion tracking setup",
                "Daily monitoring"
            ],
            popular: true,
            highlightColor: "primary-500"
        },
        {
            name: "Enterprise Ads Suite",
            price: "$3000+/month",
            bestFor: "Large businesses with complex advertising needs",
            features: [
                "Multi-platform (Google, Meta, LinkedIn, etc.)",
                "Unlimited ad creatives",
                "Custom campaign structures",
                "AI-powered audience targeting",
                "Weekly performance deep dives",
                "Full-funnel strategy",
                "Landing page optimization",
                "24/7 monitoring & optimization"
            ],
            popular: false,
            highlightColor: "primary-500"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Google & Meta Ads | Professional Paid Advertising Services</title>
                <meta
                    name="description"
                    content="Professional Google Ads and Meta Ads management services. From starter packages ($500) to enterprise solutions ($3000+)."
                />
            </Helmet>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4">
                        Google & Meta <span className="text-secondary-700">Ads</span>
                    </h1>
                    <p className="text-xl text-secondary-500 max-w-2xl mx-auto">
                        Data-driven advertising strategies that deliver measurable results
                    </p>
                </section>

                {/* Pricing Cards */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
                        Advertising <span className="text-secondary-700">Packages</span>
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
                                            href={`#contact?package=ads-${tier.name.toLowerCase().replace(' ', '-')}`}
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

                {/* Advertising Features */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Our Advertising <span className="text-secondary-700">Approach</span>
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
                            <p className="text-secondary-700 pl-14">We base all decisions on performance data, constantly optimizing your campaigns for maximum ROI.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Performance Optimization</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Continuous testing and refinement of ad creatives, targeting, and bidding strategies to improve results.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary-500">
                            <div className="flex items-start mb-4">
                                <div className="bg-primary-100 p-3 rounded-full mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary-500">Conversion Tracking</h3>
                            </div>
                            <p className="text-secondary-700 pl-14">Proper setup of conversion tracking to measure what matters - leads, sales, and revenue.</p>
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
                            <p className="text-secondary-700 pl-14">We focus on driving profitable customer acquisition, not just clicks or impressions.</p>
                        </div>
                    </div>
                </section>

                {/* Platforms Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-primary-500 mb-12">
                        Advertising <span className="text-secondary-700">Platforms</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Google Ads */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/google-ads.svg" alt="Google Ads" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Google Ads</span>
                        </div>

                        {/* Meta Ads */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/meta-ads.svg" alt="Meta Ads" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Meta Ads</span>
                        </div>

                        {/* LinkedIn Ads */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/linkedin-ads.svg" alt="LinkedIn Ads" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">LinkedIn Ads</span>
                        </div>

                        {/* TikTok Ads */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/tiktok-ads.svg" alt="TikTok Ads" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">TikTok Ads</span>
                        </div>

                        {/* YouTube Ads */}
                        <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/youtube-ads.svg" alt="YouTube Ads" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">YouTube Ads</span>
                        </div>

                        {/* Display & Video 360 */}
                        {/* <div className="flex flex-col items-center group">
                            <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                                <img src="/tech-icons/dv360.svg" alt="Display & Video 360" className="w-14 h-14" />
                            </div>
                            <span className="mt-2 font-medium text-secondary-700">Display & Video 360</span>
                        </div> */}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center rounded-xl overflow-hidden shadow-xl mb-20">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Scale Your Business with Ads?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's create a high-performing advertising strategy tailored to your business goals.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#contact"
                                className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-bold transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get Started
                            </a>
                            {/* <a
                                href="#pricing"
                                className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-lg font-bold transition-colors"
                            >
                                View Packages
                            </a> */}
                        </div>
                    </div>
                    {/* <div className="bg-white p-6">
                        <p className="text-secondary-600 mb-2">Have questions about advertising?</p>
                        <a href="tel:+1234567890" className="text-primary-600 font-semibold hover:text-primary-700">
                            <svg className="inline-block h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call us: (123) 456-7890
                        </a>
                    </div> */}
                </section>
            </main>

            {/* Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Google & Meta Ads Packages",
                    "description": "Professional advertising management services for Google and Meta platforms",
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

export default GoogleMetaAdsPage;