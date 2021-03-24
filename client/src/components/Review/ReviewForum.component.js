import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPost } from "../../redux/reviews/reviews.actions";

const ReviewForum = ({ addPost, productId }) => {
  const [text, setText] = useState("");
  console.log(productId);
  return (
    <div>
      <div>
        <h3>Say something...</h3>
      </div>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addPost(text, productId);
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
  addPost: (text, productId) => dispatch(addPost(text, productId))
});

export default connect(null, mapDispatchToProps)(ReviewForum);
