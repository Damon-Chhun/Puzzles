import { connect } from "react-redux";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { selectReviewsPosts } from "../../redux/reviews/reviews.selectors";
import { Fragment } from "react";
import PostItems from "../postItem/postItem.component";

const Posts = ({ posts }) => {
  return (
    <Fragment>
      {posts.map(post => {
        return <PostItems key={posts._id} posts={posts} />;
      })}
    </Fragment>
  );
};

export default Posts;
