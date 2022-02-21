import React from "react";

const Product = (props) => {
  const { addToCart, product } = props;
  // console.log(props);
  return (
    <div style={{ border: "1px solid tomato", margin: 20, padding: 20 }}>
      <h5>{product.name}</h5>
      <button onClick={() => addToCart(product.id, product.name)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
