import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Slider } from "@mui/material";
import Casuals from "./categoryPages/casuals";
import Formals from "./categoryPages/formals";
import Party from "./categoryPages/party";
import Gym from "./categoryPages/gym";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./category.css";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import RouteCard from "../../routeCard/routeCard";
import { cn } from "../../../lib/utils";

const Category = () => {
  const cloths = ["T-Shirt ", "Short", "Shirt", "Hoodie", "Jeans"];
  const color = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-black",
    "bg-white",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large 3X-Large", // Combined into a single element
    "4X-Large",
  ];

  const dressStyle = ["Casual", "Formal", "Party", "Gym"];

  //   let { param } = useParams();
  const category = useLocation().pathname.slice(10);
  //slider

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <RouteCard category={category} />
      <div className="categoryBody">
        <div className="filterMain">
          <div className="filter-Div1">
            <h1>Filters</h1>
            <HiOutlineAdjustmentsVertical />
          </div>
          <hr />
          <div className="filter-Div2">
            {cloths.map((e) => (
              <div className="filter-Div2-inner">
                <h1>{e}</h1>
                <IoIosArrowForward className="routeIcon" />
              </div>
            ))}
          </div>
          <hr />
          <div>
            <h1>Price</h1>
            <IoIosArrowUp />
            <Slider
              getAriaLabel={() => "Temperature range"}
              // value={value}
              // onChange={handleChange}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
            />
          </div>
          <hr />
          <div>
            <h1>Colors</h1>
            <IoIosArrowUp />
          </div>
          <div>
            {color.map((e) => {
              return <div className={e}>h</div>;
            })}
          </div>
          <div>
            <h1>Size</h1>
            <IoIosArrowUp />
          </div>
          <div>
            {sizes.map((e) => (
              <div>{e}</div>
            ))}
          </div>
        </div>
        <div>
          <div>{category}</div>
          <div>
            {category == "casuals" ? <Casuals /> : ""}
            {category == "formals" ? <Formals /> : ""}
            {category == "party" ? <Party /> : ""}
            {category == "gym" ? <Gym /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
