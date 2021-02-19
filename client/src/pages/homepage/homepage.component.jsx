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

import { Element } from "react-scroll";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
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

      <Element name="discover">
        <Directory />
      </Element>
    </Fragment>
  );
};

export default HomePage;
