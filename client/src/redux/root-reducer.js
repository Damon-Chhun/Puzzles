import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import authReducer from "./auth/auth-reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  directory: directoryReducer,
  auth: authReducer,
  cart: cartReducer
});

export default rootReducer;
