import { useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/home/Testimonials';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pb-20">
            {/* Hero Section - Increased height */}
            <section className="relative bg-gradient-to-r from-primary-700 to-primary-500 py-32 sm:py-40 overflow-hidden mt-2">
                {/* Noise layer */}
                <div className="absolute inset-0 bg-noise opacity-10 z-10"></div>

                {/* YouTube video background */}
                <div className="absolute top-1/2 left-1/2 w-[177.78vh] h-[150vh] -translate-x-1/2 -translate-y-1/2 sm:w-[100vw] sm:h-[56.25vw] sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0">
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
                <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                            Let's <span className="text-primary-500">Connect</span>
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                            Get in touch with our team to discuss your project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-w-5xl mx-auto px-6 sm:px-8 -mt-16 relative z-20 mb-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 sm:p-10">
                    <h2 className="text-3xl font-bold text-secondary-800 mb-2">
                        Contact Us
                    </h2>
                    <p className="text-secondary-600 mb-8">
                        Fill out the form and we'll get back to you within 24 hours.
                    </p>

                    {submitSuccess ? (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="mt-3 text-lg font-medium text-green-800">Thank you for your message!</h3>
                            <p className="mt-2 text-sm text-green-600">
                                We've received your inquiry and will contact you soon.
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => setSubmitSuccess(false)}
                                    className="rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                >
                                    Send another message
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border mt-1"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-secondary-700">
                                    Service Interest
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border mt-1"
                                >
                                    <option value="">Select a service</option>
                                    <option value="seo">SEO & Content Marketing</option>
                                    <option value="ppc">PPC & Paid Advertising</option>
                                    <option value="social">Social Media Marketing</option>
                                    <option value="web">Web Design & Development</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border mt-1"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex justify-center items-center rounded-full bg-primary-600 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* Testimonials Component */}
            <Testimonials />

            {/* Final CTA */}
            <section className="max-w-6xl mx-auto px-6 sm:px-8 mt-24 mb-10">
                <div className="relative bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 text-center shadow-2xl overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-10 z-0"></div>
                    <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10"></div>
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Transform Your <span className="text-accent-300">Digital Presence</span> Today
                        </h2>
                        <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
                            Join hundreds of successful businesses who've scaled with us.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-primary-600 shadow-lg hover:bg-gray-50 hover:scale-105 transform transition-all duration-300"
                            >
                                Explore Services
                                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center justify-center rounded-full bg-transparent border-2 border-white px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-white/10 hover:scale-105 transform transition-all duration-300"
                            >
                                See Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}