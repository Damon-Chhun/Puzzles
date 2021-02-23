import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const ShopPageContainer = styled.div`
  diplay: flex;
  justify-content: center;
  flex-wrap: none;

  top: 500px;
`;

export const CardContainer = styled.div`
  margin-right: 400px;
`;

export const ShopSticky = styled.div`
  position: sticky;
  top: 80px;
  z-index: 10;
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
