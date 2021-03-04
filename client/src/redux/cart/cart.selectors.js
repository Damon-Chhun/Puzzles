import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], reducer => {
  console.log(reducer, "Selector");
  return reducer.cartItems;
});

export const selectCartProducts = createSelector([selectCartItems], object => {
  console.log(object, "SELECTOR");
  return object.products;
});
