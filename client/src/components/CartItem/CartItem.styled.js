import styled from "styled-components";

export const CartItemsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  height: 150px;

  &:hover {
    transition: all 0.3x ease-in-out;
    background-color: #eeeee4;
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
  height: 100px;
  width: 80%;
`;
export const ItemName = styled.span`
  font-size: 1rem;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
  margin-top: 0;
  //width: 1000px;
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

export const RemoveButton = styled.button`
  color: #01bf71;
  font-size: 1vw;
  background: transparent;
  border: none;
  font-weight: bold;
  margin-left: 10px;
  &:hover {
    text-decoration: #01bf71 underline;
    cursor: pointer;
  }
`;
