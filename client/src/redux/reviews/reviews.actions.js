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

//get reviews
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

//delete post
export const deletePost = postId => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.delete(`/api/posts/${postId}`, config);

    dispatch({
      type: ActionTypes.DELETE_POST,
      payload: postId
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LIKES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Add Post
export const addPost = (text, postId) => async dispatch => {
  console.log(postId);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ text });

  try {
    const res = await axios.post(`/api/posts/${postId}`, body, config);

    dispatch({
      type: ActionTypes.ADD_POST,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LIKES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//GET discussion
export const getDiscussion = postId => async dispatch => {
  console.log(postId);

  try {
    const res = await axios.get(`/api/posts/${postId}`);

    console.log(res.data);

    dispatch({
      type: ActionTypes.GET_DISCUSSION,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_DISCUSSION_FAIL,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//Comment on a post
export const addComment = (text, postId) => async dispatch => {
  console.log(postId);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ text });

  try {
    const res = await axios.post(
      `/api/posts/comment/${postId.postID}`,
      body,
      config
    );

    dispatch({
      type: ActionTypes.POST_COMMENT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LIKES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

//delete comment
export const deleteComment = (commentID, postId) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.delete(`/api/posts/${postId}/${commentID}`);

    dispatch({
      type: ActionTypes.DELETE_POST,
      payload: commentID
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.LIKES_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
