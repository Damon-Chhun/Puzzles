import styled from "styled-components";
import Background from "../../assets/homepage-background-2.jpg";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  width: 100w;

  overflow-y: scroll;
`;

export const BackgroundContainer = styled.div`
  background-image: url(${Background});
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-size: cover;
  .button {
    height: 50vh;
    width: 20vw;
    font-size: 5vh;
  }
`;
