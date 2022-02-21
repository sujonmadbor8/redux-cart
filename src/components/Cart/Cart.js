import React from "react";
import { removeFromCart } from "../../Redux/actions/cartActions";
import { connect } from "react-redux";

const Cart = (props) => {
  console.log(props);
  const { cart, removeFromCart } = props;
  return (
    <div>
      <h4>This is Cart</h4>
      {cart.map((pd) => (
        <li key={pd.cartId}>
          {pd.name} <button onClick={() => removeFromCart(pd.cartId)}>X</button>
        </li>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
