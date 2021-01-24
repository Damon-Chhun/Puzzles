import styled from "styled-components";

export const DirectoryButtonContainer = styled.div`
  border: solid 3px purple;
  height: 40vh;
  width: 25vw;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: ${props => `url(${props.imageUrl})`};
`;

export const TitleContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
