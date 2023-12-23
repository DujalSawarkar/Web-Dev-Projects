import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Slider } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./category.css";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import RouteCard from "../../routeCard/routeCard";
import axios from "axios";
import Card from "../../Card/Card";
import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "@emotion/styled";
// import Card from "../../Card/Cards";

const Category = () => {
  const [catData, setCatData] = useState([]);
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
    "XX-Large ",
    "3X-Large", // Combined into a single element
    "4X-Large",
  ];

  const dressStyle = ["casuals", "formals", "party", "gym"];

  //   let { param } = useParams();
  const { categoryId } = useParams();
  const navigate = useNavigate();
  //slider

  const getItemByCategory = async (categoryId) => {
    const { data } = await axios.get(
      `http://localhost:3000/items/find/${categoryId}`
    );

    console.log(data);
    setCatData(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!dressStyle.includes(categoryId)) navigate("/"); //protection of routes
    getItemByCategory(categoryId);
  }, []);

  const [filterHide, setfilterHide] = useState(true);

  const filterHidechange = () => {
    console.log(filterHide);
    setfilterHide((prev) => !prev);
  };

  const [price, setprice] = useState(true);
  const priceHidechange = () => {
    console.log(price);
    setprice((prev) => !prev);
  };
  const [Color, setColor] = useState(true);
  const ColorHidechange = () => {
    console.log(Color);
    setColor((prev) => !prev);
  };
  const [Size, setSize] = useState(true);
  const SizeHidechange = () => {
    console.log(Size);
    setSize((prev) => !prev);
  };
  const [Style, setStyle] = useState(true);
  const StyleHidechange = () => {
    console.log(Style);
    setStyle((prev) => !prev);
  };

  return (
    <div>
      <RouteCard category={categoryId} />
      <div className="categoryBody">
        <div className={filterHide ? "filterMain " : "filterMain2"}>
          <div className="filter-Div1">
            <h1>Filters</h1>
            <HiOutlineAdjustmentsVertical
              className="filter-icon"
              onClick={filterHidechange}
            />
          </div>
          {filterHide && (
            <>
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
                <div className="filter-Div1">
                  <h1>Price</h1>
                  <IoIosArrowUp
                    className="IoIosArrowUp"
                    onClick={priceHidechange}
                  />
                </div>
                {price && (
                  <Slider
                    className="Slider"
                    getAriaLabel={() => "Temperature range"}
                    // value={value}
                    // onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                  />
                )}
              </div>
              <hr />
              <div className="filter-Div1">
                <h1>Colors</h1>
                <IoIosArrowUp
                  className="IoIosArrowUp"
                  onClick={ColorHidechange}
                />
              </div>

              {Color && (
                <div className="Color-div">
                  {color.map((e) => {
                    return <div className={e}></div>;
                  })}
                </div>
              )}

              <hr />
              <div className="filter-Div1">
                <h1>Size</h1>
                <IoIosArrowUp
                  className="IoIosArrowUp"
                  onClick={SizeHidechange}
                />
              </div>
              {Size && (
                <div className="size-div">
                  {sizes.map((e) => (
                    <button className="Size">{e}</button>
                  ))}
                </div>
              )}
              <hr />
              <div className="filter-Div1">
                <h1>Dress Style</h1>
                <IoIosArrowUp
                  className="IoIosArrowUp"
                  onClick={StyleHidechange}
                />
              </div>
              {Style && (
                <div>
                  <div className="filter-Div2-inner">
                    <h1>Casual</h1>
                    <IoIosArrowForward className="routeIcon" />
                  </div>

                  <div className="filter-Div2-inner">
                    <h1>Formals</h1>
                    <IoIosArrowForward className="routeIcon" />
                  </div>

                  <div className="filter-Div2-inner">
                    <h1>party</h1>
                    <IoIosArrowForward className="routeIcon" />
                  </div>

                  <div className="filter-Div2-inner">
                    <h1>Gym</h1>
                    <IoIosArrowForward className="routeIcon" />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="category-main">
          <div className="category-main-div1">
            <h1>{categoryId}</h1>
            <div className="sortFilter">
              <p>Showing 1-10 of 100 Products Sort by:</p>
              <h5>Most Popular</h5>
              {<RiArrowDropDownLine />}
            </div>
          </div>
          <div className="category-card-div">
            {catData.map((item) => (
              <Card key={item._id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
