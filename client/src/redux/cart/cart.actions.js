import axios from "axios";
import { ActionTypes } from "./cart.ActionTypes";

//start add to cart
const AddToCartStart = () => ({
  type: ActionTypes.ADD_TO_CART_START
});

//Success add to cart
const AddToCartSucess = cart => ({
  type: ActionTypes.ADD_TO_CART_SUCCESS,
  payload: cart
});

// Fail add to cart
const AddToCartFail = error => ({
  type: ActionTypes.ADD_TO_CART_FAIL,
  message: error
});

//add to cart

export function addToCart({ productID, quantity, token }) {
  console.log(token, "TOKEN");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${token}`
    }
  };

  const body = JSON.stringify({ productID, quantity });

  return async dispatch => {
    try {
      dispatch(AddToCartStart());
      const res = await axios.post("/api/shop", body, config);

      dispatch(AddToCartSucess(res.data));
    } catch (error) {
      dispatch(AddToCartFail(error.response.data.error));
    }
  };
}
