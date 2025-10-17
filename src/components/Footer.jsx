import React from "react";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="w-11/12 mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo / Name */}
        <h2 className="poppins text-2xl font-bold text-indigo-600">
          plabon
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://github.com/DevAbidHasan" target="_blank" rel="noreferrer">
            <FiGithub size={24} className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target="_blank" rel="noreferrer">
            <FiLinkedin size={24} className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
          <a href="https://www.facebook.com/plabon48" target="_blank" rel="noreferrer">
            <FiFacebook size={24} className="hover:text-indigo-600 transition-colors duration-300" />
          </a>
        </div>

        {/* Copyright */}
        <p className="poppins text-gray-600 text-sm md:text-base text-center md:text-left">
          &copy; {new Date().getFullYear()} Abid Hasan Plabon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
