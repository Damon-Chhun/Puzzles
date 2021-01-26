import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/puzzle-logo-2.svg";

import {
  HeaderContainer,
  LogoContainer,
  LeftOptionsContainer,
  RightOptionsContainer,
  OptionLink
} from "./header.styled";

const Header = () => (
  <HeaderContainer>
    <LeftOptionsContainer>
      <LogoContainer className="logo-container" to="/">
        <Logo className="nested-logo" />
      </LogoContainer>
    </LeftOptionsContainer>
    <RightOptionsContainer>
      <OptionLink>Search |</OptionLink>
      <OptionLink>Shop |</OptionLink>
      <OptionLink>About Us |</OptionLink>
      <OptionLink>My Account |</OptionLink>
    </RightOptionsContainer>
  </HeaderContainer>
);

export default Header;
