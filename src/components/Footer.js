const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center py-6 border-t border-blue-100 dark:border-gray-700 transition-colors duration-500">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Albina
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
