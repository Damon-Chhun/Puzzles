import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";

import { CardButton, AddToCart } from "./MuiCard.styled";

const useStyles = makeStyles({
  root: {
    maxWidth: 335,

    margin: 10
  },
  media: {
    height: 240,
    width: 500,
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundPositionX: "25%"
  },
  mainInfo: {
    marginTop: "10px"
  },
  cartButton: {
    display: "flex",
    justifyContent: "center"
  }
});

function MuiCard({ info, addToCart, token }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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

const mapDispatchToProps = dispatch => ({
  addToCart: (productID, quantity, token) =>
    dispatch(addToCart({ productID, quantity, token }))
});

export default connect(null, mapDispatchToProps)(MuiCard);
