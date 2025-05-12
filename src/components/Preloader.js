const Preloader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-[9999] transition-opacity duration-500">
        <div className="text-center animate-fade-in">
          <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2 animate-pulse tracking-wide">
            Loading...
          </div>
          <div className="relative inline-block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-gradient-x">
            ALBINA
          </div>
        </div>
      </div>
    );
  };
  
  export default Preloader;
  