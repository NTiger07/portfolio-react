import React from "react";
import "./EasterEgg.css";

export default function EasterEgg() {
  const [counter, setCounter] = React.useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="easteregg_section">
      <button onClick={increment}>Click for Easter Egg</button>
      <span>{counter}</span>
    </div>
  );
}
