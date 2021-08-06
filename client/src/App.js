import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsAuthLoading } from "./redux/auth/auth.selectors";
import { selectIsCartLoading } from "./redux/cart/cart.selectors";
import { selectIsReviewsLoading } from "./redux/reviews/reviews.selectors";
import { selectIsShopLoading } from "./redux/shop/shop.selectors";

import Spinner from "./components/spinner/spinner.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import AboutPage from "./pages/about/aboutpage.component";
import AccountPage from "./pages/account/accountpage.component";
import SignInPage from "./pages/sign-in/signinpage.component";
import ProductPage from "./pages/product/productpage.component";
import RegisterPage from "./pages/register/registerpage.component";
import DiscussionPage from "./pages/Discussion/DiscussionPage.component";
import Footer from "./components/footer/footer.component";

import CheckoutPage from "./pages/checkout /checkout.component";

import setAuthToken from "./utils/setAuthToken";
import { store } from "./redux/store";
import { loadUser } from "./redux/auth/auth.actions";

import "./main.css";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App({ loadingShop }) {
  useEffect(() => {
    store.dispatch(loadUser());
    let ShopWithSpinner = Spinner(ShopPage);
  }, []);

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/account/:userID" component={AccountPage} />
        <Route
          exact
          path="/shop/:department/:productID"
          component={ProductPage}
        />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/posts/:postID" component={DiscussionPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loadingShop: selectIsShopLoading,
  loadingAuth: selectIsAuthLoading,
  loadingReviews: selectIsReviewsLoading,
  loadingCart: selectIsCartLoading
});

export default connect(mapStateToProps, null)(App);
