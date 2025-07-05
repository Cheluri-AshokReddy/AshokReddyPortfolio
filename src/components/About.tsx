import React, { useEffect, useState, useRef } from "react";
import { FaFire, FaGraduationCap, FaUsers } from "react-icons/fa";

/* ---------- Count‑up animation helpers ---------- */
const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => ref.current && io.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const inc = target / (duration / 16);

    const step = () => {
      start += inc;
      if (start < target) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-3xl font-bold text-purple-400">
      {count}
      {suffix}
    </div>
  );
};

const AnimatedDecimal: React.FC<{ target: number; decimals?: number }> = ({ target, decimals = 2 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 });
    if (ref.current) io.observe(ref.current);
    return () => ref.current && io.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const inc = target / (duration / 16);

    const step = () => {
      start += inc;
      if (start < target) {
        setVal(parseFloat(start.toFixed(decimals)));
        requestAnimationFrame(step);
      } else setVal(target);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, decimals]);

  return (
    <div ref={ref} className="text-3xl font-bold text-purple-400">
      {val}
    </div>
  );
};
/* ------------------------------------------------ */

const About = () => {
  const stats = [
    {
      icon: <FaFire className="text-purple-400 mx-auto mb-2" />,
      number: 750,
      suffix: "+",
      label: "Day Streak in GFG POTD",
      tooltip: "750‑day streak solving GeeksforGeeks Problem of the Day",
    },
    {
      icon: <FaGraduationCap className="text-purple-400 mx-auto mb-2" />,
      label: "Co-founder and Former Chairperson of GFG KARE Student Chapter",
      tooltip: "Led and co-founded the GeeksforGeeks Student Chapter at KARE",
    },
    {
      icon: <FaUsers className="text-purple-400 mx-auto mb-2" />,
      number: 2,
      //suffix: "+",
      label: "Year Leadership in Tech Communities",
      tooltip: "Over a year organizing tech events & workshops",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Title --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded"></div>
          <p className="mt-4 italic text-gray-400 max-w-xl mx-auto">
            "Passionate about crafting efficient, scalable Java backends that power the future."
          </p>
        </div>

        {/* --- Content Grid --- */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Bio */}
          <div>
            <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Entry-level Java Developer passionate about Spring Boot, Microservices, and backend development. Chairperson and Co-founder of the GFG KARE Student Chapter, where I led various tech initiatives to promote coding culture on campus. With a consistent 750+ day streak in GeeksforGeeks POTD, I’m passionate about problem-solving, building scalable systems, and continuously learning new technologies to take on challenging real-world projects.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto lg:mx-0 mt-12 lg:mt-0">
            {stats.map(({ icon, number, suffix = "", label, tooltip }, idx) => (
              <div
                key={idx}
                className="group bg-gray-800 rounded-lg p-6 text-center border border-gray-700
                           hover:border-purple-500 transition duration-300 transform
                           hover:scale-105 cursor-pointer"
                title={tooltip}
              >
                {icon}
                {Number.isInteger(number) ? (
                  <AnimatedCounter target={number as number} suffix={suffix} />
                ) : number ? (
                  <AnimatedDecimal target={number as number} />
                ) : null}
                <div className="mt-1 text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
