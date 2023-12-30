import React from "react";
import "./comment.css";
import tick from "../imgs/tick.png";
import { BsThreeDots } from "react-icons/bs";
import star from "../imgs/PaymentImg/star.png";
const Comment = (props) => {
  const data = props.data;

  const divArray = Array.from({ length: data.rayte }, (_, index) => index);
  console.log(divArray);
  return (
    <div className="comment-main">
      <div className="comment-star-div">
        <div className="star">
          {divArray.map((e) => (
            <img src={star} alt="" />
          ))}
        </div>
        <div>
          <BsThreeDots />
        </div>
      </div>
      <div className="comment-name">
        <h2>{data.name}</h2>
        <img src={tick} alt="" />
      </div>
      <p>{data.discription}</p>

      <div className="comment-date">
        <p>{`Posted on ${data.date}`}</p>
      </div>
    </div>
  );
};
export default Comment;
