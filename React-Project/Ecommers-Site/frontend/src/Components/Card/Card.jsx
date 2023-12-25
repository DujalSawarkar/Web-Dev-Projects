import React from "react";
import "./Card.css";
import star from "../imgs/PaymentImg/star.png";
const Card = (props) => {
  const data = props.data;
  const divArray = Array.from({ length: data.rate }, (_, index) => index);
  console.log(divArray);
  return (
    <div className="body">
      <img src={data.imageUrl} alt="#" className="image" />
      <h3>{data.title}</h3>
      <div className="star-rate-div">
        {divArray.map((e) => (
          <img src={star} alt="" />
        ))}
        <p>{`${data.rate}.0/5`}</p>
      </div>
      <div className="price">
        {data.discount ? (
          <>
            <h2 className="originalPrice">{`$${data.discount}`}</h2>
            <p className="disPrice">{`$${data.price}`}</p>
            <div className="discount">{`-${data.discountPercent}%`}</div>
          </>
        ) : (
          <h2 className="originalPrice">{`$${data.price}`}</h2>
        )}
      </div>
    </div>
  );
};
export default Card;
