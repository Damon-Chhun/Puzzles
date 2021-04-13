import React from "react";

import {
  SmoothContainer,
  NavContainer,
  NavMenu,
  NavLinks,
  NavItem,
  CartIcon,
  CartOpenIcon
} from "./SmoothNavBar.styled";

import { openDrawer } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsDrawerOpen } from "../../redux/cart/cart.selectors";

const SmoothNavbar = ({ category, drawerIsOpen, openDrawer }) => {
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
      {drawerIsOpen ? null : (
        <CartOpenIcon onClick={() => openDrawer()}>
          <CartIcon />
        </CartOpenIcon>
      )}
    </SmoothContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  drawerIsOpen: selectIsDrawerOpen
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(SmoothNavbar);
