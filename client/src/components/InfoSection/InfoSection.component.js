import React from "react";
import { Button } from "react-scroll";
import PropTypes from "prop-types";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Header,
  Subtitle,
  ButtonWrap,
  ImgWrap,
  Img
} from "./InfoSection.styled";

const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Header>Header</Header>
              <Subtitle>Subtitle</Subtitle>
              <ButtonWrap>
                <Button to="home">Button</Button>
              </ButtonWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

InfoSection.component.propTypes = {};

export default InfoSection;
