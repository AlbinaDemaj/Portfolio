import { useState } from "react";
import Marquee from "react-fast-marquee";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null); // për modal

  const certs = [
    { title: "Agile Basics & Scrum Foundations", img: "/certificates/cert1.jpeg" },
    { title: "Cyber Security – ARRA Academy", img: "/certificates/cert2.png" },
    { title: "UI/UX Design with Figma", img: "/certificates/cert3.png" },
    { title: "HTML5, CSS3 & Web Hosting", img: "/certificates/cert4.png" },
    { title: " Full Stack Developer Certificate", img: "/certificates/cert5.jpg" },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-blue-700 dark:text-purple-400 mb-6">
            Certifications
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            During my journey as a Full Stack Developer, I’ve completed several certifications
            that enhance my technical and creative skills. These programs have helped me grow
            in areas like Agile development, UI/UX design, web security, and more.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            I continuously seek learning opportunities to stay up-to-date with the latest tools
            and practices in tech.
          </p>
        </div>

        {/* Right Slider */}
        <div className="lg:w-2/3 w-full">
          <Marquee gradient={false} speed={35} pauseOnHover>
            <div className="flex gap-10">
              {certs.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className={`relative w-64 h-80 rounded-2xl overflow-hidden border border-blue-100 dark:border-gray-700 bg-white/80 dark:bg-gray-800/60 backdrop-blur-md shadow-xl group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                    index === certs.length - 1 ? "mr-10" : ""
                  }`}
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-white text-sm font-medium">
                      {cert.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Modal certifikate */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-2xl w-full mx-4 p-4 relative">
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="w-full h-auto rounded"
            />
            <p className="text-center text-gray-700 dark:text-gray-200 mt-3 text-sm font-medium">
              {selectedCert.title}
            </p>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
