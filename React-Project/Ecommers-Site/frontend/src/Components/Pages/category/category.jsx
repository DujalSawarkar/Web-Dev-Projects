import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Slider } from "@mui/material";
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

  const dressStyle = ["casuals", "formals", "party", "gym"];

  //   let { param } = useParams();
  const { categoryId } = useParams();
  const navigate = useNavigate();
  //slider

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!dressStyle.includes(categoryId)) navigate("/"); //protection of routes
  }, [categoryId]);

  return (
    <div>
      <RouteCard category={categoryId} />
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
          <div>{categoryId}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Category;
