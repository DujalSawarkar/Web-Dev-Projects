import React from "react";
import "./CartProduct.css";

import { MdOutlineDelete } from "react-icons/md";
const CartProduct = (props) => {
  const productinfo = props.e;
  // console.log(productinfo);
  return (
    <div className="main">
      <div>
        <img src={productinfo.image} alt="image" className="img" />
      </div>
      <div className="priceinfo">
        <h1>{productinfo.title}</h1>
        <p>{productinfo.description}</p>
        <div className="">
          <p>{productinfo.price}</p>
          <MdOutlineDelete />
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
