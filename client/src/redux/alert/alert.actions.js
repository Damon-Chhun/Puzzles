import { v4 as uuidv4 } from "uuid";
import { ActionTypes } from "./alert.ActionTypes";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: ActionTypes.SET_ALERT,
    payload: { msg, alertType, id },
  });
};
