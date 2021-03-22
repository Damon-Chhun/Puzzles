import { connect } from "react-redux";

import { useParams, withRouter } from "react-router-dom";

import { selectShopCollection } from "../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";

function findProductDetails(productID, Department) {
  const { shop } = this.props;
  console.log(productID);
  console.log(Department);

  const categoryIndex = shop.findIndex(category => {
    return category.department === Department;
  });
  const productIndex = shop[categoryIndex].findIndex(product => {
    return product._id === productID;
  });

  console.log(shop[categoryIndex].products[productIndex]);
  return shop[categoryIndex].products[productIndex];
}

const mapStateToProps = createStructuredSelector({
  shop: selectShopCollection
});

export default connect(mapStateToProps, null)(findProductDetails);
