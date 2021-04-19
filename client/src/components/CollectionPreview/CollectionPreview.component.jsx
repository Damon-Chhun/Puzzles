import React from "react";
import MuiCard from "../../components/MuiCard/MuiCard.component";

import { CollectionPreviewContainer } from "./CollectionPreview.styled";

const CollectionPreview = ({ productIndex, shop }) => {
  let numberOfCards = 4;
  let i = 0;
  let indexOfItem = null;
  let arrayOfIndexes = [];

  for (i; i < numberOfCards; i++) {
    //randomly select which Product from the category to select
    do {
      indexOfItem = Math.floor(Math.random() * shop.products.length + 1);
      console.log(indexOfItem);
    } while (indexOfItem === productIndex);

    arrayOfIndexes.push(indexOfItem);
  }
  console.log(productIndex, shop, "COLLECTION PREVIEW");
  console.log(arrayOfIndexes);

  return (
    <CollectionPreviewContainer>
      {arrayOfIndexes.map(element => (
        <MuiCard info={shop.products[element]} />
      ))}
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
