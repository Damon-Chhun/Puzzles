import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getDiscussion } from "../../redux/reviews/reviews.actions";

const DiscussionPage = ({ getDiscussion, match }) => {
  const postID = match.params;
  console.log(postID);

  useEffect(() => {
    getDiscussion(postID.postID);
  });

  return <div>hello bruv</div>;
};

const mapDispatchToProps = dispatch => ({
  getDiscussion: postID => dispatch(getDiscussion(postID))
});

export default connect(null, mapDispatchToProps)(DiscussionPage);
