import styled from "styled-components";
import Background from "../../assets/homepage-background-2.jpg";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundContainer = styled.div`
  background-image: url(${Background});
  background-position: center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: cover;
  padding-bottom: 5vh;
`;
