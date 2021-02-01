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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">about</SidebarLink>
          <SidebarLink to="discover">discover</SidebarLink>
          <SidebarLink to="register">sign up</SidebarLink>
        </SidebarMenu>
        <SideButtonWrap>
          <SidebarRoute to="/signin">sign in</SidebarRoute>
        </SideButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
