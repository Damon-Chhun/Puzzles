import React from "react";
import { FaBars as Bars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AppBar, Button } from "@material-ui/core";
// import { ReactComponent as Logo } from "../../assets/puzzle-logo-2.svg";

import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavBtnLink,
  NavButton
} from "./header.styled";

const Header = ({ toggle }) => (
  <Nav>
    <NavContainer>
      <NavLogo to="/">puzzles</NavLogo>
      <MobileIcon onClick={toggle}>
        <Bars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="/about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/discover">Discover</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/register">Sign up</NavLinks>
        </NavItem>
      </NavMenu>
      <NavButton>
        <NavBtnLink to="/signin">Sign in</NavBtnLink>
      </NavButton>
    </NavContainer>
  </Nav>
);

export default Header;
