import React from "react";
import "./Card.css";
const Card = (props) => {
  const data = props.data;
  return (
    <div className="body">
      <img src={data.img} alt="#" className="image" />
      <h3>{data.title}</h3>
      <p>{data.rate}</p>
      <div className="price">
        <h2>{data.price}</h2>
        <p>{data.DiscountPrice == "Null" ? "" : data.DiscountPrice}</p>
        <div className="discount">{data.DiscountPercent}</div>
      </div>
    </div>
  );
};
export default Card;
