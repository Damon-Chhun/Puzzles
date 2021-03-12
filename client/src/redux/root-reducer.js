import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import authReducer from "./auth/auth-reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: []
};

const rootReducer = combineReducers({
  shop: shopReducer,
  directory: directoryReducer,
  auth: authReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
