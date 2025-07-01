
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Think it. Code it. Run it. Ship it.",
    "Building scalable backend solutions.",
    "Solving complex problems with Java.",
    "Creating microservices architecture."
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting && currentText !== current) {
        setCurrentText(current.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== '') {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Ashok Reddy Cheluri
              </span>
            </h1>
            
            <div className="h-16 mb-8">
              <p className="text-xl lg:text-2xl text-gray-300">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Java Developer passionate about building robust backend systems 
              and solving complex problems with elegant solutions.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-6xl font-bold text-purple-400">
                    AR
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
