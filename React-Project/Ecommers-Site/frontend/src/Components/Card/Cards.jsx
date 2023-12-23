import React from "react";
import "./Cards.css";
import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const Data = props.Data;
  // console.log(Data);
  const head = props.head;

  const [view, setview] = useState(false);

  return (
    <div className="div3">
      {/* {console.log(data)} */}
      <h1>{head}</h1>
      <div className="cloths">
        {(view ? Data : Data.slice(0, 4)).map((data) => (
          <Card key={data._id} data={data} />
        ))}
      </div>

      <button className="Cloth-btn1" onClick={() => setview(!view)}>
        {view ? "View Less" : "View All"}
      </button>
    </div>
  );
};
export default Cards;
