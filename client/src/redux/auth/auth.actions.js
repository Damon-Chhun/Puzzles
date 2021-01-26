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
export const register = ({
  firstName,
  lastName,
  email,
  password
}) => async dispatch => {
  dispatch(registerUserStart());
  const config = {
    headers: {
      "Content-Type": application / json
    }
  };

  const name = `${firstName} ${lastName}`;
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch(registerUserSuccess(res.data));
  } catch (error) {
    dispatch(registerUserFail(error));
  }
};
