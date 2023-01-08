import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
