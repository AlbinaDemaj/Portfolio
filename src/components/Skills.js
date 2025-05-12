import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-purple-400 mb-4">
  My Tech Stack
</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-12 text-sm max-w-xl mx-auto">
          A combination of technologies I use to design, build and deploy fast and functional web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Frontend Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Frontend Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
                { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
                { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
                { icon: <SiBootstrap className="text-indigo-500" />, name: "Bootstrap" },
                { icon: <FaReact className="text-cyan-400" />, name: "React" },
              ].map(({ icon, name }, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-white dark:bg-gray-700 rounded-2xl shadow-md flex flex-col items-center justify-center 
                  text-gray-800 dark:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                  title={name}
                >
                  <div className="text-3xl mb-1">{icon}</div>
                  <span className="text-xs font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Backend Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <FaPhp className="text-indigo-600" />, name: "PHP" },
                { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
                { icon: <SiMysql className="text-blue-800" />, name: "MySQL" },
                { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
              ].map(({ icon, name }, index) => (
                <div
                  key={index}
                  className="w-24 h-24 bg-white dark:bg-gray-700 rounded-2xl shadow-md flex flex-col items-center justify-center 
                  text-gray-800 dark:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                  title={name}
                >
                  <div className="text-3xl mb-1">{icon}</div>
                  <span className="text-xs font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
