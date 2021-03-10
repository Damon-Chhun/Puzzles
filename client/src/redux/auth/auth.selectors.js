import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const selectAuthToken = createSelector([selectAuth], reducer => {
  console.log(reducer.token, "selectAUTHTOKEN");
  return reducer.token;
});

export const selectIsAuth = createSelector(
  [selectAuth],
  reducer => reducer.isAuthenticated
);
