import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
      }}
    >
      <div
        className="w-40 h-40 rounded-full opacity-40 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #6366f1, #9333ea)", // nga blu në purple
        }}
      />
    </div>
  );
};

export default MouseGlow;
