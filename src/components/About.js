import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiMysql,
  SiJquery,
  SiFigma,
  SiCanva,
} from "react-icons/si";

const About = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
    { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <FaPhp className="text-indigo-700" />, name: "PHP" },
    { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
    { icon: <SiMysql className="text-blue-800" />, name: "MySQL" },
    { icon: <SiJquery className="text-blue-400" />, name: "jQuery" },
    { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-blue-700 dark:text-purple-400">About Me</h2>

        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-4">
          I’m a dedicated <span className="font-semibold text-blue-600 dark:text-purple-400">Full Stack Developer</span> with a strong passion for crafting modern,
          clean, and user-focused web applications.
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-10">
          With a Bachelor’s degree in Computer Science, I specialize in both frontend and backend development.
          I enjoy working with teams and solving real-world problems using technology.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Tech Stack I Work With</h3>

        <Marquee gradient={false} speed={50} pauseOnHover>
          <div className="flex gap-10 items-center text-4xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-1 hover:scale-110 transition duration-300"
              >
                {skill.icon}
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default About;


