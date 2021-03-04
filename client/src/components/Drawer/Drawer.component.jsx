import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../CartItem/CartItem.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartProducts } from "../../redux/cart/cart.selectors";

import {
  DrawerContainer,
  Title,
  CartItemsContainer,
  ItemContainer
} from "./Drawer.styled";

const useStyles = makeStyles({
  drawer: {
    width: "400px",
    marginTop: "80px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "flex-start;",
    textAlign: "center"
  }
});

const ShopDrawer = ({ cartItems }) => {
  console.log(
    cartItems,
    "CART ITEMS HELSDKLFJSDLKFJSLDK:FJSKL:DFJSDFL:KJSDL:KFJ"
  );
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{ paper: classes.drawer }}
    >
      <Title>Your Items</Title>
      {cartItems != null
        ? cartItems.map(({ ...otherCartItemProps }) => {
            return <Item {...otherCartItemProps} />;
          })
        : null}

      {/* <CartItemsContainer>
        <ItemContainer>
          {cartItems.map(product => {
            return <Item item={product} />;
          })}
        </ItemContainer>
      </CartItemsContainer> */}
    </Drawer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartProducts
});

export default connect(mapStateToProps, null)(ShopDrawer);
