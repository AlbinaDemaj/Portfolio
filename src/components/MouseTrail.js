import { useEffect, useState } from "react";

const MouseTrail = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-32 h-32 rounded-full bg-blue-500 blur-3xl opacity-20"
      style={{
        transform: `translate(${position.x - 64}px, ${position.y - 64}px)`,
        transition: "transform 0.1s ease",
      }}
    />
  );
};

export default MouseTrail;
