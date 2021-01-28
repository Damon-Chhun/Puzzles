import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import AboutPage from "./pages/about/aboutpage.component";
import AccountPage from "./pages/account/accountpage.component";
import SignInPage from "./pages/sign-in/signinpage.component";
import ProductPage from "./pages/product/productpage.component";
import RegisterPage from "./pages/register/registerpage.component";

import { fetchShop } from "./redux/shop/shop.actions";

function App({ fetchShop }) {
  useEffect(() => {
    console.log("USE EFFECT HOOK >.<");
    fetchShop();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/account/:userID" component={AccountPage} />
        <Route exact path="/shop/:productID" component={ProductPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(fetchShop())
});

export default connect(null, mapDispatchToProps)(App);
