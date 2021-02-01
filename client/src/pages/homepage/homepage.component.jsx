import React, { Fragment, useState } from "react";
import { HomePageContainer, BackgroundContainer } from "./homepage.styled";
import Header from "../../components/header/header.component";
import { Button, ButtonBase } from "@material-ui/core";
import Directory from "../../components/directory/directory.component";
import Sidebar from "../../components/sidebar/sidebar.component";

//import Quote from "../../components/quote/quote.component";

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
        <Button color="default" size="large" href="/shop" className="button">
          Finish Your Puzzle
        </Button>
      </BackgroundContainer>

      <Directory />
    </Fragment>
  );
};

export default HomePage;
