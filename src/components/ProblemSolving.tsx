
import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProblemSolving = () => {
  const platforms = [
    { name: 'GeeksforGeeks', problems: '200+', color: 'from-green-400 to-green-600', url: '#' },
    { name: 'LeetCode', problems: '150+', color: 'from-orange-400 to-orange-600', url: '#' },
    { name: 'Coding Ninjas', problems: '100+', color: 'from-purple-400 to-purple-600', url: '#' },
    { name: 'HackerRank', problems: '80+', color: 'from-blue-400 to-blue-600', url: '#' },
    { name: 'CodeChef', problems: '60+', color: 'from-red-400 to-red-600', url: '#' }
  ];

  return (
    <section id="problem-solving" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Problem Solving Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Consistent practice across multiple coding platforms</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">
                  {platform.name.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">
                {platform.name}
              </h3>
              
              <div className="text-3xl font-bold text-purple-400 mb-4">
                {platform.problems}
              </div>
              
              <p className="text-gray-400 mb-6">Problems Solved</p>
              
              <a
                href={platform.url}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors duration-200"
              >
                <span className="text-sm">View Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
