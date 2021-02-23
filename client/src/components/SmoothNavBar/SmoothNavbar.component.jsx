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
            <NavItem>
              <NavLinks
                to={element}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-160}
              >
                {element}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </SmoothContainer>
  );
};

export default SmoothNavbar;
