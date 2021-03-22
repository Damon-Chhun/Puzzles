import Moment from "react-moment";

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

function PostItems({ posts, user }) {
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
              {posts.likes.length > 0 ? (
                `${(<LikeIcon />)} {posts.likes.length}`
              ) : (
                <LikeIcon />
              )}
            </LikeDislikeButton>
            <LikeDislikeButton>
              <DislikeIcon />
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

export default PostItems;
