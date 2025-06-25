import { Link } from "react-router-dom";
import teamMembers from "../data/team"; // You'll need to create this data file

export default function About() {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tight text-secondary-800 sm:text-6xl">
                            Our <span className="text-primary-500">Story</span> & Values
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
                            We're more than just a marketing agency - we're your strategic partner in digital growth.
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:64px_64px] opacity-10"></div>
            </section>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary-800 mb-6">
                            Why <span className="text-primary-500">PureMarketing</span> Exists
                        </h2>
                        <p className="text-secondary-600 mb-4">
                            Founded in 2015, we started with a simple idea: marketing should be transparent, measurable, and actually work for businesses of all sizes.
                        </p>
                        <p className="text-secondary-600 mb-4">
                            Today, we've grown into a full-service digital agency, but that core principle remains. We're obsessed with delivering real results, not just vanity metrics.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/services"
                                className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-secondary-800">Our Mission</h3>
                                    <p className="text-secondary-600 mt-1">
                                        Empower businesses with strategic digital solutions that drive sustainable growth and measurable success.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-secondary-800">Our Vision</h3>
                                    <p className="text-secondary-600 mt-1">
                                        To redefine digital marketing by combining creativity with data-driven strategies that deliver exceptional ROI.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-secondary-800">Our Values</h3>
                                    <p className="text-secondary-600 mt-1">
                                        Integrity, innovation, and impact guide every decision we make and every strategy we implement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary-800">Meet Our <span className="text-primary-500">Team</span></h2>
                    <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
                        The passionate professionals behind your success
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                {/* Replace with actual team member images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                                    <span className="text-4xl text-secondary-600">{member.emoji}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-secondary-800">{member.name}</h3>
                                <p className="text-primary-600 mt-1">{member.position}</p>
                                <p className="text-secondary-600 mt-3 text-sm">{member.bio}</p>
                                <div className="mt-4 flex space-x-4">
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} className="text-secondary-400 hover:text-primary-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} className="text-secondary-400 hover:text-primary-500">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Clients/Partners Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary-800">Our <span className="text-primary-500">Partners</span></h2>
                    <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
                        Trusted by innovative companies across industries
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                    {[
                        "Company 1",
                        "Company 2",
                        "Company 3",
                        "Company 4",
                        "Company 5"
                    ].map((company, index) => (
                        <div key={index} className="flex items-center justify-center h-16 text-secondary-400 font-medium">
                            {company}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Want to join our team?</h2>
                    <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals to join our growing team.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                    >
                        View Open Positions
                    </Link>
                </div>
            </section>
        </div>
    );
}