import styled from "styled-components";
import Background from "../../assets/homepage-background-2.jpg";
import { Button } from "@material-ui/core";

export const HomePageContainer = styled.div`
  //border: solid 5px purple;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content:flex-start;
  align-items: center;
  width: 100%;
  
  overflow-y: scroll;
  overflow-x:hidden;
  }
`;

export const BackgroundContainer = styled.div`
  background-image: url(${Background});
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  background-size: cover;
  opacity: 1;
  &:hover {
    opacity: 0.9;
  }

  .button {
    height: 50vh;
    width: 20vw;
    text-align: center;
    font-size: 5vh;
    margin-bottom: 5%;
  }
`;

export const HomeButton = styled(Button)`
  && {
    width: 100%;
    height: 100%;
    opacity: 1;
    text-decoration: bold;
  }
`;
