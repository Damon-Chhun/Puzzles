import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const ShopPageContainer = styled.div`
  width: 75%;
  diplay: flex;
  justify-content: center;
  flex-wrap: none;
`;

export const ShopSticky = styled.div`
  position: sticky;
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
