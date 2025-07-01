
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JDBC', 'Kafka', 'Eureka']
    },
    {
      title: 'Databases & Tools',
      skills: ['SQL', 'H2', 'DBMS', 'Git', 'GitHub', 'IntelliJ IDEA', 'Postman']
    },
    {
      title: 'Concepts',
      skills: ['Microservices', 'DTO', 'REST APIs', 'JWT Authentication', 'Message Queues']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-900/50 rounded-full text-sm border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
