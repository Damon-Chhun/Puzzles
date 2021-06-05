import React from "react";
import { connect } from "react-redux";

// import {
//   clearItemFromCart,
//   addItem,
//   removeItem
// } from "../../redux/cart/cart.actions";

import "./checkout.item.styles.scss";

const CheckoutItem = ({ Item }) => {
  const { name, quantity, price, imageURL } = Item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageURL} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => null}>
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div className="arrow" onClick={() => null}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => null}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({});

export default connect(null, mapDispatchToProps)(CheckoutItem);
