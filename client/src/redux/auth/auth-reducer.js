import ACTIONTYPES from "./Auth.ActionTypes";

const INITIAL_STATE = {
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  loading: false,
  errorMessage: undefined,
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONTYPES.REGISTER_START:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: true
      };

    case ACTIONTYPES.REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case ACTIONTYPES.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
        errorMessage: payload.message
      };

    default:
      return state;
  }
};

export default authReducer;
