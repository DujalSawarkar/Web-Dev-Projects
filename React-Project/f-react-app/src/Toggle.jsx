import { useState } from "react";
import "./Toggle.css";
export default function Toggle() {
  const [isHappy, setIsHappy] = useState(true);
  const Clicked = () => {
    setIsHappy(!isHappy);
  };
  return (
    <h1 className="Toggle" onClick={Clicked}>
      {isHappy ? "😃" : "😭"}
    </h1>
  );
}
