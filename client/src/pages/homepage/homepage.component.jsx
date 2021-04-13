import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import {
  HomePageContainer,
  BackgroundContainer,
  HomeButton
} from "./homepage.styled";
import Header from "../../components/header/header.component";
import { Button, ButtonBase } from "@material-ui/core";
import Directory from "../../components/directory/directory.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Footer from "../../components/footer/footer.component";
import InfoSection from "../../components/InfoSection/InfoSection.component";

import { signUpObj } from "../../components/InfoSection/Data";

import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <Fragment>
      <Header isHomepage={true} />
      <HomePageContainer>
        <BackgroundContainer>
          <HomeButton
            component={Link}
            color="default"
            size="large"
            to="/shop"
            className="button"
          >
            Finish Your Puzzle
          </HomeButton>
        </BackgroundContainer>

        <Element name="signup">
          <InfoSection {...signUpObj} />
        </Element>
        <Element name="discover">
          <Directory />
        </Element>
      </HomePageContainer>
    </Fragment>
  );
};

export default HomePage;
