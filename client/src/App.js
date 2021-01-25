import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";
import AboutPage from "./pages/about/aboutpage.component";
import AccountPage from "./pages/account/accountpage.component";
import SignInPage from "./pages/sign-in/signinpage.component";
import ProductPage from "./pages/product/productpage.component";

import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/account/:userID" component={AccountPage} />
        <Route exact path="/shop/:productID" component={ProductPage} />
        <Route exact path="/SignIn" component={SignInPage} />
      </Switch>
    </div>
  );
}

export default App;
