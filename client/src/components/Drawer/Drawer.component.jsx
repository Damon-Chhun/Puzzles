import React, { useEffect } from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../CartItem/CartItem.component";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectSubTotal,
  selectTax,
  selectTotal,
  selectIsDrawerOpen
} from "../../redux/cart/cart.selectors";
import { selectAuthToken } from "../../redux/auth/auth.selectors";

import getCartInfo from "./utill";

import {
  CalcSubTotal,
  CalcTax,
  CalcTotal,
  openDrawer,
  closeDrawer
} from "../../redux/cart/cart.actions";

import {
  DrawerContainer,
  Title,
  CartItemsContainer,
  ItemContainer,
  ListContainer,
  TopLineWrapper,
  CloseIcon,
  Icon,
  MoneyWrapper,
  CalculationWrapper,
  Calculation,
  CalculationName,
  CheckoutWrapper,
  DrawerCheckoutBtn,
  CartIcon,
  CartAndBtn,
  PriceContainer,
  CheckoutPrice,
  StickyWrapper
} from "./Drawer.styled";

const useStyles = makeStyles({
  drawer: {
    marginTop: "160px",
    width: "400px",
    height: "100%%",
    marginTop: "80px",
    border: "1px solid grey",
    display: "flex",
    justifyContent: "flex-start;",
    textAlign: "center",
    position: "sticky",
    bottom: "0px"
  }
});

const ShopDrawer = ({
  cartItems,
  token,
  subTotalState,
  CalcSubTotal,
  CalcTax,
  CalcTotal,
  taxState,
  totalState,
  closeDrawer,
  isDrawerOpen
}) => {
  console.log(
    cartItems,
    "CART ITEMS HELSDKLFJSDLKFJSLDK:FJSKL:DFJSDFL:KJSDL:KFJ"
  );

  let cartInfo = {};

  if (cartItems.products.length > 0) {
    cartInfo = getCartInfo(cartItems.products);
  }

  console.log(cartInfo);

  return (
    <DrawerContainer>
      <TopLineWrapper>
        {isDrawerOpen != true ? null : (
          <Icon onClick={() => closeDrawer()}>
            <CloseIcon />
          </Icon>
        )}

        <Title>Your Items</Title>
      </TopLineWrapper>
      <ListContainer>
        {cartItems.products != null
          ? cartItems.products.map(({ ...otherCartItemProps }) => {
              return <Item {...otherCartItemProps} token={token} />;
            })
          : null}
      </ListContainer>

      <StickyWrapper>
        <MoneyWrapper>
          <CalculationWrapper align={"flex-start"}>
            <CalculationName>SubTotal:</CalculationName>
            <CalculationName>Tax:</CalculationName>
            <CalculationName>Total:</CalculationName>
          </CalculationWrapper>

          <CalculationWrapper align={"flex-end"}>
            <Calculation>$ {cartInfo.subtotal}</Calculation>

            <Calculation>$ {cartInfo.tax}</Calculation>

            <Calculation>$ {cartInfo.total}</Calculation>
          </CalculationWrapper>
        </MoneyWrapper>

        <CheckoutWrapper>
          <CartAndBtn>
            <CartIcon />
            <DrawerCheckoutBtn>
              Checkout ({cartItems.products.length})
            </DrawerCheckoutBtn>
          </CartAndBtn>
          <PriceContainer>
            <CheckoutPrice>$ {cartInfo.total}</CheckoutPrice>
          </PriceContainer>
        </CheckoutWrapper>
      </StickyWrapper>
    </DrawerContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  token: selectAuthToken,
  subTotalState: selectSubTotal,
  taxState: selectTax,
  totalState: selectTotal,
  isDrawerOpen: selectIsDrawerOpen
});

const mapDispatchToProps = dispatch => ({
  CalcSubTotal: cartItems => dispatch(CalcSubTotal(cartItems)),
  CalcTax: subTotal => dispatch(CalcTax(subTotal)),
  CalcTotal: (subTotal, tax) => dispatch(CalcTotal(subTotal, tax)),
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDrawer);
