import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/svg-1.svg";

import "./InfoElement.styles.scss";
import { NavBtnLink } from "../header/header.styled";

const InfoSection = ({ headline, topline, Subtitle }) => {
  const LinkStyles = {
    textDecoration: "none",
    color: "black"
  };
  return (
    <div className="InfoContainer">
      <div className="InfoWrapper">
        <div className="InfoRow">
          <div className="Column1">
            <div className="TextWrapper">
              <p className="TopLine">{topline}</p>
              <h1 className="header">{headline}</h1>
              <p className="Subtitle">{Subtitle}</p>
              <div className="ButtonWrap">
                <NavBtnLink to="/register">Click me!</NavBtnLink>
              </div>
            </div>
          </div>
          <div className="Column2">
            <div className="ImgWrap">
              <Logo className="Background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;

{
  /* <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>hello</TopLine>
              <Header>hello</Header>
              <Subtitle>hello</Subtitle>
              <ButtonWrap>
                <Button to="/"></Button>
              </ButtonWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper> */
}