import React from "react";
import RouteCard from "../routeCard/routeCard";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { FiTag } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { decrement } from "../Redux/Slice/CounterSlice";
import { increment } from "../Redux/Slice/CounterSlice";
import { remove } from "../Redux/Slice/CartSlice";
const Cart = () => {
  const count = useSelector((state) => state.Counter);

  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart);
  console.log(Cart);
  // const cartvalue = useParams();
  return (
    <div>
      <RouteCard />
      <h1 className="Cartheading">Your cart</h1>
      <div className="Cart-Main">
        <div className="Cart-Main-product">
          {Cart.length == 0 ? (
            <>
              {/* <h1>NO ITEM</h1> */}
              <div className="loader-div">
                <div class="loader"></div>
              </div>
            </>
          ) : (
            Cart.map((e) => (
              <>
                <div className="cart-product">
                  <img src={e.imageUrl} alt="" />
                  <RiDeleteBin5Fill
                    className="delete"
                    onClick={() => dispatch(remove(e._id))}
                  />
                  <div>
                    <div className="productr-title">
                      <h2>{e.title}</h2>
                    </div>
                    <div className="Size-text">
                      <p>Size : </p>
                      <div></div>
                    </div>
                    <div>
                      <p>Color :</p>
                      <div></div>
                    </div>

                    <div className="price-text">
                      <p>{`$${e.price}`}</p>
                    </div>
                    <div className="product-btn-div-inner">
                      <button onClick={() => dispatch(decrement())}>-</button>
                      <p>{count < 0 ? 0 : count}</p>
                      <button onClick={() => dispatch(increment())}>+</button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))
          )}
        </div>
        <div className="Cart-Main-details">
          <h2>Order Summary</h2>
          <div className="order-summery">
            <p>Subtotal</p>
            <h3>$565</h3>
          </div>
          <div className="order-summery">
            <p>Discount </p>
            <h4>-$113</h4>
          </div>
          <div className="order-summery">
            <p>Delivery Fee</p>
            <h3>$15</h3>
          </div>

          <hr />
          <div className="order-summery">
            <p>Total</p>
            <h3>$467</h3>
          </div>
          <div className="order-summery">
            <FiTag className="tag" />
            <input type="text" placeholder="Add promo code" />
            <button>Apply</button>
          </div>

          <button className="Check-btn">Go to Checkout </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
