import React from "react";
import PropTypes from "prop-types";

import ShopPage from "./shoppage.component";
import PersistentDrawer from "../../components/Drawer/PersistentDrawer.component";

const StorePage = () => {
  return (
    <div>
      <PersistentDrawer storeComponent={ShopPage} />
    </div>
  );
};

export default StorePage;
