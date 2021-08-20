import axios from "axios";
import { ActionTypes } from "./cart.ActionTypes";
import setAuthToken from "../../utils/setAuthToken";

//start add to cart
const AddToCartStart = () => ({
  type: ActionTypes.ADD_TO_CART_START
});

//Success add to cart
const AddToCartSuccess = cart => ({
  type: ActionTypes.ADD_TO_CART_SUCCESS,
  payload: cart
});

// Fail add to cart
const AddToCartFail = error => ({
  type: ActionTypes.ADD_TO_CART_FAIL,
  message: error
});

//add to cart

export function addToCart(
  productID,
  quantity,
  imageURL,
  title,
  price,
  auth,
  token,
  department
) {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  console.log(productID, quantity, imageURL, title, price, auth);
  console.log("ADD TO CART ADD TO CART ADD TO CART");
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(quantity, "QUANTITY");
  console.log(productID, "PRODUCTID");
  console.log(auth);

  const body = JSON.stringify({ productID, quantity });

  return async dispatch => {
    try {
      if (auth !== true) {
        dispatch(
          addToCartUNAUTH(
            productID,
            title,
            price,
            imageURL,
            quantity,
            department
          )
        );
      } else {
        dispatch(AddToCartStart());
        let res = await axios.post("/api/shop", body, config);

        const indexOfProduct = res.data.products.findIndex(
          product => product.productID == productID
        );
        console.log(indexOfProduct);
        console.log(imageURL);
        console.log(res.data);
        res.data.products[indexOfProduct].imageURL = imageURL;
        console.log(res.data);

        dispatch(AddToCartSuccess(res.data));
      }
    } catch (error) {
      dispatch(AddToCartFail("Fail"));
    }
  };
}

//add to cart while not authorized

export function addToCartUNAUTH(
  productID,
  title,
  price,
  imageURL,
  quantity,
  department
) {
  console.log(productID, title, price, imageURL);
  return {
    type: ActionTypes.ADD_TO_CART_UNAUTH,

    payload: {
      productID,
      name: title,
      price,
      imageURL,
      quantity,
      department
    }
  };
}

//start Load Cart on Login
const LoadCartOnLoginStart = () => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_START
  };
};

//Success Load Cart on Login
const LoadCartOnLoginSuccess = cart => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_SUCCESS,
    payload: cart
  };
};

// Fail Load Cart on Login
const LoadCartOnLoginFail = error => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_FAIL,
    message: error
  };
};

//load cart items on login
export const loadCartOnLogin = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    console.log("dispatch CHECKK CHECK CHECK CHECK");
    await dispatch(LoadCartOnLoginStart());
    const res = await axios.get("/api/shop/getCartItems");
    console.log(res.data, "RES.DATA GET REQUEST");
    await dispatch(LoadCartOnLoginSuccess(res.data));
  } catch (error) {
    dispatch(LoadCartOnLoginFail("Fail"));
  }
};

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

export function RemoveItemFromCart(productID, auth) {
  return async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    console.log(productID, "ID ID ID ID ID");
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ productID });

    try {
      console.log(auth);
      if (auth !== true) {
        dispatch(RemoveItemFromCartUNAUTH(productID));
      } else {
        console.log("dispatch CHECKK CHECK CHECK CHECK");
        await dispatch(RemoveCartItemStart());
        const res = await axios.post("/api/shop/removeCartItem", body, config);
        console.log(res.data, "RES.DATA REQUEST");
        await dispatch(RemoveCartItemSuccess(res.data));
      }
    } catch (error) {
      dispatch(RemoveCartItemFail("Fail"));
    }
  };
}

//RemoveItem From Cart UNAUTH
export function RemoveItemFromCartUNAUTH(productID) {
  return {
    type: ActionTypes.REMOVE_FROM_CART_UNAUTH,
    payload: productID
  };
}

export function CalcSubTotal(cartItems) {
  console.log(cartItems, "CALC SUBTOTAL ARGUMENT");

  if (cartItems.products == undefined) {
    return {
      type: ActionTypes.CALC_SUBTOTAL,
      payload: 0
    };
  }

  const subTotal = cartItems.products
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
  let total = +subTotal + +tax;

  total = parseFloat(total).toFixed(2);

  return {
    type: ActionTypes.CALC_TOTAL,
    payload: total
  };
}

//OPEN DRAWER
export const openDrawer = () => ({
  type: ActionTypes.OPEN_DRAWER
});

//CLOSE DRAWER
export const closeDrawer = () => ({
  type: ActionTypes.CLOSE_DRAWER
});

//save total, subtotal, and tax info to reducer
export const SaveCostInfo = cartInfo => ({
  type: ActionTypes.SAVE_CART_INFO,
  payload: cartInfo
});
