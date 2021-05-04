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
  RemoveButton,
  ChangeQuantityBtn,
  QuantityWrapper,
  RemoveWrapper
} from "./CartItem.styled";
import { createStructuredSelector } from "reselect";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { addItemToCart } from "../../redux/cart/cart.util";

function CartItem({
  department,
  name,
  price,
  _id,
  imageURL,
  Department,
  quantity,
  removeItem,
  token,
  addToCart,
  history,
  auth
}) {
  const title = name;
  const productID = _id;
  console.log(Department, title, price, quantity, title, imageURL);

  console.log(token, "TOKEN TOKEN TOKEN TOKEN TOKEN");
  console.log(productID, "PRODUCTID PRODUCT ID PRODUCT ID");

  if (!title) {
    title = "No Name Found, Fix";
  }
  return (
    <CartItemsContainer>
      <NameQuanitityPriceContainer>
        <NameAndQuantityContainer>
          <QuantityWrapper>
            <ChangeQuantityBtn
              onClick={() =>
                addItemToCart(
                  productID,
                  -1,
                  imageURL,
                  title,
                  price,
                  Department,
                  auth,
                  token
                )
              }
            >
              &#10094;
            </ChangeQuantityBtn>
            <Quantity>{quantity}</Quantity>
            <ChangeQuantityBtn
              onClick={() =>
                addToCart(
                  productID,
                  1,
                  imageURL,
                  title,
                  price,
                  Department,
                  auth,
                  token
                )
              }
            >
              &#10095;
            </ChangeQuantityBtn>
          </QuantityWrapper>
          <ItemName
            onClick={() =>
              history.push(
                `${history.location.pathname}/${department}/${productID}`
              )
            }
          >
            {title}
          </ItemName>
        </NameAndQuantityContainer>
        <Price>${price}</Price>
      </NameQuanitityPriceContainer>
      <RemoveWrapper>
        <RemoveButton onClick={() => removeItem(productID, auth)}>
          Remove
        </RemoveButton>
      </RemoveWrapper>
    </CartItemsContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  auth: selectIsAuth
});

const mapDispatchToProps = dispatch => ({
  removeItem: (productID, auth) =>
    dispatch(RemoveItemFromCart(productID, auth)),
  addToCart: (
    productID,
    quantity,
    imageURL,
    title,
    price,
    Department,
    auth,
    token
  ) =>
    dispatch(
      addToCart(
        productID,
        quantity,
        imageURL,
        title,
        price,
        Department,
        auth,
        token
      )
    )
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartItem)
);
