import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../CartItem/CartItem.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartProducts,
  selectSubTotal,
  selectTax,
  selectTotal
} from "../../redux/cart/cart.selectors";
import { selectAuthToken } from "../../redux/auth/auth.selectors";

import {
  CalcSubTotal,
  CalcTax,
  CalcTotal
} from "../../redux/cart/cart.actions";

import {
  DrawerContainer,
  Title,
  CartItemsContainer,
  ItemContainer,
  ListContainer
} from "./Drawer.styled";

const useStyles = makeStyles({
  drawer: {
    width: "400px",
    marginTop: "80px",
    border: "1px solid grey",
    display: "flex",
    justifyContent: "flex-start;",
    textAlign: "center"
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
  totalState
}) => {
  console.log(
    cartItems,
    "CART ITEMS HELSDKLFJSDLKFJSLDK:FJSKL:DFJSDFL:KJSDL:KFJ"
  );
  const classes = useStyles();

  CalcSubTotal(cartItems);
  CalcTax(subTotalState);
  CalcTotal(subTotalState, taxState);

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{ paper: classes.drawer }}
    >
      <Title>Your Items</Title>
      <ListContainer>
        {cartItems != null
          ? cartItems.map(({ ...otherCartItemProps }) => {
              return <Item {...otherCartItemProps} token={token} />;
            })
          : null}
      </ListContainer>
      <div>{subTotalState}</div>
      <div>{taxState}</div>
      <div>{totalState}</div>
    </Drawer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartProducts,
  token: selectAuthToken,
  subTotalState: selectSubTotal,
  taxState: selectTax,
  totalState: selectTotal
});

const mapDispatchToProps = dispatch => ({
  CalcSubTotal: cartItems => dispatch(CalcSubTotal(cartItems)),
  CalcTax: subTotal => dispatch(CalcTax(subTotal)),
  CalcTotal: (subTotal, tax) => dispatch(CalcTotal(subTotal, tax))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDrawer);
