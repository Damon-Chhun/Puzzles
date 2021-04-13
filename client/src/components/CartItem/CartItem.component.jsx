import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { RemoveItemFromCart, addToCart } from "../../redux/cart/cart.actions";

import {
  CartItemsContainer,
  ItemName,
  Quantity,
  NameQuanitityPriceContainer,
  NameAndQuantityContainer,
  Price,
  RemoveButton
} from "./CartItem.styled";

function CartItem({
  department,
  name,
  price,
  productID,
  quantity,
  removeItem,
  token,
  addToCart,
  history
}) {
  console.log(department, name, price, quantity, name);

  console.log(token, "TOKEN TOKEN TOKEN TOKEN TOKEN");
  console.log(productID, "PRODUCTID PRODUCT ID PRODUCT ID");

  if (!name) {
    name = "No Name Found, Fix";
  }
  return (
    <CartItemsContainer
      onClick={() =>
        history.push(`${history.location.pathname}${department}/${productID}`)
      }
    >
      <NameQuanitityPriceContainer>
        <NameAndQuantityContainer>
          <div onClick={() => addToCart(productID, -1, token)}>&#10094;</div>
          <Quantity>{quantity}</Quantity>
          <div onClick={() => addToCart(productID, 1, token)}>&#10095;</div>
          <ItemName>{name}</ItemName>
        </NameAndQuantityContainer>
        <Price>${price}</Price>
      </NameQuanitityPriceContainer>
      <RemoveButton onClick={() => removeItem(token, productID)}>
        Remove
      </RemoveButton>
    </CartItemsContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  removeItem: (token, item) => dispatch(RemoveItemFromCart(token, item)),
  addToCart: (productID, quantity, token) =>
    dispatch(addToCart(productID, quantity, token))
});

export default withRouter(connect(null, mapDispatchToProps)(CartItem));
