import React, { useState, useEffect } from "react";
import profilePic from "../assets/ashok.jpg";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Building scalable backend solutions.",
    "Crafting APIs with Spring Boot.",
    "Solving complex problems with Java.",
    "Designing microservices architecture."
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];

      if (!isDeleting && currentText !== current) {
        setCurrentText(current.substring(0, currentText.length + 1));
      } else if (isDeleting && currentText !== "") {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex(prev => (prev + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-24 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">👋 Hey there! I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Ashok Reddy Cheluri
              </span>
            </h1>

            <div className="h-10 sm:h-12 mb-6">
              <p className="text-lg sm:text-xl text-gray-300">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
              A passionate <span className="font-semibold text-white">Java Developer</span> who loves building clean, scalable, and production‑ready backend systems with <span className="font-semibold">Spring Boot</span>, <span className="font-semibold">REST APIs</span>, and modern databases.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Ashok Reddy Cheluri"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full animate-pulse border-2 border-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
