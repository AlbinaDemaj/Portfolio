import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiLaravel,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-blue-50 to-purple-100 
        dark:from-gray-900 dark:to-gray-800 
        text-center px-4 pt-24 transition-colors duration-500"
    >
      <div className="max-w-2xl">
        <p className="text-sm text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-3">
          Albina
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-700 dark:text-purple-400 font-medium mb-6">
          <TypeAnimation sequence={["Full Stack Developer",2000,"Laravel Fan",2000,"UI/UX Enthusiast",2000,"React Lover",2000,]}
        wrapper="span"speed={50}repeat={Infinity}/>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          I build modern, responsive web applications from front to back.
          With a degree in Computer Science and a passion for clean code,
          I work with technologies like{" "}
          <span className="text-blue-500 dark:text-purple-400 font-medium">
            JavaScript, React, PHP, Laravel, MySQL
          </span>{" "}
          and more — creating seamless and beautiful user experiences.
        </p>

        {/* Tech Icons with animation and larger size */}
        <div className="flex flex-wrap justify-center gap-6 text-[2.2rem] mb-10">
          <FaHtml5 className="text-orange-500 animate-float" />
          <FaCss3Alt className="text-blue-500 animate-float" />
          <SiJavascript className="text-yellow-400 animate-sway" />
          <FaReact className="text-cyan-400 animate-rotateY" />
          <SiTailwindcss className="text-teal-400 animate-sway" />
          <SiBootstrap className="text-indigo-600 animate-float" />
          <FaPhp className="text-indigo-700 animate-rotateY" />
          <SiLaravel className="text-red-500 animate-sway" />
          <SiMysql className="text-blue-800 animate-float" />
          <SiFigma className="text-pink-500 animate-sway" />
          <FaGitAlt className="text-orange-600 animate-rotateY" />
        </div>

        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
