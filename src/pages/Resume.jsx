import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experience = [
    {
      role: "Front-end Developer",
      company: "Code Thinker",
      duration: "Oct 2025 - Present",
      points: [
        "Developed responsive web apps using React and Tailwind CSS.",
        "Improved performance and optimized user interfaces.",
        "Worked with teams to create smooth frontend-backend integration.",
      ],
    },
    {
      role: "Senior Web Developer",
      company: "XYZ Solutions",
      duration: "Jun 2022 - Dec 2025",
      points: [
        "Built modern, interactive UI components with JavaScript.",
        "Maintained company websites and fixed bugs.",
        "Implemented responsive designs for mobile devices.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Accounting & Finance",
      institution: "The Islamia University of Bahawalpur",
      year: "2025 - 2029",
    },
    {
      degree: "Intermediate",
      institution: "Punjab College",
      year: "2023 - 2024",
    },
    {
      degree: "Matric",
      institution: "High School Liaqatpur",
      year: "2021 - 2022",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1C57] text-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14  overflow-hidden">
      {/* Header */}
      <header className="text-center mb-10" data-aos="fade-down">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          <Typewriter
            words={["Malik Hamza"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl">
          Front-end Developer & React Specialist
        </p>
      </header>

      {/* Profile + Skills */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-12 overflow-x-hidden">
        {/* Profile Image */}
        <div
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden  border-4 border-[#ffffff22] bg-linear-to-t from-[#0B1C57] via-[#16277A] to-[#1a1a40] transition-transform duration-700  "
          data-aos="zoom-in"

        >
          <img
            src="/Hamza.png"
            alt="Profile"
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full border border-[#ff6b00]/40 animate-pulse-slow"></div>
        </div>

        {/* Skills */}
        <div
          className="space-y-6 text-center md:text-left flex-1 overflow-hidden"
          data-aos="fade-left"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#ff6b00] mb-3">
            My Skills
          </h2>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            I specialize in crafting responsive, modern web interfaces using the
            latest technologies. I focus on clean design, smooth user experience,
            and performance-driven development.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 overflow-hidden">
            {[
              "HTML",
               "CSS ",
              " Tailwind",
              "JavaScript (ES7)",
              "React.js",
              "Redux Toolkit",
              "Git & GitHub",
              "Responsive Design",
              "UI/UX Basics",
              "LandinPage",
              "Redux ToolKit query",
              "Email.Js",
              "Axios.Api"
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#16277A]/40 border border-[#ff6b00]/70 rounded-full text-gray-200 text-xs sm:text-sm hover:bg-[#ff6b00]/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,107,0,0.6)] transition duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={100 + i * 50}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* Experience & Education Section */}
      <section
        className="mt-16 px-4 sm:px-6 md:px-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff6b00] text-center mb-10">
          Experience & Education
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto">

          {/* Experience Section */}
          <div className="flex-1" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-[#ff6b00] mb-6 text-center">
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-lg border border-[#ffffff22]
                       hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] 
                       transition-all duration-300"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 italic text-sm sm:text-base mb-2">
                    {exp.company} | {exp.duration}
                  </p>
                  <ul className="list-disc ml-5 text-gray-300 mt-2 text-sm sm:text-base space-y-1">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="flex-1" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-[#ff6b00] mb-6 text-center">
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-lg border border-[#ffffff22]
                       hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] 
                       transition-all duration-300"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-400 italic text-sm sm:text-base">
                    {edu.institution} | {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Button */}

      </section>


      {/* CTA */}
      <section className="text-center mt-14" data-aos="zoom-in">
        <button className="bg-[#ff6b00] px-8 sm:px-10 py-3 rounded-lg font-semibold text-[#0B1C57] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition duration-300">
          Hire Me
        </button>
      </section>
    </div>
  );
};

export default Resume;
