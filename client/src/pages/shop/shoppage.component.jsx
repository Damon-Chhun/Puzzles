import React, { useEffect, Fragment } from "react";
import Header from "../../components/header/header.component";

import { connect } from "react-redux";
import {
  selectShopCategories,
  selectShopCollection
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { fetchShop } from "../../redux/shop/shop.actions";

import { ShopPageContainer } from "./shop.styled";
import SmoothNavBar from "../../components/SmoothNavBar/SmoothNavbar.component";
import Drawer from "../../components/Drawer/Drawer.component";

function ShopPage({ categories, fetchShop, shop }) {
  useEffect(() => {
    fetchShop();
    //console.log(categories);
  }, []);
  return (
    <Fragment>
      <Header />
      <ShopPageContainer>
        <SmoothNavBar category={categories} />
        <Drawer />
      </ShopPageContainer>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: selectShopCategories,
  shop: selectShopCollection
});

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(fetchShop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
