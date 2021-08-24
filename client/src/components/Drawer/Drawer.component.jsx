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
  selectUnAuthCart,
  selectCartItemsProducts
} from "../../redux/cart/cart.selectors";
import { selectAuthToken, selectIsAuth } from "../../redux/auth/auth.selectors";

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
  AuthProducts
}) => {

  useEffect(() => {
    console.log("use effect processing");
    console.log(AuthProducts);
      console.log("unauth");
      CalcSubTotal((auth!== true) ? UnAuthCart : cartItems);
      CalcTax( subTotalState);
      CalcTotal(subTotalState, taxState);
});


  return (
    <DrawerContainer>
      <TopLineWrapper>
        {isDrawerOpen !== true ? null : (
          <Icon onClick={() => closeDrawer()}>
            <CloseIcon />
          </Icon>
        )}

        <Title>Your Items</Title>
      </TopLineWrapper>

      {auth === true ? (
        <ListContainer>
          {AuthProducts != null
            ? AuthProducts.map(({ ...otherCartItemProps }) => {
                return <Item {...otherCartItemProps} token={token} />;
              })
            : null}
        </ListContainer>
      ) : (
        <ListContainer>
          {UnAuthCart.products != null
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
          </CalculationWrapper>

          <CalculationWrapper align={"flex-end"}>
            <Calculation>$ {subTotalState}</Calculation>

            <Calculation>$ {taxState}</Calculation>
          </CalculationWrapper>
        </MoneyWrapper>

        <CheckoutWrapper>
          <CartAndBtn>
            <CartIcon />
            <DrawerCheckoutBtn to="/checkout">Checkout</DrawerCheckoutBtn>
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
  UnAuthCart: selectUnAuthCart,
  AuthProducts: selectCartItemsProducts
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
