import React from "react";

import { connect } from "react-redux";
import { RemoveItemFromCart, addToCart } from "../../redux/cart/cart.actions";

import {
  CartItemsContainer,
  ItemName,
  Quantity,
  NameQuanitityPriceContainer,
  NameAndQuantityContainer,
  Price
} from "./CartItem.styled";

function CartItem({
  department,
  name,
  price,
  productID,
  quantity,
  removeItem,
  token,
  addToCart
}) {
  console.log(department, name, price, quantity, name);

  console.log(token, "TOKEN TOKEN TOKEN TOKEN TOKEN");
  console.log(productID, "PRODUCTID PRODUCT ID PRODUCT ID");

  if (!name) {
    name = "No Name Found, Fix";
  }
  return (
    <CartItemsContainer>
      <NameQuanitityPriceContainer>
        <NameAndQuantityContainer>
          <div onClick={() => addToCart(productID, -1, token)}>&#10094;</div>
          <Quantity>{quantity}</Quantity>
          <div onClick={() => addToCart(productID, 1, token)}>&#10095;</div>
          <ItemName>{name}</ItemName>
        </NameAndQuantityContainer>
        <Price>${price}</Price>
      </NameQuanitityPriceContainer>
      <div onClick={() => removeItem(token, productID)}>Remove</div>
    </CartItemsContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  removeItem: (token, item) => dispatch(RemoveItemFromCart(token, item)),
  addToCart: (productID, quantity, token) =>
    dispatch(addToCart(productID, quantity, token))
});

export default connect(null, mapDispatchToProps)(CartItem);
