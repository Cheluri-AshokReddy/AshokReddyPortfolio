import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Microservices Project',
      description:
        'This project is a complete e-commerce backend system built using Spring Boot Microservices architecture. It includes core microservices like Product, Cart, Order, Notification, along with Service Registry, API Gateway, and Config Server for efficient management and scaling.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JWT'],
      github: 'https://github.com/Cheluri-AshokReddy/ecommerce-microservices.git',
    },
    {
      title: 'Spring Security with JWT Authentication',
      description:
        'This project demonstrates the implementation of Spring Security with JWT authentication. Initially, user details were stored using InMemoryUserDetailsManager, but later, the project was upgraded to use an H2 database for persistent storage. JWT (JSON Web Token) is used for enhanced security and stateless authentication.',
      technologies: ['Spring Security', 'JWT', 'Spring Boot', 'H2 DB', 'Authentication'],
      github: 'https://github.com/Cheluri-AshokReddy/Spring-Security-with-JWT-Authentication.git',
    },
    {
      title: 'JobListing Application',
      description:
        'The Job Listing Application is a simple Spring Boot-based web service that allows users to post job listings and search for jobs based on specific criteria. MongoDB is used for storage, with full-text search across profile, description, and technologies. Swagger UI is integrated for API documentation.',
      technologies: ['Spring Boot', 'MongoDB', 'REST APIs', 'Swagger UI'],
      github: 'https://github.com/Cheluri-AshokReddy/JobListingApplication-.git',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs border border-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
