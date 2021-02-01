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

import Sidebar from "../sidebar/sidebar.component";

const Header = () => (
  <Nav>
    <NavContainer>
      <NavLogo to="/">puzzles</NavLogo>
      <MobileIcon>
        <Bars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="/about">about</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/discover">discover</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/sign up">sign up</NavLinks>
        </NavItem>
      </NavMenu>
      <NavButton>
        <NavBtnLink to="/signin">sign in</NavBtnLink>
      </NavButton>
    </NavContainer>
    <Sidebar />
  </Nav>
);

export default Header;
