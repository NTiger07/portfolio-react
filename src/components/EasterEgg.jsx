import React from "react";
import "./EasterEgg.css";

export default function EasterEgg(props) {
  const handleSnap = () => {
    props.setIsVanished(!props.isVanished);
    setTimeout(() => {
      props.setIsVanished(false);
    }, 24000);
  };
  return (
    <div className="easteregg_section">
      <button onClick={handleSnap}>Click for Easter Egg</button>
      <span className={`${props.isVanished ? "fade-out" : " "}`}>
        I love you
      </span>
    </div>
  );
}
