import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const links = ["Home", "About", "Services", "Projects", "Contact"];
  const socials = [FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter];
  const projects = [
    "Portfolio Website",
    "E-commerce App",
    "Landing Page",
    "Dashboard UI",
    "Restaurant Website",
  ];

  return (
    <footer className="relative w-full bg-[#0B1C57] overflow-hidden py-16">
      {/* Floating glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b00]/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1C57]/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12 md:gap-16 flex-wrap">
        {/* Left: Logo & About */}
        <div data-aos="fade-up" className="space-y-4 flex-1 min-w-[230px]">
          <h2 className="text-3xl font-bold text-[#ff6b00]">MyPortfolio</h2>
          <p className="text-gray-300 max-w-xs">
            Crafting modern and responsive web experiences with passion and
            precision.
          </p>
         <Link to="/contact">

 <button className="inline-flex items-center space-x-2 px-5 py-2 rounded-lg bg-[#ff6b00] text-[#0B1C57] font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
            <FaEnvelope /> <span>Contact Me</span>
          </button>

         </Link>
        </div>

        {/* Middle: Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100" className="space-y-4 flex-1 min-w-[150px]">
          <h3 className="font-semibold text-[#ff6b00] text-lg">Quick Links</h3>
          {links.map((link, idx) => (
            <p
              key={idx}
              className="text-gray-300 px-3 py-1 rounded-lg cursor-pointer hover:bg-[#ff6b00]/20 hover:text-white transition-all duration-300"
            >
              {link}
            </p>
          ))}
        </div>

        {/* NEW: Projects Section */}
        <div data-aos="fade-up" data-aos-delay="150" className="space-y-4 flex-1 min-w-[180px]">
          <h3 className="font-semibold text-[#ff6b00] text-lg">Projects</h3>
          {projects.map((project, idx) => (
            <p
              key={idx}
              className="text-gray-300 px-3 py-1 rounded-lg cursor-pointer hover:bg-[#ff6b00]/20 hover:text-white transition-all duration-300"
            >
              {project}
            </p>
          ))}
        </div>

        {/* Right: Contact & Socials */}
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-4 flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[#ff6b00] text-lg">Contact</h3>
          <p className="text-gray-300 px-3 py-1 rounded-lg hover:bg-[#ff6b00]/20 transition-all duration-300 cursor-default">
            Email: arainshab917@gmail.com
          </p>
          <p className="text-gray-300 px-3 py-1 rounded-lg hover:bg-[#ff6b00]/20 transition-all duration-300 cursor-default">
            Phone: +92 3706829230
          </p>
          <div className="flex space-x-4 mt-2">
            {socials.map((Icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#ff6b00]/40 hover:scale-110 transition-all duration-300 shadow-md cursor-pointer"
              >
                <Icon className="text-[#ff6b00]" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white/20 mt-12" />

      {/* Bottom */}
    <p className="text-center text-gray-300 text-sm md:text-base mt-10 tracking-wide">
  Made With <span className="text-[#ff6b00] text-lg">❤️</span> By{" "}
  <span className="font-semibold text-white">| Malik Hamza | </span>@2025
</p>

    </footer>
  );
};

export default Footer;
