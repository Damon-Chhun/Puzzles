import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 80px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: black;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display:block;
    position: absolute:
    top: 0;
    right: 0;
    transform: translate(-100%, 35%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinksScroll = styled(LinkScroll)`
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

export const NavLinksRouter = styled(LinkRouter)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding 0 1rem; 
height: 100%;
cursor: pointer;


&:hover {
  transition: all 0.3s ease-in-out;
  border-bottom: 4px solid #01bf71;
}
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #01bf71;
  }
`;
