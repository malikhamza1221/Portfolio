import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-md bg-white/90 backdrop-blur-lg">
      <nav
        className="py-4 px-6 flex justify-between items-center relative"
        data-aos="fade-down"
      >
        {/* 🟦 Logo + Name Section */}
        <Link to="/" className="flex items-center space-x-3" data-aos="fade-right">
          {/* Logo */}
          <div className="relative group">
            <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#0B1C57] to-[#1d2d88] flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(11,28,87,0.5)] overflow-hidden">
              <img
                src="/malik.png"
                alt="MH Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#0B1C57] opacity-60 transition-all duration-500"></span>
          </div>

          {/* Name + Role */}
          <div className="group relative cursor-pointer inline-block text-center transition-all duration-700 hover:scale-105 hover:-translate-y-1">
            {/* Name */}
            <h1
              className="text-xl sm:text-xl font-extrabold bg-linear-to-r from-[#0B1C57] via-[#ff6b00] to-[#0B1C57] text-transparent bg-clip-text animate-gradient transition-all duration-700 group-hover:brightness-125"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              Malik Hamza
            </h1>

            {/* Role */}
            <p
              className="text-[10px] text-amber-900 font-medium mt-1 transition-all duration-500 group-hover:text-[#ff6b00] group-hover:translate-y-1"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Front-End Developer
            </p>

            {/* Glowing Underline */}
           
          </div>
        </Link>

        {/* 🟦 Desktop Menu */}
        <ul
          className="hidden lg:flex space-x-8 text-gray-700 font-medium"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {["HOME", "ABOUT", "SKILLS", "RESUME", "SERVICES", "PROJECTS"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  className="relative text-gray-700 transition-all duration-300 hover:text-[#0B1C57] hover:-translate-y-1 inline-block"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* 🟦 Contact Button */}
        <div className="hidden lg:block" data-aos="fade-left" data-aos-delay="300">
          <Link to="/contact">
            <button className="bg-[#0B1C57] text-white px-5 py-2 rounded-full hover:bg-[#152b8a] transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(11,28,87,0.5)]">
              Contact Me
            </button>
          </Link>
        </div>

        {/* 🟦 Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          data-aos="fade-left"
        >
          <HiOutlineMenuAlt3 />
        </button>

        {/* 🟦 Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white/95 shadow-lg rounded-b-2xl p-6 flex flex-col space-y-4 lg:hidden z-40 transition-all duration-500 animate-slideDown"
            data-aos="fade-down"
          >
            {["HOME", "ABOUT", "SKILLS", "RESUME", "SERVICES", "PROJECTS"].map(
              (item, index) => (
                <Link
                  key={index}
                  to={`/${item === "HOME" ? "" : item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#0B1C57] transition-all duration-300 hover:translate-x-1"
                >
                  {item}
                </Link>
              )
            )}
            <Link to="/contact">
              <button className="bg-[#0B1C57] text-white px-5 py-2 rounded-md hover:bg-[#152b8a] transition-all duration-300 shadow-md hover:shadow-[0_0_12px_rgba(11,28,87,0.4)]">
                Contact Me
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Custom Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 5s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .glow-underline {
          background-size: 200% 200%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
