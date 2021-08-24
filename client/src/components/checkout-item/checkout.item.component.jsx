import React from "react";
import { connect } from "react-redux";

import { RemoveItemFromCart, addToCart } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";
import { selectIsAuth, selectAuthToken } from "../../redux/auth/auth.selectors";

import "./checkout.item.styles.scss";

const CheckoutItem = ({ Item, token, auth, removeItem }) => {
  const { name, quantity, price, imageURL, productID, department } = Item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageURL} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() =>
            addToCart(productID, -1, imageURL, name, price, auth, department)
          }
        >
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div
          className="arrow"
          onClick={() =>
            addToCart(productID, 1, imageURL, name, price, auth, department)
          }
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItem(productID, auth)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  auth: selectIsAuth,
  token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
  removeItem: (productID, auth) =>
    dispatch(RemoveItemFromCart(productID, auth)),
  addToCart: (productID, quantity, imageURL, name, price, auth, department) =>
    dispatch(addToCart(productID, quantity, imageURL, name, price, auth, department))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
