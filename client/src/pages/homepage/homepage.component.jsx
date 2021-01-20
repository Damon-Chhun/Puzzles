import React from "react";
import { HomePageContainer, BackgroundContainer } from "./homepage.styled";
import Header from "../../components/header/header.component";
import { Button } from "@material-ui/core";

const HomePage = () => (
  <HomePageContainer>
    <Header />
    <BackgroundContainer>
      <Button variant="outlined" color="default" size="large" href="/shop">
        Finish Your Puzzle
      </Button>
    </BackgroundContainer>
  </HomePageContainer>
);

export default HomePage;
