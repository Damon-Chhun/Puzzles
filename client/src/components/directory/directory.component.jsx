import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryCollections } from "../../redux/directory/directory.selectors.js";
import DirectoryButton from "../../components/directory-button/directory-button.component";
import { DirectoryContainer } from "./directory.styled.jsx";
import ButtonBases from "../buttonbase/buttonbase.component";

const Directory = ({ collections }) => (
  <DirectoryContainer>
    <ButtonBases collections={collections} />
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectDirectoryCollections
});

export default connect(mapStateToProps)(Directory);
