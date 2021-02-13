import React from "react";
//import { connect } from "react-redux";

import "./Cards.styled";

function Cards({ categories, shop }) {
  return (
    <CardsContainer>
      {categories.map(element => {
        let index = shop.findIndex(object => object.department === element);

        shop[index].products.map(item => (
          <CategoryContainer>
            <ItemCard info={item} />
          </CategoryContainer>
        ));
      })}
    </CardsContainer>
  );
}

export default Cards;
