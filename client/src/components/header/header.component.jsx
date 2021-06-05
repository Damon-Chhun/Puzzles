import React, { useState, Fragment } from "react";
import { FaBars as Bars } from "react-icons/fa";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { signOut } from "../../redux/auth/auth.actions";
import Scroll from "react-scroll";
import Sidebar from "../sidebar/sidebar.component";
import { withRouter } from "react-router-dom";

import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinksScroll,
  NavLinksRouter,
  MobileIcon,
  NavBtnLink,
  NavButton
} from "./header.styled";

const Header = ({ isAuth, signOut, isHomepage, history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const scroll = Scroll.animateScroll;

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          puzzles
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <Bars />
        </MobileIcon>
        <Sidebar isOpen={isOpen} toggle={toggle} isHomepage={isHomepage} />
        <NavMenu>
          {isHomepage == true ? (
            <Fragment>
              <NavItem>
                <NavLinksScroll
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinksScroll>
              </NavItem>
              <NavItem>
                <NavLinksScroll
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  s
                >
                  Sign up
                </NavLinksScroll>
              </NavItem>
              <NavItem>
                <NavLinksScroll
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Discover
                </NavLinksScroll>
              </NavItem>
            </Fragment>
          ) : (
            <Fragment>
              <NavItem>
                <NavLinksRouter
                  to="register"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  s
                >
                  Sign up
                </NavLinksRouter>
              </NavItem>
              <NavItem>
                <NavLinksRouter
                  to="/shop"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  replace
                >
                  Shop
                </NavLinksRouter>
              </NavItem>
              <NavItem>
                <NavLinksRouter
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinksRouter>
              </NavItem>
            </Fragment>
          )}
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
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
