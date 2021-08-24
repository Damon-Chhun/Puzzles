import React from "react";
import CheckoutItem from "../../components/checkout-item/checkout.item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

//MUI Breadcrumb component
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotal,
  selectUnAuthCart
} from "../../redux/cart/cart.selectors";
import { selectIsAuth } from "../../redux/auth/auth.selectors";

import Header from "../../components/header/header.component";
import "./checkout.styles.scss";


const useStyles = makeStyles({
  root: {
    
    width: "100%",
    position: "sticky",
    top: 60,
    zIndex: 10,
  },
  
});



const CheckoutPage = ({ cartItems, unAuthCartItems, auth, total }) => {

  const classes = useStyles();

return(
  <div className="checkout-page">
    <Header />

    <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.root}}>
        <Link color="inherit" href="/" >
          Home
        </Link>
        <Link color="inherit" href="/shop" >
          Shop
        </Link>
        <Typography color="textPrimary">Checkout</Typography>
      </Breadcrumbs>

    <div className="checkout-header">
      <div className="header-block">
        <span> Product </span>
      </div>
      <div className="header-block">
        <span> Description </span>
      </div>
      <div className="header-block">
        <span> Quantity </span>
      </div>
      <div className="header-block">
        <span> Price </span>
      </div>
      <div className="header-block">
        <span> Remove </span>
      </div>
    </div>
    {auth !== true
      ? unAuthCartItems.products.map(unAuthCartItem => (
          <CheckoutItem key={unAuthCartItem.id} Item={unAuthCartItem} />
        ))
      : cartItems.products.map(cartItem => (
          <CheckoutItem key={cartItem.id} Item={cartItem} />
        ))}

    <div className="total">TOTAL: {total}</div>
    <div className="test-warning">
      * Please use the following test credit card for payments *
      <br />
      4242 4242 4242 4242 - Exp: date - CVC: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  unAuthCartItems: selectUnAuthCart,
  auth: selectIsAuth,
  total: selectTotal
});

export default connect(mapStateToProps)(CheckoutPage);
