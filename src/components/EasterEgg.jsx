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
      document.addEventListener("DOMContentLoaded", function () {
        document
          .querySelector("#scrollhero")
          .addEventListener("wheel", preventScroll)
          .addEventListener("touchmove", preventScroll)
          .addEventListener("mousewheel", preventScroll)
          .addEventListener("DOMMouseScroll", preventScroll);
      });
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
        i >= 11 ? 0 : 2000
      );
    }

    function enableScroll() {
      document.addEventListener("DOMContentLoaded", function () {
        document
          .querySelector("#scrollhero")
          .removeEventListener("wheel", preventScroll)
          .removeEventListener("touchmove", preventScroll)
          .removeEventListener("mousewheel", preventScroll)
          .removeEventListener("DOMMouseScroll", preventScroll);
      });
    }

    const linesOfCode = [
      "props.setDisableAnimations(true)",
      "fadeeaster.className = 'amo fade-out'",
      "scrollhero.scrollIntoView({ behavior: 'smooth' })",
      "fadehero.className = 'fedev fade-out '",
      "console.log('done')",
      "scrollproj.scrollIntoView({ behavior: 'smooth' })",
      "fadeproj.className = 'ana fade-out'",
      "console.log('done')",
      "scrollabout.scrollIntoView({ behavior: 'smooth' })",
      "fadeabout.className = 'about_section-links fade-out '",
      "console.log('done')",
      "scrolleaster.scrollIntoView({ behavior: 'smooth' })",
      "enableScroll()",
      "props.setDisableAnimations(false)",
      "fadeeaster.className = 'amo'",
      "fadeproj.className = 'even project_card'",
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
