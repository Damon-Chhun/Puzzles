import ActionTypes from "./reviews.Actiontypes";

const INITAL_STATE = {
  posts: [],
  loading: false,
  error: null
};

const reviewsReducer = (state = INITAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.GET_REVIEWS_START:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload
      };
    case ActionTypes.GET_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default reviewsReducer;
