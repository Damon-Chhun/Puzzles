import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import PostItems from "../../components/postItem/postItem.component";
import Header from "../../components/header/header.component";
import CommentForum from "../../components/commentForum/CommentForum.component";
import CommentItem from "../../components/CommentItem/CommentItem.component";

import { connect } from "react-redux";
import { getDiscussion } from "../../redux/reviews/reviews.actions";
import { createStructuredSelector } from "reselect";
import { selectDiscussion } from "../../redux/reviews/reviews.selectors";
import { selectUser } from "../../redux/auth/auth.selectors";
import { getUserName } from "../../redux/auth/auth.actions";

const DiscussionPage = ({
  getDiscussion,
  match,
  Discussion,
  getCommentUser
}) => {
  const postID = match.params;
  console.log(postID);

  useEffect(() => {
    getDiscussion(postID.postID);
  }, []);

  console.log(Discussion, "DISCUSSION");

  return (
    <Fragment>
      <Header />
      <PostItems showActions={false} posts={Discussion} />
      <CommentForum postId={postID} />
      {Discussion.comments.map(comment => {
        console.log("COMMENT ITEM");
        return (
          <CommentItem key={comment._id} posts={comment} user={comment.user} />
        );
      })}
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  getDiscussion: postID => dispatch(getDiscussion(postID)),
  getCommentUser: userID => dispatch(getUserName(userID))
});

const mapStateToProps = createStructuredSelector({
  Discussion: selectDiscussion,
  user: selectUser
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionPage);
