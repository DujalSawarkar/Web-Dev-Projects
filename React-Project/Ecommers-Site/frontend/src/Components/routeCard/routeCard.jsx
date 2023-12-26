import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./routeCard.css";
const RouteCard = (props) => {
  const category = props.category;
  return (
    <div className="routeCardMain">
      <Link to={"/"}>
        <div className="homeText">Home </div>
      </Link>
      <IoIosArrowForward className="routeIcon" />
      <Link to={`/category/${category}`}>
        <div className="routecategory">{category}</div>
      </Link>
      {/* <IoIosArrowForward className="routeIcon" />
      <Link to={`/category/${category}`}>
        <div className="routecategory">{category}</div>
      </Link> */}
    </div>
  );
};
export default RouteCard;
