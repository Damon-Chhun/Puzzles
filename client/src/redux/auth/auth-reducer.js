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
      console.log("register start");

      return {
        ...state,
        isAuthenticated: false,
        loading: true
      };

    case ACTIONTYPES.REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
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
        isAuthenticated: false,
        loading: false,
        errorMessage: payload.message
      };

    case ACTIONTYPES.LOGIN_START:
      console.log("register start");

      return {
        ...state,
        isAuthenticated: false,
        loading: true
      };

    case ACTIONTYPES.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case ACTIONTYPES.LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        errorMessage: payload
      };

    default:
      return state;
  }
};

export default authReducer;
