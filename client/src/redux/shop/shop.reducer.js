import { ACTIONTYPE } from "./Shop.ActionTypes";

const INITIAL_STATE = {
  shop: [],
  scroll: "",
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONTYPE.FETCH_SHOP_START:
      return {
        ...state,
        isFetching: true
      };

    case ACTIONTYPE.FETCH_SHOP_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isFetching: false,
        shop: payload
      };

    case ACTIONTYPE.FETCH_SHOP_FAIL:
      return {
        ...state,
        isFetching: false,
        shop: null,
        errorMessage: payload
      };

    case ACTIONTYPE.SCROLL_TO:
      return {
        ...state,
        scroll: payload
      };

    default:
      return state;
  }
};

export default shopReducer;
