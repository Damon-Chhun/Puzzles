import React, { useEffect, Fragment } from "react";
import { withRouter, useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import Posts from "../../components/posts/posts.component";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";

import { addToCart } from "../../redux/cart/cart.actions";

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

  useEffect(() => {
    getReviews(department, productID);
  }, []);
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

        <CollectionPreview
          shop={shop[categoryIndex]}
          productIndex={productIndex}
        />

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
