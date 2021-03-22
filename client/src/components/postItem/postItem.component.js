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
  Discussion
} from "./postItem.styled";

function PostItems({ posts }) {
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
              <LikeIcon />
            </LikeDislikeButton>
            <LikeDislikeButton>
              <DislikeIcon />
            </LikeDislikeButton>
            <Discussion>Discussion</Discussion>
          </ButtonContainer>
        </UserFunctionsContainer>
      </TextAndFunctionsContainer>
    </IndividualPostContainer>
  );
}

export default PostItems;
