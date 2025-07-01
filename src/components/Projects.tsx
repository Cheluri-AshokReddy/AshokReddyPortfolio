
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Microservices',
      description: 'A comprehensive e-commerce platform built with microservices architecture, featuring user management, product catalog, order processing, and payment integration.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'JWT'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Spring Security + JWT Auth',
      description: 'Robust authentication and authorization system implementing JWT tokens, role-based access control, and secure API endpoints.',
      technologies: ['Spring Security', 'JWT', 'Spring Boot', 'REST APIs'],
      github: '#',
      demo: null
    },
    {
      title: 'RESTful API Services',
      description: 'Collection of scalable REST API services with comprehensive documentation, error handling, and performance optimization.',
      technologies: ['Spring Boot', 'REST APIs', 'Hibernate', 'MySQL', 'Postman'],
      github: '#',
      demo: '#'
    }
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
            <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
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
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
