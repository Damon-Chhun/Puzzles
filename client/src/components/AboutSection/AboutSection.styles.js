import styled from "styled-components";

import { ReactComponent as Logo1 } from "../../assets/about-1.svg";
import { ReactComponent as Logo2 } from "../../assets/about-2.svg";
import { ReactComponent as Logo3 } from "../../assets/about-3.svg";

export const AboutContainer = styled.div`
  //border: dashed 5px pink;
  min-height: 70vh;
  width: 100vw;
  background-color: #101522;
  display: flex;
  flex-direction: column;
  justify-conten: center;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  //border: dashed 5px purple;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  //border: dashed 5px blue;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  height: 55vh;
  max-height: 600px;
  width: 25vw;
  min-width: 300px;
  margin: 35px;
`;

export const Header = styled.h1`
  //border: solid 5px white;
  margin-top: 10px;
  width: 100%;
  color: #01bf71;
  text-align: center;
  font-size: 2vw;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

export const ImageContainer = styled.div`
  //border: solid 5px brown;
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  //border: solid 5px yello;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  border-radius: 16px;
`;

export const Description = styled.div`
  //border: solid 5px green;
  height: 40%;
  width: 100%;
  padding 10px;
  color: #01bf71;
  text-align: center;
  font-size: 1.5vw;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display:flex;
  align-items:center;

  @media screen and (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

export const Picture1 = styled(Logo1)`
  //border: solid 10px pink;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const Picture2 = styled(Logo2)`
  //border: solid 10px pink;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const Picture3 = styled(Logo3)`
  //border: solid 10px pink;
  padding: 10px;
  width: 100%;
  height: 100%;
`;
