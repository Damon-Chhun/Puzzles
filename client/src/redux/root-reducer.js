import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  directory: directoryReducer
});

export default rootReducer;
