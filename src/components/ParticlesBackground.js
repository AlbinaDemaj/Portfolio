// src/components/ParticlesBackground.js
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDark(); // kontrollon në fillim

    // dëgjon ndryshimet në klasë
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: isDarkMode ? "#a5b4fc" : "#4f46e5" }, // 💡 e purpurt më e theksuar në light mode
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: 2.5, random: true },
          move: { enable: true, speed: 0.8, outModes: "out" },
          links: {
            enable: true,
            color: isDarkMode ? "#c084fc" : "#6366f1", // 💡 edhe lidhjet më të forta në light
            distance: 100,
            opacity: 0.3,
            width: 1,
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
