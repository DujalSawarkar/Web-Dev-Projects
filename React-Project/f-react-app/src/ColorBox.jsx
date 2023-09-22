import Color from "./Color";
import "./ColorBox.css";
export default function ColorBox({ Colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<Color Rcolor={Colors} />);
  }
  return <div className="ColorBox">{boxes}</div>;
}
