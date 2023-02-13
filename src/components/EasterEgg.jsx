import React from "react";
import "./EasterEgg.css";

export default function EasterEgg() {
  const [isVanished, setIsVanished] = React.useState(false);
  const handleSnap = () => {
    setIsVanished(!isVanished);
  };
  return (
    <div className="easteregg_section">
      <button onClick={handleSnap}>Click for Easter Egg</button>
      <span className={`fade-out ${isVanished ? "vanished" : ""}`}>
        I love you
      </span>
    </div>
  );
}
