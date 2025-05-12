import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto px-6 h-[64px] flex items-center relative">

        {/* LINKET NË QENDËR */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-500 transition">Certifications</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* DARK MODE NË ANË TË DJATHTË */}
        <div className="ml-auto">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
