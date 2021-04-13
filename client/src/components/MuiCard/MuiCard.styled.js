import styled from "styled-components";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const CardButton = styled(CardActions)`
  display: flex;
  justify-content: center;
  background-color: #01bf71;
  width: 80%;
  border-radius: 12px;

  &:hover {
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
`;

export const AddToCart = styled(Button)`
  && {
    width: 100%;
    height: 100%;
    color: black;
  }
`;

export const InfoWrapper = styled.div;
