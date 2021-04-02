import React, { useEffect, Fragment } from "react";
import Header from "../../components/header/header.component";
import Cards from "../../components/Cards/Cards.component";

import { connect } from "react-redux";
import {
  selectShopCategories,
  selectShopCollection
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { fetchShop } from "../../redux/shop/shop.actions";

import {
  ShopPageContainer,
  ShopSticky,
  CardContainer,
  Blank
} from "./shop.styled";
import SmoothNavBar from "../../components/SmoothNavBar/SmoothNavbar.component";
import ShopDrawer from "../../components/Drawer/Drawer.component";

import { selectAuthToken } from "../../redux/auth/auth.selectors";
import { loadCartOnLogin } from "../../redux/cart/cart.actions";

function ShopPage({ categories, fetchShop, shop, cart, token }) {
  useEffect(() => {
    fetchShop();
    loadCartOnLogin(token);
  }, []);
  return (
    <Fragment>
      <ShopPageContainer>
        <ShopDrawer />
        <CardContainer>
          <ShopSticky>
            <SmoothNavBar category={categories} />
          </ShopSticky>
          <Cards categories={categories} shop={shop} />
        </CardContainer>
        <Blank></Blank>
      </ShopPageContainer>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: selectShopCategories,
  shop: selectShopCollection,
  token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(fetchShop()),
  loadCartOnLogin: token => dispatch(loadCartOnLogin(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
