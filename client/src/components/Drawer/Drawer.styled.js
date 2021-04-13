import styled from "styled-components";
import { FaTimes, FaOpencart, FaShoppingCart } from "react-icons/fa";

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  width: 30%;
  max-width: 700px;
  height: 87vh;
  position: sticky;
  top: 170px;
  border: solid 3px #ececec;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TopLineWrapper = styled.div`
  width: 100%;
  height: 10%;
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
`;

export const CartItemsContainer = styled.div`
  border: dashed 5px brown;
  border: 2px solid blue;
`;

export const ItemContainer = styled.div``;

export const ListContainer = styled.div`
  height: 70%;
  width: 100%;
  overflow-y: scroll;
  border-bottom: 1px solid grey;
`;

export const MoneyWrapper = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction rows;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Calculation = styled.h3``;

export const CalculationName = styled.h3``;

export const CalculationWrapper = styled.div`
  width 45%;
  height:100%;
  display: flex;
  flex-direction: column;
  flex-wrap:nowrap;
  justify-content: space-between;
  align-items: ${props => props.align}
  
`;

export const CheckoutWrapper = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #01bf71;
`;

export const DrawerCheckoutBtn = styled.button`
  color: white;
  background-color: transparent;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  width: 100%;
  height: 100%;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  background-color: transparent;
  color: white;
  font-size: 1.7vw;
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
`;
