import React from "react";
import right from "../imgs/right.png";
import star from "../imgs/PaymentImg/star.png";
// import "./SwipeCard.css";
const SwipeCard = (props) => {
  const Data2 = props.Data2;
  // console.log(Data2);
  return (
    <div className="border rounded-xl p-5 w-80 ml-8">
      <div className="flex gap-1">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <div className="flex  items-center gap-2 pb-2 pt-2 ">
        <h2 className="text-lg font-bold leading-5 tracking-normal text-left">{Data2.name}</h2>
        <img src={right} alt="" />
      </div>
      <p>{Data2.discription}</p>
    </div>
  );
};
export default SwipeCard;
