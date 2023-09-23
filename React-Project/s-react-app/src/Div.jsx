import "./Div.css";
import { useState } from "react";
export default function Div() {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const Increment = () => {
    setCount(count + 1);
  };
  const Reset = () => {
    // console.log(count);
    setCount(0);
  };

  return (
    <div>
      <h3>Increment & Decrement</h3>
      <div className="Maindiv">
        <h2 onClick={Decrement}>-</h2>
        <hr />
        <h2>{count}</h2>
        <hr />
        <h2 onClick={Increment}>+</h2>
      </div>
      <br />
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
