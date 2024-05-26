import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
    <footer className="container mx-auto ">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-5 font-semibold text-gray-400">
        Created by Imran Ansari
      </div>

      <div className="flex justify-center mt-3 border-t border-gray-700 pt-3 text-xs">
        <p className="text-gray-500 text-center ">
          &copy; 2024 My Movies Website. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
