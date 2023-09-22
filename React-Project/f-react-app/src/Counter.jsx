import { useState } from "react";

export default function Counter() {
//   e.Preventdefault();
  const [Num, setNum] = useState(0);

  const insNum = () => {
    setNum(Num + 1);
  };

  return (
    <div>
      <p>number : {Num}</p>
      <button onClick={insNum}>click here</button>
    </div>
  );
}
