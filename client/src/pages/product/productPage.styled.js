import styled from "styled-components";

export const ProductPageContainer = styled.div`
  //border: dashed 5px pink;
  width: 100%;
  min-height: 100vh;
  background: #f3f6f9;
  display: flex;
  flex-direction: rows;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 15spx;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  //border: solid 5px purple;
  padding-top: 20px;
  height: 60vh;
  width: 35vw;
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-wrap: no-wrap;

  @media screen and (max-width: 930px) {
    height: 40vh;
    width: 50vw;
  }
`;

export const Image = styled.img`
  //border: dashed 5px black;
  height: auto;

  max-width: 100%;
  background-size: centers;
  background-position: 50% 50%;
  image-rendering: -webkit-optimize-contrast;
`;

export const InfoContainer = styled.div`
  //border: solid 5px blue;
  height: 60vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 90px;

  @media screen and (max-width: 930px) {
    height: 50vh;
    width: 100%;
    margin-top: 10px;
  }
`;

export const MainInfoWrapper = styled.div`
  //border: dashed 3px blue;
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

export const Span = styled.span`
  //border: dashed 5px green;
  margin: 15px;
  //letter-spacing: 0.1rem;
  font-size: 2vh;
  font-family: "Open Sans";

  @media screen and (max-width: 930px) {
    margin-left: 30px;
  }
`;
export const Name = styled.h2`
  //border: dashed 5px brown;
  margin-left: 15px;
  letter-spacing: 0.2rem;
  font-size: 1.5vh;

  @media screen and (max-width: 930px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const Description = styled.h3`
  //border: dashed 5px purple;
  letter-spacing: 0.1rem;
  line-height: 2;
  padding-left: 15px;
  font-weight: normal;
  white-space: pre-line;
  font-size: 1.4vh;
  font-family: "Open Sans";

  @media screen and (max-width: 930px) {
    letter-spacing: 0.1rem;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const PostsContainer = styled.div`
  //border: 5px solid purple;
  width: 90%;
`;

export const AddBtn = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 15px;
  font-size: 1.3vh;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;
  margin-left: 15px;
  margin-top: 35px;
  font-family: "Open Sans";

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: #01bf71;
  }

  @media screen and (max-width: 930px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
