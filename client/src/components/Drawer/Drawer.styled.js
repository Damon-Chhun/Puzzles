import styled from "styled-components";
import { FaTimes, FaOpencart, FaShoppingCart } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  height: 81.5vh;
  width: 30%;
  min-width: 350px;
  max-width: 700px;
  background-color: white;

  position: sticky;
  top: 190px;
  //border: solid 2.5px black;
  border-radius: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-height: 700px) {
    display: none;
  }

  padding: 12px;
`;

export const TopLineWrapper = styled.div`
  width: 100%;
  //height: 8.5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-size: 3vh;
`;

export const CartItemsContainer = styled.div`
  border: dashed 5px brown;
`;

export const ItemContainer = styled.div``;

export const ListContainer = styled.div`
  height: 70%;
  width: 100%;
  overflow-y: scroll;
`;

export const MoneyWrapper = styled.div`
  top:0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction rows;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  z-index:1000;
`;

export const Calculation = styled.h3`
  font-size: 1.3vh;
  color: #212121;
`;

export const CalculationName = styled.h3`
  font-size: 1.3vh;
  color: #212121;
`;

export const CalculationWrapper = styled.div`

  width 45%;
  height:100%;
  display: flex;
  flex-direction: column;
  flex-wrap:nowrap;
  justify-content: space-evenly;
  align-items: ${props => props.align}
  
`;

export const CheckoutWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #01bf71;
  border-radius: 12px;
  &:hover {
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
  }
`;

export const DrawerCheckoutBtn = styled(LinkRouter)`
  color: white;
  background-color: transparent;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7vh;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  background-color: transparent;
  color: white;
  font-size: 30px;

  margin-left: 20px;
`;

export const CartAndBtn = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PriceContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

export const CheckoutPrice = styled.h4`
  color: white;
  font-size: 1.4vh;
`;

export const StickyWrapper = styled.div`
  background-color: white;
  width: 100%;
  bottom: 0px;
  position: sticky;
  height: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
`;
