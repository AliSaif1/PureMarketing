import { Link } from "react-router-dom";
import caseStudies from "../../data/caseStudies";

export default function CaseStudies() {
  const featuredProjects = caseStudies.slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-secondary-800 sm:text-5xl">
            Featured <span className="text-primary-500">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-secondary-600">
            Where creativity meets execution
          </p>
        </div>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-1 gap-6">
          {/* First row with main + side projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main featured project (left) */}
            <div className="md:col-span-2 lg:h-[400px]"> {/* 300px + 300px + 24px gap */}
              <ProjectCard
                project={featuredProjects[0]}
                className="h-[410px]"
                titleSize="text-3xl"
              />
            </div>

            {/* Side projects (right) */}
            <div className="grid grid-rows-2 gap-6 h-[400px]">
              {featuredProjects.slice(1, 3).map((project) => (
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
          {/* <div className="h-[300px] lg:h-[400px]">
            <ProjectCard
              project={featuredProjects[3]}
              className="h-full"
              titleSize="text-2xl"
            />
          </div> */}
        </div>

        {caseStudies.length > 3 && (
          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-full text-white bg-primary-500 hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Explore All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, className = "", titleSize = "text-2xl" }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-lg ${className}`}>
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
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />

          {/* Title with creative reveal */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="overflow-hidden">
              <h3 className={`font-bold text-white ${titleSize} translate-y-0 group-hover:-translate-y-2 transition-all duration-300`}>
                {project.client}
              </h3>
            </div>
            <div className="mt-2 w-full h-0.5 bg-gray-600/50 overflow-hidden">
              <div className="w-0 h-full bg-primary-400 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>

          {/* Hover accent */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400/30 transition-all duration-500" />
        </div>
      </Link>
    </div>
  );
}