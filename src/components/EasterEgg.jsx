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

    function preventScroll(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    function disableScroll() {
      var element = document.querySelector("#scrollhero");
      element.addEventListener("wheel", preventScroll);
      element.addEventListener("touchmove", preventScroll);
      element.addEventListener("mousewheel", preventScroll);
      element.addEventListener("DOMMouseScroll", preventScroll);
    }

    function executeCodeWithIntervals() {
      let i = 0;
      const intervalID = setInterval(
        () => {
          eval(linesOfCode[i]);
          i++;
          if (i >= linesOfCode.length) {
            clearInterval(intervalID);
          }
        },
        i >= 10 ? 0 : 2000
      );
    }

    function enableScroll() {
      var element = document.querySelector("#scrollhero");
      element.removeEventListener("wheel", preventScroll);
      element.removeEventListener("touchmove", preventScroll);
      element.removeEventListener("mousewheel", preventScroll);
      element.removeEventListener("DOMMouseScroll", preventScroll);
    }

    const linesOfCode = [
      "fadeeaster.className = 'amo fade-out'",
      "props.setDisableAnimations(true)",
      "scrollhero.scrollIntoView({ behavior: 'smooth' })",
      "fadehero.className = 'fedev fade-out '",
      "console.log('hero done')",
      "scrollproj.scrollIntoView({ behavior: 'smooth' })",
      "fadeproj.className = 'ana fade-out'",
      "console.log('project done')",
      "scrollabout.scrollIntoView({ behavior: 'smooth' })",
      "fadeabout.className = 'about_section-links fade-out '",
      "console.log('about links done')",
      "scrolleaster.scrollIntoView({ behavior: 'smooth' })",
      "props.setDisableAnimations(false)",
      "enableScroll()",
      "fadeeaster.className = 'amo'",
      "fadeproj.className = 'ana'",
      "fadeabout.className = 'about_section-links'",
      "fadehero.className = 'fedev'",
    ];

    disableScroll();
    executeCodeWithIntervals();
  };

  return (
    <div className="easteregg_section" id="scrolleast">
      <button onClick={handleSnap}>Click for Easter Egg</button>
      <span className="amo">I love you</span>
    </div>
  );
}
