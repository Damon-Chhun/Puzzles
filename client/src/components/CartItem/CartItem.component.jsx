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

function CartItem({
  department,
  name,
  price,
  _id,
  productID,
  imageURL,
  Department,
  quantity,
  removeItem,
  token,
  addToCart,
  history,
  auth
}) {
  //const productID = _id;
  console.log(Department, name, price, quantity, imageURL);

  console.log(token, "TOKEN TOKEN TOKEN TOKEN TOKEN");
  console.log(productID, "PRODUCTID PRODUCT ID PRODUCT ID");
  console.log(_id, "_ID TESTINGSIGHNDFIGHJSDFKLGHJFLDKJGLDFKJ");

  if (!name) {
    name = "No Name Found, Fix";
  }
  return (
    <CartItemsContainer>
      <NameQuanitityPriceContainer>
        <NameAndQuantityContainer>
          <QuantityWrapper>
            <ChangeQuantityBtn
              onClick={() =>
                addToCart(
                  productID,
                  -1,
                  imageURL,
                  name,
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
                  name,
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
            {name}
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
    name,
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
        name,
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
