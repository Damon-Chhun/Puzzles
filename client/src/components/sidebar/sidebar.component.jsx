import React from "react";

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

const Sidebar = ({ toggle, isOpen }) => {
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
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
