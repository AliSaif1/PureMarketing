import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const linkClass = (path) =>
        `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${
            pathname === path
                ? "bg-primary-500 text-white shadow-md"
                : "text-secondary-600 hover:bg-primary-100 hover:text-primary-600 transform hover:-translate-y-0.5"
        }`;

    const mobileLinkClass = (path) =>
        `block px-4 py-3 text-base font-medium rounded-md ${
            pathname === path
                ? "bg-primary-500 text-white"
                : "text-secondary-600 hover:bg-primary-100 hover:text-primary-600"
        }`;

    return (
        <nav className="bg-white sticky top-0 z-50 rounded-full shadow-xl border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand/Logo with hover effect */}
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-wide hover:text-primary-500 transition-colors duration-300"
                    >
                        <span className="text-primary-500">Pure</span>
                        <span className="text-secondary-600">Marketing</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-2">
                        <Link
                            to="/"
                            className={linkClass("/")}
                            aria-current={pathname === "/" ? "page" : undefined}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={linkClass("/about")}
                            aria-current={pathname === "/about" ? "page" : undefined}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className={linkClass("/services")}
                            aria-current={pathname === "/services" ? "page" : undefined}
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            className={linkClass("/portfolio")}
                            aria-current={pathname === "/portfolio" ? "page" : undefined}
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/contact"
                            className={linkClass("/contact")}
                            aria-current={pathname === "/contact" ? "page" : undefined}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-secondary-600 hover:text-primary-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            to="/"
                            className={mobileLinkClass("/")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={pathname === "/" ? "page" : undefined}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={mobileLinkClass("/about")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={pathname === "/about" ? "page" : undefined}
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className={mobileLinkClass("/services")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={pathname === "/services" ? "page" : undefined}
                        >
                            Services
                        </Link>
                        <Link
                            to="/portfolio"
                            className={mobileLinkClass("/portfolio")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={pathname === "/portfolio" ? "page" : undefined}
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/contact"
                            className={mobileLinkClass("/contact")}
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-current={pathname === "/contact" ? "page" : undefined}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}