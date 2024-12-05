import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="text-center">
        <p className="text-sm">&copy; 2024 Jils Joseph. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/jilsjoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jilsjoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jilsjoseph769@outlook.com"
            className="hover:text-teal-400 transition-colors duration-300"
          >
            Email Me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
