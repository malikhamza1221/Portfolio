import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaLaptopCode, FaPenNib } from "react-icons/fa";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaCode size={26} />,
      title: "Website Design",
      desc: "Beautiful, minimal and user-friendly interfaces with smooth layout transitions.",
    },
    {
      icon: <FaLaptopCode size={26} />,
      title: "Frontend Development",
      desc: "Responsive, optimized React.js & Tailwind code focused on performance and detail.",
    },
    {
      icon: <FaPenNib size={26} />,
      title: "UI / UX Design",
      desc: "Modern and intuitive designs that bring creativity and usability together.",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0B1C57] text-white px-4 sm:px-8 md:px-10 lg:px-20 py-16 ">
      {/* Profile + Intro Section */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 mb-16"
        data-aos="fade-up"
      >
       <div className="bg-linear-to-br from-[#0B1C57] via-[#152b8a] to-[#1f3ba3] text-white rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(11,28,87,0.5)] hover:shadow-[0_0_45px_rgba(255,107,0,0.5)] transition-all duration-700 w-full max-w-md mx-auto lg:mx-0 border border-[#1c2e82]/40">
  <div className="flex flex-col items-center text-center lg:text-left space-y-5">
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#ff6b00]/40 shadow-lg hover:scale-[1.03] transition-all duration-500">
      <img
        src="/Hamza.png"
        alt="Malik Hamza"
        className="w-full h-full object-cover object-top hover:scale-110 transition-all duration-700"
      />
    </div>

    <h1 className="text-2xl sm:text-3xl font-bold text-white">
      Hi, I’m <span className="text-[#ff6b00]">Malik Hamza</span>
    </h1>

    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
      A passionate{" "}
      <span className="font-semibold text-[#ff6b00]">
        Frontend Developer
      </span>{" "}
      crafting clean, fast, and visually engaging digital experiences.
    </p>

    <div className="flex gap-12 justify-center items-center mt-2">
      <div className="hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-[#ff6b00]">Frontend</h3>
        <p className="text-gray-300 text-xs sm:text-sm">Developer</p>
      </div>
      <div className="hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-[#ff6b00]">React</h3>
        <p className="text-gray-300 text-xs sm:text-sm">Expert</p>
      </div>
      <div className="hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-[#ff6b00]">3 Years</h3>
        <p className="text-gray-300 text-xs sm:text-sm">Experience</p>
      </div>
    </div>
  </div>
</div>


        {/* Intro Text */}
        <div
          className="space-y-5 max-w-lg mx-auto lg:mx-0"
          data-aos="fade-left"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            What I can help you with
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I specialize in building modern, interactive front-end applications
            with a balance of design and performance.
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every project I take is designed to look elegant, work smoothly, and
            connect users with your brand seamlessly.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-white"
          data-aos="fade-up"
        >
          My Services
        </h2>
        <p
          className="text-gray-400 mt-2 max-w-md mx-auto text-sm sm:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Every service I offer is a perfect blend of creativity, usability, and
          development excellence.
        </p>
      </div>

      {/* Services Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white rounded-xl p-6 sm:p-8 border border-white/10 shadow-md hover:shadow-lg transition-all duration-500 group"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-center mb-4 text-[#a7bfff] group-hover:text-white transition-all duration-300">
              <div className="bg-white/10 p-4 rounded-full group-hover:bg-[#ffffff1c] transition-all duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
