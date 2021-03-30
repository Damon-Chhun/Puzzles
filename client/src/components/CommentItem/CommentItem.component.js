import Moment from "react-moment";
import react, { useEffect } from "react";
import axios from "axios";

import { connect } from "react-redux";

import { selectCommentUser } from "../../redux/auth/auth.selectors";

import {
  addLike,
  unlike,
  deletePost
} from "../../redux/reviews/reviews.actions";

import { getUserName } from "../../redux/auth/auth.actions";

import {
  IndividualPostContainer,
  UserContainer,
  TextAndFunctionsContainer,
  Gravatar,
  Name,
  Description,
  Date,
  UserFunctionsContainer,
  ButtonContainer,
  CloseIcon,
  Icon
} from "./CommentItem.styled";
import { createStructuredSelector } from "reselect";

function CommentItem({
  posts,
  deletePost,
  user,
  showActions,
  getUserInfo,
  getCommentUserName
}) {
  console.log(getCommentUserName);
  console.log(user);

  console.log(posts);
  console.log(user);
  Gravatar.defaultProps = {
    src: `https:${posts.avatar}`
  };

  return (
    <IndividualPostContainer>
      <UserContainer>
        <Gravatar />
        <Name>hello</Name>
      </UserContainer>
      <TextAndFunctionsContainer>
        <Description>{posts.text}</Description>
        <Date>
          Posted on <Moment format="YYYY/MM/DD">{posts.date}</Moment>
        </Date>
        <UserFunctionsContainer>
          {showActions && (
            <ButtonContainer>
              {posts.user === user && (
                <Icon>
                  <CloseIcon onClick={() => deletePost(posts._id)} />
                </Icon>
              )}
            </ButtonContainer>
          )}
        </UserFunctionsContainer>
      </TextAndFunctionsContainer>
    </IndividualPostContainer>
  );
}

CommentItem.defaultProps = {
  showActions: true
};

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  getUserInfo: userID => dispatch(getUserName(userID))
});

const mapStateToProps = createStructuredSelector({
  getCommentUserName: selectCommentUser
});

export default connect(null, mapDispatchToProps)(CommentItem);
