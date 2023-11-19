import React from "react";
import Product from "./Product";
import "./ProductCart.css";
function ProductCart(props) {
  const Post = props.Post;
  return (
    <div className="ProdcartMain">
      {Post.map((e) => (
        <Product key={e.id} e={e} />
      ))}
    </div>
  );
}
export default ProductCart;
