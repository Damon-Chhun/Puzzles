import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  reducer => reducer.shop
);

export const selectShopCategories = createSelector(
  [selectShopCollection],
  collection =>
    collection.map(element => {
      //console.log(element.department);
      return element.department;
    })
);

export const selectShopScroll = createSelector(
  [selectShop],
  reducer => reducer.scroll
);
