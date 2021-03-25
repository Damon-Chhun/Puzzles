import { createSelector } from "reselect";

const selectReviews = state => state.reviews;

export const selectReviewsPosts = createSelector(
  [selectReviews],
  reducer => reducer.posts
);

export const selectDiscussion = createSelector([selectReviews], post => {
  console.log(post.discussion);
  return post.discussion;
});
