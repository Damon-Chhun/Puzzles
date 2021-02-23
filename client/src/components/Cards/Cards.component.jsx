import React from "react";
import { Element } from "react-scroll";

import ItemCard from "../ItemCard/ItemCard.component";
//import { connect } from "react-redux";
import MuiCard from "../MuiCard/MuiCard.component";

import { CardsContainer, Category, CategoryContainer } from "./Cards.styled";

function Cards({ categories, shop, token }) {
  return (
    <CardsContainer>
      {categories.map(element => {
        let index = shop.findIndex(object => object.department === element);

        return (
          <Element name={element}>
            <CategoryContainer>
              <h1>{element}</h1>
              <Category>
                {shop[index].products.map(item => (
                  // <ItemCard info={item} />
                  <MuiCard info={item} token={token} />
                ))}
              </Category>
            </CategoryContainer>
          </Element>
        );
      })}
    </CardsContainer>
  );
}

export default Cards;
