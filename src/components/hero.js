import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons"; // Import the icon

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen items-center justify-center bg-gradient-to-r from-teal-400 to-blue-600 text-white"
    >
        <div className="mt-6">
          {/* Display the bug slash icon */}
          <FontAwesomeIcon icon={faBugSlash} className="text-4xl text-yellow-300" />
        </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span className="text-yellow-300">Jils Joseph</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-slide-in">
          I am a Full Stack Software Developer
        </p>
        <button
          className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out animate-bounce"
        >
          Scroll Down To Explore My Work
        </button>
        
      </div>
    </section>
  );
};

export default Hero;
