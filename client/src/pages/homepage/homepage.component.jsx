import React, { Fragment } from "react";
import { HomePageContainer, BackgroundContainer } from "./homepage.styled";
import Header from "../../components/header/header.component";
import { Button, ButtonBase } from "@material-ui/core";
import Directory from "../../components/directory/directory.component";
import Footer from "../../components/footer/footer.component";

//import Quote from "../../components/quote/quote.component";

const HomePage = () => (
  <Fragment>
    <Header />
    <BackgroundContainer>
      <Button color="default" size="large" href="/shop" className="button">
        Finish Your Puzzle
      </Button>
    </BackgroundContainer>

    <Directory />
  </Fragment>
);

export default HomePage;
