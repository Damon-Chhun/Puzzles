import styled from "styled-components";

export const ItemCardContainer = styled.div`
  height: 475px;
  width: 250px;
  diplay: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  margin 20px
`;

export const Image = styled.div`
  height: 400px;
  background-image: url(${({ imageURL }) => imageURL});
  background-position: center center;
  background-size: ${props => {
    return props.category === "Laptops" ? `contain` : `center`;
  }};
  background-repeat: no-repeat;
`;

export const Price = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;
