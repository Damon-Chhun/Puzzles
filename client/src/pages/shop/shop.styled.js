import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const ShopPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  //top: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ececec;
`;

export const CardContainer = styled.div`
  width: ${props => (props.drawerOpen ? "70%" : "100%")};
  display: flex;
  //border: solid 5px black;
  justify-content: center;
  flex-grow: 2;
  //border: solid 5px black;
  // @media screen and (max-width: 873px) {
  //   justify-content: center;
  // }
`;

export const ShopSticky = styled.div`
  width: 100%;
  position: sticky;
  z-index: 1000;
  top: 0;
`;

export const ShopNavBar = styled(LinkScroll)`
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
export const Blank = styled.div`
  height: 55px;
`;

export const DataContainer = styled.div`
  display: flex;
`;
