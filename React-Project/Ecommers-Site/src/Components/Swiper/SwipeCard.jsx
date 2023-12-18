import React from "react";
import right from "../imgs/right.png";
import "./SwipeCard.css";
const SwipeCard = (props) => {
  const Data2 = props.Data2;
  console.log(Data2);
  return (
    <div className="customer-review-card">
      <p>stars</p>
      <span>
        <h2>{Data2.name}</h2>
        <img src={right} alt="" />
      </span>
      <p>{Data2.discription}</p>
    </div>
  );
};
export default SwipeCard;
