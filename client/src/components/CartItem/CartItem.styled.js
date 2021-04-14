import styled from "styled-components";

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: space-evenly;
  justify-content: flex-start;
  // height: 10vh;

  &:hover {
    transition: all 0.3x ease-in-out;
    background-color: #eeeee4;
    // cursor: pointer;
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
  //height: 100px;
  width: 80%;
`;
export const ItemName = styled.span`
  font-size: 1.3vh;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Quantity = styled.h3`
  font-size: 1.3vh;
  margin: 10px;
  margin-top: 10px;
`;

export const ChangeQuantityBtn = styled.button`
  z-index: 100;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 1.3vh;
  &:hover {
    cursor: pointer;
  }
`;
export const Price = styled.h3`
  font-size: 1.3vh;

  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RemoveButton = styled.button`
  color: #01bf71;
  font-size: 1.3vh;
  background: transparent;
  border: none;
  font-weight: bold;
  margin-left: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    text-decoration: #01bf71 underline;
    cursor: pointer;
  }
`;
