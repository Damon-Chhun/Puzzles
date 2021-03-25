import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import PostItems from "../../components/postItem/postItem.component";
import Header from "../../components/header/header.component";

import { connect } from "react-redux";
import { getDiscussion } from "../../redux/reviews/reviews.actions";
import { createStructuredSelector } from "reselect";
import { selectDiscussion } from "../../redux/reviews/reviews.selectors";

const DiscussionPage = ({ getDiscussion, match, Discussion }) => {
  const postID = match.params;
  console.log(postID);

  useEffect(() => {
    getDiscussion(postID.postID);
  }, []);

  return (
    <Fragment>
      <Header /> <PostItems showActions={false} posts={Discussion} />{" "}
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  getDiscussion: postID => dispatch(getDiscussion(postID))
});

const mapStateToProps = createStructuredSelector({
  Discussion: selectDiscussion
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionPage);
