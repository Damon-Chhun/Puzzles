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

      console.log(res.data);
      dispatch(AddToCartSucess(res.data));
    } catch (error) {
      dispatch(AddToCartFail("Fail"));
    }
  };
}

//start add to cart
const LoadCartOnLoginStart = () => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_START
  };
};

//Success add to cart
const LoadCartOnLoginSuccess = cart => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_SUCCESS,
    payload: cart
  };
};

// Fail add to cart
const LoadCartOnLoginFail = error => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_FAIL,
    message: error
  };
};

export function loadCartOnLogin(token) {
  return async dispatch => {
    console.log(token, "TOKEN TOKEN TOKEN");
    const config = {
      headers: {
        "x-auth-token": `${token}`
      }
    };
    try {
      console.log("dispatch CHECKK CHECK CHECK CHECK");
      await dispatch(LoadCartOnLoginStart());
      const res = await axios.get("/api/shop/getCartItems", config);
      console.log(res.data, "RES.DATA GET REQUEST");
      await dispatch(LoadCartOnLoginSuccess(res.data));
    } catch (error) {
      dispatch(LoadCartOnLoginFail("Fail"));
    }
  };
}
