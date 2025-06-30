import { Link } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import { ArrowRightIcon, BriefcaseIcon, ChartBarIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function CaseStudies() {
    const featuredProjects = caseStudies.slice(0, 10);
    const topProjects = featuredProjects.slice(0, 7);
    const otherProjects = featuredProjects.slice(7, 10);

    const stats = [
        { value: "50+", label: "Clients Served" },
        { value: "100%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" },
        { value: "5+", label: "Years Experience" },
    ];

    const services = [
        {
            icon: <LightBulbIcon className="w-8 h-8 text-primary-500" />,
            title: "Creative Strategy",
            description: "Innovative solutions tailored to your brand's unique needs"
        },
        {
            icon: <BriefcaseIcon className="w-8 h-8 text-primary-500" />,
            title: "Brand Development",
            description: "Comprehensive branding from identity to market positioning"
        },
        {
            icon: <ChartBarIcon className="w-8 h-8 text-primary-500" />,
            title: "Data-Driven Design",
            description: "Metrics-focused approach to maximize engagement"
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section
                className="relative text-white overflow-hidden min-h-[80vh] mt-2"
                id="hero"
            >
                {/* YouTube Background Video */}
                <div className="absolute top-1/2 left-1/2 w-[177.78vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 sm:w-[100vw] sm:h-[56.25vw] sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0">
                    <div className="absolute inset-0 pointer-events-none z-10" />
                    <iframe
                        src="https://www.youtube.com/embed/oxDZFqhhemw?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&showinfo=0&playlist=oxDZFqhhemw&disablekb=1&fs=0&iv_load_policy=3"
                        title="Background Video"
                        frameBorder="0"
                        allow="autoplay"
                        className="w-full h-full pointer-events-none"
                    />
                </div>

                {/* Foreground Content */}
                <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 lg:px-8">
                    <div className="text-center max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Professional Portfolio
                        </h1>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#projects"
                                className="rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 transition-all"
                            >
                                View My Work
                            </a>
                            <Link
                                to="/#cta"
                                className="rounded-md border border-white text-sm font-semibold leading-6 px-6 py-2 text-white flex items-center gap-1 hover:text-primary-200 transition-colors"
                            >
                                Free Meeting <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Stats Section */}
            <section className="bg-secondary-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-4xl font-bold text-primary-600">{stat.value}</p>
                                <p className="mt-2 text-lg font-medium text-secondary-700">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                            Professional Services
                        </h2>
                        <p className="mt-4 text-lg text-secondary-600">
                            Comprehensive solutions tailored to your business needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-secondary-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{service.title}</h3>
                                <p className="text-secondary-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 sm:py-20 bg-secondary-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-secondary-800 sm:text-5xl">
                            Featured <span className="text-primary-500">Projects</span>
                        </h2>
                        <p className="mt-4 text-xl text-secondary-600">
                            Where strategic vision meets flawless execution
                        </p>
                    </div>

                    {/* Custom Grid Layout for Top 7 Projects */}
                    <div className="grid grid-cols-1 gap-6 mb-16">
                        {/* First row with main + side projects */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Main featured project (left) */}
                            <div className="md:col-span-2 lg:h-[400px]">
                                <ProjectCard
                                    project={topProjects[0]}
                                    className="h-[410px]"
                                    titleSize="text-3xl"
                                />
                            </div>

                            {/* Side projects (right) */}
                            <div className="grid grid-rows-2 gap-6 h-[400px]">
                                {topProjects.slice(1, 3).map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        className="h-[200px]"
                                        titleSize="text-xl"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Second row with full-width project */}
                        <div className="h-[300px] lg:h-[400px]">
                            <ProjectCard
                                project={topProjects[3]}
                                className="h-full"
                                titleSize="text-2xl"
                            />
                        </div>

                        {/* Third row with side projects on left and main on right */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Side projects (left) */}
                            <div className="grid grid-rows-2 gap-6 h-[400px] order-1 md:order-1">
                                {topProjects.slice(4, 6).map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        className="h-[200px]"
                                        titleSize="text-xl"
                                    />
                                ))}
                            </div>

                            {/* Main featured project (right) */}
                            <div className="md:col-span-2 lg:h-[400px] order-2 md:order-2">
                                <ProjectCard
                                    project={topProjects[6]}
                                    className="h-[410px]"
                                    titleSize="text-3xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Simple Grid for Remaining Projects */}
                    {otherProjects.length > 0 && (
                        <div className="mx-auto max-w-3xl text-center mb-8">
                            <h3 className="text-2xl font-semibold text-secondary-700">
                                Additional Case Studies
                            </h3>
                            <p className="mt-2 text-secondary-500">Selected professional engagements</p>
                        </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <SimpleProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="bg-primary-600 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to elevate your project?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-primary-100">
                            Let's discuss how we can create something exceptional together.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-sm hover:bg-secondary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                to="/about"
                                className="rounded-md border border-white text-sm font-semibold leading-6 px-6 py-2 text-white flex items-center gap-1 hover:text-primary-200 transition-colors"
                            >
                                Learn More <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Enhanced Project Card Component
function ProjectCard({ project, className = "", titleSize = "text-2xl" }) {
    return (
        <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl ${className}`}>
            <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
            >
                <div className="relative h-full w-full">
                    <img
                        src={project.image}
                        alt={project.client}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="overflow-hidden">
                            <h3 className={`font-bold text-white ${titleSize} translate-y-0 group-hover:-translate-y-2 transition-all duration-300`}>
                                {project.client}
                            </h3>
                            {project.tags && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs font-medium px-2 py-1 bg-primary-500/90 text-white rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="mt-3 w-full h-0.5 bg-gray-600/50 overflow-hidden">
                            <div className="w-0 h-full bg-primary-400 transition-all duration-500 group-hover:w-full" />
                        </div>
                        {project.description && (
                            <p className="mt-3 text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                {project.description}
                            </p>
                        )}
                    </div>

                    {/* Hover accent */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400/50 transition-all duration-500" />
                </div>
            </Link>
        </div>
    );
}

// Enhanced Simple Project Card Component
function SimpleProjectCard({ project }) {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-secondary-100 transition-all duration-300 hover:shadow-md hover:border-primary-300">
            <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
            >
                <div className="relative aspect-video">
                    <img
                        src={project.image}
                        alt={project.client}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent" />
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-secondary-800 group-hover:text-primary-600 transition-colors">
                            {project.client}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            Case Study
                        </span>
                    </div>
                    {project.description && (
                        <p className="mt-2 text-sm text-secondary-600 line-clamp-2">
                            {project.description}
                        </p>
                    )}
                    {project.tags && (
                        <div className="mt-3 flex flex-wrap gap-1">
                            {project.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="text-xs px-2 py-1 bg-secondary-100 text-secondary-600 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}