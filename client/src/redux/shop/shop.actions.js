import { ACTIONTYPE } from "./Shop.ActionTypes";
import axios from "axios";

const departments = ["Phones", "Laptops", "Mens", "Womens", "Hats", "Shoes"];

// fetch shop collection
export function fetchShop() {
  return async (dispatch) => {
    try {
      await dispatch(fetchShopStart());
      const res = await axios.get("/api/shop/");

      const structuredRes = departments.map((department, index) => {
        console.log(department);
        const newObject = {
          id: index,
          department: department,
          products: res.data.filter(
            (element) => element.Department === department
          ),
        };
        return newObject;
      });
      //console.log(structuredRes);
      await dispatch(fetchShopSuccess(structuredRes));
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        await errors.forEach((errors) =>
          dispatch(fetchShopFail(errors.msg, "danger"))
        );
      }
    }
  };
}

// START fetch shop collection
const fetchShopStart = () => {
  return {
    type: ACTIONTYPE.FETCH_SHOP_START,
  };
};

// SUCCESS fetch shop collection
const fetchShopSuccess = (documents) => {
  return {
    type: ACTIONTYPE.FETCH_SHOP_SUCCESS,
    payload: documents,
  };
};

// FAIL fetch shop collection
const fetchShopFail = (error) => {
  return {
    type: ACTIONTYPE.FETCH_SHOP_START,
    payload: error,
  };
};

// SCROLL to element state update
export const updateScroll = (name) => {
  return {
    type: ACTIONTYPE.SCROLL_TO,
    payload: name,
  };
};
