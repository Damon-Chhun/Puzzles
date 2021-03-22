import styled from "styled-components";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

export const IndividualPostContainer = styled.div`
  border: solid 2px purple;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  background: white;
`;

export const UserContainer = styled.div`
  border: solid 3px blue;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TextAndFunctionsContainer = styled.div`
  border: solid 3px green;
  width: 70%;
`;

export const Gravatar = styled.img`
  border: 1px solid black;
  border-radius: 100px;
  height: 100px;
  width: 100px;
`;

export const Name = styled.h4``;

export const Description = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 60%;
`;

export const Date = styled.p`
  border: 2px solid purple;
  height: 10%;
  width: 100;
  margin: 0;
`;

export const UserFunctionsContainer = styled.div`
  border: solid 2px pink;
  width: 100%;
  height: 29%;
  margin: 0;
`;

export const LikeDislikeButton = styled.button`
  border: solid 2px green;
  height: 80%;
  width: 80px;
`;

export const ButtonContainer = styled.div`
  border: solid 2px green;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
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
`;
