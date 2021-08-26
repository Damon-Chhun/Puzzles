import { v4 as uuidv4 } from "uuid";
import { ActionTypes } from "./alert.ActionTypes";

export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4();
  console.log(msg, alertType);
  dispatch({
    type: ActionTypes.SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () => dispatch({ type: ActionTypes.REMOVE_ALERT, payload: id }),
    1000
  );
};
