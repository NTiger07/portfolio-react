import React from "react";
import "./EasterEgg.css";

export default function EasterEgg(props) {
  const handleSnap = () => {
    const scrollhero = document.getElementById("scrollhero");
    const scrollabout = document.getElementById("scrollabout");
    const scrollproj = document.getElementById("scrollproj");
    const scrolleaster = document.getElementById("scrolleast");

    const fadehero = document.getElementsByClassName("fedev")[0];
    const fadeabout = document.getElementsByClassName("about_section-links")[0];
    const fadeproj = document.getElementsByClassName("ana")[0];
    const fadeeaster = document.getElementsByClassName("amo")[0];

    const linesOfCode = [
      "scrollhero.scrollIntoView({ behavior: 'smooth' })",
      "fadehero.className = 'fedev fade-out '",
      "scrollproj.scrollIntoView({ behavior: 'smooth' })",
      "fadeproj.className = 'ana project_card even fade-out'",
      "scrollabout.scrollIntoView({ behavior: 'smooth' })",
      "fadeabout.className = 'about_section-links fade-out '",
      "scrolleaster.scrollIntoView({ behavior: 'smooth' })",
      "fadeeaster.className = 'amo fade-out '",
    ];

    function executeCodeWithIntervals() {
      let i = 0;
      const intervalID = setInterval(() => {
        eval(linesOfCode[i]);
        i++;
        if (i >= linesOfCode.length) {
          clearInterval(intervalID);
        }
      }, 2000);
    }

    // props.setIsVanished(!props.isVanished);
    // setTimeout(() => {
    //   props.setIsVanished(false);
    // }, 12500);

    executeCodeWithIntervals();
  };

  return (
    <div className="easteregg_section" id="scrolleast">
      <button onClick={handleSnap}>Click for Easter Egg</button>
      <span className={`amo ${props.isVanished ? "fade-out" : " "}`}>
        I love you
      </span>
    </div>
  );
}
