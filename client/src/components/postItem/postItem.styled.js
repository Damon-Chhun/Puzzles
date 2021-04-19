import styled from "styled-components";
import { FaRegThumbsUp, FaRegThumbsDown, FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";

export const IndividualPostContainer = styled.div`
  //border: dashed 5px purple;
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
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
`;
export const TextAndFunctionsContainer = styled.div`
  width: 70%;
`;

export const Gravatar = styled.img`
  border-radius: 100px;
  height: 10vh;
  width: 10vh;
`;

export const Name = styled.h4``;

export const Description = styled.div`
  width: 100%;
  height: 60%;
  padding-left: 40px;
  padding-top: 10px;
`;

export const Date = styled.p`
  height: 10%;
  width: 100;
  margin: 0;
  margin-left: 40px;
`;

export const UserFunctionsContainer = styled.div`
  width: 100%;
  height: 29%;
  margin: 0;
  margin-left: 20px;
`;

export const LikeDislikeButton = styled.button`
  height: 80%;
  width: 50vw;
  margin-left: 10px;
  border: none;
  border-radius: 12px;

  &:hover {
    transition: all 0.4s ease-in-out;
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
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

export const Discussion = styled(LinkRouter)`
  width: 40vw;
  max-width: 200px;
  height: 80%;
  color: black;
  background: #01bf71;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding 5px;
  letter-spacing: 0.2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #01bf71;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  background: red;
  font-size: 1rem;
  cursor: pointer;
  height: 80%;
  width: 5vw;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  margin-left: 10px;
  border-radius: 12px;

  &:hover {
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
`;
