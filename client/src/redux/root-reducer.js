import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import authReducer from "./auth/auth-reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  directory: directoryReducer,
  auth: authReducer
});

export default rootReducer;
