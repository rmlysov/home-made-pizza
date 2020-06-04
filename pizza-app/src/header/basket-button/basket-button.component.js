import React, { memo } from "react";
import { StyledBasket, StyledBasketCounter } from "./basket-button.styles";

const BasketButtonComponent = ({ count }) => {
  return (
    <StyledBasket>
      {"Корзина"}
      <StyledBasketCounter>{count}</StyledBasketCounter>
    </StyledBasket>
  );
};

export const BasketButton = memo(BasketButtonComponent);
