import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const selectAuthToken = createSelector(
  [selectAuth],
  reducer => reducer.token
);
