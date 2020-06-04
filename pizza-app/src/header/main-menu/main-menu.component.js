import React, { memo } from "react";
import { StyledMenuItem, StyledMenuList } from "./main-menu.styles";

const MainMenuComponent = ({ menu }) => {
  return (
    <StyledMenuList>
      {menu.map((item) => (
        <StyledMenuItem>{item.title}</StyledMenuItem>
      ))}
    </StyledMenuList>
  );
};

export const MainMenu = memo(MainMenuComponent);
