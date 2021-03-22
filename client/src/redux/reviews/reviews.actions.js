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

//add like
export const addLike = postId => async dispatch => {
  console.log(postId);
  console.log(localStorage.token);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.put(`/api/posts/like/${postId}`, config);

    dispatch({
      type: ActionTypes.UPDATE_LIKES,
      payload: { postId, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LIKES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//unlike
export const unlike = postId => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`, config);

    dispatch({
      type: ActionTypes.UPDATE_LIKES,
      payload: { postId, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LIKES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
