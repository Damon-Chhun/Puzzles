import React from "react";
import { withRouter } from "react-router-dom";
import {
  DirectoryButtonContainer,
  Title,
  TitleContainer,
  BackgroundImage
} from "./directory-button.styled";

const DirectoryButton = ({ id, title, imageUrl, linkUrl, size }) => (
  <DirectoryButtonContainer>
    <BackgroundImage imageUrl={imageUrl}>
      <TitleContainer className="content">
        <Title className="title">{title.toUpperCase()}</Title>
        <span className="subtitle">SHOP NOW</span>
      </TitleContainer>
    </BackgroundImage>
  </DirectoryButtonContainer>
);

export default withRouter(DirectoryButton);
