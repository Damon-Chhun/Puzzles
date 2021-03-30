import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addComment } from "../../redux/reviews/reviews.actions";

const CommentForum = ({ addComment, postId }) => {
  const [text, setText] = useState("");
  console.log(postId);
  return (
    <div>
      <div>
        <h3>Say something...</h3>
      </div>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addComment(text, postId);
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Share Your Thoughts..."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addComment: (text, postId) => dispatch(addComment(text, postId))
});

export default connect(null, mapDispatchToProps)(CommentForum);
