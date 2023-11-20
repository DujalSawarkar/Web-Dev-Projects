import React from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../../Redux/Slice/Slice.jsx";
const Product = (props) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const info = props.e;
  const Description = info.description;

  const removeItem = () => {
    
    dispatch(remove(info.id));
  };
  const addItem = () => {
    dispatch(add(info));
  };

  return (
    <div className="ProduMain">
      <p className="title">
        {info.title.length > 20
          ? `${info.title.slice(0, 20)}...`
          : `${info.title}..`}
      </p>
      <div className="img-div">
        <img src={info.image} alt="#" />
      </div>
      <p className="description">
        {Description.length > 50
          ? `${Description.slice(0, 50)}..`
          : `${Description}...`}
      </p>
      <div className="btn-div">
        <h3>{`${info.price}$`}</h3>
        {cart.some((e) => e.id == info.id) ? (
          <button className="cartbtn" onClick={removeItem}>Remove from Cart</button>
        ) : (
          <button className="cartbtn" onClick={addItem}>Add to Cart</button>
        )}
      </div>
    </div>
    
  );
};

export default Product;
