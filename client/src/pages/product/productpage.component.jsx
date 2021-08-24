import React, { useEffect, Fragment } from "react";
import { withRouter, useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import Posts from "../../components/posts/posts.component";
import Alerts from '../../components/alerts/alerts'


import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


import { addToCart } from '../../redux/cart/cart.actions'
import { getReviews } from "../../redux/reviews/reviews.actions";
import { selectReviewsPosts } from "../../redux/reviews/reviews.selectors";
import {
  selectUser,
  selectIsAuth,
  selectAuthToken
} from "../../redux/auth/auth.selectors";

import ReviewForum from "../../components/Review/ReviewForum.component";
import Header from "../../components/header/header.component";

import {
  ProductPageContainer,
  PostsContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Span,
  Name,
  Description,
  MainInfoWrapper,
  AddBtn
} from "./productPage.styled";

const useStyles = makeStyles({
  root: {
    paddingLeft: "20px",
    position: "sticky",
    top: 60,
    zIndex: 10,
  },
  
});


function ProductPage({
  shop,
  getReviews,
  posts,
  user,
  isAuth,
  addToCart,
  token
}) {
  const { productID, department } = useParams();
  const classes = useStyles();

  useEffect(() => {
    getReviews(department, productID);
  },[]);
  console.log(productID, department, "product page arguments");

  const categoryIndex = shop.findIndex(category => {
    return category.department === department;
  });

  console.log(categoryIndex);
  const productIndex = shop[categoryIndex].products.findIndex(product => {
    return product._id === productID;
  });

  const item = shop[categoryIndex].products[productIndex];

  return (
    <Fragment>
      <Header isHomepage={false} />
    
      <Breadcrumbs aria-label="breadcrumb" classes={{root: classes.root}}>
        <Link color="inherit" href="/" >
          Home
        </Link>
        <Link color="inherit" href="/shop" >
          Shop
        </Link>
        <Typography color="textPrimary">{item.Department}</Typography>
      </Breadcrumbs>

    <Alerts />

      <ProductPageContainer>

        <ImageContainer>
          <Image src={item.imageURL} />
        </ImageContainer>
        <InfoContainer>
          <MainInfoWrapper>
            <Span>{item.Department}</Span>
            <Name>{item.title}</Name>
            <Span>$ {item.price}</Span>
          </MainInfoWrapper>
          <Description>
            About this product: {"\n"}
            {item.description}
          </Description>

          <AddBtn onClick={() => addToCart(item._id, 1, token)}>
            Add To Cart
          </AddBtn>
        </InfoContainer>
        <PostsContainer>
          <ReviewForum productId={productID} />
          <Posts posts={posts} user={user === null ? null : user._id} />
        </PostsContainer>
      </ProductPageContainer>
    </Fragment>
  );
}

ProductPage.propTypes = {
  user: {}
};

const mapStateToProps = createStructuredSelector({
  shop: selectShopCollection,
  posts: selectReviewsPosts,
  user: selectUser,
  isAuth: selectIsAuth,
  token: selectAuthToken
});

const mapDispatchToProps = dispatch => ({
  getReviews: (department, productID) =>
    dispatch(getReviews(department, productID)),
  addToCart: (productID, quantity, token) =>
    dispatch(addToCart(productID, quantity, token))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
