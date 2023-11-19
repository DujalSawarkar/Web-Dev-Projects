import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct.jsx";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div>
        {cart.length > 0 ? (
          <div>
            <div>
              {cart.map((e) => (
                <CartProduct key={e.id} e={e} />
              ))}
            </div>
            <div>
              <div>
                <p>YOUR CART</p>
                <h1>SUMMARY</h1>
                <p>{`Total item ${cart.length}`}</p>
              </div>
              <div>
                <p>{`Total Amount ${cart.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price,
                  0
                )}`}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {
              <Link to="/dashboard">
                <button>Buy some Item</button>
              </Link>
            }
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
