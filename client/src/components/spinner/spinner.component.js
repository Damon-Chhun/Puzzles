import React, { Component, Fragment } from "react";

import "./spinner.styles.scss";
const Spinner = WrappedComponent => ({ isLoading }) => {
  console.log(isLoading);
  return isLoading ? (
    <Fragment>
      <div className="loader">Loading data...</div>
    </Fragment>
  ) : (
    <WrappedComponent />
  );
};
export default Spinner;
