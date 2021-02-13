import React from "react";

import { ItemCardContainer, Image, Price } from "./Itemcard.styled";

function ItemCard({ info }) {
  return (
    <ItemCardContainer>
      <Image imageURL={info.imageURL} category={info.Department} />
      <div>{info.title}</div>
      <Price>{info.price}</Price>
    </ItemCardContainer>
  );
}

export default ItemCard;
