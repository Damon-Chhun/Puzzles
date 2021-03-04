import React from "react";

export default function CartItem({
  department,
  name,
  price,
  productID,
  quantity
}) {
  console.log(department, name, price, quantity, name);
  return <div>{name}</div>;
}
