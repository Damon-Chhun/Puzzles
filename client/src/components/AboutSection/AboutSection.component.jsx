import React from "react";

import {
  AboutContainer,
  AboutWrapper,
  InfoWrapper,
  ImageContainer,
  Description,
  Image,
  Header,
  Picture1,
  Picture2,
  Picture3
} from "./AboutSection.styles";

// import { ReactComponent as Logo1 } from "../../assets/about-1.svg";
// import { ReactComponent as Logo2 } from "../../assets/about-2.svg";
// import { ReactComponent as Logo3 } from "../../assets/about-3.svg";

export const AboutSection = () => {
  return (
    <AboutContainer>
      <Header>Our Services</Header>
      <AboutWrapper>
        <InfoWrapper>
          <ImageContainer>
            <Picture1 />
          </ImageContainer>
          <Description>Explore and find your puzzle!</Description>
        </InfoWrapper>
        <InfoWrapper>
          <ImageContainer>
            <Picture2 />
          </ImageContainer>
          <Description>
            We'll have your order shipped out directly to you.
          </Description>
        </InfoWrapper>
        <InfoWrapper>
          <ImageContainer>
            <Picture3 />
          </ImageContainer>
          <Description>Open your package and enjoy your puzzle!</Description>
        </InfoWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
