import { ACTIONTYPE } from "./Shop.ActionTypes";
import axios from "axios";

const departments = ["Phones", "Laptops", "Mens", "Womens", "Hats", "Shoes"];

// fetch shop collection
export function fetchShop() {
  return async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      dispatch(fetchShopStart());
      const res = await axios.get("/api/shop/");

      const structuredRes = departments.map((department, index) => {
        console.log(department);
        const newObject = {
          id: index,
          department: department,
          products: res.data.filter(
            element => element.Department === department
          )
        };
        return newObject;
      });
      //console.log(structuredRes);
      dispatch(fetchShopSuccess(structuredRes));
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(errors => dispatch(fetchShopFail(errors.msg, "danger")));
      }
    }
  };
}

// START fetch shop collection
const fetchShopStart = () => {
  return {
    type: ACTIONTYPE.FETCH_SHOP_START
  };
};

// SUCCESS fetch shop collection
const fetchShopSuccess = documents => {
  return {
    type: ACTIONTYPE.FETCH_SHOP_SUCCESS,
    payload: documents
  };
};

// FAIL fetch shop collection
const fetchShopFail = error => {
  return {
    type: ACTIONTYPE.FETCH_SHOP_START,
    payload: error
  };
};
