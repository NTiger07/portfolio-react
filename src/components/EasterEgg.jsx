import React from "react";
import "./EasterEgg.css";

export default function EasterEgg(props) {
  const handleSnap = () => {
    const elementhero = document.getElementById("scrollhero");
    const elementabout = document.getElementById("scrollabout");
    const elementproj = document.getElementById("scrollproj");
    const elementeaster = document.getElementById("scrolleast");

    const linesOfCode = [
      "elementhero.scrollIntoView({ behavior: 'smooth' })",
      "elementproj.scrollIntoView({ behavior: 'smooth' })",
      "elementabout.scrollIntoView({ behavior: 'smooth' })",
      "elementeaster.scrollIntoView({ behavior: 'smooth' })",
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

    props.setIsVanished(!props.isVanished);
    setTimeout(() => {
      props.setIsVanished(false);
    }, 12500);

    executeCodeWithIntervals();
  };

  return (
    <div className="easteregg_section" id="scrolleast">
      <button onClick={handleSnap}>Click for Easter Egg</button>
      <span className={`${props.isVanished ? "fade-out" : " "}`}>
        I love you
      </span>
    </div>
  );
}
