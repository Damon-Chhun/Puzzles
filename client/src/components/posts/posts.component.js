import { connect } from "react-redux";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { selectReviewsPosts } from "../../redux/reviews/reviews.selectors";
import { Fragment } from "react";
import PostItems from "../postItem/postItem.component";

const Posts = ({ posts, user }) => {
  return (
    <Fragment>
      {posts.map(post => {
        console.log(post);
        if (!post.user) {
          return null;
        } else {
          return <PostItems key={posts._id} posts={post} user={user} />;
        }
      })}
    </Fragment>
  );
};

export default Posts;
