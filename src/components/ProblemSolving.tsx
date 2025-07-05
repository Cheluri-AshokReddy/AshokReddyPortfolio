import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const platforms = [
  {
    name: 'GeeksforGeeks',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#2F8D46" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="60%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">GfG</text>
      </svg>
    ),
    stats: [
      'Coding Score: 3405',
      'Problems Solved: 1455',
      'Contest Rating: 1547',
      'Longest Streak: 749 days',
    ],
    color: 'from-green-500 to-green-700',
    url: 'https://www.geeksforgeeks.org/user/ashokreddycheluri/',
  },
  {
    name: 'LeetCode',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFA116" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="60%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial">LC</text>
      </svg>
    ),
    stats: [
      'Problems Solved: 400+',
      'Longest Streak: 200 days',
    ],
    color: 'from-yellow-400 to-yellow-600',
    url: 'https://leetcode.com/u/C_Ashok_kumar_Reddy/',
  },
  {
    name: 'Coding Ninjas',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF5722" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="60%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">CN</text>
      </svg>
    ),
    stats: [
      '3x Specialist Badges (DSA)',
      '13x Achiever Badges',
      'Coding: 205 | MCQs: 193',
      'Longest Streak: 18 days',
    ],
    color: 'from-orange-500 to-orange-700',
    url: 'https://www.naukri.com/code360/profile/509af95f-9540-468b-94d1-d1ab3ef4bf9d',
  },
  {
    name: 'HackerRank',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#00EA64" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="60%" textAnchor="middle" fill="black" fontSize="10" fontFamily="Arial">HR</text>
      </svg>
    ),
    stats: [
      '100+ Problems Solved',
      'Badges: Java, SQL, Problem Solving',
    ],
    color: 'from-emerald-500 to-emerald-700',
    url: 'https://www.hackerrank.com/profile/ashokreddy200201',
  },
  {
    name: 'CodeChef',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#5B4638" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="60%" textAnchor="middle" fill="white" fontSize="10" fontFamily="Arial">CC</text>
      </svg>
    ),
    stats: [
      '50+ Problems Solved',
      'Certificates in Python, Java, and Advanced Java',
    ],
    color: 'from-stone-600 to-stone-800',
    url: 'https://www.codechef.com/users/ashokreddyc',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  hover: { scale: 1.08, boxShadow: '0 10px 20px rgba(139, 92, 246, 0.5)' },
};

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Problem Solving Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Consistent practice across multiple coding platforms
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {platforms.map((platform, idx) => (
            <motion.a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              className={`rounded-full bg-gray-800/60 p-8 flex flex-col items-center justify-center text-center border border-gray-700 cursor-pointer transition-colors duration-300 ${platform.color} bg-gradient-to-r hover:from-purple-500 hover:to-blue-600`}
              style={{ backgroundClip: 'padding-box' }}
            >
              <div className="w-16 h-16 rounded-full mb-6 bg-white bg-opacity-10 flex items-center justify-center">
                {platform.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 text-white">{platform.name}</h3>

              <ul className="text-gray-300 text-sm mb-6 space-y-1 max-w-[200px]">
                {platform.stats.map((stat, i) => (
                  <li key={i} className="leading-tight">
                    • {stat}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-semibold hover:text-purple-300">
                View Profile <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
