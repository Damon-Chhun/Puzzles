import React, { useEffect } from "react";
import Header from "../../components/header/header.component";
import { Fragment } from "react";

import { connect } from "react-redux";
import {
  selectShopCategories,
  selectShopCollection
} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { fetchShop } from "../../redux/shop/shop.actions";

function ShopPage({ categories, fetchShop, shop }) {
  useEffect(() => {
    fetchShop();
    //console.log(categories);
  }, []);
  return <Fragment></Fragment>;
}

const mapStateToProps = createStructuredSelector({
  categories: selectShopCategories,
  shop: selectShopCollection
});

const mapDispatchToProps = dispatch => ({
  fetchShop: () => dispatch(fetchShop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
