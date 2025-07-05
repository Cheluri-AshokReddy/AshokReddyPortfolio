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
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white block -mt-8 mb-6">👋 Hey there! I'm</span>
              <div className="pl-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 whitespace-nowrap mt-4 inline-block">
                  Ashok Reddy Cheluri
                </span>
                <div className="h-16 mb-8">
                  <p className="text-xl lg:text-2xl text-gray-300 mt-2">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              A passionate <span className="font-semibold text-white">Java Developer</span> who loves building clean, scalable, and production‑ready backend systems with <span className="font-semibold">Spring Boot</span>, <span className="font-semibold">REST APIs</span>, and modern databases.
            </p>
          </div>

          {/* Right Image Section */}
          <div
            className="flex justify-center lg:justify-end"
            style={{ transform: 'translate(-40px, -40px)' }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Ashok Reddy Cheluri"
                    className="w-72 h-72 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
