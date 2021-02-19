import React from "react";
import { FaBars as Bars } from "react-icons/fa";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { signOut } from "../../redux/auth/auth.actions";

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
import SignInPage from "../../pages/sign-in/signinpage.component";

const Header = ({ toggle, isAuth, signOut }) => (
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
          <NavLinks
            to="discover"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Discover
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/register">Sign up</NavLinks>
        </NavItem>
      </NavMenu>
      <NavButton>
        {isAuth == true ? (
          <NavBtnLink to="/" onClick={() => signOut()}>
            Sign out
          </NavBtnLink>
        ) : (
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        )}
      </NavButton>
    </NavContainer>
  </Nav>
);

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
