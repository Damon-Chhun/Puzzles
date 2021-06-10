import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addPost } from "../../redux/reviews/reviews.actions";

import { selectIsAuth } from "../../redux/auth/auth.selectors";

import { createStructuredSelector } from "reselect";

import {
  PostReviewContainer,
  H3Wrapper,
  H3Text,
  FormContainer,
  TextArea,
  Input,
  NavButton,
  NavBtnLink,
  SignInFirstWrapper
} from "./Review.styled";

const ReviewForum = ({ addPost, productId, auth }) => {
  const [text, setText] = useState("");
  console.log(productId);
  return (
    <PostReviewContainer>
      {auth !== true ? (
        <Fragment>
          <SignInFirstWrapper>
            <H3Wrapper>
              <H3Text>Sign In To Write a Review!</H3Text>
            </H3Wrapper>
            <NavButton>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavButton>
          </SignInFirstWrapper>
        </Fragment>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </PostReviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  auth: selectIsAuth
});

const mapDispatchToProps = dispatch => ({
  addPost: (text, productId) => dispatch(addPost(text, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForum);
