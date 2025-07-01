
import React from 'react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Problems Solved' },
    { number: '8.89', label: 'CGPA' },
    { number: '1+', label: 'Year Leadership in Tech Communities' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              A motivated Java Developer with strong expertise in Spring Boot, Microservices, 
              and software development. I enjoy solving complex problems, building scalable 
              backends, and contributing to tech communities. Passionate about technology 
              and continuous growth, I'm always eager to learn new technologies and tackle 
              challenging projects that push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
