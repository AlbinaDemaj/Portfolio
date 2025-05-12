const Projects = () => {
  const projects = [
    {
      title: "DERMACARE",
      link: "https://albinademaj.github.io/DERMACARE/",
      image: "/projects/Dermacare.png",
      tech: "HTML · CSS",
    },
    {
      title: "Cozy House",
      link: "https://albinademaj.github.io/CozyHouse/",
      image: "/projects/CozyHouse.png",
      tech: "HTML · Tailwind CSS",
    },
    {
      title: "Restaur",
      link: "https://albinademaj.github.io/RESTAUR/",
      image: "/projects/Restaur.png",
      tech: "HTML · Tailwind CSS",
    },
    {
      title: "RioRelax",
      link: "https://albinademaj.github.io/RioRelax/",
      image: "/projects/RioRelax.png",
      tech: "HTML · CSS",
    },
    {
      title: "Mixtas",
      link: "https://albinademaj.github.io/Mixtas/",
      image: "/projects/Mixtas.png",
      tech: "HTML · CSS · JavaScript",
    },
    {
      title: "TastyBite",
      link: "https://albinademaj.github.io/TastyBite/",
      image: "/projects/TastyBite.png",
      tech: "Bootstrap · JavaScript",
    },
    {
      title: "Coffee Shop",
      link: "https://startling-entremet-906389.netlify.app/",
      image: "/projects/coffe-shop.png",
      tech: "React · Tailwind CSS",
    },
    {
      title: "Glowly",
      link: "https://beamish-pegasus-6227a7.netlify.app/",
      image: "/projects/Glowly.png",
      tech: "React · Tailwind CSS",
    },
    {
      title: "Hotel Management System",
      link: "https://relaxhotel.infinityfreeapp.com/?i=1",
      image: "/projects/Hotel.png",
      tech: "PHP · MySQL",
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-purple-400 mb-16">
          🚀 My Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center flex flex-col flex-1 justify-between">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
                  {project.tech}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
