import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectAuthToken, selectIsAuth } from "../../redux/auth/auth.selectors";

import {
  CardButton,
  AddToCart,
  CardContainer,
  MainInfoWrapper,
  ImageContainer,
  Image,
  HeaderWrapper,
  Header,
  Name,
  Price,
  ButtonWrapper,
  Button
} from "./MuiCard.styled";

function MuiCard({ info, addToCart, token, history, match, props, auth }) {
  const { _id, imageURL, title, price, Department } = info;

  return (
    <CardContainer>
      <MainInfoWrapper
        onClick={() => history.push(`/shop/${Department}/${_id}`)}
      >
        <Header>{Department}</Header>
        <ImageContainer>
          <Image src={imageURL} />
        </ImageContainer>
        <Name>{title}</Name>
        <Price>$ {price}</Price>
      </MainInfoWrapper>
      <ButtonWrapper>
        <Button
          onClick={() =>
            addToCart(_id, 1, imageURL, title, price, auth, token, Department)
          }
        >
          Add To Cart
        </Button>
      </ButtonWrapper>
    </CardContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken,
  auth: selectIsAuth
});

const mapDispatchToProps = dispatch => ({
  addToCart: (
    productID,
    quantity,
    imageURL,
    title,
    price,
    auth,
    token,
    Department
  ) =>
    dispatch(
      addToCart(
        productID,
        quantity,
        imageURL,
        title,
        price,
        auth,
        token,
        Department
      )
    )
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MuiCard)
);
