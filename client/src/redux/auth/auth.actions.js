import axios from "axios";
import ACTIONTYPES from "./Auth.ActionTypes";

//Start Register
const registerUserStart = () => ({
  type: ACTIONTYPES.REGISTER_START
});

//Successful Register
const registerUserSuccess = data => ({
  type: ACTIONTYPES.REGISTER_SUCCESS,
  payload: data
});

//Failed Register
const registerUserFail = errorMessage => ({
  type: ACTIONTYPES.REGISTER_FAIL,
  payload: errorMessage
});

//register User
export function register({ firstName, lastName, email, password }) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const name = `${firstName} ${lastName}`;
  const body = JSON.stringify({ name, email, password });
  console.log(body);
  return async dispatch => {
    try {
      dispatch(registerUserStart());
      const res = await axios.post("/api/users/", body, config);
      dispatch(registerUserSuccess(res.data));
    } catch (error) {
      dispatch(registerUserFail(error.response.data.error));
    }
  };
}

//Start Login
const loginUserStart = () => ({
  type: ACTIONTYPES.LOGIN_START
});

//Successful Login
const loginUserSuccess = data => ({
  type: ACTIONTYPES.LOGIN_SUCCESS,
  payload: data
});

//Failed Login
const loginUserFail = errorMessage => ({
  type: ACTIONTYPES.LOGIN_FAIL,
  payload: errorMessage
});

//Login User
export function login(email, password) {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  console.log(email, password);
  return async dispatch => {
    try {
      dispatch(loginUserStart());
      const res = await axios.post("/api/auth/", body, config);
      dispatch(loginUserSuccess(res.data));
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(errors => dispatch(loginUserFail(errors.msg, "danger")));
      }
    }
  };
}
