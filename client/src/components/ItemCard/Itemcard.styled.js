import styled from "styled-components";

export const ItemCardContainer = styled.div`
  height: 475px;
  width: 450px;
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
  border: 2px solid green;
`;

export const Image = styled.div`
  height: 400px;
  background-image: url(${({ imageURL }) => imageURL});
  background-position: center center;
  background-size: ${props => {
    return props.category === "Laptops" ? `contain` : `center`;
  }};
  background-repeat: no-repeat;
  border: 1px solid purple;
`;

export const InfoContainer = styled.div`
  background-color: #ecebec;
  diplay: flex;
  align-items: center;
  height: 74px;
`;

export const Price = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  border: 1px solid yellow;
  width: 50%;
`;
