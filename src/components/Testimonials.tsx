import React, { useState, useEffect, useRef } from 'react';
import { Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      message: `Ashok Reddy Cheluri has been more than just a friend—he’s someone who always carried this calm, cheerful vibe that made things feel lighter, no matter how big the task was. He’s usually in his own space, but when something needs to be done, he shows up like magic—solves the problem, gives us his support, and quietly slips away, leaving us smiling.

One memory that really sticks with me is when most of us went home for the holidays, but Ashok chose to stay back at college just to make sure everything was perfect for our event.

On top of all that, his 500-day coding streak on GeeksforGeeks is honestly incredible. It shows how quietly consistent and passionate he is about what he loves.`,
      name: "Navuluri Balaji",
      role: "Associate Software Developer, AVK Tech",
      avatar: "/assets/balaji.jpg",
      github: "https://github.com/NavuluriBalaji",
      linkedin: "http://www.linkedin.com/in/navuluri-balaji"
    },
    {
      message: `Ashok is someone who leads by example through his quiet dedication and strong work ethic. He may not always be the most visible presence, but when it’s time to get things done, he’s always there—focused, reliable, and fully committed.

Whether it was staying back during holidays to ensure everything ran smoothly or stepping in exactly when needed, Ashok has consistently shown how dependable and hardworking he truly is.

It’s been a pleasure working with someone who brings both sincerity and calm focus to everything he does.`,
      name: "PARIMAL ADINI ",
      role: "Backend Developer NOMISO",
      avatar: "/assets/Parimal.jpg",
      github: "http://parimaladini.github.io/",
      linkedin: "https://www.linkedin.com/in/parimal-adini/"
    },
    {
      message: `Ashok has been more than just a best friend—his mindset, dedication, and consistency set him apart. His coding skills and problem-solving abilities are truly impressive, and he's always been supportive and dependable.

I was amazed by his commitment on platforms like GeeksforGeeks. Whether it was team coordination or learning something new, Ashok always stepped up with enthusiasm.

His passion for lifelong learning and disciplined approach will surely lead him to great success.`,
      name: "Nithish Paidimarri",
      role: "DevOps Intern, BNP Paribas",
      avatar: "/assets/Nitish.jpg",
      github: "https://github.com/Nithish-456",
      linkedin: "https://linkedin.com/in/nithish456"
    }
  ];

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
          className="max-w-4xl mx-auto relative h-[500px] overflow-hidden"
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
                className="bg-gray-900/50 p-8 border border-gray-700 rounded-lg text-center cursor-pointer overflow-y-auto max-h-[480px] scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700"
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

                <blockquote className="text-sm sm:text-base text-gray-300 mb-6 italic leading-relaxed whitespace-pre-line">
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={testimonials[currentTestimonial].linkedin}
                    className="p-2 bg-gray-800 rounded-full border border-gray-600 hover:border-purple-500"
                    target="_blank"
                    rel="noopener noreferrer"
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
