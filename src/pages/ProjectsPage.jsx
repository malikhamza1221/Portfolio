import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Akoya",
      tech: "React & tailwind CSS,JavaScript",
      img: "/Akoya.png",
      link: "https://akoyasite.vercel.app/",
    },
    {
      id: 2,
      title: "Grocery Store",
      tech: "React & tailwind CSS,JavaScript",
      img: "grocerystore.png",
      link: "https://grocery-store-eta-three.vercel.app/",
    },
    {
      id: 3,
      title: "Finance Dashboard",
      tech: "React & tailwind CSS,JavaScript",
      img: "finance.png",
      link: "https://financedashboard-alpha.vercel.app/",
    },
    {
      id: 4,
      title: "Food Site",
      tech: "React & tailwind CSS,JavaScript",
      img: "/foodsite.png",
      link: "https://foodsite-beta.vercel.app/",
    },
    {
      id: 5,
      title: "Dashboard",
      tech: "React & tailwind CSS,JavaScript",
      img: "/dashboard.png",
      link: "https://mydashboard-two-tau.vercel.app/",
    },
    {
      id: 6,
      title: "Coming Soon",
      tech: "React & tailwind CSS,JavaScript",
      img: "/comingsoon.png",
      link: "", // You can add your link later
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1C57] text-white px-4 sm:px-8 md:px-16 py-16 overflow-hidden">
      {/* Projects Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
          Latest Projects
        </h2>
        <p
          className="text-gray-400 mb-12 max-w-xl mx-auto text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore some of my recent front-end works focused on performance and
          visual appeal.
        </p>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[340px]"
            >
              <div className="bg-linear-to-br from-[#0B1C57] via-[#142a7c] to-[#1f3ba3] text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:-translate-y-2 transition-all duration-500">
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-contain hover:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-6 text-left space-y-2">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.tech}</p>
                  {project.link && (
                    <button className="mt-3 text-[#ff6b00] font-medium text-sm hover:underline">
                      View Project →
                    </button>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
