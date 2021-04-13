import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsAuth } from "../../redux/auth/auth.selectors";
import { signOut } from "../../redux/auth/auth.actions";

import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SideButtonWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SidebarLinkRouter,
  SidebarLinkScroll
} from "./sidebar.styled";

const Sidebar = ({ toggle, isOpen, isAuth, signOut, isHomepage }) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {isHomepage == true ? (
            <Fragment>
              <SidebarLinkScroll
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={toggle}
              >
                About
              </SidebarLinkScroll>
              {isAuth != true ? (
                <SidebarLinkScroll
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  onClick={toggle}
                >
                  Sign Up
                </SidebarLinkScroll>
              ) : null}
              <SidebarLinkScroll
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                onClick={toggle}
              >
                Discover
              </SidebarLinkScroll>
            </Fragment>
          ) : (
            <Fragment>
              <SidebarLinkRouter to="about" onClick={toggle}>
                About
              </SidebarLinkRouter>
              {isAuth != true ? (
                <SidebarLinkRouter to="register" onClick={toggle}>
                  Sign Up
                </SidebarLinkRouter>
              ) : null}
              <SidebarLinkRouter to="shop" onClick={toggle}>
                Discover
              </SidebarLinkRouter>
            </Fragment>
          )}
          <SidebarLinkRouter to="checkout" onClick={toggle}>
            Cart
          </SidebarLinkRouter>
        </SidebarMenu>
        <SideButtonWrap>
          {isAuth == true ? (
            <SidebarRoute to="/" onClick={() => signOut()}>
              Sign out
            </SidebarRoute>
          ) : (
            <Fragment>
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </Fragment>
          )}
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
