import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 10vh;
  width: 70px;
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  align-items: center;
  justify-content: center;

  .nested-logo {
    cursor: pointer;
    height: 6vh;
    width: 15vw;
  }
`;

export const LeftOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const RightOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  color: black;
  text-decoration: none;
  margin: 2vw;
`;
