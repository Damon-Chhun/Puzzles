import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  height: 75%;
  margin-top: 30px;
  //margin-left: 20px;
`;

export const DepartmentContainer = styled.h2`
  width: 95%;
  height: 40px;
  //border: dashed 5px black;
  display: flex;
  justify-content: flex-start;
  padding-left: 115px;
`;

export const CategoryContainer = styled.div`
  //border: solid 5px pink;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  //border: solid 5px purple;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //align-items: center;
  min-height: 800px;
  margin-bottom: 50px;
  //padding-left: 100px;

  @media screen and (max-width: 873px) {
    justify-content: center;
  }
`;
