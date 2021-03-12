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

export function addToCart(productID, quantity, token) {
  console.log(token, "TOKEN");
  console.log(quantity, "QUANTITY");
  console.log(productID, "PRODUCTID");
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

//start Remove Item from Cart
const RemoveCartItemStart = () => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART_START
  };
};

//Success Remove Item from Cart
const RemoveCartItemSuccess = cart => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART_SUCCESS,
    payload: cart
  };
};

// Fail remove Item from Cart
const RemoveCartItemFail = error => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART_FAIL,
    message: error
  };
};

export function RemoveItemFromCart(token, productID) {
  return async dispatch => {
    console.log(token, "TOKEN TOKEN TOKEN");
    console.log(productID, "ID ID ID ID ID");
    const config = {
      headers: {
        "x-auth-token": `${token}`,
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ productID });
    try {
      console.log("dispatch CHECKK CHECK CHECK CHECK");
      await dispatch(RemoveCartItemStart());
      const res = await axios.post("/api/shop/removeCartItem", body, config);
      console.log(res.data, "RES.DATA REQUEST");
      await dispatch(RemoveCartItemSuccess(res.data));
    } catch (error) {
      dispatch(RemoveCartItemFail("Fail"));
    }
  };
}

export function CalcSubTotal(cartItems) {
  console.log(cartItems, "CALC SUBTOTAL ARGUMENT");
  const subTotal = cartItems
    .reduce(
      (accumulator, element) => accumulator + element.quantity * element.price,
      0
    )
    .toFixed(2);

  console.log(subTotal, "SUBTOTAL CALCSUBTOTAL ACTION");

  return {
    type: ActionTypes.CALC_SUBTOTAL,
    payload: subTotal
  };
}

export function CalcTax(subTotal) {
  const tax = (subTotal * 0.08).toFixed(2);
  console.log(tax, "TAX");
  return {
    type: ActionTypes.CALC_TAX,
    payload: tax
  };
}

export function CalcTotal(subTotal, tax) {
  console.log(subTotal, tax, "SUBTOTAL AND TAX");
  let total = subTotal + tax;
  total = parseFloat(total).toFixed(2);

  return {
    type: ActionTypes.CALC_TOTAL,
    payload: total
  };
}
