import React from "react";
import Product from "./../Product/Product";
import { addToCart } from "./../../Redux/actions/cartActions";
import { connect } from "react-redux";

const Shop = (props) => {
  //   console.log(props);
  const { products, addToCart } = props;
  //   console.log(products);
  return (
    <div>
      <h2>This is shop</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        ></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
};

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
