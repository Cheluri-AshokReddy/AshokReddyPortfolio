import React, { useState, useEffect, useRef } from 'react';
import { Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      message: "Ashok Reddy Cheluri has been more than just a friend—he’s someone who always carried this calm, cheerful vibe...",
      name: "Navuluri Balaji",
      role: "Associate Software Developer, AVK Tech",
      avatar: "/assets/balaji.jpg",
      github: "https://github.com/NavuluriBalaji",
      linkedin: "http://www.linkedin.com/in/navuluri-balaji"
    },
    {
      message: "Working with Ashok on backend projects has been fantastic...",
      name: "Michael Chen",
      role: "Tech Lead",
      avatar: "/assets/testimonials/michael.jpg",
      github: "#",
      linkedin: "#"
    },
    {
      message: "Ashok's dedication to coding excellence and continuous learning is impressive...",
      name: "Priya Sharma",
      role: "Engineering Manager",
      avatar: "/assets/testimonials/priya.jpg",
      github: "#",
      linkedin: "#"
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>

        <div
          className="max-w-4xl mx-auto relative h-[480px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full"
            >
              <motion.div
                className="bg-gray-900/50 p-8 border border-gray-700 rounded-lg text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-purple-500">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].message}"
                </blockquote>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-400">{testimonials[currentTestimonial].role}</p>
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href={testimonials[currentTestimonial].github}
                    className="p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={testimonials[currentTestimonial].linkedin}
                    className="p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M4.983 3.5C4.983 5 3.89 6 2.497 6 1.105 6 0 5 0 3.5 0 2 1.095 1 2.497 1c1.403 0 2.486 1 2.486 2.5zM0 24h5V7H0v17zm7.5 0h5v-8.5c0-2.5 3-2.7 3 0V24h5V14.3c0-6.2-7-6-8.5-2.9V7h-5v17z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
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
