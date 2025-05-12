import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseTrail from "./components/MouseTrail";
import MouseGlow from "./components/MouseGlow";
import Preloader from "./components/Preloader";
import ParticlesBackground from "./components/ParticlesBackground";

import AOS from "aos"; // ⬅️ Importo librarin
import "aos/dist/aos.css"; // ⬅️ Importo stilin

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Sa zgjat animacioni në ms
      once: true,     // Animacioni ndodh vetëm një herë
    });

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;


  
  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans transition-colors duration-500">
      {/* Particle sfondi prapa gjithçkaje */}
      <ParticlesBackground />

      {/* Përmbajtja e faqes */}
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <Projects />
      <About />
      <Contact />
      <Footer />

      {/* Efekte mouse */}
      <MouseTrail />
      <MouseGlow />
    </div>
  );
}

export default App;
