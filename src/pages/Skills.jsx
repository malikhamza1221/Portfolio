import React, { useEffect } from "react";
import { FaRocket, FaBolt, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS / Tailwind", level: 90 },
    { name: "React.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Redux Toolkit", level: 75 },
    { name: "Git & GitHub", level: 80 },
    { name: "UI / UX Design", level: 70 },
    { name: "Photoshop", level: 65 },
  ];

  const features = [
    {
      icon: <FaBolt size={30} />,
      title: "Fast",
      desc: "Optimized load times and seamless user interaction.",
    },
    {
      icon: <FaLaptopCode size={30} />,
      title: "Responsive",
      desc: "Designs that adapt beautifully to all screen sizes.",
    },
    {
      icon: <FaLightbulb size={30} />,
      title: "Intuitive",
      desc: "Clean, easy-to-use UI with smooth UX flows.",
    },
    {
      icon: <FaRocket size={30} />,
      title: "Dynamic",
      desc: "I love making pages come to life with animations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1C57] text-gray-100 px-6 md:px-12 py-16 ">
      {/* Features */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-16"
        data-aos="fade-up"
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <div className="text-white mb-3 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold text-[#ff6b00]">{f.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

   {/* Profile + Skills */}
<div
  className="flex flex-col lg:flex-row items-center justify-between gap-12"
  data-aos="fade-up"
>
  {/* Profile Section */}
  <div className="text-center lg:text-left space-y-4 max-w-md transition-all duration-500 hover:scale-105">
    <div className="relative w-56 h-56 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-[#ff6b00]/70 shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.9)] transition-all duration-500">
      <img
        src="/Hamza.png"
        alt="Profile"
        className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-500"
      />
    </div>

    <p className="text-gray-300 leading-relaxed mt-4 hover:text-[#ff6b00] transition-all duration-300">
      I’m a{" "}
      <span className="text-[#ff6b00] font-semibold">
        Front-End Developer
      </span>{" "}
      passionate about crafting responsive, modern interfaces using React &
      Tailwind. I aim to create smooth, performance-driven web experiences.
    </p>
  </div>

  {/* Skill Bars */}
  <div className="flex-1 w-full max-w-lg space-y-4">
    {skills.map((skill, i) => (
      <div
        key={i}
        data-aos="zoom-in"
        data-aos-delay={i * 100}
        className="transition-all duration-500 hover:scale-105"
      >
        <div className="flex justify-between mb-1 text-sm font-semibold text-gray-300">
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
          <div
            className="bg-[#ff6b00] h-3 rounded-full transition-all duration-700 hover:bg-[#ff8533]"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Skills;
