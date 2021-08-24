import { ActionTypes } from "./cart.ActionTypes";
import { removeItem, addItemToUnAuthCart, removeUnAuthItem } from "./cart.util";

const INITIAL_STATE = {
  isHidden: true,
  isLoading: false,
  cartItems: {
    _id: null,
    userId: null,
    products: [],
  },
  message: null,
  subtotal: 0.0,
  tax: 0.0,
  total: 0.0,
  quantity: 0,
  drawerIsOpen: true,
  UnAuthCart: { products: [] },
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.SIGN_OUT:
      console.log("SIGNING OUT");
      //localStorage.clear("persist:persistedStore");
      return INITIAL_STATE;

    case ActionTypes.ADD_TO_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.ADD_TO_CART_SUCCESS:
      console.log(payload);
      return {
        ...state,
        cartItems: {
          _id: payload._id,
          userId: payload.userId,
          products: payload.products,
        },
        isLoading: false,
      };
    case ActionTypes.ADD_TO_CART_UNAUTH:
      console.log(payload);

      return {
        ...state,
        UnAuthCart: {
          products: addItemToUnAuthCart(state.UnAuthCart.products, payload),
        },
      };
    case ActionTypes.ADD_TO_CART_FAIL:
      return {
        ...state,
        message: payload,
      };
    case ActionTypes.LOAD_CART_ON_LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.LOAD_CART_ON_LOGIN_SUCCESS:
      return {
        ...state,
        cartItems: payload,
        isLoading: false,
      };
    case ActionTypes.LOAD_CART_ON_LOGIN_FAIL:
      return {
        ...state,
        message: payload,
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART_FAIL:
      return {
        ...state,
        message: payload,
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART_SUCCESS:
      console.log(payload[0].productID);
      let newPayload = removeItem(state.cartItems, payload[0].productID);
      return {
        ...state,
        cartItems: {
          _id: newPayload._id,
          userId: newPayload.userId,
          products: newPayload.products,
        },
        isLoading: false,
      };

    case ActionTypes.REMOVE_FROM_CART_UNAUTH:
      console.log(payload, state.UnAuthCart);
      return {
        ...state,
        UnAuthCart: {
          ...state.UnAuthCart,
          products: removeUnAuthItem(state.UnAuthCart.products, payload),
        },
      };

    case ActionTypes.CALC_SUBTOTAL:
      return {
        ...state,
        subtotal: payload,
      };
    case ActionTypes.CALC_TAX:
      return {
        ...state,
        tax: payload,
      };
    case ActionTypes.CALC_TOTAL:
      return {
        ...state,
        total: payload,
      };

    case ActionTypes.OPEN_DRAWER:
      return {
        ...state,
        drawerIsOpen: true,
      };
    case ActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        drawerIsOpen: false,
      };

    case ActionTypes.SAVE_CART_INFO:
      return {
        ...state,
        total: payload.total,
        tax: payload.tax,
        subtotal: payload.subtotal,
      };

    default:
      return state;
  }
};

export default cartReducer;
