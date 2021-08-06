import ActionTypes from "./reviews.Actiontypes";

const INITAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,
  discussion: null
};

const reviewsReducer = (state = INITAL_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case ActionTypes.GET_REVIEWS_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload
      };
    case ActionTypes.GET_REVIEWS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    case ActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        isLoading: false
      };

    case ActionTypes.UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        )
      };

    case ActionTypes.LIKES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    case ActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
        isLoading: false
      };
    case ActionTypes.GET_DISCUSSION:
      return {
        ...state,
        isLoading: false,
        discussion: payload
      };
    case ActionTypes.GET_DISCUSSION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case ActionTypes.POST_COMMENT:
      return {
        ...state,
        isLoading: false,
        discussion: { ...state.discussion, comments: payload }
      };
    case ActionTypes.DELETE_COMMENT:
      return {
        ...state,
        isLoading: false,
        discussion: {
          ...state.discussion,
          comment: state.discussion.comments.filter(
            comment => comment._id != payload
          )
        }
      };

    default:
      return state;
  }
};

export default reviewsReducer;
