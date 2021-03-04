import React from "react";

import { CartItemsContainer } from "./CartItem.styled";

export default function CartItem({
  department,
  name,
  price,
  productID,
  quantity
}) {
  console.log(department, name, price, quantity, name);
  return <CartItemsContainer>{name}</CartItemsContainer>;
}
