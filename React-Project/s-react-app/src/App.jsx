import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Div from "./Div";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Div />
    </>
  );
}

export default App;
