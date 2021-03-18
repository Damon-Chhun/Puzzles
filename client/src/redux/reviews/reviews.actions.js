import ActionTypes from "./reviews.Actiontypes";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";

//Start GET reviews
const getReviewsStart = () => ({
  type: ActionTypes.GET_REVIEWS_START
});

//Successful GET reviews
const getReviewsSuccess = data => ({
  type: ActionTypes.GET_REVIEWS_SUCCESS,
  payload: data
});

//Failed GET reviews
const getReviewsFail = errorMessage => ({
  type: ActionTypes.GET_REVIEWS_FAIL,
  payload: errorMessage
});

//register User
export function getReviews(department, productID) {
  console.log(department, productID);
  return async dispatch => {
    try {
      await dispatch(getReviewsStart());
      const res = await axios.get(`/api/posts/${department}/${productID}`);
      console.log(res.data, "GET REVIEWS GET REVIEWS GET REVIEWS GET REVIEWS");
      dispatch(getReviewsSuccess(res.data));
    } catch (error) {
      dispatch(getReviewsFail(error.response.data.error));
    }
  };
}
