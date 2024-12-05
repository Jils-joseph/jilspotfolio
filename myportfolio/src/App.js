// src/App.js
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About/>
      <Contact/>
     <Footer />
    
    </>
  );
};

export default App;
