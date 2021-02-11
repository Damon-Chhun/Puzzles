import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const SmoothContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 5px solid green;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid pink;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24;
  max-width: 1100px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
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


&.active {
  border-bottom: 5px solid #01bf71;
}

&:hover {
  transition: all 0.3s ease-in-out;
  border-bottom: 4px solid #01bf71;
}
`;
