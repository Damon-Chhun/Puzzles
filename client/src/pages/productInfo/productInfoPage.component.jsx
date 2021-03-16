import React from "react";

import { withRouter, useParams } from "react-router-dom";

function ProductInfoPage() {
  let { productID } = useParams();
  return <div>howdy</div>;
}

export default withRouter(ProductInfoPage);
