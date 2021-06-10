import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], reducer => {
  console.log(reducer, "Selector");
  return reducer.cartItems;
});

export const selectUnAuthCart = createSelector([selectCart], reducer => {
  console.log(reducer, "Selector");
  return reducer.UnAuthCart;
});

export const selectCartItemsProducts = createSelector([selectCart], reducer => {
  console.log(reducer, "Selector");
  return reducer.cartItems.products;
});

export const selectCartProducts = createSelector([selectCartItems], object => {
  console.log(object, "SELECTOR");
  return object.products;
});

export const selectSubTotal = createSelector(
  [selectCart],
  reducer => reducer.subtotal
);

export const selectTax = createSelector([selectCart], reducer => reducer.tax);
export const selectTotal = createSelector(
  [selectCart],
  reducer => reducer.total
);

export const selectIsDrawerOpen = createSelector([selectCart], top => {
  return top.drawerIsOpen;
});
