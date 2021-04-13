import { ActionTypes } from "./cart.ActionTypes";

const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
  message: null,
  subtotal: 0.0,
  tax: 0.0,
  total: 0.0,
  drawerIsOpen: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.ADD_TO_CART_START:
      return {
        ...state
      };
    case ActionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: payload
      };
    case ActionTypes.ADD_TO_CART_FAIL:
      return {
        ...state,
        message: payload
      };
    case ActionTypes.LOAD_CART_ON_LOGIN_START:
      return {
        ...state
      };
    case ActionTypes.LOAD_CART_ON_LOGIN_SUCCESS:
      return {
        ...state,
        cartItems: payload
      };
    case ActionTypes.LOAD_CART_ON_LOGIN_FAIL:
      return {
        ...state,
        message: payload
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART_FAIL:
      return {
        ...state,
        message: payload
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART_START:
      return {
        ...state
      };
    case ActionTypes.REMOVE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: payload
      };
    case ActionTypes.CALC_SUBTOTAL:
      return {
        ...state,
        subtotal: payload
      };
    case ActionTypes.CALC_TAX:
      return {
        ...state,
        tax: payload
      };
    case ActionTypes.CALC_TOTAL:
      return {
        ...state,
        total: payload
      };

    case ActionTypes.OPEN_DRAWER:
      return {
        ...state,
        drawerIsOpen: true
      };
    case ActionTypes.CLOSE_DRAWER:
      return {
        ...state,
        drawerIsOpen: false
      };

    default:
      return state;
  }
};

export default cartReducer;
