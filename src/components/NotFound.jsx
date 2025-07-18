import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-secondary-50">
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24">
                <div className="max-w-2xl mx-auto">
                    {/* Error number with animated gradient */}
                    <div className="text-8xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text text-transparent animate-gradient">
                        404
                    </div>

                    {/* Main heading */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
                        Page Not Found
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-secondary-600 mb-8">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200"
                        >
                            Return Home
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-secondary-300 bg-white hover:bg-secondary-100 text-secondary-700 font-medium rounded-lg shadow-sm transition-colors duration-200"
                        >
                            Contact Support
                        </Link>
                    </div>

                    {/* Additional help */}
                    <div className="mt-12 border-t border-secondary-200 pt-8">
                        <h2 className="text-lg font-medium text-secondary-900 mb-4">
                            Need more help?
                        </h2>
                        <div className="flex justify-center space-x-6">
                            <Link
                                to="/about"
                                className="text-primary-600 hover:text-primary-800 font-medium"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/services"
                                className="text-primary-600 hover:text-primary-800 font-medium"
                            >
                                Our Services
                            </Link>
                            <Link
                                to="/portfolio"
                                className="text-primary-600 hover:text-primary-800 font-medium"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFoundPage;