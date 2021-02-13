import React from "react";

import {
  SmoothContainer,
  NavContainer,
  NavMenu,
  NavLinks,
  NavItem
} from "./SmoothNavBar.styled";

const SmoothNavbar = ({ category }) => {
  return (
    <SmoothContainer>
      <NavContainer>
        <NavMenu>
          {category.map(element => (
            <NavLinks>
              <NavItem>{element}</NavItem>
            </NavLinks>
          ))}
        </NavMenu>
      </NavContainer>
    </SmoothContainer>
  );
};

export default SmoothNavbar;
