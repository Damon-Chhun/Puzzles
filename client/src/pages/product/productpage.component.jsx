import React, { useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import { InfoContainer } from "../../components/ItemCard/Itemcard.styled";
import Posts from "../../components/posts/posts.component";

import { getReviews } from "../../redux/reviews/reviews.actions";
import { selectReviewsPosts } from "../../redux/reviews/reviews.selectors";

function ProductPage({ shop, getReviews, posts }) {
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
    <div>
      <div>{item.Department}</div>
      <div>{item.imageURL}</div>
      <div>{item.title}</div>
      <div>{item.description}</div>
      <div>{item.price}</div>
      <Posts posts={posts} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  shop: selectShopCollection,
  posts: selectReviewsPosts
});

const mapDispatchToProps = dispatch => ({
  getReviews: (department, productID) =>
    dispatch(getReviews(department, productID))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductPage)
);
