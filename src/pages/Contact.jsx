import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-primary-700 to-primary-500 py-24 sm:py-32 overflow-hidden mt-2">
                {/* Noise layer */}
                <div className="absolute inset-0 bg-noise opacity-10 z-10"></div>

                {/* YouTube video background */}
                <div className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 sm:w-[100vw] sm:h-[56.25vw] sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0">
                    {/* This wrapper div blocks all interactions */}
                    <div className="absolute inset-0 pointer-events-none z-10"></div>

                    <iframe
                        src="https://www.youtube.com/embed/oxDZFqhhemw?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=oxDZFqhhemw&disablekb=1&fs=0&iv_load_policy=3"
                        title="Background Video"
                        frameBorder="0"
                        allow="autoplay"
                        className="w-full h-full pointer-events-none" // Added here too for double protection
                    />
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Let's <span className="text-primary-500">Grow</span> Your Business
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                            Schedule your free consultation with our digital marketing experts today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form Column */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="p-8 sm:p-10">
                            <h2 className="text-3xl font-bold text-secondary-800 mb-2">
                                Get in Touch
                            </h2>
                            <p className="text-secondary-600 mb-8">
                                Complete this form and we'll contact you within 24 hours to discuss your project.
                            </p>

                            {submitSuccess ? (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="mt-3 text-lg font-medium text-green-800">Thank you for your inquiry!</h3>
                                    <p className="mt-2 text-sm text-green-600">
                                        We've received your message and will contact you within 24 hours. In the meantime, check out our <Link to="/services" className="font-medium text-green-700 hover:text-green-600">services</Link>.
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
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-secondary-700">
                                            Company Name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
                                            Phone Number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-secondary-700">
                                            Service Interest <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="seo">SEO & Content Marketing</option>
                                                <option value="ppc">PPC & Paid Advertising</option>
                                                <option value="social">Social Media Marketing</option>
                                                <option value="web">Web Design & Development</option>
                                                <option value="branding">Branding & Creative</option>
                                                <option value="strategy">Digital Strategy</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                                            How Can We Help You? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={7}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-3 px-4 border"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            id="privacy-policy"
                                            name="privacy-policy"
                                            type="checkbox"
                                            required
                                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        />
                                        <label htmlFor="privacy-policy" className="ml-2 block text-sm text-secondary-600">
                                            I agree to the <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-500">Privacy Policy</Link>
                                        </label>
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
                                                'Request Free Consultation'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="space-y-8">
                        {/* Value Proposition */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-secondary-800 mb-4">Why Work With Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mr-4">
                                        <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-secondary-600">150+ successful client projects completed</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mr-4">
                                        <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-secondary-600">95% client retention rate</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mr-4">
                                        <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-secondary-600">Industry-leading 3-5x average ROI</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-2 mr-4">
                                        <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-secondary-600">Dedicated account manager for every client</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Methods */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-secondary-800 mb-6">Other Ways to Connect</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                                        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-secondary-800">Call Us</h4>
                                        <p className="text-secondary-600 mt-1">
                                            <a href="tel:+16479512786" className="hover:text-primary-600 transition-colors">+1 647-951-2786</a>
                                        </p>
                                        <p className="text-sm text-secondary-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                                        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-secondary-800">Email Us</h4>
                                        <p className="text-secondary-600 mt-1">
                                            <a href="mailto:info@puremarketing.com" className="hover:text-primary-600 transition-colors">info@puremarketing.com</a>
                                        </p>
                                        <p className="text-sm text-secondary-500 mt-1">Response within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-primary-100 rounded-full p-3 mr-4">
                                        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-secondary-800">Visit Us</h4>
                                        <p className="text-secondary-600 mt-1">144 Potruff Road N, Hamilton,</p>
                                        <p className="text-secondary-600">ON L8H 2M3, Canada</p>
                                        <p className="text-sm text-secondary-500 mt-1">By appointment only</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="bg-gradient-to-r from-primary-500 to-accent-400 rounded-2xl p-8 text-white shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Our Guarantee</h3>
                            <p className="mb-4">
                                We're so confident in our services that we offer a <span className="font-semibold">30-day risk-free trial</span> on all our marketing packages.
                            </p>
                            <p>
                                Not satisfied? We'll refund your investment, no questions asked.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-secondary-800">What Our <span className="text-primary-500">Clients</span> Say</h2>
                    <p className="mt-4 text-secondary-600 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from businesses we've helped grow.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "PureMarketing transformed our digital presence. Our leads increased by 300% within 6 months of working with them.",
                            author: "Sarah Johnson",
                            position: "CEO, TechStart Inc.",
                            avatar: "SJ"
                        },
                        {
                            quote: "The team's strategic approach to our PPC campaigns reduced our CAC by 40% while doubling our conversions.",
                            author: "Michael Chen",
                            position: "Marketing Director, RetailPro",
                            avatar: "MC"
                        },
                        {
                            quote: "Exceptional service and measurable results. They've become an extension of our marketing team.",
                            author: "David Rodriguez",
                            position: "Founder, FoodieDelight",
                            avatar: "DR"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-secondary-600 italic mb-6">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-primary-100 rounded-full h-12 w-12 flex items-center justify-center text-primary-600 font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div className="ml-4">
                                    <div className="font-medium text-secondary-800">{testimonial.author}</div>
                                    <div className="text-sm text-secondary-500">{testimonial.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-20">
                <div className="bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl p-12 text-center shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Have an Idea? Let’s Build It Together.
                        </h2>
                        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                            Get expert insights, technical guidance, and a clear direction for your project — all in a free strategy session.
                        </p>
                        <Link
                            to="/#cta"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
                        >
                            Schedule Free Meeting
                            <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}