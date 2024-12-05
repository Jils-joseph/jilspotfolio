import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons"; // Correctly importing the icon

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Correct usage of FontAwesomeIcon */}
        <div className="text-2xl font-bold text-teal-400">
          <FontAwesomeIcon icon={faCode} />
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#hero"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          {/* Add a hamburger menu icon for mobile screens */}
          <button
            className="text-teal-400 focus:outline-none"
            onClick={() => alert("Toggle Mobile Menu")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
