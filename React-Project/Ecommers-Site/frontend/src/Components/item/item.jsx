import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import RouteCard from "../routeCard/routeCard";
import star from "../imgs/PaymentImg/star.png";
import ProductInfo from "./item-components/productinfi.jsx";
import RatingReview from "./item-components/ratingreview.jsx";
import FAQ from "./item-components/faq.jsx";
import "./item.css";
import Card from "../Card/Card";
import Data2 from "../../Data2";
import { Store } from "../Redux/Store.jsx";
export const Item = () => {
  const { itemtype } = useParams();
  // console.log(Store.reducer.Cart);
  // console.log(itemtype);
  const [itemData, setItemData] = useState([]);
  const [ratingComp, setRatingComp] = useState([
    {
      name: "Product Details",
      isActive: false,
    },
    {
      name: "Rating & Reviews",
      isActive: true,
    },
    {
      name: "FAQs",
      isActive: false,
    },
  ]);
  const [Sizebtn, setSizebtn] = useState([
    {
      name: "Small",
      isActive: false,
    },
    {
      name: "Medium",
      isActive: true,
    },
    {
      name: "Large",
      isActive: false,
    },
    {
      name: "X-Large",
      isActive: false,
    },
  ]);

  const [searchParam, setsearchParam] = useSearchParams();
  const id = searchParam.get("id");
  const [divArray, setDivArray] = useState([]);
  // console.log(id);

  const makeaArray = (arraySize) => {
    let arr = [];

    for (let i = 0; i < arraySize; i++) {
      arr.push(i);
    }

    return arr;
  };

  const itemDatabyID = async (itemtype, id) => {
    // console.log("inside api call");

    axios
      .get(`http://localhost:3000/items/${itemtype}?id=${id}`)
      .then((res) => {
        setItemData(res.data);
        setDivArray(() => makeaArray(res.data[0].rate));
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    itemDatabyID(itemtype, id);
  }, [id]);

  // console.log(itemData[0]);
  const clickHandler = (index, setfun, fun) => {
    const updatedRatingComp = fun.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setfun(updatedRatingComp);
  };

  return itemData.length == 0 ? (
    "data not found"
  ) : (
    <div>
      <RouteCard />

      <div className="item-detail">
        <div className="item-detail-div1">
          <div className="item-detail-div1-1">
            <div>
              <img src={itemData[0].imageUrl} alt="" />
            </div>
            <div>
              <img src={itemData[0].imageUrl} alt="" />
            </div>
            <div>
              <img src={itemData[0].imageUrl} alt="" />
            </div>
          </div>
          <div className="item-detail-div1-2">
            <img src={itemData[0].imageUrl} alt="" />
          </div>
        </div>
        <div className="item-detail-div2">
          <h1 className="">{itemData[0].title}</h1>
          <div className="item-detail-div2-star">
            {divArray.map((e) => (
              <img src={star} alt={e} />
            ))}
            <p>{`${itemData[0].rate}.0/5`}</p>
          </div>
          <div className="item-detail-div2-price">
            {itemData[0].discount ? (
              <>
                <h2>{`$${itemData[0].discount}`}</h2>
                <p>{`$${itemData[0].price}`}</p>
                <div>{`-${itemData[0].discountPercent}%`}</div>
              </>
            ) : (
              <h2>{`$${itemData[0].price}`}</h2>
            )}
          </div>
          <p className="discription">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <p className="color-h">Select Colors</p>
          <div className="color">
            <div className="color-inner"></div>
            <div className="color-inner"></div>
            <div className="color-inner"></div>
          </div>
          <hr />
          <p className="size-h">Choose Size</p>
          <div className="size-maindiv">
            {Sizebtn.map((size, index) => (
              <>
                <button
                  onClick={() => clickHandler(index, setSizebtn, Sizebtn)}
                  key={index}
                  className={`${
                    size.isActive ? "Size-inner sizeclicked" : "Size-inner"
                  }`}
                >
                  {size.name}
                </button>
              </>
            ))}
          </div>
          <hr />
          <div className="btn-div">
            <div className="btn-div-inner">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className="addtocart-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="Rating-raviews">
        <div className="Rating-raviews-btn">
          {ratingComp.map((rate, index) => (
            <>
              <button
                onClick={() => clickHandler(index, setRatingComp, ratingComp)}
                key={index}
                className={`${rate.isActive ? "active" : ""}`}
              >
                {rate.name}
              </button>
            </>
          ))}
        </div>

        <div>{ratingComp[0].isActive == true ? <ProductInfo /> : ""}</div>
        <div>{ratingComp[1].isActive == true ? <RatingReview /> : ""}</div>
        <div>{ratingComp[2].isActive == true ? <FAQ /> : ""}</div>
      </div>

      <div className="item-detail-main-card">
        <h1>You might also like</h1>
        <div className="item-detail-card">
          {itemData[1].map((e) => (
            <Card data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
