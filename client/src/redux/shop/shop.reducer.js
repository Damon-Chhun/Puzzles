const INITIAL_STATE = {
  shop: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default shopReducer;
