import styled from "styled-components";

export const CartItemsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 125px;

  &:hover {
    transition: all 0.3x ease-in-out;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
export const NameQuanitityPriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const NameAndQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
`;
export const ItemName = styled.h3`
  font-size: 1rem;

  margin-top: 0;
`;

export const Quantity = styled.h3`
  font-size: 1rem;
  margin: 25px;
  margin-top: 0;
`;
export const Price = styled.h3`
  font-size: 1rem;

  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
