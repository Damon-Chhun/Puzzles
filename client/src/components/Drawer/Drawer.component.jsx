import React, { useEffect } from "react";

import Item from "../CartItem/CartItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectSubTotal,
  selectTax,
  selectTotal,
  selectIsDrawerOpen,
  selectUnAuthCart
} from "../../redux/cart/cart.selectors";
import { selectAuthToken, selectIsAuth } from "../../redux/auth/auth.selectors";

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
  isDrawerOpen,
  auth,
  UnAuthCart
}) => {
  console.log(
    cartItems,
    "CART ITEMS HELSDKLFJSDLKFJSLDK:FJSKL:DFJSDFL:KJSDL:KFJ"
  );

  let cartInfo = {
    subtotal: 0.0,
    tax: 0.0,
    total: 0.0,
    quantity: 0
  };
  //let UnAuthCartInfo = {};

  if (auth == true) {
    if (cartItems.products != undefined) {
      cartInfo = getCartInfo(cartItems.products);
    }
  } else {
    cartInfo = getCartInfo(UnAuthCart);
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

      {auth == true ? (
        <ListContainer>
          {cartItems.products != null
            ? cartItems.products.map(({ ...otherCartItemProps }) => {
                return <Item {...otherCartItemProps} token={token} />;
              })
            : null}
        </ListContainer>
      ) : (
        <ListContainer>
          {UnAuthCart.length > 0
            ? UnAuthCart.map(({ ...otherCartItemProps }) => {
                return <Item {...otherCartItemProps} token={token} />;
              })
            : null}
        </ListContainer>
      )}

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
              Checkout ({cartInfo.quantity})
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
  isDrawerOpen: selectIsDrawerOpen,
  auth: selectIsAuth,
  UnAuthCart: selectUnAuthCart
});

const mapDispatchToProps = dispatch => ({
  CalcSubTotal: cartItems => dispatch(CalcSubTotal(cartItems)),
  CalcTax: subTotal => dispatch(CalcTax(subTotal)),
  CalcTotal: (subTotal, tax) => dispatch(CalcTotal(subTotal, tax)),
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDrawer);
