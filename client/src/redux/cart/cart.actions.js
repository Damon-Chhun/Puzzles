import axios from "axios";
import { ActionTypes } from "./cart.ActionTypes";
import setAuthToken from "../../utils/setAuthToken";
import { setAlert } from "../alert/alert.actions";

//start add to cart
const AddToCartStart = () => ({
  type: ActionTypes.ADD_TO_CART_START,
});

//Success add to cart
const AddToCartSuccess = (cart) => ({
  type: ActionTypes.ADD_TO_CART_SUCCESS,
  payload: cart,
});

// Fail add to cart
const AddToCartFail = (error) => ({
  type: ActionTypes.ADD_TO_CART_FAIL,
  message: error,
});

//add to cart

export function addToCart(
  productID,
  quantity,
  imageURL,
  title,
  price,
  auth,
  department
) {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ productID, quantity });

  return async (dispatch) => {
    if (auth !== true) {
      dispatch(
        addToCartUNAUTH(productID, title, price, imageURL, quantity, department)
      );
    } else {
      dispatch(AddToCartStart());

      try {
        let res = await axios.post("/api/shop", body, config);

        const indexOfProduct = res.data.products.findIndex(
          (product) => product.productID === productID
        );

        if (indexOfProduct !== -1) {
          res.data.products[indexOfProduct].imageURL = imageURL;
        }

        const addOrRemove = quantity > 0 ? "Added" : "Removed";

        dispatch(AddToCartSuccess(res.data));
        dispatch(
          setAlert(`Successfully ${addOrRemove} Product To Cart!`, "success")
        );
      } catch (error) {
        console.log(error);

        dispatch(AddToCartFail(error));
      }
    }
  };
}

//add to cart while not authorized

//start add to cart
const AddToCartUNAUTHStart = () => ({
  type: ActionTypes.ADD_TO_CART_UNAUTH_START,
});

const AddToCartUNAUTHFail = () => ({
  type: ActionTypes.ADD_TO_CART_UNAUTH_FAIL,
});

export function addToCartUNAUTHSuccess(
  productID,
  title,
  price,
  imageURL,
  quantity,
  department
) {
  return {
    type: ActionTypes.ADD_TO_CART_UNAUTH_SUCCESS,
    payload: {
      productID,
      name: title,
      price,
      imageURL,
      quantity,
      department,
    },
  };
}

export function addToCartUNAUTH(
  productID,
  title,
  price,
  imageURL,
  quantity,
  department
) {
  return async (dispatch) => {
    //console.log("UNAUTH START UNAUTH START");

    await dispatch(AddToCartUNAUTHStart());

    try {
      dispatch(
        addToCartUNAUTHSuccess(
          productID,
          title,
          price,
          imageURL,
          quantity,
          department
        )
      );

      dispatch(setAlert("Successfully Added Product To Cart!", "success"));
    } catch (error) {
      dispatch(AddToCartUNAUTHFail());
      dispatch(
        setAlert("Failed To Add Product To Cart, Please Try Again", "danger")
      );
    }
  };
}

//start Load Cart on Login
const LoadCartOnLoginStart = () => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_START,
  };
};

//Success Load Cart on Login
const LoadCartOnLoginSuccess = (cart) => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_SUCCESS,
    payload: cart,
  };
};

// Fail Load Cart on Login
const LoadCartOnLoginFail = (error) => {
  return {
    type: ActionTypes.LOAD_CART_ON_LOGIN_FAIL,
    message: error,
  };
};

//load cart items on login
export const loadCartOnLogin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    await dispatch(LoadCartOnLoginStart());
    const res = await axios.get("/api/shop/getCartItems");

    await dispatch(LoadCartOnLoginSuccess(res.data));
  } catch (error) {
    dispatch(LoadCartOnLoginFail("Fail"));
  }
};

//start Remove Item from Cart
const RemoveCartItemStart = () => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART_START,
  };
};

//Success Remove Item from Cart
const RemoveCartItemSuccess = (cart) => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART_SUCCESS,
    payload: cart,
  };
};

// Fail remove Item from Cart
const RemoveCartItemFail = (error) => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART_FAIL,
    message: error,
  };
};

export function RemoveItemFromCart(productID, auth) {
  return async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ productID });

    try {
      if (auth !== true) {
        dispatch(RemoveItemFromCartUNAUTH(productID));
      } else {
        await dispatch(RemoveCartItemStart());
        const res = await axios.post("/api/shop/removeCartItem", body, config);

        await dispatch(RemoveCartItemSuccess(res.data));
        await dispatch(
          setAlert("Successfully Removed Product From Cart", "success")
        );
      }
    } catch (error) {
      let errors = error.response.data.errors;
      dispatch(RemoveCartItemFail("Fail"));
      errors.forEach((error) => {
        dispatch(setAlert(errors, "danger"));
      });
    }
  };
}

//RemoveItem From Cart UNAUTH
export function RemoveItemFromCartUNAUTH(productID) {
  return {
    type: ActionTypes.REMOVE_FROM_CART_UNAUTH,
    payload: productID,
  };
}

export function CalcSubTotal(cartItems) {
  if (cartItems.products === undefined) {
    return {
      type: ActionTypes.CALC_SUBTOTAL,
      payload: 0,
    };
  }

  const subTotal = cartItems.products
    .reduce(
      (accumulator, element) => accumulator + element.quantity * element.price,
      0
    )
    .toFixed(2);

  return {
    type: ActionTypes.CALC_SUBTOTAL,
    payload: subTotal,
  };
}

export function CalcTax(subTotal) {
  const tax = (subTotal * 0.08).toFixed(2);

  return {
    type: ActionTypes.CALC_TAX,
    payload: tax,
  };
}

export function CalcTotal(subTotal, tax) {
  let total = +subTotal + +tax;

  total = parseFloat(total).toFixed(2);

  return {
    type: ActionTypes.CALC_TOTAL,
    payload: total,
  };
}

//OPEN DRAWER
export const openDrawer = () => ({
  type: ActionTypes.OPEN_DRAWER,
});

//CLOSE DRAWER
export const closeDrawer = () => ({
  type: ActionTypes.CLOSE_DRAWER,
});

//save total, subtotal, and tax info to reducer
export const SaveCostInfo = (cartInfo) => ({
  type: ActionTypes.SAVE_CART_INFO,
  payload: cartInfo,
});
