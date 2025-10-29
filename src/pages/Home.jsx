import React, { useEffect } from "react";
import { FaLinkedinIn, FaBehance, FaDribbble,FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <section className="bg-[#0B1C57] text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 overflow-hidden relative pt-30 ">
      {/* Left Content */}
      <div
        className="w-full md:w-1/2 space-y-5 sm:space-y-6 mt-16 md:mt-20 text-center md:text-left"
        data-aos="fade-right"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
          Hello,
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          I’m <span className="text-[#ff6b00]">Malik Hamza</span>
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

        <p className="text-gray-300 text-sm sm:text-base max-w-md md:max-w-lg leading-relaxed mx-auto md:mx-0">
          I craft modern, responsive, and user-friendly web interfaces. Let’s
          build something stunning together that tells your brand’s story.
        </p>

        {/* Buttons & Socials */}
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 sm:gap-6 mt-6">
          <button className="bg-[#ff6b00] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all duration-300 flex items-center gap-2 hover:scale-[1.03]">
            Discover More
            <span className="text-xl">↗</span>
          </button>

         <div className="flex flex-col sm:flex-row items-center gap-3">
  <span className="text-gray-300 text-sm">Follow me:</span>
  <div className="flex gap-3 text-lg">
    <a
      href="https://www.linkedin.com/in/malik-hamza-84451b369/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#ff6b00] transition-colors"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>

        </div>
      </div>

     {/* Right Image Section */}
<div
className="relative w-full md:w-1/2 flex justify-center items-center transition-transform duration-500 hover:scale-105 mt-8 md:mt-26 animate-lazzy-bounce"

  data-aos="fade-left"
>
  {/* Glowing Gradient Background */}
  <div className="absolute w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-80 rounded-full bg-linear-to-br from-[#0B1C57] via-[#16277A] to-[#ff6b00] opacity-50 blur-2xl transition-all duration-700 hover:blur-4xl hover:opacity-80 animate-pulse-slow"></div>

  {/* Animated Rings */}
  <div className="absolute rounded-full border-2 border-[#ff6b00]/70 w-40 sm:w-[200px] md:w-[260px] lg:w-[300px] h-40 sm:h-[200px] md:h-[260px] lg:h-[300px] animate-spin-slow opacity-80"></div>
  <div className="absolute rounded-full border border-[#ffffff33] w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-80 opacity-60 animate-spin-reverse-slow"></div>

  {/* Image Wrapper */}
  <div className="relative z-10 w-32 sm:w-40 md:w-48 lg:w-52 h-32 sm:h-40 md:h-48 lg:h-52 rounded-full overflow-hidden shadow-[0_0_25px_rgba(255,107,0,0.4)] border-4 border-[#ffffff22] bg-linear-to-t from-[#0B1C57] via-[#16277A] to-[#1a1a40] flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_45px_rgba(255,107,0,0.7)]">
    <img
      src="/Hamza.png"
      alt="Profile"
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
    className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 pointer-events-auto
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

     {/* ✅ Floating WhatsApp Icon */}
      <a
        href="https://wa.me/923001234567" // <-- apna WhatsApp number lagayen yahan
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300 z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </section>
  
  );
};

export default Home;
