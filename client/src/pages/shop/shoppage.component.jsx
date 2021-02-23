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

import { ShopPageContainer, ShopSticky, CardContainer } from "./shop.styled";
import SmoothNavBar from "../../components/SmoothNavBar/SmoothNavbar.component";
import Drawer from "../../components/Drawer/Drawer.component";
import MuiCard from "../../components/MuiCard/MuiCard.component";
import { selectAuthToken } from "../../redux/auth/auth.selectors";
import Footer from "../../components/footer/footer.component";

function ShopPage({ categories, fetchShop, shop, cart, token }) {
  useEffect(() => {
    fetchShop();
  }, []);
  return (
    <Fragment>
      <Header />
      <ShopPageContainer>
        <Drawer />
        <CardContainer>
          <ShopSticky>
            <SmoothNavBar category={categories} />
          </ShopSticky>
          <Cards categories={categories} shop={shop} token={token} />
        </CardContainer>
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
