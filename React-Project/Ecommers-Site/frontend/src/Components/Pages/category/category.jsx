import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Slider } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./category.css";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import RouteCard from "../../routeCard/routeCard";
import axios from "axios";
import Card from "../../Card/Card";
import { RiArrowDropDownLine } from "react-icons/ri";
import UsePagination from "../../pagination/usePagination";
// import Card from "../../Card/Cards";

const Category = () => {
  const [catData, setCatData] = useState([]);
  const cloths = ["T-Shirt", "shorts", "shirt", "hoodie", "jeans"];
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

  const [searchParam, setsearchParam] = useSearchParams();
  const item_type = searchParam.get("item_type");
  // console.log(item_type);

  const changeitem = (props) => {
    const type = props;
    setsearchParam({ item_type: type });
  };

  const getItemByCategory = async (categoryId, item_type) => {
    const URL = item_type
      ? `http://localhost:4000/items/find/${categoryId}?item_type=${item_type}`
      : `http://localhost:4000/items/find/${categoryId} `;

    const { data } = await axios.get(URL);

    console.log(data);
    setCatData(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!dressStyle.includes(categoryId)) navigate("/"); //protection of routes
    getItemByCategory(categoryId, item_type);
  }, [item_type]);

  const [filterHide, setfilterHide] = useState(true);
  const [price, setprice] = useState(true);
  const [Color, setColor] = useState(true);
  const [Size, setSize] = useState(true);
  const [Style, setStyle] = useState(true);
  const changeHandler = (state, setstate) => {
    setstate((prev) => !prev);
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
              onClick={() => changeHandler(filterHide, setfilterHide)}
            />
          </div>
          {filterHide && (
            <>
              <hr />
              <div className="filter-Div2">
                {cloths.map((e) => (
                  <div className="filter-Div2-inner">
                    <h1>{e}</h1>
                    <IoIosArrowForward
                      className="routeIcon"
                      onClick={() => {
                        changeitem(e);
                      }}
                    />
                  </div>
                ))}
              </div>
              <hr />
              <div>
                <div className="filter-Div1">
                  <h1>Price</h1>
                  <IoIosArrowUp
                    className="IoIosArrowUp"
                    onClick={() => changeHandler(price, setprice)}
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
                  onClick={() => changeHandler(color, setColor)}
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
                  onClick={() => changeHandler(Size, setSize)}
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
                  onClick={() => changeHandler(Style, setStyle)}
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
              <p> Sort by : </p>
              <h5> Most Popular</h5>
              {<RiArrowDropDownLine />}
            </div>
          </div>
          <div className="category-card-div">
            {catData.length == 0 ? (
              <center className="loader-main">
                <div class="loader"></div>
              </center>
            ) : (
              <>
                {catData.map((item) => (
                  <Card key={item._id} data={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="pagination">
        <hr />
        <UsePagination />
      </div>
    </div>
  );
};
export default Category;
