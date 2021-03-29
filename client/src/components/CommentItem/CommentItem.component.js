import Moment from "react-moment";
import react, { useEffect } from "react";

import { connect } from "react-redux";

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

function CommentItem({ posts, deletePost, user, showActions, getUserInfo }) {
  console.log(user);
  getUserInfo(user);

  console.log(posts);
  console.log(user);
  Gravatar.defaultProps = {
    src: `https:${posts.avatar}`
  };

  return (
    <IndividualPostContainer>
      <UserContainer>
        <Gravatar />
        <Name>{posts.name}</Name>
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

export default connect(null, mapDispatchToProps)(CommentItem);
