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

import { ShopPageContainer, ShopSticky } from "./shop.styled";
import SmoothNavBar from "../../components/SmoothNavBar/SmoothNavbar.component";
import Drawer from "../../components/Drawer/Drawer.component";
import MuiCard from "../../components/MuiCard/MuiCard.component";
import { selectAuthToken } from "../../redux/auth/auth.selectors";

function ShopPage({ categories, fetchShop, shop, cart, token }) {
  useEffect(() => {
    fetchShop();
    //console.log(categories);
  }, []);
  return (
    <Fragment>
      <ShopPageContainer>
        <ShopSticky>
          <Header />
          <SmoothNavBar category={categories} />
        </ShopSticky>
        <Drawer />

        <Cards categories={categories} shop={shop} token={token} />
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
  fetchShop: () => dispatch(fetchShop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
