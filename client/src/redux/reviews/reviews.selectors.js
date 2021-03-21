import { createSelector } from "reselect";

const selectReviews = state => state.reviews;

export const selectReviewsPosts = createSelector(
  [selectReviews],
  reducer => reducer.posts
);
