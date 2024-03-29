import ACTIONTYPES from "./Auth.ActionTypes";

const INITIAL_STATE = {
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  errorMessage: undefined,
  user: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ACTIONTYPES.SIGN_OUT:
      console.log("SIGNING OUT");
      localStorage.clear("persist:persistedStore");
      return INITIAL_STATE;

    case ACTIONTYPES.REGISTER_START:
      console.log("register start");

      return {
        ...state,
        isAuthenticated: false,
        isLoading: true
      };

    case ACTIONTYPES.REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      };

    case ACTIONTYPES.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        errorMessage: "error"
      };

    case ACTIONTYPES.LOGIN_START:
      console.log("register start");

      return {
        ...state,
        isAuthenticated: false,
        isLoading: true
      };

    case ACTIONTYPES.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false
      };

    case ACTIONTYPES.LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        errorMessage: payload
      };

    case ACTIONTYPES.LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload
      };

    case ACTIONTYPES.GET_USER:
      return {
        ...state,
        commentUser: payload
      };
    case ACTIONTYPES.GET_USER_FAIL:
      return {
        ...state,
        errorMessage: payload
      };

    default:
      return state;
  }
};

export default authReducer;
