import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPost } from "../../redux/reviews/reviews.actions";

import {
  PostReviewContainer,
  H3Wrapper,
  H3Text,
  FormContainer,
  TextArea,
  Input
} from "./Review.styled";

const ReviewForum = ({ addPost, productId }) => {
  const [text, setText] = useState("");
  console.log(productId);
  return (
    <PostReviewContainer>
      <H3Wrapper>
        <H3Text>Write a Review!</H3Text>
      </H3Wrapper>
      <FormContainer
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addPost(text, productId);
          setText("");
        }}
      >
        <TextArea
          name="text"
          cols="30"
          rows="5"
          placeholder="Share Your Thoughts..."
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></TextArea>
      </FormContainer>
      <Input type="submit" value="Post Review!" />
    </PostReviewContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addPost: (text, productId) => dispatch(addPost(text, productId))
});

export default connect(null, mapDispatchToProps)(ReviewForum);
