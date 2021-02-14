import React from "react";

import {
  ItemCardContainer,
  Image,
  Price,
  InfoContainer
} from "./Itemcard.styled";

function ItemCard({ info }) {
  return (
    <ItemCardContainer>
      <div>{info.Department}</div>
      <Image imageURL={info.imageURL} category={info.Department} />
      <InfoContainer>
        <div>{info.title}</div>
        <Price>${info.price}</Price>
      </InfoContainer>
    </ItemCardContainer>
  );
}

export default ItemCard;
