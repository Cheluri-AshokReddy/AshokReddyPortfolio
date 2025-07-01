
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ProblemSolving from '../components/ProblemSolving';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
