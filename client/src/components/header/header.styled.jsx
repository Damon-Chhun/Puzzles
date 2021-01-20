import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 50px:
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  margin: 10px;
  height: 8vh;
  width: 8vw;
  display: flex;
  flex-direction: column;
  flex-wrap: none;
  align-items: flex-end;
  justify-content: center;

  .nested-logo {
    cursor: pointer;
    height: 100%;
    width: 100%;
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
  font-size: 2vh;
`;
