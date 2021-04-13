import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";

export const SmoothContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  flex-wrap: nowrap;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  bottom: 0;
  //z-index: 0;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 80px;
  z-index: 1;
  width: 95%;
  padding: 0 24;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkScroll)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding 0 1rem; 
height: 100%;
cursor: pointer;
font-size: 1vh;


&.active {
  border-bottom: 5px solid #01bf71;
}

&:hover {
  transition: all 0.3s ease-in-out;
  border-bottom: 4px solid #01bf71;
}
`;

export const CartIcon = styled(FaShoppingCart)`
  color: black;
`;

export const CartOpenIcon = styled.div`
  background: transparent;
  font-size: 3vh;
  cursor: pointer;
  outline: none;
  height: 3.5rem;
  width: 3.5rem;
  position: sticky;
  top: 170px;
  margin-right: 2vw;

  @media screen and (max-width: 768px) {
    display: none;
    margin-right: none;
  }
`;
