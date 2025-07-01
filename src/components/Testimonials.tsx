
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      message: "Ashok is an exceptional Java developer with deep understanding of Spring Boot and microservices. His problem-solving skills and attention to detail make him a valuable team member.",
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      avatar: "SJ",
      github: "#",
      linkedin: "#"
    },
    {
      message: "Working with Ashok on backend projects has been fantastic. His expertise in Spring Security and REST APIs helped us build robust and scalable solutions.",
      name: "Michael Chen",
      role: "Tech Lead",
      avatar: "MC",
      github: "#",
      linkedin: "#"
    },
    {
      message: "Ashok's dedication to coding excellence and continuous learning is impressive. He consistently delivers high-quality solutions and mentors junior developers effectively.",
      name: "Priya Sharma",
      role: "Engineering Manager",
      avatar: "PS",
      github: "#",
      linkedin: "#"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700 relative">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-xl font-bold text-white mx-auto mb-4">
                  {testimonials[currentTestimonial].avatar}
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].message}"
              </blockquote>
              
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-purple-400">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
              
              <div className="flex justify-center gap-4">
                <a
                  href={testimonials[currentTestimonial].github}
                  className="p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500 transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={testimonials[currentTestimonial].linkedin}
                  className="p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-purple-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
