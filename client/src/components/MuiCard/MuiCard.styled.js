import styled from "styled-components";

export const CardContainer = styled.div`
  //border: solid 1px #ececec;
  height: 45vh;
  min-height: 400px;
  width: 15vw;
  min-width: 350px;
  //border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-color: white;
  margin: 15px;
  //margin-top: 5px;

  //padding: 12px;
  padding-top: 0;

  box-shadow: 10px 5px 5px #919191;
`;

export const MainInfoWrapper = styled.div`
  //border: dashed 3px black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  height: 90%;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
`;

export const InfoWrapper = styled.div`
  //border: dashed 5px blue;
  height: 35%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.span`
  font-size: 1.5vh;
  margin: 5px;
  //border: dashed 4px purple;
  //width: 30%;
  border-bottom: solid 2px #01bf71;
`;

export const ImageContainer = styled.div`
  // border: solid 5px pink;
  width: 100%;
  height: 65%;
`;

export const Image = styled.div`
  //border: solid 5px green;

  height: 100%;

  background-image: url(${props => props.imageURL});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const Name = styled.h3`
  //border: dashed 3px purple;
  text-align: center;
  font-size: 1.4vh;
  height: 20%;
  width: 100%;
`;
export const Price = styled.span`
  //border: dashed 5px green;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  //border: dashed 5px purple;
  width: 100%;
  height: 10%;
`;

export const Button = styled.button`
  //border-radius: 16px;
  border: none;
  background-color: #01bf71;
  color: white;
  height: 100%;
  width: 100%;
  font-size: 1.3vh;
  font-weight: bold;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.9;
  }
`;
