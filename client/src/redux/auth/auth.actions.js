import axios from "axios";
import ACTIONTYPES from "./Auth.ActionTypes";
import setAuthToken from "../../utils/setAuthToken";
import { FaThermometerEmpty } from "react-icons/fa";

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
  console.log(email, "EMAIL");
  console.log(password, "PASSWORD");
  return async dispatch => {
    try {
      await dispatch(loginUserStart());
      const res = await axios.post("/api/auth/", body, config);
      console.log(res.data, "AUTH ACTION");
      await dispatch(loginUserSuccess(res.data));
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(errors => dispatch(loginUserFail(errors.msg, "danger")));
      }
    }
  };
}

//Sign out user
export const signOut = () => ({
  type: ACTIONTYPES.SIGN_OUT
});

//Start Load User
const loadUserStart = () => ({
  type: ACTIONTYPES.LOAD_USER_START
});

//Successful Load User
const loadUserSuccess = data => ({
  type: ACTIONTYPES.LOAD_USER_SUCCESS,
  payload: data
});

//Failed Load User
const loadUserFail = errorMessage => ({
  type: ACTIONTYPES.LOAD_USER_FAIL,
  payload: errorMessage
});

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth/");
    console.log(res.data, "LOADUSER");

    await dispatch(loadUserSuccess(res.data));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.error));
  }
};

//Get A User with User._Id
export const getUserName = userID => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ userID });
  console.log(userID, "USERID IN getUserInfo Action");

  try {
    const res = await axios.get(
      `http://localhost:3000/api/auth/${userID}`,
      config
    );
    console.log(res.data, "LOADUSER");

    await dispatch(getUserSuccess(res.data));
  } catch (error) {
    return dispatch(getUserFail("failed"));
  }
};
//Successful GET User
const getUserSuccess = data => ({
  type: ACTIONTYPES.GET_USER,
  payload: data
});

//Failed GET User
const getUserFail = errorMessage => ({
  type: ACTIONTYPES.GET_USER_FAIL,
  payload: errorMessage
});
