import styled from "styled-components";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const CardButton = styled(CardActions)`
  display: flex;
  justify-content: center;
  background-color: #01bf71;
`;

export const AddToCart = styled(Button)`
  && {
    width: 100%;
    height: 100%;
    color: black;
  }
`;
