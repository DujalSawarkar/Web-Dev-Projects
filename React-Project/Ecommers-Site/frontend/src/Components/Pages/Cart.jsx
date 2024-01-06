import React from "react";
import RouteCard from "../routeCard/routeCard";

const Cart = () => {
  return (
    <div>
      <RouteCard />
      <h1>Your cart</h1>
      <div>
        <div></div>
        <div>
          <p>Order Summary</p>
          <div>
            <p>Subtotal</p>
            <p>$565</p>
          </div>
          <div>
            <p>Discount </p>
            <p>-$113</p>
          </div>
          <div>
            <p>Delivery Fee</p>
            <p>$15</p>
          </div>

          <hr />
          <div>
            <p>Total</p>
            <p>$467</p>
          </div>


          
        </div>
      </div>
    </div>
  );
};
export default Cart;
