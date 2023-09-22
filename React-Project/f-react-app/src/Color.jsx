import { useState } from "react";

import "./Color.css";
function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default function Color({ Rcolor }) {
  const [Color, setColor] = useState(randomChoice(Rcolor));
  const ChangeColor = () => {
    const randColor = randomChoice(Rcolor);
    setColor(randColor);
  };

  return (
    <div
      className="Color"
      style={{ backgroundColor: Color }}
      onClick={ChangeColor}
    ></div>
  );
}
