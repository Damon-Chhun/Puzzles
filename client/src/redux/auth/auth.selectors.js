import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const selectAuthToken = createSelector([selectAuth], reducer => {
  //console.log(reducer.token, "selectAUTHTOKEN");
  return reducer.token;
});

export const selectIsAuth = createSelector(
  [selectAuth],
  reducer => reducer.isAuthenticated
);
export const selectUser = createSelector([selectAuth], reducer => {
  //console.log(reducer.user._id);
  return reducer.user;
});
export const selectCommentUser = createSelector([selectAuth], reducer => {
  return reducer.commentUser.name;
});
