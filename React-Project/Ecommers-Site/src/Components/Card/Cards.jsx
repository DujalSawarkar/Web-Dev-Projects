import React from "react";
import "./Cards.css";
import { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  const Data = props.Data;
  const head = props.head;
  console;
  const [view, setview] = useState(false);

  return (
    <div className="div3">
      {console.log(Data)}
      <h1>{head}</h1>
      <div className="cloths">
        {(view ? Data : Data.slice(0, 4)).map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>

      <button className="Cloth-btn1" onClick={() => setview(!view)}>
        {view ? "View Less" : "View All"}
      </button>
    </div>
  );
};
export default Cards;
