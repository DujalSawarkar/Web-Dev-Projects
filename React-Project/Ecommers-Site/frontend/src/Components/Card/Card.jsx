import React from "react";
import "./Card.css";
const Card = (props) => {
  const data = props.data;
  return (
    <div className="body">
      <img src={data.imageUrl} alt="#" className="image" />
      <h3>{data.title}</h3>
      <p>{data.rate}</p>
      <div className="price">
        {data.discount ? (
          <>
            <h2 className="originalPrice">{data.discount}</h2>
            <p className="disPrice">{data.price}</p>
            <div className="discount">{`${data.discountPercent}%`}</div>
          </>
        ) : (
          <h2 className="originalPrice">{data.price}</h2>
        )}

        
      </div>
    </div>
  );
};
export default Card;
