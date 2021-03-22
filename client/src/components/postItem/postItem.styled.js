import styled from "styled-components";
import { FaRegThumbsUp, FaRegThumbsDown, FaTimes } from "react-icons/fa";

export const IndividualPostContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  background: white;
  border-bottom: solid 1px grey;
  margin-bottom: 5px;
`;

export const UserContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextAndFunctionsContainer = styled.div`
  width: 70%;
`;

export const Gravatar = styled.img`
  border-radius: 100px;
  height: 100px;
  width: 100px;
`;

export const Name = styled.h4``;

export const Description = styled.div`
  width: 100%;
  height: 60%;
`;

export const Date = styled.p`
  height: 10%;
  width: 100;
  margin: 0;
`;

export const UserFunctionsContainer = styled.div`
  width: 100%;
  height: 29%;
  margin: 0;
`;

export const LikeDislikeButton = styled.button`
  height: 80%;
  width: 80px;
  margin-left: 10px;
`;

export const ButtonContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const LikeIcon = styled(FaRegThumbsUp)`
  cursor: pointer;
`;

export const DislikeIcon = styled(FaRegThumbsDown)`
  cursor: pointer;
`;

export const Discussion = styled.button`
  width: 160px;
  height: 80%;
  color: white;
  background: #01bf71;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  background: red;
  font-size: 1rem;
  cursor: pointer;
  height: 80%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  margin-left: 10px;
`;
