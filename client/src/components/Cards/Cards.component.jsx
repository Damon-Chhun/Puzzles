import React from "react";
import ItemCard from "../ItemCard/ItemCard.component";
//import { connect } from "react-redux";
import MuiCard from "../MuiCard/MuiCard.component";

import { CardsContainer, CategoryContainer } from "./Cards.styled";

function Cards({ categories, shop, token }) {
  return (
    <CardsContainer>
      {categories.map(element => {
        let index = shop.findIndex(object => object.department === element);

        return (
          <CategoryContainer>
            {shop[index].products.map(item => (
              // <ItemCard info={item} />
              <MuiCard info={item} token={token} />
            ))}
          </CategoryContainer>
        );
      })}
    </CardsContainer>
  );
}

export default Cards;
