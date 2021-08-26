import React, { useEffect, Fragment, useState } from "react";
import Header from "../../components/header/header.component";
import Cards from "../../components/Cards/Cards.component";
import Scroll from "react-scroll";
import Alerts from '../../components/alerts/alerts'

import { connect } from "react-redux";
import { compose } from "redux";

import {
  selectShopCategories,
  selectShopCollection,
  selectShopScroll,
  selectIsShopLoading
} from "../../redux/shop/shop.selectors";
import { selectIsDrawerOpen } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { fetchShop } from "../../redux/shop/shop.actions";

import Spinner from "../../components/spinner/spinner.component";

import {
  ShopPageContainer,
  ShopSticky,
  CardContainer,
  Blank,
  CartIcon,
  CartOpenIcon,
  DataContainer
} from "./shop.styled";
import SmoothNavBar from "../../components/SmoothNavBar/SmoothNavbar.component";
import ShopDrawer from "../../components/Drawer/Drawer.component";

import { selectAuthToken } from "../../redux/auth/auth.selectors";
import {
  loadCartOnLogin,
  openDrawer,
  closeDrawer
} from "../../redux/cart/cart.actions";

function ShopPage({
  categories,
  fetchShop,
  shop,
  cart,
  token,
  drawerIsOpen,
  openDrawer,
  closeDrawer,
  Section,
  isLoading
}) {
  let scroller = Scroll.scroller;

  useEffect(() => {
    fetchShop();
    console.log(isLoading);
    loadCartOnLogin(token);
    scroller.scrollTo(`${Section}`, {
      duration: 2000,
      smooth: true,
      spy: true,
      exact: "true",
      offset: -160
    });
  }, []);

  return (
    <ShopPageContainer>
      <ShopSticky>
        <Header isHomepage={false} />
        <SmoothNavBar category={categories} />
        <Alerts/>
      </ShopSticky>

      <DataContainer>
        {drawerIsOpen ? (
          <Fragment>
            <CardContainer drawerOpen={drawerIsOpen}>
              <Cards categories={categories} shop={shop} />
            </CardContainer>
            <ShopDrawer />
          </Fragment>
        ) : (
          <CardContainer drawerOpen={drawerIsOpen}>
            <Cards categories={categories} shop={shop} />
          </CardContainer>
        )}
      </DataContainer>
    </ShopPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: selectShopCategories,
  shop: selectShopCollection,
  token: selectAuthToken,
  drawerIsOpen: selectIsDrawerOpen,
  Section: selectShopScroll,
  isLoading: selectIsShopLoading
});

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(fetchShop()),
  loadCartOnLogin: token => dispatch(loadCartOnLogin(token)),
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
