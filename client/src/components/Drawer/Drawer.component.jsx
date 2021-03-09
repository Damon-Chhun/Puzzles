import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Item from "../CartItem/CartItem.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartProducts } from "../../redux/cart/cart.selectors";
import { selectAuthToken } from "../../redux/auth/auth.selectors";

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

const ShopDrawer = ({ cartItems, token }) => {
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
      <ListContainer>
        {cartItems != null
          ? cartItems.map(({ ...otherCartItemProps }) => {
              return <Item {...otherCartItemProps} token={token} />;
            })
          : null}
      </ListContainer>
    </Drawer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartProducts,
  token: selectAuthToken
});

export default connect(mapStateToProps, null)(ShopDrawer);
