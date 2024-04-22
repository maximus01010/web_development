import { useState } from "react";
import "./Colorbox.css";

function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function Colorbox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="Colorbox"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default Colorbox;