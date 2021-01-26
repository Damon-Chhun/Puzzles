import ACTIONTYPES from "./Auth.ActionTypes";

const INITIAL_STATE = {
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  loading: true,
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONTYPES.REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case ACTIONTYPES.REGISTER_FAIL:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
};

export default authReducer;
