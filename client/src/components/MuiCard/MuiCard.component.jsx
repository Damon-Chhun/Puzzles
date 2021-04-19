import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectAuthToken } from "../../redux/auth/auth.selectors";

import { CardButton, AddToCart } from "./MuiCard.styled";

const useStyles = makeStyles({
  root: {
    maxWidth: 335,
    margin: 10,
    height: "40vh",
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  media: {
    height: 240,
    width: 500,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundPositionX: "20%"
  },
  mainInfo: {
    marginTop: "10px"
  },
  cartButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-evenly"
  }
});

function MuiCard({ info, addToCart, token, history }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={10}>
      <CardActionArea
        onClick={() =>
          history.push(
            `${history.location.pathname}/${info.Department}/${info._id}`
          )
        }
      >
        <CardMedia
          className={classes.media}
          image={info.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {info.Department}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {info.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.mainInfo}
          >
            ${info.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardButton className="cartButton">
        <AddToCart
          size="small"
          color="primary"
          onClick={() => addToCart(info._id, 1, token)}
        >
          Add to Cart
        </AddToCart>
      </CardButton>
    </Card>
  );
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
  addToCart: (productID, quantity, token) =>
    dispatch(addToCart(productID, quantity, token))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MuiCard)
);
