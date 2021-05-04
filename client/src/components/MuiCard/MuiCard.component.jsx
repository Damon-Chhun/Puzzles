import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectAuthToken, selectIsAuth } from "../../redux/auth/auth.selectors";

import {
  CardButton,
  AddToCart,
  CardContainer,
  MainInfoWrapper,
  ImageContainer,
  Image,
  HeaderWrapper,
  Header,
  Name,
  Price,
  ButtonWrapper,
  Button
} from "./MuiCard.styled";

function MuiCard({ info, addToCart, token, history, match, props, auth }) {
  const { _id, imageURL, title, price, Department } = info;

  return (
    <CardContainer>
      <MainInfoWrapper
        onClick={() => history.push(`/shop/${Department}/${_id}`)}
      >
        <Header>{Department}</Header>
        <ImageContainer>
          <Image src={imageURL} />
        </ImageContainer>
        <Name>{title}</Name>
        <Price>$ {price}</Price>
      </MainInfoWrapper>
      <ButtonWrapper>
        <Button
          onClick={() =>
            addToCart(_id, 1, imageURL, title, price, Department, auth, token)
          }
        >
          Add To Cart
        </Button>
      </ButtonWrapper>
    </CardContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken,
  auth: selectIsAuth
});

const mapDispatchToProps = dispatch => ({
  addToCart: (
    productID,
    quantity,
    imageURL,
    title,
    price,
    Department,
    auth,
    token
  ) =>
    dispatch(
      addToCart(
        productID,
        quantity,
        imageURL,
        title,
        price,
        Department,
        auth,
        token
      )
    )
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MuiCard)
);

// <Card className={classes.root} elevation={10}>
//   <CardActionArea
//     onClick={() =>
//       history.push(
//         `${history.location.pathname}/${info.Department}/${info._id}`
//       )
//     }
//   >
//     <CardMedia
//       className={classes.media}
//       image={info.imageURL}
//       title="Contemplative Reptile"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="h2">
//         {info.Department}
//       </Typography>

//       <Typography variant="body2" color="textSecondary" component="p">
//         {info.title}
//       </Typography>
//       <Typography
//         gutterBottom
//         variant="h5"
//         component="h2"
//         className={classes.mainInfo}
//       >
//         ${info.price}
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardButton className="cartButton">
//     <AddToCart
//       size="small"
//       color="primary"
//       onClick={() => addToCart(info._id, 1, token)}
//     >
//       Add to Cart
//     </AddToCart>
//   </CardButton>
// </Card>
