import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#0B1C57] text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-16 md:py-20 overflow-hidden relative ">
      {/* Left Content - About Text */}
      <div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-8 md:mt-0"
        data-aos="fade-right"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
          About Me
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-[#ff6b00]">Creative</span> Front-end Developer
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold">
          A{" "}
          <span className="text-[#ff6b00]">
            <Typewriter
              words={[
                "Front-end Developer",
                "React Specialist",
                "UI/UX Enthusiast",
                "JavaScript Expert",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
          I’m passionate about crafting interactive, pixel-perfect web
          experiences with clean design and smooth animations. I specialize in
          building modern, responsive websites using React, Tailwind CSS, and
          other cutting-edge tools.
        </p>

        <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
          With a focus on both aesthetics and functionality, I love turning
          complex problems into beautiful digital solutions that delight users.
        </p>

        {/* 🔶 Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#ff6b00] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300 flex items-center gap-2">
            View My Work
            <span className="text-xl">↗</span>
          </button>
        </div>

        {/* 🔶 Info Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {/* Card 1 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-[#ffffff33] rounded-2xl p-5 shadow-[0_0_20px_rgba(255,107,0,0.1)] hover:shadow-[0_0_25px_rgba(255,107,0,0.3)] transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#ff6b00] mb-2">
              Experience
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Over <span className="text-[#ff6b00] font-medium">3 years</span> of
              hands-on experience crafting engaging, responsive websites.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-[#ffffff33] rounded-2xl p-5 shadow-[0_0_20px_rgba(255,107,0,0.1)] hover:shadow-[0_0_25px_rgba(255,107,0,0.3)] transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#ff6b00] mb-2">
              Skills
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Expert in <span className="text-[#ff6b00] font-medium">React</span>,{" "}
              <span className="text-[#ff6b00] font-medium">Tailwind CSS</span>, and
              modern JavaScript frameworks for smooth UI/UX.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-[#ffffff33] rounded-2xl p-5 shadow-[0_0_20px_rgba(255,107,0,0.1)] hover:shadow-[0_0_25px_rgba(255,107,0,0.3)] transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-[#ff6b00] mb-2">
              Goal
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To design products combining{" "}
              <span className="text-[#ff6b00] font-medium">aesthetics</span> and{" "}
              <span className="text-[#ff6b00] font-medium">functionality</span> for
              seamless digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="relative w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0 transition-transform duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 animate-lazzy-bounce"
        data-aos="fade-left"
      >
        {/* Outer Glow */}
        <div className="absolute w-[250px] sm:w-[340px] md:w-[460px] h-[250px] sm:h-[340px] md:h-[460px] rounded-full bg-linear-to-br from-[#0B1C57] via-[#16277A] to-[#ff6b00] opacity-50 blur-2xl transition-all duration-700 hover:blur-4xl hover:opacity-80 animate-pulse-slow"></div>

        {/* Rings */}
        <div className="absolute rounded-full border-2 border-[#ff6b00]/70 w-[220px] sm:w-[320px] md:w-[400px] h-[220px] sm:h-60 md:h-[400px] animate-spin-slow opacity-80"></div>
        <div className="absolute rounded-full border border-[#ffffff33] w-60 sm:w-[360px] md:w-[440px] h-60 sm:h-[360px] md:h-[440px] animate-spin-reverse-slow opacity-60"></div>

        {/* Image */}
        <div className="relative z-10 w-48 sm:w-60 md:w-80 h-48 sm:h-60 md:h-80 rounded-full overflow-hidden shadow-[0_0_35px_rgba(255,107,0,0.4)] border-4 border-[#ffffff22] bg-linear-to-t from-[#0B1C57] via-[#16277A] to-[#1a1a40] flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_55px_rgba(255,107,0,0.7)]">
          <img
            src="/Hamza.png"
            alt="About Me"
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>

      {/* Floating Stats (Premium & Positioned Around Circle) */}
<div className="absolute inset-0 flex justify-center items-center pointer-events-none">

  {/* Frontend Developer — top-right of circle */}
  <div
    data-aos="fade-down"
    className="absolute -top-6 sm:-top-8 right-2 sm:right-6 lg:right-12 pointer-events-auto
    bg-linear-to-br from-[#ffffff1a] to-[#ffffff08] backdrop-blur-xl 
    px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-[#ffffff2a] 
    shadow-lg shadow-[#ff6b0035] hover:shadow-[#ff6b0065] 
    transition-all duration-500 hover:scale-110 hover:bg-[#ff6b00]/15 
    animate-float-slow"
  >
    <p className="text-sm sm:text-base font-extrabold text-[#ff6b00] tracking-wide">Frontend</p>
    <p className="text-[10px] sm:text-sm text-gray-100 font-medium">Developer</p>
  </div>

  {/* React Expert — left side of circle */}
  <div
    data-aos="fade-right"
    className="absolute left-2 sm:left-6 lg:left-6 top-1/2 -translate-y-1/2 pointer-events-auto
    bg-linear-to-br from-[#ffffff1a] to-[#ffffff08] backdrop-blur-xl 
    px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-[#ffffff2a] 
    shadow-lg shadow-[#ff6b0035] hover:shadow-[#ff6b0065] 
    transition-all duration-500 hover:scale-110 hover:bg-[#ff6b00]/15 
    animate-float-delay"
  >
    <p className="text-sm sm:text-base font-extrabold text-[#ff6b00] tracking-wide">React</p>
    <p className="text-[10px] sm:text-sm text-gray-100 font-medium">Expert</p>
  </div>

  {/* Experience — bottom-right of circle */}
  <div
    data-aos="fade-up"
    className="absolute -bottom-6 sm:-bottom-8 right-3 sm:right-8 lg:right-14 pointer-events-auto
    bg-linear-to-br from-[#ffffff1a] to-[#ffffff08] backdrop-blur-xl 
    px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-[#ffffff2a] 
    shadow-lg shadow-[#ff6b0035] hover:shadow-[#ff6b0065] 
    transition-all duration-500 hover:scale-110 hover:bg-[#ff6b00]/15 
    animate-float-fast"
  >
    <p className="text-sm sm:text-base font-extrabold text-[#ff6b00] tracking-wide">3 years</p>
    <p className="text-[10px] sm:text-sm text-gray-100 font-medium">Experience</p>
  </div>

</div>

      </div>
    </section>
  );
};

export default About;
