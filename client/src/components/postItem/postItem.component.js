import Moment from "react-moment";

import { connect } from "react-redux";

import { addLike, unlike } from "../../redux/reviews/reviews.actions";

import {
  IndividualPostContainer,
  UserContainer,
  TextAndFunctionsContainer,
  Gravatar,
  Name,
  Description,
  Date,
  UserFunctionsContainer,
  LikeDislikeButton,
  LikeIcon,
  DislikeIcon,
  ButtonContainer,
  Discussion,
  CloseIcon,
  Icon
} from "./postItem.styled";

function PostItems({ posts, user, like, unlike }) {
  console.log(posts);
  console.log(posts.avatar);
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
          <ButtonContainer>
            <LikeDislikeButton>
              <LikeIcon onClick={() => like(posts._id)} />
              {posts.likes.length > 0 ? posts.likes.length : null}
            </LikeDislikeButton>
            <LikeDislikeButton>
              <DislikeIcon onClick={() => unlike(posts._id)} />
            </LikeDislikeButton>
            <Discussion to={`/posts/${posts._id}`}>
              {posts.comments.length > 0
                ? `Discussion {posts.comments.length}`
                : `Discussion`}
            </Discussion>
            {posts.user === user && (
              <Icon>
                <CloseIcon />
              </Icon>
            )}
          </ButtonContainer>
        </UserFunctionsContainer>
      </TextAndFunctionsContainer>
    </IndividualPostContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  like: id => dispatch(addLike(id)),
  unlike: id => dispatch(unlike(id))
});

export default connect(null, mapDispatchToProps)(PostItems);
