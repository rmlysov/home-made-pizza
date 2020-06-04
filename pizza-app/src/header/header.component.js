import React, { memo, useMemo } from "react";
import { StyledHeaderLogo, StyledHeader } from "./header.styles";
import { MainMenu } from "./main-menu/main-menu.component";
import { Phone } from "./phone/phone.component";
import { BasketButton } from "./basket-button/basket-button.component";

const HeaderComponent = () => {
  const menuItems = useMemo(
    () => [
      {
        title: "Пиццы",
      },
      {
        title: "Напитки",
      },
      {
        title: "Доставка",
      },
      {
        title: "О нас",
      },
    ],
    []
  );
  return (
    <StyledHeader>
      <StyledHeaderLogo />
      <MainMenu menu={menuItems} />
      <Phone phone="8-800-555-35-35" />
      <BasketButton count="0" />
    </StyledHeader>
  );
};

export const Header = memo(HeaderComponent);
