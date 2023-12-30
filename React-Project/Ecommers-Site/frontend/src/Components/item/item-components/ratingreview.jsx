import React from "react";
import "./ratingreview.css";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import Comment from "../../comment/comment.jsx";
import Data2 from "../../../Data2.js";
const RatingReview = () => {
  return (
    <div className="RatingReview">
      <div className="RatingReview-div1">
        <div className="RatingReview-div1-heading">
          <h2>All Reviews</h2>
          <p>(451)</p>
        </div>
        <div className="RatingReview-btns">
          <div className="comment-icon">
            <HiOutlineAdjustmentsVertical  />
          </div>
          <button className="latest-btn">
            Latest <RiArrowDownSLine />
          </button>
          <button className="write-btn">Write a Review</button>
        </div>
      </div>
      <div className="RatingReview-div2">
        {Data2.map((data) => (
          <Comment data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};
export default RatingReview;
