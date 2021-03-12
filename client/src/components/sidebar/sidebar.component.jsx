import React from "react";
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
  SidebarLink
} from "./sidebar.styled";

const Sidebar = ({ toggle, isOpen, isAuth, signOut }) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="register">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          {isAuth == true ? (
            <SidebarRoute to="/" onClick={() => signOut()}>
              Sign out
            </SidebarRoute>
          ) : (
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
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
