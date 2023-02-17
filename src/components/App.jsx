import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import EasterEgg from "./EasterEgg";

import "../fonts/Lexend_Deca/LexendDeca-VariableFont_wght.ttf";
import "../fonts/Sacramento/Sacramento-Regular.ttf";
import "../App.css";

const App = () => {
  const [isVanished, setIsVanished] = React.useState(false);

  return (
    <div className="main_container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero isVanished={isVanished} />
                <About isVanished={isVanished} />
                <Skills />
                <Projects isVanished={isVanished} />
                <Contact />
                <div className="footerroof"></div>
                <Footer />
                <EasterEgg
                  isVanished={isVanished}
                  setIsVanished={setIsVanished}
                />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <Navbar />
                <About />
                <Skills />
                <div className="footerroof"></div>
                <Footer />
              </>
            }
          />
          <Route
            path="skills"
            element={
              <>
                <Navbar />
                <Skills />
                <div className="footerroof"></div>
                <Footer />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <Navbar />
                <Contact />
                <div className="footerroof"></div>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
