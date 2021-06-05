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
  closeDrawer,
  SaveCostInfo
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
  UnAuthCart,
  SaveCostInfo
}) => {
  console.log(
    cartItems,
    "CART ITEMS HELSDKLFJSDLKFJSLDK:FJSKL:DFJSDFL:KJSDL:KFJ"
  );

  useEffect(() => {
    console.log("use effect processing");
    if (auth !== true) {
      console.log("unauth");
      CalcSubTotal(UnAuthCart);
      CalcTax(subTotalState);
      CalcTotal(subTotalState, taxState);
    } else {
      console.log("auth");
      CalcSubTotal(cartItems);
      CalcTax(subTotalState);
      CalcTotal(subTotalState, taxState);
    }
  });

  //console.log(cartInfo);
  // SaveCostInfo(cartInfo);

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
          {UnAuthCart.products.length > 0
            ? UnAuthCart.products.map(({ ...otherCartItemProps }) => {
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
            <Calculation>$ {subTotalState}</Calculation>

            <Calculation>$ {taxState}</Calculation>

            <Calculation>$ {totalState}</Calculation>
          </CalculationWrapper>
        </MoneyWrapper>

        <CheckoutWrapper>
          <CartAndBtn>
            <CartIcon />
            <DrawerCheckoutBtn>Checkout (testing atm)</DrawerCheckoutBtn>
          </CartAndBtn>
          <PriceContainer>
            <CheckoutPrice>$ {totalState}</CheckoutPrice>
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
  closeDrawer: () => dispatch(closeDrawer()),
  SaveCostInfo: cartInfo => dispatch(SaveCostInfo(cartInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDrawer);
