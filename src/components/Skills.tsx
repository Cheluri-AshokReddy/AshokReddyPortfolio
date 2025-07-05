import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JDBC', 'Kafka', 'Eureka'],
  },
  {
    title: 'Databases & Tools',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'H2', 'Git', 'GitHub', 'IntelliJ IDEA', 'Postman'],
  },
  {
    title: 'Concepts',
    skills: ['Microservices', 'DTO', 'REST APIs', 'JWT Authentication', 'Message Queues'],
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-default"
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: '#a78bfa' }} // Tailwind purple-400 color hex
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-900/50 rounded-full text-sm border border-gray-600 text-gray-300"
                    whileHover={{
                      scale: 1.1,
                      color: '#a78bfa',
                      borderColor: '#a78bfa',
                      boxShadow: '0 0 8px #a78bfa',
                      cursor: 'default',
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
