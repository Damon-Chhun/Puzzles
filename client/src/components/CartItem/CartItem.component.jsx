import React from "react";

import { connect } from "react-redux";
import { RemoveItemFromCart } from "../../redux/cart/cart.actions";

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
  token
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
          <Quantity>{quantity}</Quantity>
          <ItemName>{name}</ItemName>
        </NameAndQuantityContainer>
        <Price>${price}</Price>
      </NameQuanitityPriceContainer>
      <button onClick={() => removeItem(token, productID)}>remove</button>
    </CartItemsContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  removeItem: (token, item) => dispatch(RemoveItemFromCart(token, item))
});

export default connect(null, mapDispatchToProps)(CartItem);
