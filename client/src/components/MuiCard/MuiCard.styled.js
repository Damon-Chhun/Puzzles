import styled from "styled-components";

export const CardContainer = styled.div`
  border: solid 1px black;
  height: 45vh;
  min-height: 400px;
  width: 10vw;
  min-width: 300px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-color: white;
  margin: 15px;
  margin-top: 5px;
`;

export const MainInfoWrapper = styled.div`
  //border: dashed 3px black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5px;
  height: 90%;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 0.5;
  }
`;

export const Header = styled.span`
  font-size: 1.5vh;
  margin: 5px;
  //border: dashed 4px purple;
  //width: 30%;
  border-bottom: solid 2px #01bf71;
`;

export const ImageContainer = styled.div`
  //border: solid 5px pink;
  height: 65%;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  //border: solid 5px green;
  width: 80%;
  height: 100%;
  text-align: center;
`;

export const Name = styled.h3`
  //border: dashed 3px purple;

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
  border-radius: 12px;
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
