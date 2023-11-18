import React from "react";
import Product from "./Product";

function ProductCart(props) {
  const Post = props.Post;
  return (
    <div>
      {Post.map((e) => (
        <Product key={e.id} e={e} />
      ))}
    </div>
  );
}
export default ProductCart;
