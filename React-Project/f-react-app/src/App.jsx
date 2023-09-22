// import "./App.css";
import Game from "./game";

import D from "./Dujal";

import Shopping from "./Shopping";

import Propertylist from "./Propertylist";
import Clicker from "./Clicker";
import Counter from "./Counter";

import Toggle from "./Toggle";
// import Color from "./Color";

import ColorBox from "./ColorBox";
// const data = [
//   { id : 1, item: "banana", quantity: 12, completed: true },
//   { id : 2, item: "egg", quantity: 12, completed: false },
//   { id : 3, item: "paneer", quantity: 1, completed: true },
//   { id : 4, item: "milk", quantity: 2, completed: false },
// ];
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];
function App() {
  return (
    <div>
      {/* <h1>heyyy</h1> */}
      {/* <Propertylist properties={properties} /> */}
      {/* <Shopping items={data} /> */}
      {/* <Clicker buttontext="click"  message = "heyyyy"/> */}
      {/* <Counter /> */}
      {/* <Toggle /> */}
      {/* <Color Rcolor={colors}/> */}
      <ColorBox Colors={colors} />
    </div>
  );
}

export default App;
