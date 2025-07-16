import { Link } from "react-router-dom";
import teamMembers from "../data/team";

export default function About() {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section - Modern Redesign */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden mt-2">
                {/* YouTube Video Background with iframe */}
                <div className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 sm:w-[100vw] sm:h-[56.25vw] sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0">
                    {/* This wrapper div blocks all interactions */}
                    <div className="absolute inset-0 pointer-events-none z-10"></div>

                    <video
                        src="/header_video.mp4"
                        title="Background Video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full pointer-events-none"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                            Crafting <span className="text-primary-500">Digital</span> Excellence
                        </h1>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-600 transition-all hover:shadow-xl transform hover:scale-105"
                            >
                                Explore Our Services
                                <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link
                                to="/#cta"
                                className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-white/10 transition-all hover:shadow-xl transform hover:scale-105"
                            >
                                Free Meeting
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-fade-in-left">
                        <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">Our Journey</span>
                        <h2 className="text-4xl font-bold text-secondary-800 mt-2 mb-6">
                            Redefining <span className="text-primary-500">Digital Marketing</span>
                        </h2>
                        <div className="space-y-4 text-secondary-600">
                            <p>
                                Founded in 2015, PureMarketing began with a vision to transform the digital landscape through transparent, results-driven strategies.
                            </p>
                            <p>
                                Today, we stand as a premier full-service agency, but our core commitment remains unchanged: delivering measurable impact, not just metrics.
                            </p>
                            <p>
                                Our approach combines cutting-edge technology with creative excellence to drive sustainable growth for our clients.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/services"
                                className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all transform hover:scale-105"
                            >
                                Explore Our Services
                            </Link>
                            <Link
                                to="/portfolio"
                                className="rounded-full bg-white border border-gray-200 px-6 py-3 text-sm font-semibold text-secondary-700 shadow-sm hover:bg-gray-50 transition-all transform hover:scale-105"
                            >
                                View Projects
                            </Link>
                        </div>
                    </div>
                    <div className="animate-fade-in-right">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100/20 rounded-xl p-3 mr-4">
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-800">Our Mission</h3>
                                        <p className="text-secondary-600 mt-2">
                                            To empower businesses with innovative digital solutions that drive sustainable growth and deliver exceptional ROI through data-driven strategies.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100/20 rounded-xl p-3 mr-4">
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-800">Our Vision</h3>
                                        <p className="text-secondary-600 mt-2">
                                            To be the catalyst for digital transformation, setting new standards in marketing excellence through creativity, technology, and measurable results.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100/20 rounded-xl p-3 mr-4">
                                        <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-secondary-800">Our Values</h3>
                                        <p className="text-secondary-600 mt-2">
                                            Integrity, innovation, and impact guide every decision we make. We believe in transparency, collaboration, and pushing boundaries to achieve extraordinary outcomes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl py-12 shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="animate-fade-in">
                        <div className="text-4xl font-bold text-white">150+</div>
                        <div className="mt-2 text-primary-100 font-medium">Satisfied Clients</div>
                    </div>
                    <div className="animate-fade-in animation-delay-100">
                        <div className="text-4xl font-bold text-white">95%</div>
                        <div className="mt-2 text-primary-100 font-medium">Client Retention</div>
                    </div>
                    <div className="animate-fade-in animation-delay-200">
                        <div className="text-4xl font-bold text-white">10M+</div>
                        <div className="mt-2 text-primary-100 font-medium">Revenue Generated</div>
                    </div>
                    <div className="animate-fade-in animation-delay-300">
                        <div className="text-4xl font-bold text-white">25</div>
                        <div className="mt-2 text-primary-100 font-medium">Industry Awards</div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-16 animate-fade-in">
                    <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">Our Experts</span>
                    <h2 className="text-4xl font-bold text-secondary-800 mt-2">Meet The <span className="text-primary-500">Team</span></h2>
                    <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
                        A diverse team of strategists, creatives, and technologists united by a passion for results.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="aspect-square bg-gray-100 relative overflow-hidden group">
                                {/* Placeholder for team member images */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                    <span className="text-6xl">{member.emoji}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-secondary-800">{member.name}</h3>
                                <p className="text-primary-600 mt-1">{member.position}</p>
                                <p className="text-secondary-600 mt-3 text-sm">{member.bio}</p>
                                <div className="mt-4 flex space-x-4">
                                    {member.socials.twitter && (
                                        <a
                                            href={member.socials.twitter}
                                            className="text-secondary-400 hover:text-primary-500 transition-colors"
                                            aria-label={`${member.name}'s Twitter`}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            className="text-secondary-400 hover:text-primary-500 transition-colors"
                                            aria-label={`${member.name}'s LinkedIn`}
                                        >
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
                <div className="text-center mb-12 animate-fade-in">
                    <span className="text-primary-500 font-semibold uppercase tracking-wider text-sm">Collaborations</span>
                    <h2 className="text-4xl font-bold text-secondary-800 mt-2">Trusted <span className="text-primary-500">Partners</span></h2>
                    <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
                        We're proud to collaborate with industry leaders and innovative startups alike.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center shadow-lg animate-fade-in-up">
                    {[
                        "Company 1",
                        "Company 2",
                        "Company 3",
                        "Company 4",
                        "Company 5"
                    ].map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center h-16 text-secondary-400 font-medium hover:text-primary-500 transition-colors"
                        >
                            {company}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl p-12 text-center shadow-xl relative overflow-hidden animate-fade-in">
                    <div className="absolute inset-0 bg-noise opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your digital presence?</h2>
                        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to create something extraordinary for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/#cta"
                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
                            >
                                Get a Free Consultation
                            </Link>
                            <Link
                                to="/careers"
                                className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-white px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                Join Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}