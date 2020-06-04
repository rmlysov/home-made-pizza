import React, { memo } from "react";
import { StyledHeaderLogo } from "./header.styles";

const HeaderComponent = () => (
  <header>
    <StyledHeaderLogo />
    {"Header Works!"}
  </header>
);

export const Header = memo(HeaderComponent);
