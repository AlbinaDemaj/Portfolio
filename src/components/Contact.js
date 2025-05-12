import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-center transition-colors duration-500"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-purple-400 mb-6">
          Contact
        </h2>

        <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-4">
          I’m open to exciting new opportunities, collaborations, freelance work, or simply connecting with professionals in the tech community.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out — I’d love to hear from you!
        </p>

        <a
          href="mailto:demajalbina3@gmail.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:scale-105 transition duration-300"
        >
          <FiMail className="text-lg" />
          demajalbina3@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
