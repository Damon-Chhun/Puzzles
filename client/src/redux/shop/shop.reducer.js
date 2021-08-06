import { ACTIONTYPE } from "./Shop.ActionTypes";

const INITIAL_STATE = {
  shop: [],
  scroll: "",
  isLoading: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONTYPE.FETCH_SHOP_START:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONTYPE.FETCH_SHOP_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        shop: payload
      };

    case ACTIONTYPE.FETCH_SHOP_FAIL:
      return {
        ...state,
        isLoading: false,
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
