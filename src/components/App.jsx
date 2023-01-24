import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import "../fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf";
import "../fonts/Sacramento/Sacramento-Regular.ttf";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="footerroof"></div>
      <Footer />
    </div>
  );
}
